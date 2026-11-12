import type { Metadata } from "next"; import Link from "next/link"; import { notFound } from "next/navigation"; import ImageSlider from "@/components/ImageSlider"; import { designProjects, printingProjects } from "@/lib/projects"; import { SERVICES, wa } from "@/lib/site";
export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const s = SERVICES.find((x) => x.slug === slug); return s ? { title: s.seo, description: s.long } : {}; }
export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = SERVICES.find((x) => x.slug === slug); if (!s) notFound();
  const rel = s.tab === "design" ? designProjects.slice(0, 3) : printingProjects.slice(0, 3);
  return (<div className="wrap py-12 md:py-16"><nav className="text-sm"><Link href="/" className="hover:text-brand">Home</Link> / <Link href="/services" className="hover:text-brand">Services</Link> / <span className="text-head">{s.title}</span></nav>
    <h1 className="h1 mt-4 !text-[clamp(2.25rem,5vw,3.5rem)]">{s.title}</h1><p className="mt-4 max-w-3xl">{s.long}</p>
    <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{s.flow.map((f, k) => <li key={f} className="card p-4"><span className="font-display text-2xl font-extrabold text-brand">{k + 1}</span><p className="mt-1 font-semibold text-head">{f}</p></li>)}</ol>
    <h2 className="h3 mt-10">{s.tab === "design" ? "Deliverables" : "Applications"}</h2><ul className="mt-3 grid gap-1.5 sm:grid-cols-2">{s.uses.map((u) => <li key={u} className="flex gap-2"><span className="text-brand">■</span>{u}</li>)}</ul>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{rel.map((p) => <div key={p.slug} className="card overflow-hidden"><ImageSlider items={p.images} label={p.title} /><p className="border-t border-white/[.07] px-4 py-2.5 text-sm font-semibold text-head">{p.title}</p></div>)}</div>
    <div className="mt-8 flex flex-wrap gap-3"><Link href="/get-a-quote" className="btn-primary">Request a Quote</Link>{s.tab === "printing" && <a href={wa("Hello, I have an STL file I would like to get 3D printed.")} target="_blank" rel="noopener noreferrer" className="btn-outline">Send Your STL on WhatsApp</a>}<Link href={s.tab === "design" ? "/gallery" : "/gallery#printing"} className="btn-outline">View projects</Link></div></div>);
}
