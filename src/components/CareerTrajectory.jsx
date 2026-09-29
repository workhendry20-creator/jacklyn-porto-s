import React, { useState } from 'react';
import { Briefcase, ChevronRight, ChevronDown, Award, Calendar, MapPin } from 'lucide-react';

export default function CareerTrajectory() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 'alkindo',
      role: 'Marketing Export',
      company: 'PT. Alkindo Naratama Tbk, West Java',
      period: 'July 2025 – Present',
      desc: 'Managed high-volume B2B client communications across local and international customers, driving revenue exposure, supporting conversion and repeat orders, and bridging Chinese-Indonesian business communication.',
      skills: [
        { label: 'B2B Marketing & Sales', featured: false },
        { label: 'Client Handling', featured: false },
        { label: 'Export Sales Support', featured: false },
        { label: 'Content Strategy', featured: false },
      ],
      details: [
        'Managed high-volume client communications across international and local customers, handling hundreds of inquiries and supporting sales conversion, customer relationships, and repeat business; contributed to Rp229.65M in revenue from initial purchase orders through repeat orders during the paid advertising period.',
        'Bridged Chinese-Indonesian business communication by interpreting customer specifications, product requirements, and visual references into clear Indonesian information for internal sales and production coordination.',
        'Developed and executed social media content strategies, including content ideation, planning, and coordination, to strengthen brand visibility and attract potential B2B clients.',
        'Supported new market development and existing account growth through export sales activities, including responding to client needs, preparing offers, coordinating with internal teams, and identifying opportunities for additional product offerings and repeat orders.',
        'Coordinated across marketing, sales, production, and external partners to address customer requirements and resolve order-related operational issues.',
      ],
    },
    {
      id: 'gojek',
      role: 'Marketing Community Manager Intern',
      company: 'Gojek Bandung',
      period: '2024 — 2025',
      desc: 'Directed regional youth segment activations across 25+ academic institutions. Coordinated cross-functional marketing collateral, negotiated sponsor slots, and managed on-ground student representative networks.',
      skills: [
        { label: 'Youth Segment Activation', featured: false },
        { label: 'School Partnerships', featured: false },
        { label: 'Event Production', featured: false },
        { label: 'Budget Allocation', featured: false },
      ],
      details: [
        'Executed Gojek SCH roadshow across 25+ top high schools in Greater Bandung, achieving a 100% campaign target fulfillment.',
        'Supervised budget distribution and logistics for campus booths, student ambassador competitions, and localized voucher drops.',
        'Synthesized weekly user-acquisition analytics for West Java regional marketing directors.',
      ],
    },
    {
      id: 'hareudang',
      role: 'Founder & Initiator',
      company: 'Hareudang Bandung',
      period: '2023 — 2025',
      desc: 'Founded an independent creative and cultural collective. Grew community engagement from zero to 15,000+ digital reach, landing commercial sponsorships from regional beverage and lifestyle brands.',
      skills: [
        { label: 'Brand Strategy', featured: false },
        { label: 'Community Building', featured: false },
        { label: 'Creative Direction', featured: false },
        { label: 'Sponsorship Acquisition', featured: false },
      ],
      details: [
        'Curated public pop-up creative markets, music showcases, and cross-disciplinary art forums uniting emerging creators.',
        'Secured brand partnerships and commercial sponsorships with local FMCG, apparel, and lifestyle enterprises.',
        'Built organic social media presence with 15k+ engaged youth followers and 250k+ aggregate campaign impressions.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#FF5E13] uppercase block mb-1.5">
              Career Trajectory
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#111827] uppercase">
              Experience & Practice
            </h2>
          </div>

        </div>

        {/* Experience List Cards */}
        <div className="space-y-4">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-[#FF5E13]/30"
              >
                {/* Top Row: Role, Company, Period & Location */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="font-serif font-bold text-lg sm:text-xl text-[#111827] group-hover:text-[#FF5E13] transition-colors">
                      {exp.role}
                      <span className="font-sans font-normal text-[#615E57] text-base ml-2">
                        — {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#78716C] tracking-wide self-start md:self-auto shrink-0">
                    <span>{exp.location ? `${exp.period} | ${exp.location}` : exp.period}</span>
                    <span className="p-1 rounded-full text-[#111827] group-hover:text-[#FF5E13] transition-colors">
                      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed my-4">
                  {exp.desc}
                </p>

                {/* Expandable Key Details */}
                {isExpanded && (
                  <div className="mb-5 pt-3 border-t border-[#F1EDE4] space-y-2 animate-in fade-in duration-200">
                    <div className="text-[11px] font-bold uppercase text-[#FF5E13] tracking-wider mb-1">
                      Key Deliverables & Responsibilities:
                    </div>
                    {exp.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#374151]">
                        <span className="text-[#FF5E13] font-bold">▪</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skill Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {exp.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${s.featured
                        ? 'bg-[#FFECE5] text-[#A93800] border-[#FFDBCE] font-bold'
                        : 'bg-[#F9FAFB] text-[#4B5563] border-[#EAE5DC] hover:border-[#FF5E13]/30'
                        }`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
