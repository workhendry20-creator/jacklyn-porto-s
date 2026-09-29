import React from 'react';
import { ArrowRight, FileText, TrendingUp, Globe2, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, onResumeClick }) {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[700px] md:h-[700px] pointer-events-none ambient-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EAE5DC] bg-white/75 backdrop-blur-sm shadow-xs mb-6 transition-transform hover:scale-[1.02]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E13] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E13]"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#111827] uppercase">
            Available for new opportunities
          </span>
          <span className="text-[#EAE5DC]">|</span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#FF5E13] tracking-wider uppercase">
            2025 Advisory
          </span>
        </div>

        {/* Headline Typographic Structure */}
        <div className="mb-8">
          <p className="font-italic-serif italic text-2xl sm:text-3xl text-[#615E57] mb-1 font-normal tracking-wide">
            Hello, I am
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#111827] uppercase">
            Jacklyn Tamara
          </h1>
        </div>

        {/* Central Portrait with Halo Glow & Floating Meta Chips */}
        <div className="relative inline-block mx-auto mb-10 max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
          {/* Ambient Glow Ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5E13]/20 via-[#FF6B2B]/15 to-transparent rounded-[2.5rem] blur-xl -z-10 transform -rotate-1" />

          {/* Profile Card Frame */}
          <div className="relative rounded-[2rem] overflow-hidden border border-[#EAE5DC]/80 shadow-[0_20px_50px_rgba(17,24,39,0.08)] bg-white/40 backdrop-blur-sm aspect-[3/4]">
            <img
              src="./tamara_portrait.jpg"
              alt="Tamara Wongso - B2B Account Executive & Strategic Marketer"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-[2rem]" />
          </div>

          {/* Floating Meta Chip - Left (Verified Impact) */}
          <div className="absolute -left-6 sm:-left-12 bottom-12 z-20 bg-white/90 backdrop-blur-md border border-[#EAE5DC] rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5E13]/40">
            <div className="w-8 h-8 rounded-xl bg-[#FF5E13]/10 text-[#FF5E13] flex items-center justify-center shrink-0">
              <TrendingUp size={16} strokeWidth={2.5} />
            </div>
            <div className="text-left pr-1">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-[#615E57]">
                Verified Impact
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#111827] tracking-tight">
                Rp 229M+ Pipeline
              </span>
            </div>
          </div>

          {/* Floating Meta Chip - Right (Cross-Border Specs) */}
          <div className="absolute -right-6 sm:-right-12 bottom-20 z-20 bg-white/90 backdrop-blur-md border border-[#EAE5DC] rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5E13]/40">
            <div className="text-left pl-1 order-1 sm:order-none">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-[#615E57]">
                Cross-Border
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#111827] tracking-tight">
                CN / US / ID Specs
              </span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#111827]/5 text-[#111827] flex items-center justify-center shrink-0">
              <Globe2 size={16} strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Editorial Subhead Description */}
        <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          B2B Account Executive & Strategic Marketer specializing in high-stakes Client Communication,
          Cross-functional Manufacturing Alignment, and Commercial Growth.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onExploreClick}
            className="group bg-[#111827] hover:bg-[#1F2937] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(255,94,19,0.3)] cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onResumeClick}
            className="group bg-white hover:bg-[#F9FAFB] text-[#111827] hover:text-[#FF5E13] border border-[#EAE5DC] hover:border-[#FF5E13]/50 text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText size={16} className="text-[#FF5E13]" />
            <span>Executive Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
