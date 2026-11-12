import type { Metadata } from "next"; import Link from "next/link"; import { getPosts } from "@/lib/posts";
export const metadata: Metadata = { title: "3D Printing Blog | Guides, Materials & Ideas", description: "Guides, practical tips and insights about 3D printing, materials and prototyping." };
export default function Blog() {
  const [first, ...rest] = getPosts();
  return (<div className="wrap max-w-5xl py-14 md:py-20"><p className="eyebrow">Blog</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">Learn More About 3D Printing</h1>
    <Link href={`/blog/${first.slug}`} className="card mt-8 block p-8 transition hover:border-brand"><p className="eyebrow">Featured</p><h2 className="h3 mt-2">{first.title}</h2><p className="mt-2">{first.description}</p></Link>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">{rest.map((p) => (<Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 transition hover:border-brand"><h2 className="font-display text-xl font-bold text-head">{p.title}</h2><p className="mt-1 text-sm">{p.date}</p><p className="mt-2">{p.description}</p></Link>))}</div></div>);
}
