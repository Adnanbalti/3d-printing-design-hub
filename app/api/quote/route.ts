import { NextResponse } from "next/server"; import { z } from "zod";
const opt = z.string().max(300).optional();
const schema = z.object({ type: z.string().optional(), website: z.string().optional(), fullName: z.string().trim().min(2).max(100), whatsapp: z.string().trim().min(7).max(25),
  email: z.union([z.string().email(), z.literal("")]).optional(), service: opt, city: opt, material: opt, dimensions: opt, quantity: opt, deadline: opt, description: z.string().trim().min(10).max(3000) });
const esc = (s = "") => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
export async function POST(req: Request) {
  let body: unknown; try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const p = schema.safeParse(body); if (!p.success) return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
  const d = p.data; if (d.website) return NextResponse.json({ ok: true }); // honeypot: bots fill the hidden field
  const key = process.env.RESEND_API_KEY, to = process.env.QUOTE_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "Enquiry email is not configured yet." }, { status: 503 });
  const rows = [["Type", d.type], ["Name", d.fullName], ["WhatsApp", d.whatsapp], ["Email", d.email], ["Service", d.service], ["City", d.city], ["Material", d.material], ["Dimensions", d.dimensions], ["Quantity", d.quantity], ["Deadline", d.deadline], ["Description", d.description]];
  const html = rows.filter(([, v]) => v).map(([k, v]) => `<p><b>${k}:</b> ${esc(v as string)}</p>`).join("");
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: `3D Printing & Design Hub <${process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev"}>`, to: [to], reply_to: d.email || undefined, subject: `New ${d.type === "contact" ? "enquiry" : "quote request"} from ${d.fullName}`, html }) });
  if (!r.ok) return NextResponse.json({ error: "We could not send your enquiry." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
