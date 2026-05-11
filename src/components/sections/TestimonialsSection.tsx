"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-espresso py-20 md:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-xs uppercase tracking-widest text-brand-dusty-pink/60 mb-4 font-body font-semibold">
            BE THE FIRST
          </p>
          <h2 className="font-heading text-display font-bold text-brand-warm-white mb-6">
            Jadilah Yang Pertama
          </h2>
          <p className="font-body text-body-lg text-brand-dusty-pink/80 leading-relaxed max-w-xl mb-10">
            Batch perdana SPARK Talks akan segera dibuka.
            Daftarkan dirimu sekarang dan jadilah bagian dari komunitas
            speaker pertama kami ✨
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-burgundy text-white rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-300 mb-5"
          >
            Daftar Batch Pertama <ArrowRight size={16} />
          </Link>

          <p className="font-body text-sm text-brand-dusty-pink/50">
            Peserta pertama akan mendapat Founding Batch Price 🎉
          </p>
        </motion.div>
      </div>
    </section>
  );
}
