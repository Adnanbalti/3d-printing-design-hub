"use client";
import { useEffect, useState } from "react"; import ProjectModal from "./ProjectModal"; import ImageSlider from "./ImageSlider"; import { designProjects as design, printingProjects as printing, overallVideo, type Project as Proj } from "@/lib/projects";
export default function GalleryClient() {
  const [tab, setTab] = useState<"design" | "printing">("design"); const [shown, setShown] = useState(9); const [open, setOpen] = useState<Proj | null>(null);
  useEffect(() => { if (location.hash === "#printing") setTab("printing"); }, []);
  const pick = (t: "design" | "printing") => { setTab(t); history.replaceState(null, "", t === "printing" ? "#printing" : "#design"); };
  const list = tab === "design" ? design.slice(0, shown) : printing;
  const tabCls = (t: string) => `card flex-1 p-4 text-left transition md:p-5 ${tab === t ? "!border-brand" : "hover:border-body"}`;
  return (<div>
    <div className="flex flex-col gap-3 sm:flex-row" role="tablist">
      <button role="tab" aria-selected={tab === "design"} onClick={() => pick("design")} className={tabCls("design")}><span className="eyebrow">SolidWorks</span><span className="mt-1 block font-display text-xl font-bold text-head">3D Design Projects ({design.length})</span><span className="text-sm">CAD models, renders, assemblies and drawings</span></button>
      <button role="tab" aria-selected={tab === "printing"} onClick={() => pick("printing")} className={tabCls("printing")}><span className="eyebrow">Physical products</span><span className="mt-1 block font-display text-xl font-bold text-head">3D Printing Projects ({printing.length})</span><span className="text-sm">Printed parts, process photos and videos</span></button></div>
    {tab === "printing" && <div className="card mt-8 grid items-center gap-6 p-5 md:grid-cols-2 md:p-8"><div><p className="eyebrow">Printing in action</p><h2 className="h3 mt-2">Watch a Print in Progress</h2><p className="mt-3">A short clip from our printer. Each project below shows the steps from printing to the finished product.</p></div>
      <video src={overallVideo.src} poster={overallVideo.poster} controls playsInline preload="none" className="mx-auto max-h-[70vh] rounded-xl bg-ink" /></div>}
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => (
      <article key={p.slug} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-brand">
        <div className="relative">
          {/* Each card slides through its own project images only: autoplay every 2s, Previous / Next, click to open. */}
          <ImageSlider items={p.images} label={p.title} onOpen={() => setOpen(p)} />
          <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-head">{p.items.length} {p.items.some((i) => i.type === "video") ? "items" : "images"}</span></div>
        <button type="button" onClick={() => setOpen(p)} className="block w-full p-5 text-left"><p className="eyebrow">{tab === "design" ? "3D Design" : "3D Printed"} · Project {p.n}</p><h3 className="mt-1 font-display text-xl font-bold text-head">{p.title}</h3><span className="mt-2 inline-block text-base font-semibold text-brand">View project →</span></button></article>))}</div>
    {tab === "design" && shown < design.length && <div className="mt-10 text-center"><button onClick={() => setShown(shown + 6)} className="btn-outline">Load more projects</button></div>}
    {open && <ProjectModal title={open.title} items={open.items} onClose={() => setOpen(null)} />}
  </div>);
}
