import React from 'react';

export default function Footer({ onNavigate }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#EAE5DC] pt-14 pb-12 relative z-10 text-xs text-[#615E57]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#EAE5DC]">
          {/* Col 1: Brand & Executive Summary (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#111827] text-white flex items-center justify-center font-serif font-bold text-xs tracking-tighter">
                TW
              </div>
              <span className="font-serif font-bold text-base text-[#111827]">
                Tamara Wongso
              </span>
            </div>
            <p className="text-xs text-[#615E57] max-w-sm leading-relaxed">
              B2B Account Executive & Strategic Marketing Director specializing in multi-million enterprise conversions, high-cadence GTM playbooks, and modern brand equity.
            </p>
          </div>

          {/* Col 2: Directory Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              Directory
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#FF5E13] transition-colors cursor-pointer"
                >
                  About Narrative
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('cases')}
                  className="hover:text-[#FF5E13] transition-colors cursor-pointer"
                >
                  Executive Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experience')}
                  className="hover:text-[#FF5E13] transition-colors cursor-pointer"
                >
                  Career Track Record
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('speaking')}
                  className="hover:text-[#FF5E13] transition-colors cursor-pointer"
                >
                  Keynotes & Panels
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Inquiries & Advisory (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#111827] mb-2">
              Inquiries
            </div>
            <p className="font-medium text-[#111827]">
              work.tmraa@gmail.com
            </p>
            <p className="text-[#615E57]">
              San Francisco, CA & Global/Remote
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E1E8FD] text-[#293040] text-[10px] font-semibold mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E13]"></span>
              <span>Q3 Strategic Advisory Open</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716C]">
          <div>
            © {new Date().getFullYear()} Tamara Wongso. Editorial portfolio & executive advisory.
          </div>
          <div className="flex items-center gap-4 font-semibold tracking-wider text-[10px] uppercase">
            <a
              href="https://www.linkedin.com/in/jacklyntamaraw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5E13] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="#about"
              className="hover:text-[#FF5E13] transition-colors"
            >
              Substack
            </a>
            <span>•</span>
            <a
              href="#contact"
              className="hover:text-[#FF5E13] transition-colors"
            >
              Briefing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
