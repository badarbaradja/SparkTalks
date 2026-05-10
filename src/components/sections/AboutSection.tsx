"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Briefcase, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const features = [
    { icon: Mic2, label: "Practice-Based Learning" },
    { icon: Heart, label: "Supportive Environment" },
    { icon: Briefcase, label: "Real-Life Experience" },
    { icon: Users, label: "Community & Networking" },
  ];

  return (
    <section id="about" className="bg-brand-warm-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-card"
          >
            <Image 
              src="/images/founder-about.jpeg" 
              alt="SPARK Talks Session" 
              fill 
              className="object-cover object-top"
            />
            {/* Heart doodle overlay */}
            <div className="absolute bottom-6 right-6 text-brand-dusty-pink opacity-80">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
              ABOUT SPARK TALKS
            </p>
            <h2 className="font-heading text-display font-bold text-brand-espresso mb-6 leading-[1.1]">
              A Space to <span className="italic font-normal">Speak, Connect, and Grow</span>
            </h2>
            <p className="font-body text-body text-brand-espresso/80 mb-8">
              We believe that public speaking is more than just talking in front of a crowd. It&apos;s about finding your voice, building self-confidence, and connecting with others authentically. SPARK Talks provides a premium, safe, and supportive ecosystem for young speakers to develop their communication skills through real practice and community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy">
                    <feature.icon size={18} />
                  </div>
                  <span className="font-body text-sm font-semibold text-brand-espresso">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
            
            <Link 
              href="#programs" 
              className="text-brand-burgundy font-body font-medium flex items-center gap-2 hover:gap-3 transition-all hover:underline"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
