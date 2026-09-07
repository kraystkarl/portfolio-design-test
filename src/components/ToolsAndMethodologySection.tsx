import React, { useState } from 'react';
import { 
  Calculator, 
  FolderKanban, 
  PenTool, 
  MessageSquare,
  FileText, 
  Sparkles,
  ChevronRight,
  Check
} from 'lucide-react';
import { MethodologyStep } from '../types';

interface SoftwareItem {
  name: string;
  role: string;
  badge?: string;
  logo: string;
}

interface SoftwareCategory {
  id: string;
  code: string;
  title: string;
  shortName: string;
  scopeSummary: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: SoftwareItem[];
}

interface ToolsAndMethodologySectionProps {
  onNavigateSection?: (index: number) => void;
}

export const ToolsAndMethodologySection: React.FC<ToolsAndMethodologySectionProps> = ({ onNavigateSection }) => {
  const [activeTab, setActiveTab] = useState<'methodology' | 'software'>('software');
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState<number>(0);

  // Original software stack from repository origin (6 disciplines & authentic tools)
  const softwareCategories: SoftwareCategory[] = [
    {
      id: 'estimating',
      code: '01',
      title: 'Estimating & Quantity Take-off',
      shortName: 'Estimating',
      scopeSummary: 'Plan calibration, digital take-offs, BOQ derivations & formula lineage',
      icon: Calculator,
      tools: [
        {
          name: 'PlanSwift',
          role: 'Commercial Take-offs (3 Yrs)',
          badge: 'DeepBluee (60+ Projects)',
          logo: '/assets/software/planswift-logo.png',
        },
        {
          name: 'Bluebeam Revu',
          role: 'Digital Take-offs & Markups',
          badge: 'Proof Pack Calibration',
          logo: '/assets/software/bluebeam-logo.png',
        },
        {
          name: 'Microsoft Excel',
          role: 'BOQ & Calculation Lineage',
          badge: 'Dynamic Formula Arrays',
          logo: '/assets/software/excel-logo.svg',
        },
      ],
    },
    {
      id: 'coordination',
      code: '02',
      title: 'Project Coordination',
      shortName: 'Coordination',
      scopeSummary: 'Cross-functional alignment, subcontractor tracking & milestone schedules',
      icon: FolderKanban,
      tools: [
        {
          name: 'Google Workspace',
          role: 'Cloud Sheets & Team Collab',
          badge: 'Real-Time Sharing',
          logo: '/assets/software/google-workspace-logo.svg',
        },
        {
          name: 'Microsoft Excel',
          role: 'Project Tracking & Schedules',
          badge: 'Milestone Matrices',
          logo: '/assets/software/excel-logo.svg',
        },
      ],
    },
    {
      id: 'design',
      code: '03',
      title: 'Design & Rendering',
      shortName: 'Design & 3D',
      scopeSummary: '2D blueprint drafting, 3D structural modeling & architectural renders',
      icon: PenTool,
      tools: [
        {
          name: 'AutoCAD',
          role: '2D Construction Drawings',
          badge: 'Plans & Section Cuts',
          logo: '/assets/software/autocad-logo.svg',
        },
        {
          name: 'SketchUp',
          role: '3D Spatial Modeling',
          badge: 'Volumetric Layouts',
          logo: '/assets/software/sketchup-logo.svg',
        },
        {
          name: 'Lumion',
          role: 'Architectural Rendering',
          badge: 'Photorealistic Visuals',
          logo: '/assets/software/lumion-logo.svg',
        },
      ],
    },
    {
      id: 'communication',
      code: '04',
      title: 'Communication & Collaboration',
      shortName: 'Communication',
      scopeSummary: 'Contractor coordination, video conferencing & formal RFI records',
      icon: MessageSquare,
      tools: [
        {
          name: 'Zoom',
          role: 'Video Conferences & Briefs',
          badge: 'Screen Shares',
          logo: '/assets/software/zoom-logo.svg',
        },
        {
          name: 'Google Meet',
          role: 'Client & Virtual Meetings',
          badge: 'Team Syncs',
          logo: '/assets/software/meet-logo.svg',
        },
        {
          name: 'Microsoft Teams',
          role: 'Contractor & Team Hub',
          badge: 'Enterprise Collab',
          logo: '/assets/software/teams-logo.svg',
        },
        {
          name: 'WhatsApp',
          role: 'Direct Messaging & Site Comms',
          badge: 'Field Comms',
          logo: '/assets/software/whatsapp-logo.svg',
        },
        {
          name: 'Gmail',
          role: 'Official Correspondence & RFIs',
          badge: 'Tender Submissions',
          logo: '/assets/software/gmail-logo.svg',
        },
      ],
    },
    {
      id: 'productivity',
      code: '05',
      title: 'Documentation & Productivity',
      shortName: 'Productivity',
      scopeSummary: 'Technical specifications, presentation decks, cloud archives & schedules',
      icon: FileText,
      tools: [
        {
          name: 'Microsoft Word',
          role: 'Technical Specs & Contracts',
          badge: 'Specification Docs',
          logo: '/assets/software/word-logo.svg',
        },
        {
          name: 'PowerPoint',
          role: 'Tender & Client Presentations',
          badge: 'Executive Decks',
          logo: '/assets/software/powerpoint-logo.svg',
        },
        {
          name: 'Google Drive',
          role: 'Cloud Archive & File Vault',
          badge: 'Permission Control',
          logo: '/assets/software/drive-logo.svg',
        },
        {
          name: 'Google Calendar',
          role: 'Tender Deadlines & Milestones',
          badge: 'Bid Milestones',
          logo: '/assets/software/calendar-logo.svg',
        },
        {
          name: 'Canva',
          role: 'Visual Reports & Collateral',
          badge: 'Graphic Layouts',
          logo: '/assets/software/canva-logo.svg',
        },
      ],
    },
    {
      id: 'hobbies',
      code: '06',
      title: 'Hobbies & Creative Media',
      shortName: 'Hobbies & Media',
      scopeSummary: 'Video editing, multi-track color grading, visual branding & AI agents',
      icon: Sparkles,
      tools: [
        {
          name: 'Adobe Premiere Pro',
          role: 'Video Editing & Timelines',
          badge: 'Post-Production',
          logo: '/assets/software/premiere-logo.svg',
        },
        {
          name: 'DaVinci Resolve',
          role: 'Color Grading & Post-Production',
          badge: 'Color Science',
          logo: '/assets/software/davinci-logo.svg',
        },
        {
          name: 'Canva',
          role: 'Graphic Layouts & Creative Design',
          badge: 'Visual Identity',
          logo: '/assets/software/canva-logo.svg',
        },
        {
          name: 'AI Tools & Agents',
          role: 'Prompting & Workflow Automation',
          badge: 'Efficiency Multipliers',
          logo: '/assets/software/ai-tools-logo.svg',
        },
      ],
    },
  ];

  const methodologySteps: MethodologyStep[] = [
    {
      number: '01',
      title: 'Drawing Receipt & Scope Verification',
      shortDesc: 'Log all sheets, compare revisions, and flag missing callouts.',
      details: [
        'Establish drawing register and cross-check architectural vs structural revisions.',
        'Catalog tender scope boundaries and identify unmeasured trade interfaces.',
        'Document tender qualifications and client specifications into project record.',
      ],
    },
    {
      number: '02',
      title: 'Scale Verification & Calibration',
      shortDesc: 'Calibrate every sheet against known dimensions before measuring.',
      details: [
        'Verify door openings and grid dimensions in PlanSwift or Bluebeam Revu.',
        'Calibrate individual sheets separately to prevent non-uniform scaling errors.',
        'Document scale confirmation in evidence index before any polygon is drawn.',
      ],
    },
    {
      number: '03',
      title: 'Trade-by-Trade Digital Take-Off',
      shortDesc: 'Color-coded digital polygons with exact measurement types.',
      details: [
        'Partition measurements into distinct subject layers (Landscape, Doors, Finishes, Roof).',
        'Capture net area, gross area, perimeter lengths, and discrete unit counts.',
        'Export structured markups summary with unique IDs for spreadsheet lineage.',
      ],
    },
    {
      number: '04',
      title: 'RFI Log & Precon Clarifications',
      shortDesc: 'Document discrepancies and missing callouts before pricing.',
      details: [
        'Formulate itemized Request for Information (RFI) for contractor review.',
        'Highlight drawing ambiguities, conflicting notes, and schedule mismatches.',
        'Attach plan callout snippets to accelerate client design resolution.',
      ],
    },
    {
      number: '05',
      title: 'Calculation Lineage & Formula Audit',
      shortDesc: 'Every formula traceable to measured plan polygons.',
      details: [
        'Calculate roof pitch multipliers and perimeter allowances with documented formulas.',
        'Apply trade-standard waste factors transparently without hiding constants.',
        'Establish direct formula lineage from digital takeoff values to pricing sheets.',
      ],
    },
    {
      number: '06',
      title: 'Bill of Quantities (BOQ) Assembly',
      shortDesc: 'Structured trade packages formatted to standard CSI/MasterFormat.',
      details: [
        'Compile trade-by-trade BOQ with clear measurement units (m², m³, linear, count).',
        'Incorporate itemized material breakdowns, equipment allowances, and labor rates.',
        'Include summary sheets with subtotal rollups and contingency reserves.',
      ],
    },
    {
      number: '07',
      title: 'Quality Control Reconciliation Matrix',
      shortDesc: 'Zero-variance reconciliation between markups and final BOQ.',
      details: [
        'Reconcile raw markup polygon sums directly against final BOQ line quantities.',
        'Perform perimeter-to-area logic checks to verify geometric consistency.',
        'Document QA approval checklist with sign-off date and verified status.',
      ],
    },
    {
      number: '08',
      title: 'Audit Package & Deliverable Handoff',
      shortDesc: 'Flattened PDFs, editable Excel workbooks, and evidence index.',
      details: [
        'Package marked-up PDFs, editable Excel BOQs, and CSV traceability files.',
        'Provide drawing register, documented qualifications, and RFI response tracking.',
        'Deliver a review-ready handoff package ready for immediate client tender submission.',
      ],
    },
  ];

  return (
    <section
      id="methodology"
      className="relative min-h-full w-full flex flex-col justify-center py-6 sm:py-10 lg:py-12"
    >
      {/* Background CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-radial from-[#FF5600]/[0.03] dark:from-[#FF5600]/[0.05] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Section Kicker, Heading & Navigation Switcher */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Christoph Nagel Section Kicker */}
            <div className="flex items-center gap-3">
              <span className="section-kicker">
                <span className="kicker-badge">03</span>
                <span>TOOLS & METHODOLOGY · PRECISION PROTOCOL</span>
              </span>
            </div>

            {/* Bold Impact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A1A1A] dark:text-[#F4F4F1] leading-[1.02] tracking-tight uppercase">
              STRUCTURED PROTOCOL. <span className="text-[#FF5600]">ZERO-VARIANCE</span> TAKE-OFFS.
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#9E9E9E] leading-relaxed font-manrope">
              Every estimate follows an 8-stage verification pipeline—calibrating plans, isolating trades, documenting RFIs, and reconciling take-offs with zero variance.
            </p>

            {/* Minimalist 2-Button View Switcher (01 Software Stack first, 02 8-Stage Flow second) */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex flex-col gap-2 p-1.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('software')}
                  className={`py-3 px-3.5 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                    activeTab === 'software'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">01 · Software Stack (6 Disciplines)</span>
                    <span className={`text-[10px] font-space mt-0.5 ${activeTab === 'software' ? 'text-white/90' : 'text-[#7A7A7A] dark:text-[#9E9E9E]'}`}>
                      Estimating, Coordination, CAD & Production
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeTab === 'software' ? 'text-white' : 'text-[#7A7A7A] dark:text-[#9E9E9E]'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('methodology')}
                  className={`py-3 px-3.5 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                    activeTab === 'methodology'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">02 · 8-Stage Estimating Flow</span>
                    <span className={`text-[10px] font-space mt-0.5 ${activeTab === 'methodology' ? 'text-white/90' : 'text-[#7A7A7A] dark:text-[#9E9E9E]'}`}>
                      Standard Operating Procedure
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeTab === 'methodology' ? 'text-white' : 'text-[#7A7A7A] dark:text-[#9E9E9E]'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Content Panel */}
          <div className="lg:col-span-7 w-full flex flex-col gap-3">
            
            {/* VIEW 1: 8-Stage Estimating Flow */}
            {activeTab === 'methodology' && (
              <div className="flex flex-col gap-3 animate-subtle-fade-in">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                    8-Stage Quality Control Protocol
                  </span>
                  <span className="text-[10px] font-space text-[#FF5600] uppercase font-semibold">
                    Step-by-Step Rigor
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {methodologySteps.map((step) => (
                    <div
                      key={step.number}
                      className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#FF5600]/40 transition-all"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-space text-xs font-bold text-[#FF5600] px-2 py-0.5 rounded-md bg-[#FF5600]/10 border border-[#FF5600]/25">
                          {step.number}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope mb-2">
                        {step.shortDesc}
                      </p>
                      <ul className="flex flex-col gap-1 pt-1.5 border-t border-black/[0.04] dark:border-white/[0.05]">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope"
                          >
                            <Check className="w-3 h-3 text-[#FF5600] flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 2: Software Rig (6 Disciplines) */}
            {activeTab === 'software' && (
              <div className="flex flex-col gap-3.5 animate-subtle-fade-in">
                {/* 6 Discipline Grid Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08]">
                  {softwareCategories.map((cat, idx) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveDisciplineIndex(idx)}
                      className={`py-2 px-2.5 rounded-xl text-[11px] font-manrope font-bold transition-all cursor-pointer text-center truncate ${
                        activeDisciplineIndex === idx
                          ? 'bg-[#FF5600] text-white shadow-xs'
                          : 'text-[#4A4A4A] dark:text-[#9E9E9E] hover:text-black dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{cat.shortName}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Discipline Tools */}
                {(() => {
                  const currentCategory = softwareCategories[activeDisciplineIndex];
                  const Icon = currentCategory.icon;
                  return (
                    <div className="flex flex-col gap-3">
                      <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#FF5600]" />
                          <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope">
                            {currentCategory.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope mt-1">
                          {currentCategory.scopeSummary}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentCategory.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-2.5"
                          >
                            <div className="flex items-center gap-2.5">
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-black/10 shadow-2xs"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                              <div>
                                <div className="text-xs font-bold text-[#1A1A1A] dark:text-[#E0E0E0] font-manrope">
                                  {tool.name}
                                </div>
                                <div className="text-[10px] text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope">
                                  {tool.role}
                                </div>
                              </div>
                            </div>

                            {tool.badge && (
                              <span className="text-[9px] font-space text-[#FF5600] bg-[#FF5600]/10 border border-[#FF5600]/25 px-2 py-0.5 rounded-md whitespace-nowrap">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
