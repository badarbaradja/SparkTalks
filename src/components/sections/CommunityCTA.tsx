"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CommunityCTA() {
  return (
    <section id="community" className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-deep py-20 md:py-28 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dusty-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-burgundy-dark/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <p className="text-xs uppercase tracking-widest text-brand-dusty-pink/80 mb-4 font-body font-semibold">
              JOIN OUR COMMUNITY
            </p>
            <h2 className="font-heading text-display font-bold text-brand-warm-white mb-6">
              The Speaking Room
            </h2>
            <p className="font-body text-brand-warm-white/80 text-lg mb-10 max-w-md leading-relaxed">
              A safe and supportive community for young speakers to connect, practice, and grow together. Surround yourself with people who want to see you succeed.
            </p>
            <a href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg" target="_blank" rel="noreferrer" className="bg-brand-warm-white text-brand-burgundy rounded-full px-8 py-3.5 font-body font-bold text-sm hover:bg-brand-beige hover:shadow-float transition-all duration-300 flex items-center gap-2">
              Join Community 💬
            </a>
          </motion.div>

          {/* Right Image/Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-brand-warm-white/5 rounded-[3rem] border border-brand-dusty-pink/20 backdrop-blur-sm transform rotate-3" />
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                fill 
                className="object-cover opacity-90 mix-blend-overlay"
              />
              <Image 
                src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community Event" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Handwritten note */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-brand-espresso text-brand-warm-white px-6 py-4 rounded-2xl shadow-float rotate-[-5deg]">
              <p className="font-heading italic text-xl">See you inside! ♡</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
