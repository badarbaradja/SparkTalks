import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import { footerQuickLinks, footerPrograms, footerSupport } from "@/lib/data/navigation";

const Instagram = ({ size = 24 }: { size?: number }) => (
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

export default function Footer() {
  return (
    <footer className="bg-brand-espresso pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 */}
          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-2xl text-brand-warm-white mb-2 flex items-center gap-3">
              <Image src="/images/logo-spark.jpeg" alt="SPARK Talks Logo" width={36} height={36} className="rounded-full opacity-90" />
              SPARK TALKS
            </h2>
            <p className="font-body text-brand-dusty-pink/80 mb-1">
              The Art of Public Speaking by Salma
            </p>
            <p className="font-heading italic text-brand-dusty-pink text-lg mb-6">
              Where Confidence Begins.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-brand-warm-white mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-body text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-brand-warm-white mb-4">
              Programs
            </h3>
            <ul className="flex flex-col gap-3">
              {footerPrograms.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-body text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-brand-warm-white mb-4">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {footerSupport.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-body text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 5 / Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-dusty-pink/10 mt-12 pt-8 gap-6">
          <div className="flex gap-4">
            <a href="https://instagram.com/sparktalks.id" target="_blank" rel="noreferrer" className="text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:hello@sparktalks.id" className="text-brand-dusty-pink/70 hover:text-brand-dusty-pink transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="font-body text-brand-dusty-pink/40 text-xs text-center md:text-right">
            © {new Date().getFullYear()} SPARK Talks. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
