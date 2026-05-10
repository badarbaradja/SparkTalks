"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FounderSection() {
  const credentials = [
    "Public Speaker | MC | Moderator | Content Creator",
    "Public Health UI Student",
    "Exchange Student at Mahidol University",
    "Intern DPR RI",
    "Brand Ambassador Youth Ranger Indonesia",
    "Executive Brand Ambassador Zeekend",
    "Speaker in Various National Events"
  ];

  return (
    <section className="bg-brand-warm-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo (Left - 4 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative"
          >
            <div className="absolute inset-0 bg-brand-dusty-pink/30 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <Image 
                src="/images/founder-profile.jpeg" 
                alt="Salmahita Ataya Pradilla" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content (Right - 8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
                ABOUT THE FOUNDER
              </p>
              <h2 className="font-heading text-display font-bold text-brand-espresso mb-4">
                Salmahita Ataya Pradilla
              </h2>
              <p className="font-body text-body-lg text-brand-espresso/80 italic mb-8 border-l-4 border-brand-dusty-pink pl-4">
                &quot;Passionate about helping young people find their voice and express it with confidence.&quot;
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                {credentials.map((cred, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 text-brand-burgundy bg-brand-dusty-pink/20 rounded-full p-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-body text-sm font-medium text-brand-espresso/90">
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className="text-brand-burgundy font-body font-medium flex items-center gap-2 hover:gap-3 transition-all hover:underline">
                More About Salma <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Mini Gallery Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-card"
            >
              <div className="grid grid-cols-3 h-48 md:h-56">
                <div className="relative w-full h-full">
                  <Image src="https://images.unsplash.com/photo-1475721025505-c31bc1683d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Event 1" fill className="object-cover" />
                </div>
                <div className="relative w-full h-full">
                  <Image src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Event 2" fill className="object-cover" />
                </div>
                <div className="relative w-full h-full">
                  <Image src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Event 3" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 bg-brand-espresso/60 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                <p className="font-heading text-xl md:text-2xl text-white font-medium max-w-sm">
                  Experienced in <span className="text-brand-dusty-pink font-bold">50+ events</span> as a speaker and moderator.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
