import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import FounderSection from "@/components/sections/FounderSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CommunityCTA from "@/components/sections/CommunityCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-base">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ProgramsSection />
      <WhyJoinSection />
      <FounderSection />
      <GallerySection />
      <TestimonialsSection />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
