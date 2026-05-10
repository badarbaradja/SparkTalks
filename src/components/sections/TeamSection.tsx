"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data/team";

export default function TeamSection() {
  return (
    <section className="bg-brand-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
            THE PEOPLE BEHIND SPARK
          </p>
          <h2 className="font-heading text-display font-bold text-brand-espresso mb-4">
            Meet The Team
          </h2>
          <p className="font-body text-brand-espresso/80 max-w-2xl mx-auto">
            A dedicated group of youth working together to create a supportive space for your communication growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-brand-dusty-pink/20 hover:shadow-card hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-brand-dusty-pink/30 flex items-center justify-center mb-6 shadow-sm">
                <span className="font-heading text-3xl font-bold text-brand-burgundy">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-espresso mb-1">
                {member.name}
              </h3>
              <div className="bg-brand-dusty-pink/20 text-brand-burgundy px-3 py-1 rounded-full font-body text-xs font-semibold mb-4 inline-block">
                {member.role}
              </div>
              <p className="font-body text-sm text-brand-espresso/70 leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-brand-latte font-medium">
            Tim kami terus berkembang. Tertarik bergabung? <a href="/contact" className="text-brand-burgundy hover:underline font-bold">Hubungi kami.</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
