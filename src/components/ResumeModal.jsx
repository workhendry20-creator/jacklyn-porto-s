import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-[2rem] border border-[#EAE5DC] shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden relative my-8">
        {/* Modal Top Bar */}
        <div className="bg-white px-6 py-4 border-b border-[#EAE5DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E13]"></span>
            <span className="font-serif font-bold text-sm text-[#111827]">
              Executive ATS Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-[#615E57] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-xl transition-colors cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer size={18} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#615E57] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-xl transition-colors cursor-pointer"
              title="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto space-y-6 text-[#141B2B]">
          {/* Header */}
          <div className="border-b border-[#EAE5DC] pb-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#111827] uppercase tracking-tight">
              Jacklyn Tamara Wongso
            </h2>
            <p className="text-sm font-semibold text-[#FF5E13] mt-1">
              B2B Account Executive & Strategic Marketer • Cross-Border Coordinator
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#615E57] mt-3">
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-[#FF5E13]" /> work.tmraa@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={12} className="text-[#FF5E13]" /> +62 812-5072-6062
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#FF5E13]" /> Bandung / Jakarta / Global Remote
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 border-b border-[#EAE5DC] pb-1">
              Executive Profile
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Results-driven B2B commercial leader with a verified track record managing <strong>Rp 229M+</strong> revenue pipeline. Adept at bridging technical manufacturing specifications across Chinese paper mills, Indonesian operational plants, and multinational enterprise procurement directors. Trilingual communication skills in Mandarin Chinese, English, and Indonesian.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 border-b border-[#EAE5DC] pb-1">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Enterprise B2B Sales & GTM',
                'Mandarin-Indonesian Technical Specs',
                'Export Documentation & Compliance',
                'Inbound Pipeline Architecture',
                'HubSpot & SAP ERP',
                'High-Stake Stakeholder Relations',
                'Youth Segment Campaign Leadership',
                'Public Speaking & Moderation',
              ].map((c) => (
                <span key={c} className="text-[11px] bg-white px-2.5 py-1 rounded-lg border border-[#EAE5DC] text-[#374151]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#EAE5DC] pb-1">
              Professional Experience
            </h3>

            {/* Role 1 */}
            <div>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h4 className="font-bold text-sm text-[#111827]">
                  Account Executive - Marketing and Sales (Local and Export) — PT. Alkindo Naratama Tbk
                </h4>
                <span className="text-xs text-[#78716C]">July 2025 – Present | Padalarang, West Java</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#4B5563] mt-2 space-y-1.5 leading-relaxed">
                <li>Managed high-volume client communications across international and local customers, handling hundreds of inquiries and supporting sales conversion, customer relationships, and repeat business; contributed to <strong>Rp229.65M</strong> in revenue from initial purchase orders through repeat orders during the paid advertising period.</li>
                <li>Bridged Chinese-Indonesian business communication by interpreting customer specifications, product requirements, and visual references into clear Indonesian information for internal sales and production coordination.</li>
                <li>Developed and executed social media content strategies to strengthen brand visibility and attract potential B2B clients.</li>
                <li>Supported new market development and existing account growth through export sales activities, including preparing offers, coordinating with internal teams, and identifying opportunities for additional product offerings and repeat orders.</li>
                <li>Coordinated across marketing, sales, production, and external partners to address customer requirements and resolve order-related operational issues.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h4 className="font-bold text-sm text-[#111827]">
                  Marketing Community Manager Intern — Gojek Indonesia
                </h4>
                <span className="text-xs text-[#78716C]">Nov 2024 – Jan 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#4B5563] mt-2 space-y-1.5 leading-relaxed">
                <li>Spearheaded Gojek SCH program across <strong>25 high schools</strong> in Greater Bandung, reaching over 12,000+ students with an 88% coupon-redemption conversion rate.</li>
                <li>Recruited and trained 75 student ambassadors, establishing sustainable campus distribution loops.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h4 className="font-bold text-sm text-[#111827]">
                  Founder & Initiator — Hareudang Bandung
                </h4>
                <span className="text-xs text-[#78716C]">Oct 2023 – Jan 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#4B5563] mt-2 space-y-1.5 leading-relaxed">
                <li>Built a youth cultural movement from zero to 15,000+ active followers, securing brand sponsorships with regional lifestyle and beverage brands.</li>
              </ul>
            </div>
          </div>

          {/* Education & Language */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#EAE5DC] pb-1 mb-2">
                Education
              </h3>
              <div className="text-xs">
                <div className="font-bold text-[#111827]">Universitas Katolik Parahyangan (UNPAR)</div>
                <div className="text-[#615E57]">International Relations / Strategic Business</div>
                <div className="text-[11px] text-[#78716C]">Delegate, United Nations Academic Impact (UNAI)</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#EAE5DC] pb-1 mb-2">
                Languages
              </h3>
              <div className="text-xs space-y-1">
                <div><strong>Indonesian:</strong> Native proficiency</div>
                <div><strong>English:</strong> Professional Working Proficiency</div>
                <div><strong>Mandarin Chinese:</strong> Beginner Technical</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-white px-6 py-4 border-t border-[#EAE5DC] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#615E57]">
            Official Verified CV Document (2025 Edition)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
