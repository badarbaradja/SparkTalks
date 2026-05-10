"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "md:col-span-8", rowSpan: "md:row-span-2", aspect: "aspect-[16/9] md:aspect-auto" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", colSpan: "md:col-span-4", rowSpan: "md:row-span-1", aspect: "aspect-[4/3] md:aspect-square" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", colSpan: "md:col-span-4", rowSpan: "md:row-span-1", aspect: "aspect-[4/3] md:aspect-square" },
  ];

  return (
    <section className="bg-brand-beige py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-latte mb-3 font-body font-semibold">
              MOMENTS THAT MATTER
            </p>
            <h2 className="font-heading text-display font-bold text-brand-espresso">
              Gallery
            </h2>
          </div>
          <Link href="/gallery" className="text-brand-burgundy font-body font-medium flex items-center gap-2 hover:gap-3 transition-all hover:underline">
            View Gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group shadow-soft ${photo.colSpan} ${photo.rowSpan} ${photo.aspect} w-full h-full`}
            >
              <Image 
                src={photo.src} 
                alt={`Gallery image ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/20 transition-colors duration-300" />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3] w-full h-full bg-brand-dusty-pink/90 flex items-center justify-center cursor-pointer hover:bg-brand-burgundy transition-colors"
          >
             <p className="font-heading text-2xl text-white font-bold">+50 More</p>
          </motion.div>

          {/* Overlay for Desktop */}
          <Link href="/gallery" className="hidden md:flex absolute -bottom-8 right-10 bg-brand-dusty-pink/90 text-white rounded-2xl p-6 shadow-float items-center justify-center cursor-pointer hover:bg-brand-burgundy transition-colors z-10 w-48 h-32 backdrop-blur-sm">
            <p className="font-heading text-2xl font-bold">+50 More<br/>Moments</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
