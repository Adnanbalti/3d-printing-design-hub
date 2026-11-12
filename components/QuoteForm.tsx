"use client";
import { useState } from "react"; import { wa } from "@/lib/site";
const OPTIONS = ["3D Design & Engineering (SolidWorks)", "3D Printing (I have an STL file)", "3D Design + Physical 3D Printing", "Not sure yet"];
export default function QuoteForm({ mode = "quote" }: { mode?: "quote" | "contact" }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle"); const [err, setErr] = useState("");
  const q = mode === "quote";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending"); setErr("");
    const data = Object.fromEntries(new FormData(e.currentTarget)); (data as Record<string, string>).type = mode;
    try { const r = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json(); if (!r.ok) throw new Error(j.error || "Something went wrong."); setState("done");
    } catch (x) { setErr((x as Error).message); setState("error"); }
  }
  if (state === "done") return <div className="card p-8"><h2 className="h3">Thank You!</h2><p className="mt-3">Thank you for contacting 3D Printing &amp; Design Hub. Your enquiry has been received. We will review your project details and get back to you shortly.</p><p className="mt-3">Have an STL file or reference images? <a className="font-semibold text-brand underline" href={wa("Hello, I just sent an enquiry. Sharing my STL file / reference images here.")} target="_blank" rel="noopener noreferrer">Send them on WhatsApp</a>.</p></div>;
  const L = "grid gap-1.5 text-base font-semibold text-head";
  return (<form onSubmit={submit} className="card grid gap-4 p-6 md:p-8">
    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
    <div className="grid gap-4 sm:grid-cols-2">
      <label className={L}>Full Name *<input name="fullName" required className="field" /></label>
      <label className={L}>WhatsApp Number *<input name="whatsapp" required placeholder="+92 3XX XXXXXXX" className="field" /></label>
      <label className={L}>Email Address<input name="email" type="email" className="field" /></label>
      {q && <label className={L}>Service Required *<select name="service" required className="field">{OPTIONS.map((s) => <option key={s}>{s}</option>)}</select></label>}
      {q && <label className={L}>Delivery City *<input name="city" required className="field" /></label>}
      {q && <label className={L}>Preferred Material<select name="material" className="field"><option>Not sure</option><option>PLA</option><option>PETG</option></select></label>}
      {q && <label className={L}>Approximate Dimensions<input name="dimensions" placeholder="e.g. 120 × 80 × 40 mm" className="field" /></label>}
      {q && <label className={L}>Quantity<input name="quantity" className="field" /></label>}
      {q && <label className={L}>Expected Deadline<input name="deadline" className="field" /></label>}</div>
    <label className={L}>{q ? "Project Description *" : "Message *"}<textarea name="description" required minLength={10} className="field min-h-32" /></label>
    {q && <p className="text-sm">There is no file upload on this website. After you submit, send your STL file, drawings or reference images to us on WhatsApp or email.</p>}
    {state === "error" && <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{err} You can also <a className="underline" href={wa()}>message us on WhatsApp</a>.</p>}
    <div className="flex flex-wrap gap-3"><button disabled={state === "sending"} className="btn-primary disabled:opacity-60">{state === "sending" ? "Sending…" : q ? "Submit Request" : "Send Message"}</button>
      <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-outline">Or chat on WhatsApp</a></div></form>);
}
