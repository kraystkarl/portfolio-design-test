import React, { useState } from 'react';
import { 
  Calculator, 
  FolderKanban, 
  PenTool, 
  FileText, 
  Sparkles,
  Layers,
  ChevronRight,
  CheckCircle2,
  Table,
  Sliders,
  Check,
  MousePointerClick,
  ArrowRight
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
  const [activeTab, setActiveTab] = useState<'methodology' | 'software' | 'comparison'>('methodology');
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState<number>(0);

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
          name: 'Buildxact',
          role: 'Residential Estimating & Quoting',
          badge: 'SMB Workflows',
          logo: '/assets/software/buildxact-logo.png',
        },
        {
          name: 'Microsoft Excel',
          role: 'BOQ, QC Matrix & Audit Lineage',
          badge: 'Dynamic Formulas',
          logo: '/assets/software/excel-logo.png',
        },
      ],
    },
    {
      id: 'cad',
      code: '02',
      title: 'CAD, BIM & 3D Drafting',
      shortName: 'CAD & 3D',
      scopeSummary: 'Plan drafting, cross-section checks & geometric verification',
      icon: PenTool,
      tools: [
        {
          name: 'AutoCAD',
          role: '2D Drafting & Measurement Verification',
          badge: 'Core CAD Engine',
          logo: '/assets/software/autocad-logo.png',
        },
        {
          name: 'SketchUp',
          role: '3D Volume & Elevation Visualization',
          badge: 'Spatial Context',
          logo: '/assets/software/sketchup-logo.png',
        },
        {
          name: 'Autodesk Revit',
          role: 'BIM Component Review & Schedules',
          badge: 'Model Extraction',
          logo: '/assets/software/revit-logo.png',
        },
        {
          name: 'Blender',
          role: 'Architectural Mesh & Geometry',
          badge: 'Specialized 3D',
          logo: '/assets/software/blender-logo.png',
        },
      ],
    },
    {
      id: 'pm',
      code: '03',
      title: 'Project Management & Tracking',
      shortName: 'Project Mgmt',
      scopeSummary: 'Milestone tracking, procurement scheduling & team alignment',
      icon: FolderKanban,
      tools: [
        {
          name: 'MS Project',
          role: 'Critical Path & Gantt Scheduling',
          badge: 'Timeline Control',
          logo: '/assets/software/msproject-logo.png',
        },
        {
          name: 'ClickUp',
          role: 'Task Delegation & Estimating Backlog',
          badge: 'Team Coordination',
          logo: '/assets/software/clickup-logo.png',
        },
        {
          name: 'Notion',
          role: 'Knowledge Base & Scope Documentation',
          badge: 'SOP Repository',
          logo: '/assets/software/notion-logo.png',
        },
        {
          name: 'Slack',
          role: 'Real-Time Contractor & Team Comms',
          badge: 'Async Channels',
          logo: '/assets/software/slack-logo.png',
        },
      ],
    },
    {
      id: 'docs',
      code: '04',
      title: 'Coordination & Handoff',
      shortName: 'Coordination',
      scopeSummary: 'Client presentation, PDF flattening & audit reporting',
      icon: FileText,
      tools: [
        {
          name: 'Adobe Acrobat Pro',
          role: 'PDF Flattening & Security Audits',
          badge: 'Package Delivery',
          logo: '/assets/software/adobe-logo.png',
        },
        {
          name: 'Google Workspace',
          role: 'Live Collaborative Estimating Sheets',
          badge: 'Cloud Sync',
          logo: '/assets/software/google-workspace-logo.png',
        },
        {
          name: 'Canva Pro',
          role: 'Visual Cover Sheets & Proposals',
          badge: 'Client Handoff',
          logo: '/assets/software/canva-logo.png',
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
      className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-28 sm:pb-32 overflow-hidden"
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

            {/* 3 Main Views Switcher with Clear Interactive Invitation */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-space text-[#FF5600] uppercase font-bold tracking-wider">
                  <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                  <span>Click Tabs to Switch Framework Context:</span>
                </span>
                <span className="text-[10px] font-manrope text-[#7A7A7A] dark:text-[#8E8E8E]">
                  3 Frameworks
                </span>
              </div>

              <div className="flex flex-col gap-2 p-2 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border-2 border-[#FF5600]/30 dark:border-[#FF5600]/40 shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveTab('methodology')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                    activeTab === 'methodology'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold">01 · 8-Stage Estimating Flow</span>
                    <span className={`text-[10px] font-space ${activeTab === 'methodology' ? 'text-white/90' : 'text-[#FF5600]'}`}>
                      {activeTab === 'methodology' ? '✓ Currently Viewing (8 Steps)' : '👉 Click to View Protocol Steps'}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeTab === 'methodology' ? 'text-white' : 'text-[#FF5600]'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('software')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                    activeTab === 'software'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold">02 · Software Rig (4 Disciplines)</span>
                    <span className={`text-[10px] font-space ${activeTab === 'software' ? 'text-white/90' : 'text-[#FF5600]'}`}>
                      {activeTab === 'software' ? '✓ Currently Viewing (15 Tools)' : '👉 Click to View 4 Tool Disciplines'}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeTab === 'software' ? 'text-white' : 'text-[#FF5600]'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('comparison')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-manrope font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                    activeTab === 'comparison'
                      ? 'bg-[#FF5600] text-white shadow-md'
                      : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold">03 · PlanSwift vs Bluebeam Matrix</span>
                    <span className={`text-[10px] font-space ${activeTab === 'comparison' ? 'text-white/90' : 'text-[#FF5600]'}`}>
                      {activeTab === 'comparison' ? '✓ Currently Viewing (Comparison)' : '👉 Click to View Feature Matrix'}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeTab === 'comparison' ? 'text-white' : 'text-[#FF5600]'}`} />
                </button>
              </div>

              {/* Exploration Hint */}
              <div className="p-3 rounded-xl bg-[#FF5600]/[0.06] border border-[#FF5600]/20 flex items-start gap-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5600] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-manrope text-[#5A5A5A] dark:text-[#B0B0B0] leading-relaxed">
                  <strong className="text-[#1A1A1A] dark:text-[#F4F4F1]">Interactive Explorer:</strong> Click through all 3 tabs to understand the QA pipeline, the software stack across disciplines, and why Bluebeam/PlanSwift are chosen for specific scopes.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Scrollable Content Panel (Christoph Nagel .content-panel) */}
          <div className="lg:col-span-7 w-full max-h-[calc(100dvh-10rem)] overflow-y-auto pr-1 sm:pr-3 panel-scrollbar flex flex-col gap-3">
            
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

            {/* VIEW 2: Software Rig (4 Disciplines) */}
            {activeTab === 'software' && (
              <div className="flex flex-col gap-3.5 animate-subtle-fade-in">
                {/* 4 Discipline Tabs with Invitation */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-space text-[#FF5600] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                    <span>Click Discipline Tabs to Switch Toolset:</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08]">
                    {softwareCategories.map((cat, idx) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveDisciplineIndex(idx)}
                        className={`py-2 px-2 rounded-xl text-[11px] font-manrope font-bold transition-all cursor-pointer text-center truncate ${
                          activeDisciplineIndex === idx
                            ? 'bg-[#FF5600] text-white shadow-xs'
                            : 'text-[#4A4A4A] dark:text-[#9E9E9E] hover:text-black dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.04]'
                        }`}
                      >
                        <span>{cat.shortName}</span>
                        {activeDisciplineIndex === idx && <span className="text-[9px] block text-white/80">Active</span>}
                      </button>
                    ))}
                  </div>
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
                                  // Fallback icon if logo image not found
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

            {/* VIEW 3: PlanSwift vs Bluebeam Comparison Matrix */}
            {activeTab === 'comparison' && (
              <div className="flex flex-col gap-3 animate-subtle-fade-in">
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                  <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#F4F4F1] font-manrope mb-1">
                    PlanSwift vs. Bluebeam Revu in My Estimating Rig
                  </h4>
                  <p className="text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-relaxed">
                    Both tools serve complementary roles in my workflow. PlanSwift excels in high-speed commercial assembly take-offs, while Bluebeam is the gold standard for vectorized PDF drawing markups, RFI callouts, and client audit trails.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-manrope border-collapse border border-black/[0.06] dark:border-white/[0.08] rounded-xl overflow-hidden">
                    <thead className="bg-black/[0.04] dark:bg-white/[0.06] text-[#1A1A1A] dark:text-[#F4F4F1] font-space">
                      <tr>
                        <th className="p-2.5 border-b border-black/[0.06] dark:border-white/[0.08]">Workflow Criterion</th>
                        <th className="p-2.5 border-b border-black/[0.06] dark:border-white/[0.08] text-[#FF5600]">PlanSwift</th>
                        <th className="p-2.5 border-b border-black/[0.06] dark:border-white/[0.08] text-[#FF5600]">Bluebeam Revu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.05] text-[#4A4A4A] dark:text-[#9E9E9E]">
                      <tr>
                        <td className="p-2.5 font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Primary Application</td>
                        <td className="p-2.5">Assembly & multi-item formula take-offs (3 yrs at DeepBluee)</td>
                        <td className="p-2.5">Drawing calibration, vector polygon markups & audit handoff</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Plan Calibration</td>
                        <td className="p-2.5">X and Y axis calibration across architectural sheets</td>
                        <td className="p-2.5">Vector dimension snap & multi-page calibration checks</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Markups & Visuals</td>
                        <td className="p-2.5">High-speed parts breakdown and area polygons</td>
                        <td className="p-2.5">Color-coded visual layers, cloud callouts & RFI stamps</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Spreadsheet Export</td>
                        <td className="p-2.5">Direct Excel integration via Live Links & templates</td>
                        <td className="p-2.5">CSV Markups List export with ID traceability to Excel BOQ</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-[#1A1A1A] dark:text-[#E0E0E0]">Quality Control</td>
                        <td className="p-2.5">Internal itemized audit tree verification</td>
                        <td className="p-2.5">Reconciliation matrix comparing take-off sums to final BOQ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* In-Content Navigation Invitation to Next Section */}
            {onNavigateSection && (
              <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-[#FF5600]/10 to-transparent border border-[#FF5600]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-space text-[#FF5600] font-bold uppercase tracking-wider block">
                    Completed Exploring Methodology?
                  </span>
                  <p className="text-xs font-manrope text-[#3A3A3A] dark:text-[#E0E0E0] font-medium">
                    Next: Inspect the interactive 6-phase drawing audit pack & high-res PDFs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateSection(4)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white font-manrope font-bold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Inspect Proof of Work</span>
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
