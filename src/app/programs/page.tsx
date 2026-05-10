"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar, Users, Mic, Award, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { programs } from "@/lib/data/programs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const curriculum = [
  { week: "Week 1", title: "Confidence & Basic Speaking", icon: Users, desc: "Overcoming nervousness, self introduction, confidence building, speaking fundamentals." },
  { week: "Week 2", title: "Communication & Delivery", icon: Mic, desc: "Articulation, body language, eye contact, storytelling, speaking delivery." },
  { week: "Week 3", title: "Real-Life Public Speaking", icon: Calendar, desc: "Presentation practice, MC & moderator basics, networking communication, impromptu speaking." },
  { week: "Week 4", title: "Final Showcase & Graduation", icon: Award, desc: "Final speaking performance, mini showcase, reflection, networking." }
];

const faqs = [
  { q: "Siapa saja yang bisa ikut program ini?", a: "Program ini terbuka untuk pelajar (SMA/Mahasiswa), fresh graduate, maupun profesional muda yang ingin membangun rasa percaya diri dan skill komunikasi." },
  { q: "Apakah kelas online akan direkam?", a: "Ya, setiap sesi kelas online akan direkam dan materinya bisa diakses kembali oleh peserta melalui grup komunitas." },
  { q: "Bagaimana sistem kelas offline?", a: "Kelas offline diadakan 1x seminggu selama 1 bulan di lokasi area Jabodetabek. Peserta akan lebih banyak melakukan simulasi dan praktik langsung." },
  { q: "Apakah akan dapat sertifikat?", a: "Tentu! Semua peserta baik kelas online maupun offline akan mendapatkan e-certificate, dan khusus kelas offline juga mendapatkan sertifikat cetak saat graduation." },
  { q: "Apakah ada sesi konsultasi pribadi?", a: "Sesi mentoring dan feedback diberikan selama sesi berjalan. Untuk konsultasi personal yang lebih mendalam, kamu bisa menghubungi admin kami untuk mengatur Private Class." }
];

export default function ProgramsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="bg-brand-beige pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-4 font-body font-semibold">
              OUR PROGRAMS
            </p>
            <h1 className="font-heading text-display font-bold text-brand-espresso mb-6">
              Find the Program That&apos;s Right for You
            </h1>
            <p className="font-body text-body-lg text-brand-espresso/80 max-w-2xl mx-auto">
              Whether you want to master the basics from the comfort of your home or dive deep into a fully immersive offline experience, we have a path designed for your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Program Detail Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-12 md:gap-20">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
                    <Image 
                      src={program.image} 
                      alt={program.title} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <div className="bg-brand-dusty-pink/20 text-brand-burgundy px-4 py-1.5 rounded-full font-body text-xs font-bold mb-4">
                    {program.type}
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-espresso mb-6">
                    {program.title}
                  </h2>
                  <ul className="flex flex-col gap-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 text-brand-burgundy bg-brand-dusty-pink/20 rounded-full p-1">
                          <Check size={16} strokeWidth={3} />
                        </div>
                        <span className="font-body text-brand-espresso/90 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="font-body text-sm text-brand-espresso/70 mb-1">Investment starting from</p>
                    <p className="font-heading text-3xl font-bold text-brand-burgundy mb-6">{program.price}</p>
                    <Link href="/contact" className="bg-brand-burgundy text-white rounded-full px-8 py-3.5 font-body font-semibold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-300 inline-block">
                      Register Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Offline Curriculum Section */}
      <section className="bg-brand-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
              OFFLINE INTENSIVE ONLY
            </p>
            <h2 className="font-heading text-display font-bold text-brand-espresso">
              1-Month Curriculum
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft border border-brand-dusty-pink/20 hover:-translate-y-2 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-brand-beige flex items-center justify-center text-brand-burgundy mb-6">
                  <item.icon size={24} />
                </div>
                <div className="bg-brand-dusty-pink/20 text-brand-burgundy px-3 py-1 rounded-full font-body text-[10px] font-bold inline-block mb-3">
                  {item.week.toUpperCase()}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-espresso mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-brand-espresso/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Comparison Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-display font-bold text-brand-espresso mb-4">
              Pricing Options
            </h2>
            <p className="font-body text-brand-espresso/80 max-w-2xl mx-auto">
              Choose the timeline and format that works best for you. Early birds always get the best value!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Class Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-warm-white rounded-3xl p-8 md:p-10 shadow-soft border border-brand-dusty-pink/30 flex flex-col"
            >
              <h3 className="font-heading text-2xl font-bold text-brand-espresso mb-6">Online Class</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-brand-dusty-pink/20">
                  <span className="font-body font-medium text-brand-espresso/80">Early Bird / Founding</span>
                  <span className="font-heading text-2xl font-bold text-brand-burgundy">Rp59.000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-brand-dusty-pink/20">
                  <span className="font-body font-medium text-brand-espresso/80">Normal Price</span>
                  <span className="font-heading text-xl font-bold text-brand-espresso">Rp99.000</span>
                </div>
              </div>
              <p className="font-body text-sm text-brand-espresso/60 mt-auto">
                Includes 2 live sessions, e-certificate, and community access.
              </p>
            </motion.div>

            {/* Offline Intensive Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-espresso rounded-3xl p-8 md:p-10 shadow-card flex flex-col text-brand-warm-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-brand-sand-gold text-brand-espresso font-bold text-xs py-1 px-4 rounded-bl-xl uppercase tracking-wider">
                Best Value
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">Offline Intensive</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-body font-medium text-white/80">Founding Batch</span>
                  <span className="font-heading text-2xl font-bold text-brand-sand-gold">Rp299.000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-body font-medium text-white/80">Normal Price</span>
                  <span className="font-heading text-xl font-bold text-white/60 line-through decoration-brand-dusty-pink/50">Rp349.000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-body font-medium text-white/80">Future Price</span>
                  <span className="font-heading text-xl font-bold text-white">Rp499.000+</span>
                </div>
              </div>
              <p className="font-body text-sm text-white/60 mt-auto">
                Includes 4 offline sessions, mentoring, final showcase, and printed certificate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="bg-brand-beige py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-12 h-12 bg-brand-dusty-pink/20 rounded-full flex items-center justify-center text-brand-burgundy mx-auto mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className="font-heading text-display font-bold text-brand-espresso">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft overflow-hidden border border-brand-dusty-pink/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-body font-semibold text-brand-espresso pr-4">{faq.q}</span>
                  <span className="text-brand-burgundy flex-shrink-0">
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0 text-brand-espresso/70 font-body text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-brand-burgundy py-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dusty-pink/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-display font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-body text-brand-warm-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Don&apos;t let the fear of public speaking hold you back. Join SPARK Talks and discover the power of your own voice today.
            </p>
            <Link 
              href="/contact" 
              className="bg-brand-warm-white text-brand-burgundy rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-brand-beige hover:shadow-float transition-all duration-300 inline-flex items-center gap-2"
            >
              Register Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
