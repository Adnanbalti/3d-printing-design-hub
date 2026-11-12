"use client";
import Link from "next/link"; import { usePathname } from "next/navigation"; import { useState } from "react"; import Logo from "./Logo"; import { CubeMark } from "./Icons"; import { NAV, SERVICES } from "@/lib/site";
export default function Header() {
  const [open, setOpen] = useState(false); const path = usePathname(); const close = () => setOpen(false);
  const on = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  const cls = (h: string) => `rounded-full px-4 py-2.5 text-[13px] font-semibold transition duration-200 ${on(h) ? "border border-brand/70 bg-brand/10 text-white shadow-[0_0_20px_rgba(255,100,31,.22)]" : "border border-transparent text-[#C9CBD1] hover:border-white/10 hover:bg-white/[.04] hover:text-white"}`;
  return (<header className="sticky top-0 z-40 border-b border-white/[.08] bg-[#050505]/95 shadow-[0_8px_30px_rgba(0,0,0,.32)] backdrop-blur-xl"><div className="wrap flex min-h-[74px] items-center justify-between gap-6 py-3">
    <Link href="/" onClick={close} aria-label="Home" className="shrink-0"><Logo /></Link>
    <nav className="hidden items-center gap-1 lg:flex">{NAV.map(([h, l]) => h === "/services" ? (
      <div key={h} className="group relative"><Link href={h} className={cls(h)}>Services <span className="ml-1 text-[10px]">⌄</span></Link>
        <div className="invisible absolute left-0 top-full w-72 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"><div className="card p-2 shadow-2xl">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-lg px-3 py-2.5 text-[13px] text-body hover:bg-white/[.04] hover:text-brand">{s.title}</Link>)}</div></div></div>
    ) : <Link key={h} href={h} className={cls(h)}>{l}</Link>)}
      <Link href="/get-a-quote" className="btn-primary ml-3 !rounded-lg !px-4 !py-2.5"><CubeMark size={18} /> Request a Quote <span aria-hidden="true">→</span></Link></nav>
    <button className="rounded-lg border border-white/15 bg-white/[.03] px-3 py-2 text-xl text-head hover:border-brand lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button></div>
    {open && <nav className="wrap grid gap-1 border-t border-white/[.08] pb-5 pt-3 lg:hidden">{NAV.map(([h, l]) => (<div key={h}><Link href={h} onClick={close} className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${on(h) ? "text-brand" : "text-head"}`}>{l}</Link>
      {h === "/services" && SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="block py-2 pl-6 text-sm text-body">{s.title}</Link>)}</div>))}
      <Link href="/get-a-quote" onClick={close} className="btn-primary mt-2"><CubeMark size={18} /> Request a Quote →</Link></nav>}
  </header>);
}
