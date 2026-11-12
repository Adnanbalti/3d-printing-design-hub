import { wa } from "@/lib/site";
export default function WhatsAppButton() {
  return (<a href={wa()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display font-bold text-white shadow-lg hover:opacity-90">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.2-.7-2.700-1.100-4.400-3.800-4.500-4-.1-.1-1.100-1.400-1.100-2.700s.7-1.900.9-2.200c.2-.2.5-.3.700-.3h.5c.2 0 .4 0 .6.500.2.500.8 1.800.8 1.900.1.100.1.300 0 .4-.1.200-.1.300-.3.500l-.4.500c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1.200-.2.700-.8.900-1.100.2-.3.400-.2.600-.1l1.800.9c.3.100.5.200.5.300.1.200.1.800-.1 1.300z" /></svg><span className="hidden sm:inline">WhatsApp</span></a>);
}
