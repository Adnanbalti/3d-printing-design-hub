export const SITE = {
  name: "3D Printing & Design Hub",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "923197331858",
  email: process.env.NEXT_PUBLIC_EMAIL || "adnanbalti15@gmail.com",
  tagline: "Professional SolidWorks 3D design and physical 3D printing for individuals and businesses",
};
export const LINKS = { fiverr: "https://www.fiverr.com/muhammaazam_248?up_rollout=true", behance: "https://www.behance.net/designhubsolidworks" };
export const wa = (t = "Hello, I would like to discuss a 3D design / 3D printing project.") => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;
export const SERVICES = [
  { slug: "3d-design-engineering", tab: "design", title: "3D Design & Engineering (SolidWorks)", short: "From idea, sketch or reference image to professional CAD files.",
    seo: "3D Design & Engineering Services (SolidWorks) in Pakistan",
    flow: ["Idea / Sketch", "Professional CAD Design", "Digital Files", "Optional Physical Printing"],
    long: "Start with just an idea, concept, hand-drawn sketch, reference image or design requirements. We turn it into a professional 3D CAD model in SolidWorks and deliver the files you need. If you want a physical product, we can also print the designed part for you.",
    uses: ["3D CAD source files (SolidWorks native)", "Rendered product images", "Assembly files", "Technical engineering drawings", "Manufacturing-ready design files"] },
  { slug: "3d-printing", tab: "printing", title: "3D Printing Services", short: "Already have an STL file? We turn it into a physical product.",
    seo: "3D Printing Services in Islamabad & Rawalpindi",
    flow: ["Existing STL File", "Design Review", "3D Printing", "Physical Product"],
    long: "Send us your STL file on WhatsApp or email. We review the design, discuss material, dimensions, quantity and price, print the part and deliver the finished product. Local pickup is available by appointment, with courier delivery across Pakistan.",
    uses: ["Functional and replacement parts", "Prototypes and enclosures", "Models and display pieces", "Small production runs"] },
];
export const MATERIALS = [
  { name: "PLA", text: "Easy to print with crisp detail. Ideal for models, prototypes and decor." },
  { name: "PETG", text: "Tougher and more resistant to heat and moisture. Good for functional parts." },
];
export const FAQS = [
  ["Do I Need a 3D Model to Start?", "No. For SolidWorks design, start with an idea, sketch, reference image or measurements. If you already have an STL file, you only need printing."],
  ["Can You Design and Print My Part?", "Yes. Choose digital design files only, or 3D design together with physical 3D printing."],
  ["How Do I Send My STL File?", "The website has no upload option. After your enquiry, send the STL file to us on WhatsApp or by email."],
  ["How Is Pricing Decided?", "Pricing is quote-based and depends on size, material, complexity, quantity and design work. Send your details and we will reply with a quotation."],
  ["Which Materials Do You Print In?", "PLA and PETG. We can help you choose the right one for your use."],
  ["Can I Collect My Order?", "Yes, pickup in Islamabad and Rawalpindi can be arranged by appointment. We also deliver by courier across Pakistan."],
];
export const NAV = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/gallery", "Gallery"], ["/blog", "Blog"], ["/contact", "Contact"]];
