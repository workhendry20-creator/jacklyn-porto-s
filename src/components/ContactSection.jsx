import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, ExternalLink, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function ContactSection({ onEmailCopied }) {
  const [copied, setCopied] = useState(false);
  const email = 'work.tmraa@gmail.com';
  const whatsappUrl = 'https://wa.me/6281250726062?text=Hi%20Tamara,%20I%20reviewed%20your%20executive%20portfolio%20and%20would%20love%20to%20discuss%20a%20commercial%20opportunity.';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onEmailCopied) {
      onEmailCopied(email);
    }

    // Trigger subtle confetti burst
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF5E13', '#FF6B2B', '#111827', '#EAE5DC'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      setCopied(false);
    }, 2800);
  };

  const networks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'linkedin.com/in/jacklyntamaraw',
      url: 'https://www.linkedin.com/in/jacklyntamaraw/',
      icon: LinkedinIcon,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@tmeara__',
      url: 'https://instagram.com/tmeara__',
      icon: InstagramIcon,
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'work.tmraa@gmail.com',
      url: 'mailto:work.tmraa@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 md:p-14 relative overflow-hidden transition-all duration-300 hover:border-[#FF5E13]/30">
          {/* Subtle background ambient corner glow */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#FF5E13]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Top Status Indicator */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF5E13] animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5E13]">
                  Contact
                </span>
              </div>

              {/* Main Title */}
              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#111827] uppercase tracking-tight mb-4">
                Let&apos;s Work Together
              </h2>

              {/* Subtitle / Value proposition */}
              <p className="text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed max-w-lg mb-8">
                Available for executive B2B revenue leadership, strategic marketing consultancy, and international cross-border advisory.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* One-Click Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="bg-[#111827] hover:bg-[#1F2937] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(255,94,19,0.25)] active:scale-95 cursor-pointer"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="text-[#FF5E13]" />
                      <span className="font-mono tracking-tight">{email}</span>
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#F9FAFB] text-[#111827] hover:text-[#25D366] border border-[#EAE5DC] hover:border-[#25D366]/40 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-xs group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span>WhatsApp ↗</span>
                </a>
              </div>
            </div>

            {/* Right Verified Networks Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#F9FAFB]/90 rounded-2xl p-5 sm:p-6 border border-[#EAE5DC]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#78716C] mb-4">
                  Let's Connect
                </div>

                <div className="space-y-3">
                  {networks.map((net) => {
                    const Icon = net.icon;
                    return (
                      <a
                        key={net.id}
                        href={net.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white hover:bg-[#F9FAFB] p-3 sm:p-3.5 rounded-xl border border-[#EAE5DC] hover:border-[#FF5E13]/40 flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] group-hover:bg-[#FFECE5] text-[#111827] group-hover:text-[#FF5E13] flex items-center justify-center transition-colors">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#111827] group-hover:text-[#FF5E13] transition-colors">
                              {net.name}
                            </div>
                            <div className="text-[11px] text-[#615E57]">
                              {net.handle}
                            </div>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-[#F9FAFB] flex items-center justify-center text-[#78716C] group-hover:text-[#FF5E13] group-hover:translate-x-1 transition-all">
                          <ArrowUpRight size={14} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
