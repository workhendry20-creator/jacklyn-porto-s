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
      role: 'Account Executive (Local & Export)',
      company: 'PT Alkindo Naratama Tbk',
      period: '2025 — PRESENT',
      desc: 'Managing key account retention and outbound enterprise packaging contracts across Southeast Asia. Spearheading cross-border technical alignment with Mandarin Chinese suppliers and North American client quality assurance teams.',
      skills: [
        { label: 'B2B Sales', featured: false },
        { label: 'Export Documentation', featured: false },
        { label: 'Mandarin Spec Coordination', featured: false },
        { label: 'Key Account Management', featured: false },
        { label: 'Rp 229M+ Exposure', featured: true },
      ],
      details: [
        'Maintained and renewed major enterprise packaging procurement agreements spanning paper tube, core, and paper bag industrial lines.',
        'Facilitated direct bilingual negotiations with Chinese raw material suppliers, reducing spec mismatch delays by 40%.',
        'Coordinated with North American QA teams to align tensile standards and FSC/PEFC sustainability compliance certifications.',
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
          <p className="text-xs sm:text-sm text-[#615E57] max-w-md leading-relaxed md:text-right">
            Proven commercial impact across publicly listed manufacturers, hyper-growth tech giants, and grassroots movements.
          </p>
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

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#78716C] tracking-wide self-start md:self-auto">
                    <span>{exp.period} • {exp.location}</span>
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
