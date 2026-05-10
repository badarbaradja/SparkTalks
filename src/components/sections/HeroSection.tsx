"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const fadeUp = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden bg-brand-beige flex items-center">
      {/* Decorative SVG behind image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-brand-dusty-pink/20 rounded-full blur-3xl -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col items-start"
        >
          <motion.p 
            variants={fadeUp} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-widest text-brand-latte mb-4 font-body font-semibold"
          >
            THE ART OF PUBLIC SPEAKING BY SALMA
          </motion.p>
          
          <motion.h1 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-hero font-bold text-brand-espresso mb-6"
          >
            Where <span className="italic font-normal">Confidence</span> Begins.
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-body-lg text-brand-espresso/70 max-w-md mb-8"
          >
            More than public speaking — a space to build confidence, communication, and growth.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link href="/programs" className="bg-brand-burgundy text-white rounded-full px-8 py-3 font-body font-semibold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-200 flex items-center gap-2">
              Explore Programs <ArrowRight size={16} />
            </Link>
            <a href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg" target="_blank" rel="noreferrer" className="border-2 border-brand-burgundy text-brand-burgundy rounded-full px-8 py-3 font-body font-semibold text-sm hover:bg-brand-burgundy hover:text-white transition-all duration-200 flex items-center gap-2">
              Join The Community <Users size={16} />
            </a>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-beige bg-brand-dusty-pink flex items-center justify-center text-xs text-white font-bold overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-body font-medium text-brand-espresso">
              Trusted by <span className="font-bold">100+</span> Young Speakers
            </p>
          </motion.div>
        </motion.div>
        
        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            <Image 
              src="/images/founder-hero.jpeg" 
              alt="Salmahita Ataya Pradilla" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white shadow-float rounded-2xl p-5 md:p-6 flex flex-col gap-1 z-20">
            <p className="font-heading font-bold text-brand-espresso text-lg">Practice</p>
            <p className="font-heading font-bold text-brand-burgundy text-lg">Connect</p>
            <p className="font-heading italic text-brand-latte text-lg">Grow</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
