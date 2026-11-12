import Link from "next/link";
import Faq from "@/components/Faq";
import { Cube, Bolt, Shield, CubeMark, ArrowRight, ArrowUpRight } from "@/components/Icons";
import ImageSlider from "@/components/ImageSlider";
import { designProjects, printingProjects } from "@/lib/projects";
import { SITE, SERVICES, MATERIALS } from "@/lib/site";

const trust = [
  [Cube, "High-quality prints", "Clean layers and careful finishing on every part."],
  [Bolt, "Fast turnaround", "Clear timelines agreed before we start."],
  [Shield, "Reliable & affordable", "Quote-based pricing that fits your project."],
] as const;

export default function Home() {
  const ld = { "@context": "https://schema.org", "@type": "LocalBusiness", name: SITE.name, url: SITE.url, email: SITE.email, areaServed: ["Islamabad", "Rawalpindi", "Pakistan"], description: SITE.tagline };
  const thumbs = { design: designProjects.slice(0, 3), printing: printingProjects.slice(0, 3) };
  const ideas = [...designProjects.slice(3, 6).map((p) => ({ p, kind: "design" as const })), ...printingProjects.slice(2, 5).map((p) => ({ p, kind: "printing" as const }))];
  const bullets = {
    design: ["Start with an idea, sketch or reference image", "SolidWorks CAD files, renders and drawings", "Optional physical 3D printing"],
    printing: ["Send your STL file on WhatsApp", "Design review, material and price discussion", "Pickup by appointment or courier delivery"],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

    <section className="hero-shell relative isolate overflow-hidden border-b border-white/10">
      <div className="hero-grid-glow pointer-events-none absolute inset-0" /><div className="hero-plant hero-plant-left" aria-hidden="true"><Plant /></div><div className="hero-plant hero-plant-right" aria-hidden="true"><Plant /></div>
      <div className="wrap relative grid items-center gap-3 pb-10 pt-7 sm:pt-9 lg:min-h-[630px] lg:grid-cols-[1fr_.95fr] lg:gap-0 lg:pb-12 lg:pt-7">
        <div className="relative z-10 max-w-[650px]">
          <p className="hero-kicker"><CubeMark /> Custom 3D printing services</p>
          <h1 className="mt-6 max-w-[680px] font-display text-[clamp(2.55rem,5.2vw,4.45rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-white">From Your Idea to a <span className="hero-title-accent">Physical Product.</span></h1>
          <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-[#C9CBD1] sm:text-base">Custom 3D printing, 3D modeling and prototyping solutions for individuals and businesses. Based in Islamabad, serving Rawalpindi and customers across Pakistan.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="/get-a-quote" className="btn-primary group !rounded-full !px-7 !py-3.5">Request a Quote <ArrowRight /></Link><Link href="/services" className="btn-outline group !rounded-full !py-2.5 !pl-7 !pr-3">Explore Our Services <ArrowUpRight size={30} /></Link></div>
          <div className="mt-9 grid max-w-[570px] grid-cols-3 divide-x divide-white/20 border-t border-white/10 pt-5">{trust.map(([Icon, title]) => <div key={title} className="flex items-center gap-2.5 px-3 first:pl-0"><span className="shrink-0 text-brand drop-shadow-[0_0_8px_rgba(255,100,31,.5)]"><Icon /></span><span className="text-[11px] font-semibold leading-snug text-white sm:text-xs">{title}</span></div>)}</div>
        </div>
        <div className="hero-machine-wrap relative mx-auto w-full max-w-[650px] lg:-mr-8 lg:mt-1">
          <div className="hero-machine-halo absolute inset-[12%] rounded-full bg-brand/20 blur-[85px]" />
          <img src="/portfolio/creality-cr6-max-hero.webp" alt="Creality CR-6 Max style 3D printer producing a detailed orange dragon model" fetchPriority="high" className="hero-machine relative z-10 w-full object-contain" />
        </div>
      </div>
      <div className="hero-floor-line" />
    </section>

    <section className="intro-band border-b border-white/[.07]">
      <div className="wrap py-9 text-center sm:py-11"><p className="eyebrow justify-center">Have an idea? Let’s make it real</p><h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">You Don’t Need a Ready-Made <span className="text-brand">3D model.</span></h2><p className="mt-2 text-sm text-[#AEB2BC] sm:text-base">Share your idea, and we’ll help turn it into a high-quality 3D design or print.</p></div>
    </section>

    <section className="wrap section-space"><p className="eyebrow">Two ways we help</p><h2 className="h2 mt-2 max-w-3xl">Design It from Scratch, or Bring Your Existing File to Life.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{SERVICES.map((s) => <div key={s.slug} className="service-card card flex flex-col p-5 sm:p-7">
        <div className="grid grid-cols-3 gap-2">{thumbs[s.tab as "design" | "printing"].map((p) => <img key={p.slug} src={p.cover} alt={p.title} loading="lazy" className="aspect-square w-full rounded-lg border border-white/[.06] bg-[#08090B] object-contain p-1.5" />)}</div>
        <h3 className="h3 mt-5">{s.title}</h3><p className="mt-2 text-xs font-semibold text-brand sm:text-sm">{s.flow.join("  →  ")}</p><p className="mt-3 text-sm leading-6 text-[#B9BDC6]">{s.short}</p>
        <ul className="mt-4 grid gap-2 text-[13px] text-body">{bullets[s.tab as "design" | "printing"].map((b) => <li key={b} className="flex gap-2"><span className="text-brand">✓</span>{b}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2.5"><Link href={`/services#${s.tab}`} className="btn-primary">Explore service</Link><Link href={s.tab === "design" ? "/gallery" : "/gallery#printing"} className="btn-outline">See projects</Link></div>
      </div>)}</div>
    </section>

    <section className="portfolio-band"><div className="wrap section-space"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Selected Work</p><h2 className="h2 mt-2">Ideas Worth Making.</h2></div><Link href="/gallery" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-orange-300">Explore All Projects <ArrowRight size={16} /></Link></div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{ideas.map(({ p, kind }) => <article key={`${kind}-${p.slug}`} className="project-tile overflow-hidden rounded-xl border border-white/10 bg-[#08090B]">
        <div className="relative"><ImageSlider items={p.images} label={p.title} aspect="aspect-[4/3]" />
          <span className="pointer-events-none absolute left-3 top-3 z-20 rounded-md border border-white/10 bg-black/85 px-2.5 py-1 text-[10px] font-semibold text-white">{kind === "design" ? "3D Design" : "3D Printed"}</span></div>
        <div className="flex items-center justify-between gap-3 border-t border-white/[.07] px-4 py-3"><h3 className="font-display text-sm font-semibold text-head">{p.title}</h3><Link href={kind === "design" ? "/gallery" : "/gallery#printing"} className="shrink-0 text-xs font-semibold text-brand hover:text-orange-300">View Project</Link></div>
      </article>)}</div></div></section>

    <section className="wrap grid gap-10 py-14 md:grid-cols-2 md:py-20"><div><p className="eyebrow">Materials</p><h2 className="h2 mt-2">Materials We Print In</h2><div className="mt-5 grid gap-3">{MATERIALS.map((m) => <div key={m.name} className="material-card card p-5"><p className="font-display text-lg font-semibold text-brand">{m.name}</p><p className="mt-1 text-sm text-[#B9BDC6]">{m.text}</p></div>)}</div></div>
      <div><p className="eyebrow">Who we help</p><h2 className="h2 mt-2">Made for Ideas of Every Size.</h2><ul className="mt-6 grid gap-3 text-sm text-[#C5CAD3]">{["Students and university projects", "Startups and product teams", "Engineers, architects and designers", "Small businesses", "Hobbyists and gift buyers"].map((w) => <li key={w} className="flex items-center gap-3 border-b border-line/70 pb-3"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xs text-brand">✓</span>{w}</li>)}</ul></div></section>

    <section className="wrap pb-14 md:pb-20"><div className="mx-auto max-w-3xl"><p className="eyebrow justify-center">Need to know more?</p><h2 className="h2 mb-6 mt-2 text-center">Frequently Asked Questions</h2><Faq /></div></section>

    <section className="closing-cta border-y border-brand/20"><div className="wrap py-12 text-center"><p className="eyebrow justify-center">Your next idea starts here</p><h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">Let’s Bring Your Idea to Life.</h2><p className="mt-2 text-sm text-[#B9BDC6]">Tell us what you want to create, design it, print it, or both.</p><Link href="/get-a-quote" className="btn-primary mt-5 !rounded-full !px-7">Request a Quote →</Link></div></section>
  </>;
}

function Plant() { return <svg viewBox="0 0 150 280" fill="none"><path d="M75 235C72 174 82 112 74 24M75 175C48 145 36 112 24 78M78 146C103 117 118 86 126 52M74 112C50 88 45 62 48 37M78 204C105 185 119 162 130 135" stroke="#8C9A75" strokeWidth="3" strokeLinecap="round"/>{[[23,78,-35],[48,37,-28],[126,52,30],[130,135,45],[24,78,210],[48,37,150],[126,52,205],[130,135,220]].map(([x,y,r],i)=><ellipse key={i} cx={x} cy={y} rx="12" ry="30" transform={`rotate(${r} ${x} ${y})`} fill="#526346" fillOpacity=".52" stroke="#91A17C" strokeOpacity=".3"/>)}</svg>; }
