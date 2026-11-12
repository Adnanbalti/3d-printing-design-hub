import type { Metadata } from "next"; import { notFound } from "next/navigation"; import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc"; import { getPost, getPosts } from "@/lib/posts";
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug); return p ? { title: p.title, description: p.description } : {};
}
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug); if (!p) notFound();
  return (<article className="mx-auto max-w-3xl px-5 py-14 md:py-20"><h1 className="h1 !text-[clamp(2rem,4.5vw,3rem)]">{p.title}</h1>
    <p className="mt-2 text-sm">{p.date}</p>
    <div className="prose prose-lg prose-invert mt-8 max-w-none prose-headings:font-display prose-a:text-brand prose-strong:text-head"><MDXRemote source={p.content} /></div>
    <Link href="/quote" className="btn-primary mt-10">Get a Quote</Link></article>);
}
