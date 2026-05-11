"use client";

import { motion } from "framer-motion";
import { Mic, Users, Star, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Mic,
    title: "Real Speaking Practice",
    subtitle: "Bukan cuma teori, langsung praktek",
  },
  {
    icon: Users,
    title: "Supportive Community",
    subtitle: "Lingkungan yang aman untuk berkembang",
  },
  {
    icon: Star,
    title: "Expert Guest Speakers",
    subtitle: "Belajar langsung dari praktisi",
  },
  {
    icon: GraduationCap,
    title: "Certificate & Showcase",
    subtitle: "Bukti nyata perjalanan kamu",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-espresso py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-brand-dusty-pink/20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center md:px-6"
            >
              <pillar.icon
                size={28}
                className="text-brand-dusty-pink mb-3"
                strokeWidth={1.8}
              />
              <h3 className="font-heading text-lg font-bold text-brand-warm-white mb-1.5 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-brand-dusty-pink/70 leading-relaxed max-w-[200px]">
                {pillar.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
