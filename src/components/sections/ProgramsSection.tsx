"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { programs } from "@/lib/data/programs";

export default function ProgramsSection() {

  return (
    <section id="programs" className="bg-brand-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
              OUR PROGRAMS
            </p>
            <h2 className="font-heading text-display font-bold text-brand-espresso">
              Find the Program That&apos;s Right for You
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="font-body text-brand-espresso/70 md:text-right max-w-sm">
              Designed for all levels, from beginners to confident speakers.
            </p>
            <Link href="/programs" className="text-brand-burgundy font-body font-medium flex items-center gap-2 hover:gap-3 transition-all hover:underline">
              View All Programs <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-brand-warm-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-float hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Content */}
              <div className="flex-1 w-full order-2 md:order-1">
                <span className="inline-block bg-brand-burgundy text-white text-xs font-body font-semibold rounded-full px-4 py-1.5 mb-4 tracking-wide">
                  {program.type}
                </span>
                <h3 className="font-heading text-heading font-bold text-brand-espresso mb-6">
                  {program.title}
                </h3>
                
                <ul className="flex flex-col gap-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-dusty-pink/30 p-0.5 rounded-full text-brand-burgundy">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm text-brand-espresso/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-end justify-between border-t border-brand-dusty-pink/20 pt-6">
                  <div>
                    <p className="font-body text-xs text-brand-latte uppercase tracking-wider mb-1 font-semibold">Starts From</p>
                    <p className="font-heading text-2xl font-bold text-brand-espresso">{program.price}</p>
                  </div>
                  <Link href="/contact" className="w-12 h-12 rounded-full bg-brand-burgundy text-white flex items-center justify-center hover:bg-brand-burgundy-dark hover:shadow-btn transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-[3/4] relative rounded-2xl overflow-hidden order-1 md:order-2 shrink-0">
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
