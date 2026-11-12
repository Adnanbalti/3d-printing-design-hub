"use client";
import { useEffect, useRef } from "react";
import ImageSlider, { type SliderItem } from "./ImageSlider";
export type Item = SliderItem;

export default function ProjectModal({ title, items, onClose }: { title: string; items: Item[]; onClose: () => void }) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    addEventListener("keydown", h);
    const o = document.body.style.overflow; document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { removeEventListener("keydown", h); document.body.style.overflow = o; };
  }, []); // eslint-disable-line
  return (<div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 md:p-8" onClick={onClose}>
    <div className="card flex max-h-full w-full max-w-4xl flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3"><h2 className="font-display text-lg font-bold md:text-xl">{title}</h2><button ref={closeBtn} onClick={onClose} aria-label="Close" className="text-2xl text-head hover:text-brand">✕</button></div>
      {/* Autoplays every 2s, pausing while a video is shown; arrows and keyboard work anywhere in the dialog. */}
      <ImageSlider items={items} label={title} aspect="aspect-[4/3] md:aspect-[16/10]" imgClass="object-contain" keyboard="global" />
    </div></div>);
}
