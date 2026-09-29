import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, School, Mic2, ArrowUpRight } from 'lucide-react';

function useCounter(endValue, duration = 1600, startTrigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [endValue, duration, startTrigger]);

  return count;
}

export default function KeyMetrics() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const countRevenue = useCounter(229, 1800, hasAnimated);
  const countSchools = useCounter(25, 1400, hasAnimated);
  const countSpeaking = useCounter(10, 1200, hasAnimated);

  const metrics = [
    {
      id: 'metric-revenue',
      icon: TrendingUp,
      iconBg: 'bg-[#FF5E13]/10 text-[#FF5E13]',
      badge: '↗ +34% YoY',
      badgeClass: 'bg-[#FF5E13]/10 text-[#FF5E13] border border-[#FF5E13]/20',
      prefix: 'Rp ',
      val: countRevenue,
      suffix: 'M',
      plus: '+',
      description: 'Revenue Exposure & Contributed across national and multinational B2B accounts.',
      subnote: 'PT Alkindo Naratama Tbk',
    },
    {
      id: 'metric-schools',
      icon: School,
      iconBg: 'bg-[#FF6B2B]/10 text-[#FF6B2B]',
      badge: '100% Target Met',
      badgeClass: 'bg-[#E1E8FD] text-[#293040] border border-[#DCE2F7]',
      prefix: '',
      val: countSchools,
      suffix: '',
      plus: '+',
      description: 'High Schools Onboarded in 3 Months during Gojek SCH Bandung regional activation.',
      subnote: 'Gojek SCH Campaign',
    },
    {
      id: 'metric-speaking',
      icon: Mic2,
      iconBg: 'bg-[#111827]/10 text-[#111827]',
      badge: 'Keynotes & Panels',
      badgeClass: 'bg-[#FFECE5] text-[#A93800] border border-[#FFDBCE]',
      prefix: '',
      val: countSpeaking,
      suffix: '',
      plus: '+',
      description: 'Public Speaking & MC Engagements across national student conferences & industry forums.',
      subnote: 'Oratory & Moderation',
    },
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden group"
              >
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-2xl ${m.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${m.badgeClass}`}>
                    {m.badge}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="mb-3">
                  <div className="font-serif font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-[#111827]">
                    {m.prefix}
                    {m.val}
                    {m.suffix}
                    <span className="text-[#FF5E13] ml-0.5">{m.plus}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#615E57] leading-relaxed font-normal">
                  {m.description}
                </p>

                {/* Decorative Bottom Bar Glow */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FF5E13]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
