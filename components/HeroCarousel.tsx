"use client";
import { useEffect, useState } from "react";
type Slide = { src: string; label: string; alt: string };
export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 4800);
    return () => clearInterval(t);
  }, [slides.length]);
  return (<div className="card relative aspect-[4/3] w-full overflow-hidden">
    {slides.map((s, k) => <img key={s.src} src={s.src} alt={s.alt} loading={k === 0 ? "eager" : "lazy"} aria-hidden={k !== i} className={`absolute inset-0 h-full w-full object-contain transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${k === i ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"}`} />)}
    <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-head md:text-sm">{slides[i].label}</span>
    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">{slides.map((_, k) => <button key={k} aria-label={`Show slide ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand" : "w-2 bg-line hover:bg-body"}`} />)}</div></div>);
}
