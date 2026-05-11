"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Send, MapPin, CheckCircle, Copy, Check, Upload, FileText, X } from "lucide-react";
import Link from "next/link";
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
  whatsapp: z.string().min(10, { message: "Nomor WhatsApp harus diisi (min. 10 digit)" }).regex(/^[0-9]+$/, { message: "Nomor WhatsApp harus berupa angka" }),
  instagram: z.string().min(2, { message: "Instagram harus diisi" }),
  tiktok: z.string().optional(),
  pekerjaan: z.string().min(1, { message: "Silakan pilih pekerjaan/status" }),
  goals: z.string().min(10, { message: "Ceritakan sedikit goals kamu (min. 10 karakter)" }),
  program: z.string().min(1, { message: "Silakan pilih program" }),
  expectations: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ACCOUNT_NUMBER = "0060011850405";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    if (!file) { setSelectedFile(null); return; }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError("Format file harus JPG, PNG, atau PDF.");
      setSelectedFile(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError("Ukuran file maksimal 5MB. Silakan kompres atau pilih file lain.");
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = ACCOUNT_NUMBER;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      let paymentProof = null;
      if (selectedFile) {
        const base64Data = await fileToBase64(selectedFile);
        paymentProof = {
          data: base64Data,
          mimeType: selectedFile.type,
          fileName: selectedFile.name,
        };
      }

      const body = {
        nama: data.fullName,
        umur: data.age,
        domisili: data.domisili,
        instagram: data.instagram,
        tiktok: data.tiktok || "",
        pekerjaan: data.pekerjaan,
        whatsapp: data.whatsapp,
        program: data.program,
        goals: data.goals,
        expectations: data.expectations || "",
        paymentProof,
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim pendaftaran');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submit error:', error);
      alert('Maaf, terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi atau hubungi admin via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const inputBaseClass = "w-full px-5 py-3.5 rounded-2xl border bg-brand-warm-white/50 focus:bg-white transition-all outline-none focus:ring-4";
  const inputNormalBorder = "border-brand-dusty-pink/30 focus:border-brand-burgundy focus:ring-brand-dusty-pink/20";
  const inputErrorBorder = "border-red-400 focus:border-red-500 focus:ring-red-200";

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
                      <a href="https://wa.me/6281534141899" target="_blank" rel="noreferrer" className="font-heading text-xl font-bold text-brand-espresso hover:text-brand-burgundy transition-colors">
                        +62 815 3414 1899
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
                <div className="bg-brand-warm-white rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center border border-brand-dusty-pink/30 shadow-soft min-h-[400px]">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-brand-burgundy text-white rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-espresso mb-4">
                    Pendaftaran Berhasil! 🎉
                  </h2>
                  <p className="font-body text-lg text-brand-espresso/80 max-w-md mb-2">
                    Data kamu sudah kami terima. Tim SPARK Talks akan menghubungi kamu via WhatsApp dalam 1x24 jam.
                  </p>
                  <p className="font-body text-sm text-brand-espresso/60 mb-8">
                    Pastikan WhatsApp kamu aktif ya! ✨
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-burgundy text-white rounded-full px-8 py-3.5 font-body font-bold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-300 text-center"
                    >
                      Join Community 💬
                    </a>
                    <Link
                      href="/"
                      className="border-2 border-brand-burgundy text-brand-burgundy rounded-full px-8 py-3.5 font-body font-bold text-sm hover:bg-brand-burgundy hover:text-white transition-all duration-300 text-center"
                    >
                      Kembali ke Beranda
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Form Card */}
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                    <h2 className="font-heading text-3xl font-bold text-brand-espresso mb-8">
                      Form Registrasi
                    </h2>
                    
                    <form id="registration-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Nama Lengkap */}
                      <div>
                        <label htmlFor="fullName" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Cth: Salmahita Ataya"
                          className={`${inputBaseClass} ${errors.fullName ? inputErrorBorder : inputNormalBorder}`}
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
                            className={`${inputBaseClass} ${errors.age ? inputErrorBorder : inputNormalBorder}`}
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
                            className={`${inputBaseClass} ${errors.domisili ? inputErrorBorder : inputNormalBorder}`}
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

                      {/* Nomor WhatsApp — placed after Domisili */}
                      <div>
                        <label htmlFor="whatsapp" className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Nomor WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="whatsapp"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          className={`${inputBaseClass} ${errors.whatsapp ? inputErrorBorder : inputNormalBorder}`}
                          {...register("whatsapp")}
                        />
                        {errors.whatsapp && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {errors.whatsapp.message}
                          </p>
                        )}
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
                            className={`${inputBaseClass} ${errors.instagram ? inputErrorBorder : inputNormalBorder}`}
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
                            className={`${inputBaseClass} ${inputNormalBorder}`}
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
                              className={`${inputBaseClass} appearance-none cursor-pointer text-brand-espresso font-body ${errors.pekerjaan ? inputErrorBorder : inputNormalBorder}`}
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
                              className={`${inputBaseClass} appearance-none cursor-pointer text-brand-espresso font-body ${errors.program ? inputErrorBorder : inputNormalBorder}`}
                              {...register("program")}
                              defaultValue=""
                            >
                              <option value="" disabled className="text-gray-400">Pilih program</option>
                              <option value="Online Class Rp59.000">Online Class — Rp59.000</option>
                              <option value="Offline Intensive Rp299.000">Offline Intensive — Rp299.000</option>
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
                          className={`${inputBaseClass} resize-none ${errors.goals ? inputErrorBorder : inputNormalBorder}`}
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
                          className={`${inputBaseClass} ${inputNormalBorder} resize-none`}
                          {...register("expectations")}
                        ></textarea>
                      </div>

                      {/* Bukti Pembayaran Upload */}
                      <div>
                        <label className="block font-body text-sm font-semibold text-brand-espresso mb-2">
                          Bukti Pembayaran <span className="text-brand-espresso/40 font-normal">(Opsional)</span>
                        </label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className={`w-full px-5 py-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all ${
                            fileError
                              ? "border-red-400 bg-red-50/30"
                              : selectedFile
                              ? "border-brand-burgundy/40 bg-brand-dusty-pink/5"
                              : "border-brand-dusty-pink/30 bg-brand-warm-white/50 hover:border-brand-burgundy/30 hover:bg-brand-dusty-pink/5"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          {selectedFile ? (
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-brand-dusty-pink/20 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                                <FileText size={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-body text-sm font-medium text-brand-espresso truncate">{selectedFile.name}</p>
                                <p className="font-body text-xs text-brand-espresso/50">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setSelectedFile(null); if(fileInputRef.current) fileInputRef.current.value = ""; }}
                                className="text-brand-espresso/40 hover:text-red-500 transition-colors p-1"
                              >
                                <X size={18} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2 text-center">
                              <Upload size={24} className="text-brand-dusty-pink" />
                              <p className="font-body text-sm text-brand-espresso/60">Klik untuk upload bukti transfer</p>
                              <p className="font-body text-xs text-brand-espresso/40">JPG, PNG, atau PDF (maks. 5MB)</p>
                            </div>
                          )}
                        </div>
                        {fileError && (
                          <p className="font-body text-sm text-red-500 mt-2 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                            {fileError}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-brand-burgundy text-white rounded-full px-10 py-4 font-body font-bold text-sm hover:bg-brand-burgundy-dark hover:shadow-btn transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Mengirim data... ⏳
                            </>
                          ) : (
                            <>
                              Daftar Sekarang <Send size={16} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Payment Info Card — BELOW the form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-brand-warm-white border border-brand-dusty-pink/30 rounded-2xl p-6 md:p-8 shadow-soft"
                  >
                    <h3 className="font-heading text-2xl font-bold text-brand-espresso mb-4 flex items-center gap-2">
                      💳 Informasi Pembayaran
                    </h3>
                    
                    <div className="space-y-4 font-body text-brand-espresso/85">
                      <p className="text-sm leading-relaxed">
                        Setelah mengisi form, lakukan pembayaran sesuai program yang dipilih:
                      </p>
                      
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-burgundy flex-shrink-0"></span>
                          <span><strong className="text-brand-espresso">Online Class:</strong> Rp59.000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-burgundy flex-shrink-0"></span>
                          <span><strong className="text-brand-espresso">Offline Intensive:</strong> Rp299.000</span>
                        </li>
                      </ul>

                      <div className="border-t border-brand-dusty-pink/20 pt-4 mt-4">
                        <p className="text-sm font-semibold text-brand-espresso mb-2">Transfer ke:</p>
                        <div className="bg-brand-beige/60 rounded-xl p-4 space-y-1.5">
                          <p className="text-sm font-bold text-brand-espresso">Bank Mandiri</p>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-heading font-bold text-brand-burgundy tracking-wider">
                              {ACCOUNT_NUMBER}
                            </p>
                            <button
                              type="button"
                              onClick={handleCopyAccount}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border border-brand-dusty-pink/40 hover:border-brand-burgundy/50 hover:bg-brand-dusty-pink/10 text-brand-burgundy"
                              aria-label="Copy account number"
                            >
                              {copied ? (
                                <>
                                  <Check size={13} strokeWidth={3} />
                                  Tersalin!
                                </>
                              ) : (
                                <>
                                  <Copy size={13} />
                                  Salin
                                </>
                              )}
                            </button>
                          </div>
                          <p className="text-sm text-brand-espresso/70">a/n Salmahita Ataya Pradilla</p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-brand-espresso/70 pt-2">
                        Upload bukti pembayaran pada form di atas, atau kirim langsung via WhatsApp ke nomor yang tertera.
                      </p>
                    </div>
                  </motion.div>
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
