import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingDown,
  BarChart3,
  FileCheck2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function CaseStudies({ onRequestCaseFile }) {
  // Card 1: Active Flow Stage
  const [activeStage, setActiveStage] = useState(0);

  // Card 2: Interactive Before/After Toggle / Slider
  const [viewMode, setViewMode] = useState('after'); // 'before' | 'after'
  const [showGlossary, setShowGlossary] = useState(false);

  // Card 3: Active Funnel Tab
  const [activeFunnel, setActiveFunnel] = useState(1);

  const flowStages = [
    {
      stage: 'STAGE 01',
      title: 'Paid Ads',
      desc: 'Digital advertising and customer acquisition campaigns for B2B packaging solutions.',
      subMetric: 'Meta Paid Campaigns',
      details: 'Strategized and managed inbound digital campaigns across Meta ads platform, targeting enterprise procurement leads.',
    },
    {
      stage: 'STAGE 02',
      title: 'Inquiry',
      desc: 'Receiving and processing hundreds of incoming local and international client inquiries.',
      subMetric: 'High-Volume Handling',
      details: 'Handled incoming customer inquiries, catalog requests, and initial technical screening across local and overseas buyers.',
    },
    {
      stage: 'STAGE 03',
      title: 'Client Handling',
      desc: 'Understanding customer requirements, providing product information, offers, and cross-functional coordination.',
      subMetric: 'Consultation & Bridge',
      details: 'Delivered consultative proposals, technical spec reviews, and seamless coordination between commercial and production teams.',
    },
    {
      stage: 'STAGE 04',
      title: 'Pre Order',
      desc: 'Coordinating order specs, technical requirements, and production alignment with internal teams.',
      subMetric: 'Account Conversion',
      details: 'Coordinated order execution, production scheduling, sample verification, and factory alignment with internal mill divisions.',
    },
    {
      stage: 'STAGE 05',
      title: 'Repeat Order',
      desc: 'Following up on accounts, supporting account expansion, and securing recurring business.',
      subMetric: 'Rp 229.65M Total Pipeline',
      details: 'Executed proactive follow-ups, account retention, and regular repeat PO cycles totaling Rp 229.65M in commercial value.',
    },
  ];

  const contributionPoints = [
    'Handled customer inquiries and detailed specification requirements.',
    'Supported customer conversion, follow-up, and account expansion.',
    'Coordinated across marketing, sales, and production teams on order execution.',
    'Bridged Chinese-Indonesian business communication by translating technical specifications into production formulas.',
  ];

  const glossaryTerms = [
    { zh: '抗张强度', pinyin: 'Kàngzhāng qiángdù', en: 'Tensile Strength', id: 'Kekuatan Tarik', note: 'Standard ISO 1924-2 untuk ketahanan tarik lembaran karton box.' },
    { zh: '耐破指数', pinyin: 'Nàipò zhǐshù', en: 'Bursting Index', id: 'Indeks Jebol / Tekan', note: 'Mullen test specification (≥ 3.8 kPa·m²/g) diselaraskan langsung ke operator corrugator.' },
    { zh: '环压强度', pinyin: 'Huányā qiángdù', en: 'Ring Crush Test (RCT)', id: 'Kekuatan Tekan Cincin', note: 'Uji kekuatan penopang beban vertikal pada flute bergelombang.' },
    { zh: '水分含量', pinyin: 'Shuǐfèn hánliàng', en: 'Moisture Content', id: 'Kadar Air', note: 'Standarisasi kelembapan 7.5% ± 1.0% guna mencegah laminasi warping.' },
  ];

  return (
    <section id="cases" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#FF5E13] uppercase block mb-1.5">
              Selected Works
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#111827] uppercase">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#615E57] max-w-md leading-relaxed md:text-right">
            Deep-dive playbooks into enterprise inbound conversions, cross-border manufacturing operations, and city-scale user acquisition.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CARD 1: PT Alkindo Naratama Tbk (Large Featured Bento Card) */}
        {/* ========================================================================= */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 md:p-10 mb-8 transition-all duration-300 hover:border-[#FF5E13]/30">
          {/* Top Row: Tags + Headline + High Impact Metrics */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFECE5] text-[#A93800] border border-[#FFDBCE]">
                  B2B Revenue Generation
                </span>
                <span className="text-xs font-semibold text-[#615E57]">
                  PT Alkindo Naratama Tbk
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#111827] tracking-tight mb-3">
                Turn Paid Traffic Into Business Conversations
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Bridging digital paid campaigns with comprehensive B2B client consultation, high-volume inquiry handling, and repeat commercial contracts across local and international enterprises.
              </p>
            </div>

            {/* Right Top Impact Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 shrink-0 bg-white/90 p-4 sm:p-5 rounded-2xl border border-[#EAE5DC] self-start shadow-xs">
              <div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#FF5E13] tracking-tight">
                  Rp 229.65<span className="text-xl font-serif">M</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-0.5 max-w-[210px] leading-tight">
                  Revenue from Initial POs to Repeat Orders (Jan-Jul)
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-[#EAE5DC]" />
              <div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#111827] tracking-tight">
                  100s
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-0.5 max-w-[190px] leading-tight">
                  Customer Inquiries Handled (Local & International)
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Flowchart Container (5-Stage Architecture) */}
          <div className="bg-[#F9FAFB]/90 border border-[#EAE5DC] rounded-2xl p-4 sm:p-6 mb-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EAE5DC]">
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-[#FF5E13]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#111827]">
                  Execution Architecture Flow
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-[10px] font-semibold text-[#615E57]">
                  5-Stage B2B Pipeline (Click stage for details)
                </span>
              </div>
            </div>

            {/* 5 Connected Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {flowStages.map((st, index) => {
                const isSelected = activeStage === index;
                return (
                  <button
                    key={st.stage}
                    onClick={() => setActiveStage(index)}
                    className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                        ? 'bg-white border-[#FF5E13] shadow-[0_8px_20px_-6px_rgba(255,94,19,0.2)] ring-1 ring-[#FF5E13]'
                        : 'bg-white/70 border-[#EAE5DC] hover:bg-white hover:border-[#FF5E13]/40'
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-bold tracking-wider ${isSelected ? 'text-[#FF5E13]' : 'text-[#A93800]'}`}>
                          {st.stage}
                        </span>
                        {isSelected ? (
                          <CheckCircle2 size={13} className="text-[#FF5E13]" />
                        ) : (
                          <span className="text-[10px] text-[#A8A29E]">0{index + 1}</span>
                        )}
                      </div>
                      <div className="font-bold text-xs sm:text-[13px] text-[#111827] mb-1.5 leading-snug">
                        {st.title}
                      </div>
                      <p className="text-[11px] text-[#615E57] line-clamp-3 leading-relaxed mb-3">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F1EDE4] mt-auto">
                      <span className="inline-block text-[10px] font-semibold text-[#FF5E13] bg-[#FFECE5] px-2 py-0.5 rounded-full">
                        {st.subMetric}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Key Contribution Points (Deep Dive Section) */}
            <div className="mt-5 pt-5 border-t border-[#EAE5DC] bg-white rounded-xl p-5 border border-[#EAE5DC]/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#F1EDE4]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase text-[#FF5E13] tracking-wider">
                    Key Contribution Highlights
                  </span>
                  <span className="text-[10px] bg-[#F9FAFB] px-2 py-0.5 rounded border border-[#EAE5DC] text-[#615E57] font-semibold">
                    Verified CV & Operational Track Record
                  </span>
                </div>
                <span className="text-[10px] text-[#78716C] font-semibold">
                  Stage Focus: {flowStages[activeStage].stage} • {flowStages[activeStage].title}
                </span>
              </div>

              {/* 4 Official Contribution Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-[#374151]">
                {contributionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#F9FAFB] p-3 rounded-lg border border-[#EAE5DC]">
                    <span className="text-[#FF5E13] font-bold text-sm leading-none mt-0.5">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Active Stage Detail */}
              <div className="pt-1 text-xs text-[#615E57] flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 bg-[#FAF7F2] p-3 rounded-lg border border-[#EAE5DC]/60">
                <span className="font-bold text-[#111827] shrink-0">
                  {flowStages[activeStage].title} Execution:
                </span>
                <span>{flowStages[activeStage].details}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TWO-COLUMN BENTO GRID: Case Study 2 (Export) & Case Study 3 (Gojek) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ------------------------------------------------------------- */}
          {/* Card 2: Export Operations (Cross-Border Spec Translation) */}
          {/* ------------------------------------------------------------- */}
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF5E13]/30">
            <div>
              {/* Category tags */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F9FAFB] text-[#111827] border border-[#EAE5DC]">
                  Operations & Negotiation
                </span>
                <span className="text-xs font-semibold text-[#615E57]">
                  Export Protocols
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-2.5">
                Cross-Border Spec Translation & Factory Alignment
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                Reconciled discrepancies between Chinese technical mill sheets and US customer quality tolerances, reducing domestic sample rejection cycles.
              </p>

              {/* Interactive Before / After Comparison Bar */}
              <div className="bg-[#F9FAFB] p-4 rounded-2xl border border-[#EAE5DC] mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#615E57]">
                    SLA Comparison Metric
                  </span>
                  <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#EAE5DC]">
                    <button
                      onClick={() => setViewMode('before')}
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${viewMode === 'before'
                          ? 'bg-[#111827] text-white'
                          : 'text-[#615E57] hover:text-[#111827]'
                        }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setViewMode('after')}
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${viewMode === 'after'
                          ? 'bg-[#FF5E13] text-white'
                          : 'text-[#615E57] hover:text-[#111827]'
                        }`}
                    >
                      After (Matrix)
                    </button>
                  </div>
                </div>

                {/* Progress Comparison Bars */}
                <div className="space-y-3 mb-4">
                  {/* Before Bar */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-semibold text-[#78716C]">BEFORE: MANUAL TRANSLATION GAP</span>
                      <span className="font-bold text-[#DC2626]">12-Day Turnaround</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#F87171] h-full rounded-full transition-all duration-700"
                        style={{ width: viewMode === 'before' ? '85%' : '85%' }}
                      />
                    </div>
                  </div>

                  {/* After Bar */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="font-semibold text-[#111827]">AFTER: WONGSO BILINGUAL MATRIX</span>
                      <span className="font-bold text-[#FF5E13]">48 Hr. Efficiency Gain</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#FF5E13] h-full rounded-full transition-all duration-700"
                        style={{ width: viewMode === 'after' ? '22%' : '40%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Callout Box */}
                <div className="bg-white p-3 rounded-xl border border-[#EAE5DC] flex items-start gap-2.5 text-xs text-[#374151]">
                  <Sparkles size={16} className="text-[#FF5E13] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Direct translation of Mandarin tensile specifications (抗张强度 / 耐破指数) directly into Indonesian mill batch controls without third-party delay.
                  </p>
                </div>

                {/* Interactive Glossary Accordion Toggle */}
                <div className="mt-3 pt-2 border-t border-[#EAE5DC]">
                  <button
                    onClick={() => setShowGlossary(!showGlossary)}
                    className="w-full flex items-center justify-between text-[11px] font-semibold text-[#A93800] hover:text-[#FF5E13] transition-colors cursor-pointer py-1"
                  >
                    <span>View Bilingual Technical Mill Specs ({glossaryTerms.length} terms)</span>
                    {showGlossary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {showGlossary && (
                    <div className="mt-2 space-y-1.5 pt-2 border-t border-[#F1EDE4]">
                      {glossaryTerms.map((t) => (
                        <div key={t.zh} className="bg-white p-2 rounded-lg border border-[#EAE5DC] text-[11px]">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#111827]">{t.zh} ({t.pinyin})</span>
                            <span className="font-semibold text-[#FF5E13]">{t.en}</span>
                          </div>
                          <p className="text-[#615E57] text-[10px] mt-0.5">{t.note}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-3 border-t border-[#EAE5DC] text-xs">
              <span className="text-[#615E57]">Paper & Industrial Packaging</span>
              <span className="font-bold text-sm text-[#FF5E13] bg-[#FFECE5] px-2.5 py-0.5 rounded-full">
                -40% Latency
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Card 3: Gojek Indonesia (Gojek SCH High Schools Penetration) */}
          {/* ------------------------------------------------------------- */}
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF5E13]/30">
            <div>
              {/* Category tags */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E1E8FD] text-[#293040] border border-[#DCE2F7]">
                  Community Activation
                </span>
                <span className="text-xs font-semibold text-[#615E57]">
                  Gojek Indonesia
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-2.5">
                Gojek SCH 25+ High Schools Penetration
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                Spearheaded offline-to-online activation across Bandung's highest-density high school districts, securing institutional approvals and student ambassador programs.
              </p>

              {/* 3 Highlight Stat Boxes */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#EAE5DC] text-center hover:border-[#FF5E13]/40 transition-colors">
                  <div className="font-serif font-bold text-xl sm:text-2xl text-[#111827] tracking-tight">
                    25<span className="text-xs font-sans text-[#78716C]">/25</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-1">
                    Target Schools
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#EAE5DC] text-center hover:border-[#FF5E13]/40 transition-colors">
                  <div className="font-serif font-bold text-xl sm:text-2xl text-[#FF5E13] tracking-tight">
                    12,000<span className="text-sm font-sans">+</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-1">
                    Student Reach
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#EAE5DC] text-center hover:border-[#FF5E13]/40 transition-colors">
                  <div className="font-serif font-bold text-xl sm:text-2xl text-[#111827] tracking-tight">
                    88<span className="text-sm font-sans">%</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-1">
                    First-Order Rate
                  </div>
                </div>
              </div>

              {/* Interactive Funnel Strategy Breakdown */}
              <div className="bg-[#F9FAFB] p-4 rounded-2xl border border-[#EAE5DC] mb-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#615E57]">
                    Execution Funnel Phases
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Bandung Hub Verified
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-[11px] mb-3">
                  {[
                    { id: 1, title: '1. Clearance', desc: 'Principal & MoU' },
                    { id: 2, title: '2. Ambassadors', desc: '75+ Student Reps' },
                    { id: 3, title: '3. Activation', desc: 'GoRide / GoFood' },
                  ].map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => setActiveFunnel(phase.id)}
                      className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${activeFunnel === phase.id
                          ? 'bg-white border-[#FF5E13] font-bold text-[#111827] shadow-xs'
                          : 'bg-white/50 border-[#EAE5DC] text-[#615E57] hover:bg-white'
                        }`}
                    >
                      <div className="font-bold text-[10px]">{phase.title}</div>
                      <div className="text-[9px] text-[#78716C]">{phase.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-[#EAE5DC] text-xs text-[#374151]">
                  {activeFunnel === 1 && (
                    <p><strong>Phase 1 Clearance:</strong> Navigated formal administrative requirements with Bandung Department of Education and 25 school principals within a 4-week turnaround.</p>
                  )}
                  {activeFunnel === 2 && (
                    <p><strong>Phase 2 Ambassadors:</strong> Screened and on-boarded 75 top OSIS leaders across high schools as on-campus brand advocates and referral anchors.</p>
                  )}
                  {activeFunnel === 3 && (
                    <p><strong>Phase 3 Activation:</strong> Generated 12,000+ targeted app downloads with an 88% coupon-redemption conversion rate on high school commuter routes.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-3 border-t border-[#EAE5DC] text-xs">
              <span className="text-[#615E57]">Youth Cohort Strategy</span>
              <span className="font-bold text-sm text-[#111827] bg-[#F1EDE4] px-2.5 py-0.5 rounded-full">
                100% Campaign KPI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
