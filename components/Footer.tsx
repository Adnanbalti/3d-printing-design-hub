import Link from "next/link"; import Logo from "./Logo"; import { FiverrIcon, BehanceIcon } from "./Icons"; import { SITE, LINKS, NAV, SERVICES, wa } from "@/lib/site";
const ext = { target: "_blank", rel: "noopener noreferrer" };
export default function Footer() {
  return (<footer className="border-t border-white/[.08] bg-[#070809]"><div className="wrap grid gap-10 py-14 text-base sm:grid-cols-2 lg:grid-cols-4">
    <div><Logo /><p className="mt-4">Professional SolidWorks 3D design and physical 3D printing. Islamabad, Rawalpindi and nationwide delivery.</p></div>
    <div><p className="mb-3 font-display font-bold text-head">Quick Links</p><div className="grid gap-2">{NAV.map(([h, l]) => <Link key={h} href={h} className="hover:text-brand">{l}</Link>)}<Link href="/get-a-quote" className="hover:text-brand">Request a Quote</Link></div></div>
    <div><p className="mb-3 font-display font-bold text-head">Services</p><div className="grid gap-2">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-brand">{s.title}</Link>)}</div></div>
    <div><p className="mb-3 font-display font-bold text-head">Contact</p><div className="grid gap-2"><a href={wa()} {...ext} className="hover:text-brand">WhatsApp</a><a href={`mailto:${SITE.email}`} className="break-all hover:text-brand">{SITE.email}</a>
      <a href={LINKS.fiverr} {...ext} className="btn-fiverr mt-2 w-fit !px-4 !py-2.5 !text-base">Hire Me on Fiverr</a>
      <a href={LINKS.behance} {...ext} className="mt-1 inline-flex items-center gap-2 hover:text-brand"><BehanceIcon size={20} /> View My Behance Portfolio</a>
      <div className="mt-2 flex gap-3"><a href={LINKS.fiverr} {...ext} aria-label="Fiverr"><FiverrIcon /></a><a href={LINKS.behance} {...ext} aria-label="Behance"><BehanceIcon /></a></div></div></div></div>
    <p className="border-t border-line py-5 text-center text-sm">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></footer>);
}
