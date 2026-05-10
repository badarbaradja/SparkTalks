"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(testimonials.length / itemsPerPage) - 1);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-brand-espresso py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-dusty-pink mb-3 font-body font-semibold">
              WHAT THEY SAY
            </p>
            <h2 className="font-heading text-display font-bold text-brand-warm-white">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3 md:px-4">
                  <div className="h-full bg-brand-warm-white/10 rounded-3xl p-8 border border-brand-dusty-pink/20 flex flex-col justify-between hover:bg-brand-warm-white/15 transition-colors">
                    <div>
                      <div className="font-heading text-6xl text-brand-burgundy leading-none mb-2">&quot;</div>
                      <p className="font-body text-brand-warm-white/90 italic text-lg leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex gap-1 text-brand-sand-gold mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>★</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-dusty-pink/50">
                          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-body text-sm font-semibold text-brand-warm-white">
                            {testimonial.name}
                          </p>
                          <p className="font-body text-xs text-brand-dusty-pink">
                            {testimonial.program}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-brand-dusty-pink/30 flex items-center justify-center text-brand-dusty-pink hover:bg-brand-dusty-pink/20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? "bg-brand-dusty-pink w-6" 
                      : "bg-brand-dusty-pink/30"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-brand-dusty-pink/30 flex items-center justify-center text-brand-dusty-pink hover:bg-brand-dusty-pink/20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
