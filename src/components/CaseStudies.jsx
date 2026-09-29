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
      title: 'Targeted Meta Inbound',
      desc: 'Segmented B2B creative sets targeting FMCG Procurement & Packaging Directors.',
      metricLabel: 'CAC Reduction',
      metricVal: '—38%',
      details: {
        channel: 'Meta Ads Manager + LinkedIn ABM',
        playbook: 'Audience segmented by industrial SIC codes, containerboard specifications, and monthly volume demand (> 100k units).',
        sla: 'Live routing directly to dedicated account representative within business hours.',
      },
    },
    {
      stage: 'STAGE 02',
      title: 'Lead Qualification & SLA',
      desc: '15-minute response SLA protocol with custom automated technical questionnaire.',
      metricLabel: 'Qual. Conversion',
      metricVal: '69%',
      details: {
        channel: 'HubSpot CRM + WhatsApp Business API',
        playbook: 'Immediate dispatch of technical spec intake (flute type, GSM, burst index, delivery cadence). Auto-filters unqualified leads.',
        sla: '15-minute response protocol implemented across local & export commercial teams.',
      },
    },
    {
      stage: 'STAGE 03',
      title: 'Spec Alignment & Trial',
      desc: 'Direct sample proofing, lab compression tests, and batch spec confirmation.',
      metricLabel: 'Sampling Speed',
      metricVal: '4.2 Days',
      details: {
        channel: 'Factory QA Lab + Chinese Mill Direct',
        playbook: 'Parallel validation of grammage, edge crush test (ECT), and box compression test (BCT) with rapid 72-hour physical trial delivery.',
        sla: 'Sample turnaround compressed from 14 days to under 4.5 days.',
      },
    },
    {
      stage: 'STAGE 04',
      title: 'Contract & Retention',
      desc: 'Annual procurement framework with automated recurring quarterly restock triggers.',
      metricLabel: 'Annual Retention',
      metricVal: '91%',
      details: {
        channel: 'SAP ERP Enterprise Contract',
        playbook: 'Volume-tiered price locks, buffer stock consignment agreements, and scheduled automated PO generation for ongoing SKU replenishment.',
        sla: 'Quarterly review milestones with 91% annualized renewal retention.',
      },
    },
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
                High-Conversion Inbound Ads to Enterprise Packaging Contracts
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Restructured inbound qualification channels to bridge Meta paid campaigns with high-touch B2B consultation, eliminating cold drop-offs and accelerating enterprise sales cycles.
              </p>
            </div>

            {/* Right Top Impact Metrics */}
            <div className="flex items-center gap-6 sm:gap-8 shrink-0 bg-white/60 p-4 rounded-2xl border border-[#EAE5DC]/80 self-start">
              <div>
                <div className="font-serif font-bold text-3xl sm:text-4xl text-[#FF5E13] tracking-tight">
                  42<span className="text-2xl">%</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-0.5">
                  Repeat Client Rate
                </div>
              </div>
              <div className="w-[1px] h-10 bg-[#EAE5DC]" />
              <div>
                <div className="font-serif font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
                  3.8<span className="text-2xl font-serif">x</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#615E57] mt-0.5">
                  Pipeline Velocity
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Flowchart Container */}
          <div className="bg-[#F9FAFB]/80 border border-[#EAE5DC] rounded-2xl p-4 sm:p-6 mb-6">
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
                  Live Pipeline Architecture (Click any stage)
                </span>
              </div>
            </div>

            {/* 4 Connected Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {flowStages.map((st, index) => {
                const isSelected = activeStage === index;
                return (
                  <button
                    key={st.stage}
                    onClick={() => setActiveStage(index)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#FF5E13] shadow-[0_8px_20px_-6px_rgba(255,94,19,0.2)] ring-1 ring-[#FF5E13]'
                        : 'bg-white/60 border-[#EAE5DC] hover:bg-white hover:border-[#FF5E13]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold tracking-wider ${isSelected ? 'text-[#FF5E13]' : 'text-[#A93800]'}`}>
                        {st.stage}
                      </span>
                      {isSelected ? (
                        <CheckCircle2 size={14} className="text-[#FF5E13]" />
                      ) : (
                        <span className="text-[10px] text-[#A8A29E]">0{index + 1}</span>
                      )}
                    </div>
                    <div className="font-bold text-xs sm:text-[13px] text-[#111827] mb-1.5 leading-snug">
                      {st.title}
                    </div>
                    <p className="text-[11px] text-[#615E57] line-clamp-2 leading-relaxed mb-3">
                      {st.desc}
                    </p>
                    <div className="pt-2 border-t border-[#F1EDE4] flex items-center justify-between">
                      <span className="text-[10px] font-medium text-[#78716C]">
                        {st.metricLabel}
                      </span>
                      <span className="text-xs font-bold text-[#FF5E13]">
                        {st.metricVal}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Deep-Dive Expandable Panel */}
            <div className="mt-4 pt-4 border-t border-[#EAE5DC] bg-white/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase text-[#FF5E13]">
                    Deep Dive • {flowStages[activeStage].stage}: {flowStages[activeStage].title}
                  </span>
                  <span className="text-[10px] bg-[#F9FAFB] px-2 py-0.5 rounded border border-[#EAE5DC] text-[#615E57]">
                    {flowStages[activeStage].details.channel}
                  </span>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {flowStages[activeStage].details.playbook}
                </p>
              </div>
              <div className="shrink-0 bg-[#F9FAFB] px-3.5 py-2 rounded-lg border border-[#EAE5DC] text-right">
                <span className="text-[9px] uppercase font-bold text-[#78716C] block">
                  SLA Benchmark
                </span>
                <span className="text-xs font-semibold text-[#111827]">
                  {flowStages[activeStage].details.sla}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2 text-[#615E57]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E13]"></span>
              <span>Framework fully integrated into core sales operational procedures.</span>
            </div>
            <button
              onClick={() => onRequestCaseFile('PT Alkindo Naratama Tbk - Inbound Ads to Enterprise Packaging')}
              className="inline-flex items-center gap-1 font-semibold text-[#FF5E13] hover:text-[#A93800] transition-colors cursor-pointer group self-start sm:self-auto"
            >
              <span>Request Full Documentation Case File</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
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
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                        viewMode === 'before'
                          ? 'bg-[#111827] text-white'
                          : 'text-[#615E57] hover:text-[#111827]'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setViewMode('after')}
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                        viewMode === 'after'
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
                      className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                        activeFunnel === phase.id
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
