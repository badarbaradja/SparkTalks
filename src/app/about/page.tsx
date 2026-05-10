"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/sections/FounderSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <Navbar />
      
      {/* Spacer for sticky nav */}
      <div className="pt-24 md:pt-32 bg-brand-base"></div>
      
      <AboutSection />
      <FounderSection />
      <TeamSection />

      <Footer />
    </main>
  );
}
