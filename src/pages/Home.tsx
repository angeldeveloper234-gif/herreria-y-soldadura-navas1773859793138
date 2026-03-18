import { Hero, Gallery, Roadmap, Stats, Features, Testimonials, CTA, Contact } from "@/components/sections";
import { config } from "@/config";

export function Home() {
    const { features } = config;

    return (
        <main className="relative selection:bg-[#FF7F50] selection:text-white">
            <Hero 
                dynamic_city="Tijuana"
                hook_headline="HERRERÍA Y SOLDADURA NAVA'S"
            />
            {features.showStats && <Stats />}
            <Features />
            {features.showGallery && <Gallery />}
            <Roadmap />
            {features.showTestimonials && <Testimonials />}
            <CTA />
            <Contact />
        </main>
    );
}