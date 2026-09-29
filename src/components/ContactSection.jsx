import React, { useState } from 'react';
import { Copy, Check, MessageSquare, ArrowUpRight, ExternalLink, Mail } from 'lucide-react';
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

const BehanceIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.048 0-5.625-3.08-5.625-5.909 0-3.376 2.05-6.091 5.625-6.091 4.148 0 5.375 3.037 5.375 6.091 0 .285-.015.656-.036.877h-8.082c.075 1.761 1.055 2.651 2.766 2.651 1.309 0 2.215-.536 2.706-1.619h2.372zm-5.228-4.275c-.079-1.284-.799-2.067-2.091-2.067-1.391 0-2.121.848-2.298 2.067h4.389zm-13.498 7.275h-5v-16h5.811c2.81 0 4.689 1.488 4.689 4.152 0 1.583-.757 2.775-1.996 3.447 1.636.568 2.496 2.097 2.496 3.966 0 2.875-2.039 4.435-6 4.435zm-2.5-9.333h2.645c1.477 0 2.484-.52 2.484-1.85 0-1.246-.948-1.817-2.387-1.817h-2.742v3.667zm0 2.247v4.172h2.894c1.554 0 2.678-.584 2.678-2.046 0-1.503-1.09-2.126-2.651-2.126h-2.921z" />
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
      url: 'https://www.linkedin.com/in/jacklyntamaraw/',
      icon: LinkedinIcon,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/tmeara__',
      icon: InstagramIcon,
    },
    {
      id: 'email',
      name: 'Email',
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
                  Direct Advisory Booking Open
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
                  className="bg-white hover:bg-[#F9FAFB] text-[#111827] hover:text-[#FF5E13] border border-[#EAE5DC] hover:border-[#FF5E13]/50 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-xs"
                >
                  <MessageSquare size={16} className="text-emerald-600" />
                  <span>WhatsApp ↗</span>
                </a>
              </div>
            </div>

            {/* Right Verified Networks Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#F9FAFB]/90 rounded-2xl p-5 sm:p-6 border border-[#EAE5DC]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#78716C] mb-4">
                  Verified Professional Networks
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
