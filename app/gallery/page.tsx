import type { Metadata } from "next"; import GalleryClient from "@/components/GalleryClient";
export const metadata: Metadata = { title: "3D Design & 3D Printing Projects | Our Gallery", description: "SolidWorks 3D design projects and physically 3D printed products, organised in two separate portfolios." };
export default function Gallery() {
  return (<div className="wrap py-14 md:py-20"><p className="eyebrow">Gallery</p><h1 className="h1 mt-3 !text-[clamp(2.25rem,5vw,3.5rem)]">Explore Our Projects</h1>
    <p className="mb-10 mt-4 max-w-2xl">Our work is split into two portfolios: SolidWorks design projects, and physical 3D printing projects. Open any project to browse its images.</p><GalleryClient /></div>);
}
