import { FAQS } from "@/lib/site";
export default function Faq() {
  return (<div className="grid gap-3">{FAQS.map(([q, a]) => (<details key={q} className="card group p-5"><summary className="cursor-pointer font-display font-bold text-head marker:text-brand">{q}</summary><p className="mt-3">{a}</p></details>))}</div>);
}
