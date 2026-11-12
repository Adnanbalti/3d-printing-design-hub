import type { Metadata } from "next"; import { Plus_Jakarta_Sans, Inter } from "next/font/google"; import Script from "next/script";
import "./globals.css"; import Header from "@/components/Header"; import Footer from "@/components/Footer"; import WhatsAppButton from "@/components/WhatsAppButton"; import { SITE } from "@/lib/site";
const head = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-head" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url), alternates: { canonical: "./" },
  title: { default: "SolidWorks 3D Design & 3D Printing in Islamabad & Pakistan | 3D Printing & Design Hub", template: "%s | 3D Printing & Design Hub" },
  description: "Professional SolidWorks 3D design and physical 3D printing in Islamabad and Rawalpindi, with delivery across Pakistan. Request a quote.",
};
const GA = process.env.NEXT_PUBLIC_GA_ID;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${head.variable} ${inter.variable} bg-[#050505] font-sans text-body`}>
    <Header /><main>{children}</main><Footer /><WhatsAppButton />
    {GA && (<><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" /><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');`}</Script></>)}
  </body></html>);
}
