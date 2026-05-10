"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Mic, Globe, Star, HeartHandshake } from "lucide-react";

export default function WhyJoinSection() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Build Real Confidence",
      description: "Overcome nervousness and overthinking with proven mindset techniques and practical exercises."
    },
    {
      icon: MessageCircle,
      title: "Improve Communication Skills",
      description: "Learn to articulate ideas clearly and express yourself with impact in any situation."
    },
    {
      icon: Mic,
      title: "Speaking Practice & Feedback",
      description: "Get hands-on experience and constructive feedback in a safe, judgment-free environment."
    },
    {
      icon: Globe,
      title: "Networking & Opportunities",
      description: "Connect with like-minded peers and gain access to speaking opportunities."
    },
    {
      icon: Star,
      title: "Personal Branding",
      description: "Use your communication skills to build a strong personal brand and stand out."
    },
    {
      icon: HeartHandshake,
      title: "Aesthetic & Meaningful",
      description: "Experience a beautifully curated learning journey that inspires and empowers you."
    }
  ];

  return (
    <section className="bg-brand-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold"
          >
            WHY JOIN SPARK TALKS?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-display font-bold text-brand-espresso"
          >
            More Than Just a Class
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-warm-white rounded-2xl p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy mb-6">
                <reason.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-espresso mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-brand-espresso/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
