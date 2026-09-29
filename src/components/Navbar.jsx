import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onContactClick, onResumeClick }) {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'cases', 'experience', 'speaking', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'experience', label: 'Experience' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#EAE5DC]/50 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111827] text-white flex items-center justify-center font-serif font-bold text-sm tracking-tighter group-hover:bg-[#FF5E13] transition-colors">
            TW
          </div>
          <span className="font-serif font-bold text-lg text-[#111827] tracking-tight group-hover:text-[#FF5E13] transition-colors">
            Tamara Wongso
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center bg-[#F1EDE4]/60 p-1 rounded-full border border-[#EAE5DC]/80 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5E13] text-white shadow-xs'
                    : 'text-[#615E57] hover:text-[#111827] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Mini Avatar */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="bg-[#111827] text-white hover:bg-[#1F2937] active:scale-95 transition-all text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Get in Touch</span>
          </button>

          <button
            onClick={() => scrollTo('about')}
            title="Tamara Wongso profile"
            className="w-8 h-8 rounded-full border border-[#EAE5DC] overflow-hidden hover:ring-2 hover:ring-[#FF5E13]/50 transition-all cursor-pointer focus:outline-none"
          >
            <img
              src="./tamara_portrait.jpg"
              alt="Tamara Wongso"
              className="w-full h-full object-cover object-top"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="bg-[#111827] text-white text-[11px] font-medium px-3 py-1.5 rounded-full"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#111827] hover:text-[#FF5E13] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#EAE5DC] px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#FF5E13] text-white'
                    : 'text-[#141B2B] hover:bg-[#EAE5DC]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#EAE5DC] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full text-center py-2 text-xs font-semibold border border-[#EAE5DC] rounded-full text-[#111827] hover:border-[#FF5E13]"
              >
                Executive Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
