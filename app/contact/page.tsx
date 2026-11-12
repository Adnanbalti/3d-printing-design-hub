import type { Metadata } from "next"; import QuoteForm from "@/components/QuoteForm"; import { FiverrIcon, BehanceIcon } from "@/components/Icons"; import { SITE, LINKS, wa } from "@/lib/site";
export const metadata: Metadata = { title: "Contact 3D Printing & Design Hub | Islamabad & Pakistan", description: "Contact us on WhatsApp, by email, Fiverr or Behance to discuss your 3D design or 3D printing project." };
const ext = { target: "_blank", rel: "noopener noreferrer" };
export default function Contact() {
  return (<div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-5"><div className="lg:col-span-2"><p className="eyebrow">Contact</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">Let&rsquo;s Discuss Your Project</h1>
    <p className="mt-4">Have an idea or an STL file? Get in touch to explore design, printing or both.</p>
    <ul className="mt-6 grid gap-2"><li><a className="font-semibold text-brand" href={wa()} {...ext}>Chat on WhatsApp</a></li><li><a className="break-all font-semibold text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a></li><li>Service area: Islamabad and Rawalpindi</li><li>Nationwide courier delivery</li><li>Pickup by appointment</li></ul>
    <div className="mt-8 grid gap-3"><a href={LINKS.fiverr} {...ext} className="btn-fiverr w-fit"><FiverrIcon size={24} /> Hire Me on Fiverr</a><a href={LINKS.behance} {...ext} className="btn-behance w-fit"><BehanceIcon size={24} /> View My Behance Portfolio</a></div></div>
    <div className="lg:col-span-3"><QuoteForm mode="contact" /></div></div>);
}
