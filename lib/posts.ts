import fs from "fs"; import path from "path"; import matter from "gray-matter";
const dir = path.join(process.cwd(), "content/blog");
export type Post = { slug: string; title: string; description: string; date: string; content: string };
export function getPosts(): Post[] {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    return { slug: f.replace(/\.mdx$/, ""), title: data.title, description: data.description, date: data.date, content };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}
export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
