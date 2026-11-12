import data from "@/lib/portfolio.json";
import type { SliderItem } from "@/components/ImageSlider";

export type Project = {
  n: number;
  slug: string;
  title: string;
  cover: string;
  /** Everything in the project (images and, for printing projects, videos). Used by the gallery modal. */
  items: SliderItem[];
  /** Images only. Used by the card / tile sliders. */
  images: SliderItem[];
};

type RawItem = { type?: string; src: string; alt: string; poster?: string; caption?: string };

const toItem = (i: RawItem): SliderItem => ({
  type: i.type === "video" ? "video" : "image",
  src: i.src, alt: i.alt, poster: i.poster, caption: i.caption,
});

// Each project only ever contains its own files, so images of different projects never mix.
export const designProjects: Project[] = data.design.map((p) => {
  const items = (p.images as RawItem[]).map(toItem);
  return { n: p.n, slug: p.slug, title: p.title, cover: p.cover, items, images: items };
});

export const printingProjects: Project[] = data.printing.map((p) => {
  const items = (p.items as RawItem[]).map(toItem);
  return { n: p.n, slug: p.slug, title: p.title, cover: p.cover, items, images: items.filter((i) => i.type === "image") };
});

export const overallVideo = data.overall;
export const heroSlides = data.hero;
