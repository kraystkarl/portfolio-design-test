import React from 'react';
import { Briefcase, Sliders, CheckCircle2, MessageSquare, ArrowRight, Mail, Calendar, MapPin, Clock } from 'lucide-react';

interface HeroSectionProps {
  onContactClick?: () => void;
  onOpenBooking?: () => void;
  onNavigateSection?: (index: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onOpenBooking,
  onNavigateSection,
}) => {
  const routeCards = [
    {
      id: '01',
      targetIndex: 2,
      label: 'Professional Experience',
      desc: '3 years at DeepBluee · 60+ projects exposure',
      icon: Briefcase,
      href: '#experience',
    },
    {
      id: '02',
      targetIndex: 3,
      label: 'Estimating Methodology',
      desc: '8-stage structured workflow & tool set',
      icon: Sliders,
      href: '#methodology',
    },
    {
      id: '03',
      targetIndex: 4,
      label: 'Proof & Deliverables',
      desc: 'Take-off, calculation, BOQ, RFI, QC & CSV trail',
      icon: CheckCircle2,
      href: '#proof',
    },
    {
      id: '04',
      targetIndex: 6,
      label: 'Start a Conversation',
      desc: 'Direct email or 30-min Cal.com call',
      icon: MessageSquare,
      href: '#contact',
    },
  ];

  const handleCardClick = (e: React.MouseEvent, targetIndex: number, href: string) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(targetIndex);
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-full w-full flex flex-col justify-center py-6 sm:py-10 lg:py-12"
    >
      {/* Background Architectural Subtle CAD Grid & Ambient Light */}
      <div className="absolute inset-0 bg-cad-grid pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-radial from-[#FF5600]/[0.04] dark:from-[#FF5600]/[0.07] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Christoph Nagel Cinematic Intro Statement & Route Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* Section Kicker in Christoph Nagel format */}
            <div className="flex items-center gap-3">
              <span className="section-kicker">
                <span className="kicker-badge">00</span>
                <span>INTRO · CIVIL ENGINEER & ESTIMATOR</span>
              </span>
            </div>

            {/* 3 Core Roles with Glowing Status Dot */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-manrope font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5600] shadow-[0_0_8px_rgba(255,86,0,0.85)] animate-pulse flex-shrink-0" />
                <span>Construction Estimator</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-manrope font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5600] shadow-[0_0_8px_rgba(255,86,0,0.85)] animate-pulse flex-shrink-0" />
                <span>Project Coordination</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-manrope font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5600] shadow-[0_0_8px_rgba(255,86,0,0.85)] animate-pulse flex-shrink-0" />
                <span>Construction VA</span>
              </div>
            </div>

            {/* Dominant Architectural Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-anton text-[#1A1A1A] dark:text-[#F4F4F1] leading-[0.98] tracking-tight uppercase">
              CLEAR QUANTITIES. <br />
              <span className="text-[#FF5600]">RELIABLE</span> ESTIMATING SUPPORT.
            </h1>

            {/* Concise Supporting Copy (Manrope) */}
            <p className="text-sm sm:text-base lg:text-lg text-[#4A4A4A] dark:text-[#9E9E9E] leading-relaxed max-w-xl font-manrope">
              Christ Carl U. Tapat is a Construction Estimator, Civil Engineer, and Master Plumber providing remote quantity take-offs, trade BOQs, and preconstruction documentation for US and Australian construction teams.
            </p>

            {/* 4 Sleek Minimalist Route Cards (Instant One-Click Navigation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {routeCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    onClick={(e) => handleCardClick(e, card.targetIndex, card.href)}
                    className="group relative flex items-start justify-between p-3.5 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.09] hover:border-[#FF5600]/60 dark:hover:border-[#FF5600]/60 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08] text-[#1A1A1A] dark:text-[#E0E0E0] group-hover:text-[#FF5600] group-hover:border-[#FF5600]/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-space text-[#FF5600] font-bold">
                            /{card.id}
                          </span>
                          <span className="text-xs sm:text-[13px] font-bold text-[#1A1A1A] dark:text-[#F4F4F1] group-hover:text-[#FF5600] transition-colors font-manrope">
                            {card.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-tight mt-0.5">
                          {card.desc}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#6B7280] dark:text-[#737373] group-hover:text-[#FF5600] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Portrait + Status Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4 relative">
            
            {/* Portrait Card Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-[#FF5600]/[0.08] opacity-60 blur-xl pointer-events-none" />
              
              <div
                className="relative rounded-3xl overflow-hidden border border-black/[0.1] dark:border-white/[0.12] bg-[#0E0E12] shadow-2xl select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Top Pill Badge */}
                <div className="px-4 py-2 bg-[#14141A]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-space uppercase tracking-wider text-white/70 font-semibold">
                    Professional Profile
                  </span>
                  <span className="text-[10px] font-space text-[#FF5600] bg-[#FF5600]/15 border border-[#FF5600]/30 px-2.5 py-0.5 rounded-full font-bold">
                    VERIFIED ENGINEER
                  </span>
                </div>

                <div className="relative aspect-[4/4.6] overflow-hidden bg-black">
                  <img
                    src="/assets/profile/IMG_2080-web.jpg"
                    width="800"
                    height="960"
                    alt="Christ Carl U. Tapat - Construction Estimator"
                    className="w-full h-full object-cover object-top filter contrast-105 select-none pointer-events-none"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-end justify-between pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white font-manrope">
                        Christ Carl U. Tapat
                      </span>
                      <span className="text-[11px] font-space text-[#E0E0E0]">
                        Civil Engineer · Master Plumber
                      </span>
                    </div>
                    
                    <span className="text-[10px] font-space text-[#FF5600] uppercase px-2 py-0.5 rounded-md bg-white/[0.1] border border-white/15">
                      60+ PROJECTS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Availability Status Card */}
            <div className="w-full max-w-xs sm:max-w-sm rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-md backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5600] shadow-[0_0_8px_rgba(255,86,0,0.8)] animate-pulse" />
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] font-manrope">
                    Open for Remote Roles
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#FF5600] bg-[#FF5600]/10 px-2.5 py-0.5 rounded-full border border-[#FF5600]/30 font-space uppercase">
                  Available Now
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-space text-[#4A4A4A] dark:text-[#9E9E9E]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5600]" />
                  <span>Philippines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF5600]" />
                  <span>GMT+8 (US/AU Hours)</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-black/[0.05] dark:border-white/[0.06]">
                <a
                  href="mailto:engr.christcarl@gmail.com"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.07] dark:border-white/[0.1] text-xs font-medium text-[#1A1A1A] dark:text-[#E0E0E0] hover:border-[#FF5600]/60 hover:text-[#FF5600] active:scale-95 transition-all font-manrope shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                {onOpenBooking ? (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FF5600] text-white text-xs font-bold hover:bg-[#E04C00] active:scale-95 transition-all cursor-pointer font-manrope shadow-[0_2px_12px_rgba(255,86,0,0.35)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Get in Touch</span>
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FF5600] text-white text-xs font-bold hover:bg-[#E04C00] active:scale-95 transition-all font-manrope shadow-[0_2px_12px_rgba(255,86,0,0.35)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Get in Touch</span>
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
