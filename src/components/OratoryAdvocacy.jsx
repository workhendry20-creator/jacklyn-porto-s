import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Quote, ChevronLeft, ChevronRight, Mic } from 'lucide-react';

export default function OratoryAdvocacy() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(860); // 14:20
  const duration = 2052; // 34:12
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const [activeEndorsementIdx, setActiveEndorsementIdx] = useState(0);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Playback timer simulation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Audio synthesis for realistic interactive feedback
  const togglePlay = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          if (!audioContextRef.current) {
            audioContextRef.current = new AudioCtx();
          }
          if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
          }
          // gentle harmonic soundscape beep to confirm audio start
          const osc = audioContextRef.current.createOscillator();
          const gain = audioContextRef.current.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, audioContextRef.current.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, audioContextRef.current.currentTime + 0.15);
          gain.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.3);
          osc.connect(gain);
          gain.connect(audioContextRef.current.destination);
          osc.start();
          osc.stop(audioContextRef.current.currentTime + 0.3);
        }
      } catch (e) {
        console.error('Audio init error:', e);
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // 36 waveform bars heights
  const waveformHeights = [
    30, 45, 60, 40, 75, 90, 50, 65, 80, 40, 95, 85, 60, 45, 70, 85, 100, 75,
    60, 90, 55, 40, 70, 85, 65, 95, 50, 40, 80, 60, 45, 70, 55, 40, 65, 45
  ];

  const endorsements = [
    {
      quote: "Tamara possesses that rare blend of aggressive commercial tenacity and impeccable stakeholder empathy. She bridged factory floor constraints directly with multi-million clients without dropping a single beat.",
      author: "Michael R. Hendrawan",
      role: "Senior Commercial Director, Packaging & Supply Chain",
      initials: "MR",
    },
    {
      quote: "Her leadership on Gojek SCH in Bandung proved her unmatched ability to mobilize youth communities and negotiate high-level institutional approvals with equal finesse.",
      author: "Dian S. Pratama",
      role: "Regional Marketing Lead, West Java Operations",
      initials: "DP",
    },
    {
      quote: "As a student delegate and orator, Tamara's clarity in articulating bilateral trade and cross-cultural business frameworks consistently stood out on international stages.",
      author: "Prof. Kenneth Zhao",
      role: "Faculty Advisor, International Business & Diplomatic Relations",
      initials: "KZ",
    },
  ];

  const currentEndorsement = endorsements[activeEndorsementIdx];

  return (
    <section id="speaking" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-widest text-[#FF5E13] uppercase block mb-1.5">
            Oratory & Advocacy
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#111827] uppercase mb-3">
            Public Speaking & Dialogue
          </h2>

        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Podcast Player & Event Badges (7 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Podcast Card */}
            <div className="glass-card rounded-[2rem] p-6 sm:p-8 relative">
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFECE5] text-[#A93800] border border-[#FFDBCE] flex items-center gap-1.5">
                  <Mic size={12} className="text-[#FF5E13]" />
                  <span>Featured Podcast Episode</span>
                </span>
                <span className="text-xs font-semibold text-[#78716C] tracking-wider uppercase">
                  EP. 48 • 34:18 MIN
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111827] tracking-tight mb-2.5">
                Navigating B2B Sales & Cross-Cultural Negotiation
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                Tamara discusses closing multinational industrial contracts, managing Chinese manufacturing partners, and modern inbound GTM playbooks.
              </p>

              {/* Functional Waveform Player Widget */}
              <div className="bg-[#F9FAFB] p-4 sm:p-5 rounded-2xl border border-[#EAE5DC]">
                {/* Waveform Visualization Bars */}
                <div className="h-16 flex items-end justify-between gap-[3px] sm:gap-1 mb-4 px-1">
                  {waveformHeights.map((h, i) => {
                    const progressRatio = currentTime / duration;
                    const barRatio = i / waveformHeights.length;
                    const isPassed = barRatio <= progressRatio;

                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setCurrentTime(Math.floor((i / waveformHeights.length) * duration));
                        }}
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-full cursor-pointer transition-all duration-200 ${isPassed
                            ? 'bg-[#FF5E13]'
                            : 'bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                          } ${isPlaying ? 'audio-bar-playing' : ''}`}
                        title={`Seek to ${formatTime((i / waveformHeights.length) * duration)}`}
                      />
                    );
                  })}
                </div>

                {/* Player Controls Bar */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#EAE5DC]/80">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-[#111827] hover:bg-[#FF5E13] text-white flex items-center justify-center transition-colors shadow-xs active:scale-95 cursor-pointer"
                      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                    >
                      {isPlaying ? (
                        <Pause size={16} fill="white" />
                      ) : (
                        <Play size={16} fill="white" className="ml-0.5" />
                      )}
                    </button>

                    <div>
                      <div className="text-xs font-bold text-[#111827] leading-none mb-1">
                        Listen to Highlight
                      </div>
                      <div className="text-[10px] text-[#78716C] leading-none">
                        Next: Global B2B Leaders Forum
                      </div>
                    </div>
                  </div>

                  {/* Timestamp & Speed */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const speeds = [1, 1.25, 1.5];
                        const nextIndex = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                        setPlaybackSpeed(speeds[nextIndex]);
                      }}
                      className="text-[10px] font-bold px-2 py-0.5 rounded border border-[#EAE5DC] bg-white text-[#615E57] hover:border-[#FF5E13] cursor-pointer"
                    >
                      {playbackSpeed}x
                    </button>
                    <span className="font-mono text-xs font-semibold text-[#111827]">
                      {formatTime(currentTime)} / 34:12
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Event Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-2xl p-4 transition-transform hover:-translate-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF5E13] block mb-1">
                  Delegate
                </span>
                <h4 className="font-bold text-xs text-[#111827] mb-1">
                  UNAI Representative
                </h4>
                <p className="text-[11px] text-[#615E57] leading-relaxed">
                  United Nations Academic Impact delegation.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-4 transition-transform hover:-translate-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#A93800] block mb-1">
                  Speaker
                </span>
                <h4 className="font-bold text-xs text-[#111827] mb-1">
                  AIESEC Keynote
                </h4>
                <p className="text-[11px] text-[#615E57] leading-relaxed">
                  Youth Leadership & Career Trajectory forum.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-4 transition-transform hover:-translate-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#615E57] block mb-1">
                  Facilitator
                </span>
                <h4 className="font-bold text-xs text-[#111827] mb-1">
                  TEDx Youth Series
                </h4>
                <p className="text-[11px] text-[#615E57] leading-relaxed">
                  Moderator for creative innovators & founders.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Executive Endorsement Card (5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-[#111827] text-[#FAF7F2] rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10">
            {/* Subtle top ambient glow inside slate card */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#FF5E13]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Quote Mark Pill */}
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                <Quote size={20} className="text-[#FF5E13]" />
              </div>

              {/* Quote text in Playfair Display italic */}
              <blockquote className="font-serif italic font-normal text-lg sm:text-xl lg:text-[22px] leading-relaxed text-[#F9FAFB] mb-8">
                &ldquo;{currentEndorsement.quote}&rdquo;
              </blockquote>
            </div>

            {/* Endorser Profile & Carousel Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF5E13] to-[#FF6B2B] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-xs">
                  {currentEndorsement.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#FAF7F2]">
                    {currentEndorsement.author}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] leading-tight mt-0.5">
                    {currentEndorsement.role}
                  </div>
                </div>
              </div>

              {/* Carousel navigation arrows */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    setActiveEndorsementIdx((prev) =>
                      prev === 0 ? endorsements.length - 1 : prev - 1
                    )
                  }
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous endorsement"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    setActiveEndorsementIdx((prev) =>
                      (prev + 1) % endorsements.length
                    )
                  }
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next endorsement"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
