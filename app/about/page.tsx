import type { Metadata } from "next"; import Link from "next/link";
import ImageSlider from "@/components/ImageSlider"; import { heroSlides } from "@/lib/projects";
export const metadata: Metadata = { title: "About Us", description: "3D Printing & Design Hub offers SolidWorks 3D design and physical 3D printing for individuals and businesses." };
const blocks = [["Who We Are", "3D Printing & Design Hub provides professional SolidWorks 3D design and physical 3D printing for individuals, students and businesses."],
  ["What We Do", "Two services: 3D design and engineering from your idea, and 3D printing from your existing STL file. You can choose one, or both together."],
  ["Our Approach", "We listen first, understand each project, then recommend a suitable design approach, material and method before quoting."],
  ["Equipment and Materials", "We print on a Creality CR-6 Max in PLA and PETG, and design in SolidWorks."],
  ["Who We Serve", "Individuals, students, startups and businesses in Islamabad, Rawalpindi and across Pakistan."]];
// Looping showcase of our work. Starts with the printer, then alternates design renders and printed parts.
const slides = heroSlides.map((s) => ({ type: "image" as const, src: s.src, alt: s.alt, caption: s.label }));
export default function About() {
  return (<div><section className="border-b border-line"><div className="wrap grid items-center gap-10 py-14 md:py-20 md:grid-cols-2"><div><p className="eyebrow">About Us</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">From Idea to Design to Physical Product.</h1><p className="mt-4">Our goal is to make professional 3D design and 3D printing accessible to everyone, from a first sketch to a finished part.</p></div>
    <div className="card overflow-hidden"><ImageSlider items={slides} label="Our work showcase" aspect="aspect-[4/3]" /></div></div></section>
    <div className="wrap grid max-w-4xl gap-8 py-14">{blocks.map(([t, d]) => <div key={t}><h2 className="h3">{t}</h2><p className="mt-2">{d}</p></div>)}<Link href="/get-a-quote" className="btn-primary w-fit">Request a Quote</Link></div></div>);
}
