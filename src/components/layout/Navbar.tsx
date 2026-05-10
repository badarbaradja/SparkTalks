"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/lib/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 h-16 md:h-20 ${
        isScrolled
          ? "bg-brand-warm-white/95 backdrop-blur-md shadow-soft py-0"
          : "bg-brand-beige/80 backdrop-blur py-2"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-brand-espresso flex items-center gap-3">
          <Image src="/images/logo-spark.jpeg" alt="SPARK Talks Logo" width={36} height={36} className="rounded-full" />
          SPARK TALKS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-body font-medium text-brand-espresso hover:text-brand-burgundy transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg"
            target="_blank"
            rel="noreferrer"
            className="bg-brand-burgundy text-white rounded-full px-6 py-2.5 font-body font-medium hover:bg-brand-burgundy-dark hover:shadow-btn transition-all"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-espresso"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-warm-white shadow-card py-6 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-body font-medium text-brand-espresso text-lg py-2 border-b border-brand-dusty-pink/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://chat.whatsapp.com/KkvuVypJ48fKD0c6M57acg"
            target="_blank"
            rel="noreferrer"
            className="bg-brand-burgundy text-white rounded-full px-6 py-3 font-body font-medium text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
