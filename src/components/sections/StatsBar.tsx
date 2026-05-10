"use client";

import { motion } from "framer-motion";

import { stats } from "@/lib/data/stats";

export default function StatsBar() {

  return (
    <section className="bg-brand-espresso py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-dusty-pink/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${
                index % 2 !== 0 ? "pt-8 md:pt-0" : index > 1 ? "pt-8 md:pt-0" : ""
              } md:pt-0 md:px-4`}
            >
              <h3 className="font-heading text-4xl font-bold text-brand-warm-white">
                {stat.number}
              </h3>
              <p className="font-body text-sm text-brand-dusty-pink/80 uppercase tracking-wide mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
