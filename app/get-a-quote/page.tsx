import type { Metadata } from "next"; import QuoteForm from "@/components/QuoteForm";
export const metadata: Metadata = { title: "Request a 3D Design or 3D Printing Quote in Pakistan", description: "Share your project details and we will get back to you with a quotation." };
export default function Quote() {
  return (<div className="mx-auto max-w-3xl px-5 py-14 md:py-20"><p className="eyebrow">Request a quote</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">Tell Us About Your Project</h1>
    <p className="mb-8 mt-4">Every project is different. Share your details and we will review your requirements and get back to you with a quotation.</p><QuoteForm /></div>);
}
