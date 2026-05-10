"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = ["All", "Online Class", "Offline Intensive", "Events"];

const galleryItems = [
  { id: 1, category: "Offline Intensive", src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", aspect: "aspect-[4/3]" },
  { id: 2, category: "Events", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 3, category: "Online Class", src: "/images/gallery-1.jpeg", aspect: "aspect-[16/9]" },
  { id: 4, category: "Offline Intensive", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", aspect: "aspect-square" },
  { id: 5, category: "Events", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", aspect: "aspect-[4/5]" },
  { id: 6, category: "Online Class", src: "/images/gallery-2.jpeg", aspect: "aspect-[3/2]" },
  { id: 7, category: "Events", src: "/images/founder-about.jpeg", aspect: "aspect-[4/3]" },
  { id: 8, category: "Offline Intensive", src: "/images/founder-profile.jpeg", aspect: "aspect-[16/9]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-espresso pt-32 pb-16 md:pt-40 md:pb-24 rounded-b-[3rem] shadow-card relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-brand-dusty-pink mb-4 font-body font-semibold">
              MOMENTS THAT MATTER
            </p>
            <h1 className="font-heading text-display font-bold text-brand-warm-white mb-6">
              Our Journey in Frames
            </h1>
            <p className="font-body text-body-lg text-brand-dusty-pink/80 max-w-2xl mx-auto">
              A glimpse into our offline intensive classes, online interactive sessions, and collaborative public speaking events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Masonry Gallery */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-brand-burgundy text-white shadow-float" 
                    : "bg-brand-dusty-pink/10 text-brand-espresso hover:bg-brand-dusty-pink/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* CSS Columns Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={item.id}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-card"
                >
                  <div className={`relative w-full ${item.aspect}`}>
                    <Image 
                      src={item.src} 
                      alt={`Gallery ${item.category}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="bg-brand-burgundy text-white text-[10px] font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                      {item.category}
                    </span>
                    <p className="font-heading text-xl text-white font-semibold">
                      SPARK Talks Session
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-brand-espresso/60 text-lg">No photos available in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
