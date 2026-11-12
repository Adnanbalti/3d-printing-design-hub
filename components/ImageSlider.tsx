"use client";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type SliderItem = { type?: "image" | "video"; src: string; alt: string; poster?: string; caption?: string };

type Props = {
  items: SliderItem[];
  /** Accessible name of the slider, e.g. the project title. */
  label: string;
  /** Base autoplay delay in ms. Each slider gets a small stable offset. */
  interval?: number;
  /** Tailwind aspect classes for the image stage. */
  aspect?: string;
  /** "focus": arrow keys work while the slider is focused. "global": arrow keys work anywhere (modal). */
  keyboard?: "focus" | "global";
  /** If set, clicking the image calls this (used by gallery cards to open the project). */
  onOpen?: () => void;
  /** Extra classes for the image (default: object-contain with padding). */
  imgClass?: string;
  className?: string;
};

export default function ImageSlider({ items, label, interval = 4200, aspect = "aspect-[4/3]", keyboard = "focus", onOpen, imgClass = "object-contain p-2", className = "" }: Props) {
  const n = items.length;
  const [i, setI] = useState(0);
  const sliderId = useId();
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((d: number) => setI((x) => (x + d + n) % n), [n]);
  const intervalOffset = Array.from(sliderId).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 1200;

  // Autoplay: next image every `interval` ms; the last image loops back to the first.
  useEffect(() => {
    if (n < 2 || items[i]?.type === "video") return;
    const t = setTimeout(() => go(1), interval + intervalOffset);
    return () => clearTimeout(t);
  }, [i, n, interval, intervalOffset, go, items]);

  // Keyboard navigation.
  useEffect(() => {
    if (n < 2) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    if (keyboard === "global") { addEventListener("keydown", h); return () => removeEventListener("keydown", h); }
    const el = root.current; if (!el) return;
    el.addEventListener("keydown", h); return () => el.removeEventListener("keydown", h);
  }, [keyboard, n, go]);

  if (n === 0) return null;
  // Only the current image and its neighbours are mounted: fast pages, and the next image is always preloaded.
  const near = (k: number) => { const d = Math.abs(k - i); return Math.min(d, n - d) <= 1; };
  const arrow = "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-xl leading-none text-white shadow-lg backdrop-blur-sm transition hover:border-brand hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand sm:h-10 sm:w-10 sm:text-2xl";

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} images`}
      tabIndex={0}
      className={`outline-none focus-visible:ring-2 focus-visible:ring-brand/60 ${className}`}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current; touchX.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className={`relative w-full overflow-hidden bg-[#08090B] ${aspect}`}>
        {items.map((it, k) => near(k) && (
          <div key={it.src} aria-hidden={k !== i} className={`absolute inset-0 transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${k === i ? "scale-100 opacity-100" : "pointer-events-none scale-[1.02] opacity-0"}`}>
            {it.type === "video"
              ? (k === i && <video src={it.src} poster={it.poster} controls playsInline preload="metadata" onEnded={() => go(1)} className="h-full w-full object-contain" />)
              : <img src={it.src} alt={it.alt} loading={k === 0 ? "eager" : "lazy"} draggable={false} className={`h-full w-full ${imgClass}`} />}
          </div>
        ))}
        {onOpen && <button type="button" onClick={onOpen} aria-label={`Open ${label} project`} className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" />}
        {n > 1 && <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`${arrow} left-2.5 sm:left-3`}><span aria-hidden="true" className="-mt-0.5">‹</span></button>
          <button type="button" onClick={() => go(1)} aria-label="Next image" className={`${arrow} right-2.5 sm:right-3`}><span aria-hidden="true" className="-mt-0.5">›</span></button>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-3 pb-1.5 pt-6">
            {items.map((_, k) => <button key={k} type="button" aria-label={`Go to image ${k + 1} of ${n}`} aria-current={k === i} onClick={() => setI(k)} className="pointer-events-auto flex h-5 items-center bg-transparent px-[3px]"><span className={`block h-2 rounded-full transition-all duration-300 ${k === i ? "w-6 bg-brand" : "w-2 bg-white/45 hover:bg-white/80"}`} /></button>)}
          </div>
          <span className="sr-only" aria-live="off">Image {i + 1} of {n}</span>
        </>}
      </div>
    </div>
  );
}
