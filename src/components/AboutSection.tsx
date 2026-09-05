import React from 'react';
import { Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigateSection?: (index: number) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      className="relative min-h-full w-full flex flex-col justify-center py-6 sm:py-10 lg:py-12"
    >
      {/* Background Architectural Subtle CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-[#FF5600]/[0.03] dark:from-[#FF5600]/[0.05] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Professional 9:16 Portrait in Luxury Dark Glass Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-1 rounded-3xl bg-[#FF5600]/[0.08] opacity-70 blur-xl pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden border border-black/[0.1] dark:border-white/[0.12] bg-[#0E0E12] shadow-2xl">
                {/* 9:16 Portrait Ratio Container */}
                <div
                  className="w-full aspect-[9/15] overflow-hidden bg-black relative select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src="/assets/profile/IMG_2068-web.jpg"
                    alt="Engr. Christ Carl Tapat - Professional Profile"
                    className="w-full h-full object-cover object-[center_12%] filter contrast-105 select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Technical statement, credentials, metadata & direct actions */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Christoph Nagel Section Kicker */}
            <div className="flex items-center gap-3">
              <span className="section-kicker">
                <span className="kicker-badge">01</span>
                <span>THE ESTIMATOR · PROFILE & CREDENTIALS</span>
              </span>
            </div>

            {/* Bold Impact Architectural Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A1A1A] dark:text-[#F4F4F1] leading-[1.02] tracking-tight uppercase">
              TURNING DRAWINGS INTO <span className="text-[#FF5600]">CLEAR, DEPENDABLE</span> ESTIMATING SUPPORT.
            </h2>

            {/* Scannable, High-Value Copy */}
            <div className="flex flex-col gap-3.5 text-sm sm:text-base text-[#4A4A4A] dark:text-[#9E9E9E] leading-relaxed font-manrope">
              <p>
                As a Construction Estimator with registered Civil Engineer and Master Plumber credentials, I bridge architectural drawings with mathematical precision. My focus is delivering structured quantity take-offs, trade-by-trade BOQs, and proactive preconstruction documentation that estimators and project leads can immediately review and trust.
              </p>
              <p>
                Operating remotely from the Philippines (GMT+8), I support US and Australian construction teams during tender and preconstruction phases. Whether reviewing complex multi-trade drawing sets in PlanSwift or Bluebeam Revu, every measurement is calibrated, cross-checked, and traceably linked to clear line items.
              </p>
            </div>

            {/* Metadata Badges in Christoph Nagel Chip Style */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Construction Estimator',
                'Quantity Take-Offs',
                'BOQ Preparation',
                'Civil Engineer',
                'Master Plumber',
                'Philippines (GMT+8)',
                'Remote US / AU Support',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.07] dark:border-white/[0.1] text-xs font-manrope font-medium text-[#1A1A1A] dark:text-[#E0E0E0] shadow-2xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
              <a
                href="https://www.linkedin.com/in/christ-carl-tapat-23a53241b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-manrope font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] hover:border-[#FF5600]/60 hover:text-[#FF5600] active:scale-95 transition-all shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FF5600]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="mailto:engr.christcarl@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-manrope font-semibold text-[#1A1A1A] dark:text-[#E0E0E0] hover:border-[#FF5600]/60 hover:text-[#FF5600] active:scale-95 transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5600]" />
                <span>engr.christcarl@gmail.com</span>
              </a>

              <a
                href="/documents/Resume-Construction-Estimator-TAPAT.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF5600]/10 border border-[#FF5600]/30 text-xs font-manrope font-bold text-[#FF5600] hover:bg-[#FF5600]/20 active:scale-95 transition-all shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume PDF</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
