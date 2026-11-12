import type { Metadata } from "next"; import Link from "next/link"; import ImageSlider from "@/components/ImageSlider"; import { designProjects, printingProjects } from "@/lib/projects"; import { SERVICES, MATERIALS, wa } from "@/lib/site";
export const metadata: Metadata = { title: "3D Design & 3D Printing Services in Pakistan", description: "Professional SolidWorks 3D design and engineering, plus physical 3D printing from your STL file, in Islamabad and Rawalpindi." };
export default function Services() {
  return (<div className="wrap py-14 md:py-20"><p className="eyebrow">Services</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">Two Services. One Workshop.</h1>
    <p className="mt-4 max-w-2xl">Hire us to design your product in SolidWorks, or send an existing STL file to get it 3D printed. You can also combine both.</p>
    <div className="mt-12 grid gap-16">{SERVICES.map((s) => (<section key={s.slug} id={s.tab} className="card scroll-mt-24 p-6 md:p-10"><p className="eyebrow">{s.tab === "design" ? "Service 1" : "Service 2"}</p><h2 className="h2 mt-2">{s.title}</h2>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{s.flow.map((f, k) => <li key={f} className="rounded-xl border border-line bg-ink p-4"><span className="font-display text-2xl font-extrabold text-brand">{k + 1}</span><p className="mt-1 font-semibold text-head">{f}</p></li>)}</ol>
      <p className="mt-6 max-w-3xl">{s.long}</p>
      <h3 className="h3 mt-8">{s.tab === "design" ? "Deliverables (Depending on Your Requirements)" : "What We Print"}</h3><ul className="mt-3 grid gap-1.5 sm:grid-cols-2">{s.uses.map((u) => <li key={u} className="flex gap-2"><span className="text-brand">■</span>{u}</li>)}</ul>
      {s.tab === "design" ? <p className="mt-5 rounded-xl border border-brand/40 bg-brand/10 p-4">Need a physical product? After the design is ready, we can 3D print it for you. Choose digital files only, or design plus printing.</p>
        : <div className="mt-5 grid gap-3 sm:grid-cols-2">{MATERIALS.map((m) => <p key={m.name} className="rounded-xl border border-line bg-ink p-4"><b className="text-brand">{m.name}</b>: {m.text}</p>)}</div>}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(s.tab === "design" ? designProjects.slice(3, 6) : printingProjects.slice(0, 3)).map((p) => <div key={p.slug} className="overflow-hidden rounded-xl border border-line"><ImageSlider items={p.images} label={p.title} /><p className="border-t border-white/[.07] bg-[#0B0C0F] px-4 py-2.5 text-sm font-semibold text-head">{p.title}</p></div>)}</div>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/get-a-quote" className="btn-primary">Request a Quote</Link>
        {s.tab === "printing" && <a href={wa("Hello, I have an STL file I would like to get 3D printed.")} target="_blank" rel="noopener noreferrer" className="btn-outline">Send Your STL on WhatsApp</a>}
        <Link href={s.tab === "design" ? "/gallery" : "/gallery#printing"} className="btn-outline">View {s.tab === "design" ? "design" : "printing"} projects</Link></div></section>))}</div></div>);
}
