"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Send, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap harus diisi" }),
  age: z.string().min(1, { message: "Umur harus diisi" }).refine((val) => !isNaN(Number(val)), { message: "Umur harus berupa angka" }),
  domisili: z.string().min(2, { message: "Domisili/Kota harus diisi" }),
  instagram: z.string().min(2, { message: "Instagram harus diisi" }),
  tiktok: z.string().optional(),
  pekerjaan: z.string().min(1, { message: "Silakan pilih pekerjaan/status" }),
  goals: z.string().min(10, { message: "Ceritakan sedikit goals kamu (min. 10 karakter)" }),
  program: z.string().min(1, { message: "Silakan pilih program" }),
  expectations: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // 1. Format teks untuk WhatsApp
    const message = `Halo SPARK Talks! Saya ingin mendaftar program:\n\n*Nama Lengkap:* ${data.fullName}\n*Umur:* ${data.age}\n*Domisili/Kota:* ${data.domisili}\n*Instagram:* ${data.instagram}\n*TikTok:* ${data.tiktok || "-"}\n*Pekerjaan/Status:* ${data.pekerjaan}\n*Program Pilihan:* ${data.program}\n\n*Goals:* ${data.goals}\n*Expectations:* ${data.expectations || "-"}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281534141899?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    
    // 2. Jeda sejenak untuk animasi Success Toast lalu Buka WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-brand-base flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-beige pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-4 font-body font-semibold">
              JOIN THE COMMUNITY
            </p>
            <h1 className="font-heading text-display font-bold text-brand-espresso mb-6">
              Let&apos;s Build Confidence Together
            </h1>
            <p className="font-body text-body-lg text-brand-espresso/80 max-w-2xl mx-auto">
              Ready to take the next step? Register for a program or send us a message. We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Sidebar Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-brand-warm-white rounded-3xl p-8 shadow-card border border-brand-dusty-pink/20">
                <h2 className="font-heading text-3xl font-bold text-brand-espresso mb-8">
                  Get in Touch
                </h2>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-brand-espresso/60 mb-1">WhatsApp</p>
                      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="font-heading text-xl font-bold text-brand-espresso hover:text-brand-burgundy transition-colors">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-brand-espresso/60 mb-1">Email</p>
                      <a href="mailto:hello@sparktalks.id" className="font-heading text-xl font-bold text-brand-espresso hover:text-brand-burgundy transition-colors">
                        hello@sparktalks.id
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-brand-espresso/60 mb-1">Instagram</p>
                      <a href="https://instagram.com/sparktalks.id" target="_blank" rel="noreferrer" className="font-heading text-xl font-bold text-brand-espresso hover:text-brand-burgundy transition-colors">
                        @sparktalks.id
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-brand-espresso/60 mb-1">Location</p>
                      <p className="font-heading text-xl font-bold text-brand-espresso">
                        Jabodetabek, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              {isSubmitted ? (
                <div className="bg-brand-dusty-pink/10 rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center border border-brand-dusty-pink/30 shadow-soft min-h-[400px]">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-brand-burgundy text-white rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h2 className="font-heading text-4xl font-bold text-brand-espresso mb-4">
                    Yay! Mengarahkan kamu ke WhatsApp... 🎉
                  </h2>
                  <p className="font-body text-lg text-brand-espresso/80 max-w-md">
                    Mohon tunggu sebentar, formulir kamu sedang diproses. Jangan tutup halaman ini.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                  <h2 className="font-heading text-3xl font-bold text-brand-espresso mb-8">
                    Form Registrasi
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="fullName" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Cth: Salmahita Ataya"
                        className={`w-full px-5 py-3.5 rounded-2xl border ${errors.fullName ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4`}
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Age */}
                      <div>
                        <label htmlFor="age" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Age <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="age"
                          type="number"
                          placeholder="Cth: 20"
                          className={`w-full px-5 py-3.5 rounded-2xl border ${errors.age ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4`}
                          {...register("age")}
                        />
                        {errors.age && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.age.message}
                          </p>
                        )}
                      </div>

                      {/* Domisili */}
                      <div>
                        <label htmlFor="domisili" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Domisili / Kota <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="domisili"
                          type="text"
                          placeholder="Cth: Jakarta Selatan"
                          className={`w-full px-5 py-3.5 rounded-2xl border ${errors.domisili ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4`}
                          {...register("domisili")}
                        />
                        {errors.domisili && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.domisili.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Instagram */}
                      <div>
                        <label htmlFor="instagram" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Instagram <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="instagram"
                          type="text"
                          placeholder="@username"
                          className={`w-full px-5 py-3.5 rounded-2xl border ${errors.instagram ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4`}
                          {...register("instagram")}
                        />
                        {errors.instagram && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.instagram.message}
                          </p>
                        )}
                      </div>

                      {/* TikTok */}
                      <div>
                        <label htmlFor="tiktok" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          TikTok <span className="text-brand-espresso/40 font-normal">(Opsional)</span>
                        </label>
                        <input
                          id="tiktok"
                          type="text"
                          placeholder="@username"
                          className="w-full px-5 py-3.5 rounded-2xl border border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20 bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4"
                          {...register("tiktok")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Pekerjaan / Status */}
                      <div>
                        <label htmlFor="pekerjaan" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Pekerjaan / Status <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="pekerjaan"
                            className={`w-full px-5 py-3.5 rounded-2xl border appearance-none ${errors.pekerjaan ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4 cursor-pointer text-brand-espresso font-body`}
                            {...register("pekerjaan")}
                            defaultValue=""
                          >
                            <option value="" disabled className="text-gray-400">Pilih status</option>
                            <option value="Pelajar SMA">Pelajar SMA</option>
                            <option value="Mahasiswa">Mahasiswa</option>
                            <option value="Fresh Graduate">Fresh Graduate</option>
                            <option value="Content Creator">Content Creator</option>
                            <option value="Young Professional">Young Professional</option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-brand-espresso">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        {errors.pekerjaan && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.pekerjaan.message}
                          </p>
                        )}
                      </div>

                      {/* Program */}
                      <div>
                        <label htmlFor="program" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Program Pilihan <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="program"
                            className={`w-full px-5 py-3.5 rounded-2xl border appearance-none ${errors.program ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4 cursor-pointer text-brand-espresso font-body`}
                            {...register("program")}
                            defaultValue=""
                          >
                            <option value="" disabled className="text-gray-400">Pilih program</option>
                            <option value="Online Class Rp59.000">Online Class — Rp59.000</option>
                            <option value="Offline Intensive Rp299.000">Offline Intensive — Rp299.000</option>
                            <option value="Keduanya">Keduanya</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-brand-espresso">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        {errors.program && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.program.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Goals */}
                    <div>
                      <label htmlFor="goals" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                        Goals joining SPARK Talks <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="goals"
                        rows={3}
                        placeholder="Apa yang ingin kamu capai setelah join SPARK Talks?"
                        className={`w-full px-5 py-3.5 rounded-2xl border ${errors.goals ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20"} bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4 resize-none`}
                        {...register("goals")}
                      ></textarea>
                      {errors.goals && (
                        <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                          {errors.goals.message}
                        </p>
                      )}
                    </div>

                    {/* Expectations */}
                    <div>
                      <label htmlFor="expectations" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                        Expectations <span className="text-brand-espresso/40 font-normal">(Opsional)</span>
                      </label>
                      <textarea
                        id="expectations"
                        rows={3}
                        placeholder="Ada harapan atau pertanyaan khusus?"
                        className="w-full px-5 py-3.5 rounded-2xl border border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20 bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4 resize-none"
                        {...register("expectations")}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-brand-burgundy text-white rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Daftar Sekarang via WhatsApp <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
