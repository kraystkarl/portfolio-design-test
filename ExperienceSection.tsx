import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  MapPin,
  Building2,
  Layers,
  Briefcase,
  Award,
  ArrowRight,
  MousePointerClick,
  Sparkles
} from 'lucide-react';

interface ExperienceSectionProps {
  onNavigateSection?: (index: number) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onNavigateSection }) => {
  const [activeCompany, setActiveCompany] = useState<'deepbluee' | 'coquilla'>('deepbluee');

  // DeepBluee Data
  const deepblueeCategories = [
    { name: 'Residential Swimming Pools', count: 'Core Focus' },
    { name: 'Commercial Swimming Pools', count: 'Resort & Club Facilities' },
    { name: 'Residential Houses', count: 'Civil / Structural' },
    { name: 'Warehouses', count: 'Commercial Shell & MEP' },
  ];

  const deepblueeScopes = [
    {
      category: 'Estimating & Quantities',
      items: [
        'Cost estimation & budget breakdown',
        'Bill of Quantities (BOQ) preparation',
        'Quantity take-offs using PlanSwift, Bluebeam & Microsoft Excel',
        'Material cutting lists & procurement schedules',
        'Concrete pouring request reconciliations',
      ],
    },
    {
      category: 'Drawing & Technical Review',
      items: [
        'Architectural & structural drawing preparation',
        'Plumbing & electrical layout coordination',
        'Construction drawing drafting & redlines',
        'Permit processing technical packages',
      ],
    },
    {
      category: 'Site & Preconstruction Support',
      items: [
        'Site engineering & progress measurement',
        'Request for Information (RFI) documentation',
        'Risk assessment (RA) & safety documentation',
        'Project planning & milestone tracking',
      ],
    },
  ];

  // Coquilla Engineering Consultancy Data
  const coquillaCategories = [
    { name: 'Civil Works', count: 'Structural & Site Infrastructure' },
    { name: 'Government Biddings', count: 'Public Tenders & Cost Packages' },
    { name: 'Permit Processing', count: 'ECC & Building Permits' },
    { name: 'Engineering Consultancy', count: 'Feasibility & Project Costing' },
  ];

  const coquillaScopes = [
    {
      category: 'Cost Estimation & Feasibility',
      items: [
        'Prepared construction cost estimates, material take-offs, and feasibility studies for commercial, residential, and warehouse projects.',
        'Conducted baseline quantity surveys and budget breakdowns for private and public sector developments.',
        'Formulated comparative cost models to assist clients in material selection and value engineering.',
      ],
    },
    {
      category: 'Tenders & Cost Databases',
      items: [
        'Assisted in tender preparation, cost forecasting, and maintaining cost databases for future project benchmarking.',
        'Compiled government bidding documents, technical specifications, and contractor bid evaluation matrices.',
        'Structured milestone cash-flow projections and unit-rate analyses for competitive bidding.',
      ],
    },
    {
      category: 'Permits, Compliance & Site Supervision',
      items: [
        'Coordinated permit processing, regulatory compliance, and site supervision to ensure projects followed approved plans, quality standards, and schedules.',
        'Facilitated Environmental Compliance Certificates (ECC) and Local Government Building Permit applications.',
        'Conducted on-site engineering inspections to verify structural alignment, trade coordination, and quality standards.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-28 sm:pb-32 overflow-hidden"
    >
      {/* Background Subtle CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[450px] bg-radial from-[#FF5600]/[0.03] dark:from-[#FF5600]/[0.05] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Section Kicker, Headings, Highlights & Company Selector */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Christoph Nagel Section Kicker */}
            <div className="flex items-center gap-3">
              <span className="section-kicker">
                <span className="kicker-badge">02</span>
                <span>FIELD EXPERIENCE · 60+ PROJECTS</span>
              </span>
            </div>

            {/* Bold Impact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A1A1A] dark:text-[#F4F4F1] leading-[1.02] tracking-tight uppercase">
              PROVEN TRACK RECORD IN <span className="text-[#FF5600]">ESTIMATING & SITE</span> COORDINATION.
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#9E9E9E] leading-relaxed font-manrope">
              Hands-on commercial and residential estimating experience, transitioning from on-site structural engineering to digital take-offs and preconstruction BOQ preparation.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-xl sm:text-2xl font-anton text-[#FF5600]">60+</div>
                <div className="text-[10px] font-space text-[#4A4A4A] dark:text-[#9E9E9E] uppercase">Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-xl sm:text-2xl font-anton text-[#FF5600]">3 YRS</div>
                <div className="text-[10px] font-space text-[#4A4A4A] dark:text-[#9E9E9E] uppercase">PlanSwift</div>
              </div>
              <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-xl sm:text-2xl font-anton text-[#FF5600]">100%</div>
                <div className="text-[10px] font-space text-[#4A4A4A] dark:text-[#9E9E9E] uppercase">Traceable</div>
              </div>
            </div>

            {/* Christoph Nagel Interactive Company Switcher Tabs with Prominent Exploration Invitation */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-space text-[#FF5600] uppercase font-bold tracking-wider">
                  <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                  <span>Click to Switch Company Context:</span>
                </span>
                <span className="text-[10px] font-manrope text-[#7A7A7A] dark:text-[#8E8E8E]">
                  2 Roles Available
                </span>
              </div>

              <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-black/[0.05] dark:bg-white/[0.06] border-2 border-[#FF5600]/30 dark:border-[#FF5600]/40 shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveCompany('deepbluee')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-center flex flex-col items-center gap-0.5 relative ${
                    activeCompany === 'deepbluee'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="truncate">DeepBluee Inc.</span>
                  <span className={`text-[9px] font-space tracking-tight ${activeCompany === 'deepbluee' ? 'text-white/90' : 'text-[#FF5600]'}`}>
                    {activeCompany === 'deepbluee' ? '✓ Currently Viewing' : '👉 Click to View (3 Yrs)'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCompany('coquilla')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-center flex flex-col items-center gap-0.5 relative ${
                    activeCompany === 'coquilla'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="truncate">Coquilla Consultancy</span>
                  <span className={`text-[9px] font-space tracking-tight ${activeCompany === 'coquilla' ? 'text-white/90' : 'text-[#FF5600]'}`}>
                    {activeCompany === 'coquilla' ? '✓ Currently Viewing' : '👉 Click to View (Civil/Gov)'}
                  </span>
                </button>
              </div>

              {/* Exploration Hint Box */}
              <div className="p-3 rounded-xl bg-[#FF5600]/[0.06] border border-[#FF5600]/20 flex items-start gap-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5600] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-manrope text-[#5A5A5A] dark:text-[#B0B0B0] leading-relaxed">
                  <strong className="text-[#1A1A1A] dark:text-[#F4F4F1]">Interactive Portfolio Hint:</strong> Click both tabs above to inspect <span className="text-[#FF5600] font-semibold">60+ commercial pool & residential projects</span> at DeepBluee versus <span className="text-[#FF5600] font-semibold">government civil tenders</span> at Coquilla.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Scrollable Content Panel (Christoph Nagel .content-panel) */}
          <div className="lg:col-span-7 w-full max-h-[calc(100dvh-10rem)] overflow-y-auto pr-1 sm:pr-3 panel-scrollbar flex flex-col gap-4">
            
            {activeCompany === 'deepbluee' ? (
              <div className="flex flex-col gap-4 animate-subtle-fade-in">
                {/* Company Header Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1]">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                        DeepBluee Inc.
                      </h3>
                      <p className="text-xs text-[#FF5600] font-space font-medium">
                        Construction Estimator & Site Engineer
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-space text-[#4A4A4A] dark:text-[#9E9E9E]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5600]" />
                      <span>3 Years Full-Time Exposure</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-relaxed mt-3">
                    Managed estimating, quantity take-offs, and preconstruction documentation across 60+ residential and commercial pool projects, residential houses, and warehouse developments.
                  </p>

                  {/* 4 Project Categories Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    {deepblueeCategories.map((cat) => (
                      <div
                        key={cat.name}
                        className="p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-center"
                      >
                        <div className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#E0E0E0] font-manrope">
                          {cat.name}
                        </div>
                        <div className="text-[9px] font-space text-[#FF5600]">
                          {cat.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Cards */}
                <div className="flex flex-col gap-3">
                  {deepblueeScopes.map((scope) => (
                    <div
                      key={scope.category}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]"
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <Layers className="w-3.5 h-3.5 text-[#FF5600]" />
                        <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                          {scope.category}
                        </h4>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {scope.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5600] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 animate-subtle-fade-in">
                {/* Coquilla Company Header Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1]">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.08] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                        Coquilla Engineering Consultancy
                      </h3>
                      <p className="text-xs text-[#FF5600] font-space font-medium">
                        Civil Engineer & Project Estimator
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-space text-[#4A4A4A] dark:text-[#9E9E9E]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5600]" />
                      <span>Engineering Consultancy</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-relaxed mt-3">
                    Conducted feasibility cost studies, government public tender biddings, regulatory compliance certifications, and structural site inspections for commercial and institutional projects.
                  </p>

                  {/* 4 Categories */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    {coquillaCategories.map((cat) => (
                      <div
                        key={cat.name}
                        className="p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-center"
                      >
                        <div className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#E0E0E0] font-manrope">
                          {cat.name}
                        </div>
                        <div className="text-[9px] font-space text-[#FF5600]">
                          {cat.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Cards */}
                <div className="flex flex-col gap-3">
                  {coquillaScopes.map((scope) => (
                    <div
                      key={scope.category}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]"
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <Award className="w-3.5 h-3.5 text-[#FF5600]" />
                        <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                          {scope.category}
                        </h4>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {scope.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5600] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Content Navigation Invitation to Next Framework */}
            {onNavigateSection && (
              <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-[#FF5600]/10 to-transparent border border-[#FF5600]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-space text-[#FF5600] font-bold uppercase tracking-wider block">
                    Completed Exploring Experience?
                  </span>
                  <p className="text-xs font-manrope text-[#3A3A3A] dark:text-[#E0E0E0] font-medium">
                    Next: Inspect the 8-Stage Estimating Flow & 4-Discipline Software Rig.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateSection(3)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white font-manrope font-bold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
