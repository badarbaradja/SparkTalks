"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Sparkles, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CommunityPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    {
      icon: Users,
      title: "Exclusive Networking",
      desc: "Connect with like-minded youth, professionals, and guest speakers who share your passion for communication."
    },
    {
      icon: MessageCircle,
      title: "Safe Practice Space",
      desc: "A judgment-free zone where you can practice speaking, share ideas, and get constructive feedback."
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      desc: "Get access to exclusive sharing sessions, materials, and internal events only for community members."
    }
  ];

  const steps = [
    { num: "01", title: "Choose Your Path", desc: "Register for either the Online Class or Offline Intensive program." },
    { num: "02", title: "Complete Registration", desc: "Finish your payment and confirm via our official WhatsApp admin." },
    { num: "03", title: "Get Invited", desc: "Receive your exclusive invite link to The Speaking Room WhatsApp Group!" }
  ];

  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-burgundy pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dusty-pink/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-brand-dusty-pink mb-4 font-body font-semibold">
              OUR COMMUNITY
            </p>
            <h1 className="font-heading text-display font-bold text-white mb-6">
              The Speaking Room
            </h1>
            <p className="font-body text-body-lg text-brand-warm-white/80 max-w-2xl mx-auto mb-10">
              Surround yourself with people who want to see you succeed. Join our exclusive WhatsApp community for ongoing support and networking.
            </p>
            <a 
              href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-warm-white text-brand-burgundy rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-brand-beige hover:shadow-float transition-all duration-300 inline-flex items-center gap-2"
            >
              Join The Community <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-card"
            >
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="The Speaking Room Community" 
                fill 
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-espresso mb-6">
                More Than Just a Chat Group
              </h2>
              <p className="font-body text-lg text-brand-espresso/80 mb-6 leading-relaxed">
                The Speaking Room is the heart of SPARK Talks. It is an exclusive ecosystem where past and present participants gather to share opportunities, ask questions, and practice their communication skills.
              </p>
              <p className="font-body text-lg text-brand-espresso/80 mb-8 leading-relaxed">
                We believe that public speaking cannot be mastered in a day. It requires consistent practice and a supportive environment — and that is exactly what we provide here.
              </p>
              <div className="bg-white/60 backdrop-blur border border-brand-dusty-pink/30 p-6 rounded-2xl flex gap-4 items-start shadow-soft">
                <CheckCircle className="text-brand-burgundy shrink-0 mt-1" size={24} />
                <p className="font-body font-medium text-brand-espresso italic">
                  &quot;Satu-satunya cara untuk mengatasi rasa takut berbicara adalah dengan terus berbicara di lingkungan yang tepat.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-display font-bold text-brand-espresso">
              Why You Should Join
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-warm-white p-10 rounded-3xl border border-brand-dusty-pink/20 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy mb-8">
                  <item.icon size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-espresso mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-brand-espresso/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 md:py-28 bg-brand-espresso text-brand-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-display font-bold text-brand-warm-white mb-4">
              How to Get Access
            </h2>
            <p className="font-body text-brand-dusty-pink/80 max-w-2xl mx-auto">
              The Speaking Room is exclusively available for SPARK Talks program participants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-brand-dusty-pink/20"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-burgundy border-8 border-brand-espresso flex items-center justify-center font-heading text-3xl font-bold text-white mb-8 shadow-card">
                  {step.num}
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-warm-white mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-brand-dusty-pink/80 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <a 
              href="/programs" 
              className="bg-brand-sand-gold text-brand-espresso rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-white hover:shadow-float transition-all duration-300 inline-flex items-center gap-2"
            >
              View Programs
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
