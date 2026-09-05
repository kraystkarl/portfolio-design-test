import React, { useState } from 'react';
import {
  CheckCircle2,
  ZoomIn,
  ChevronRight,
  Layers,
  ShieldCheck,
  Maximize2,
  FileText,
  Image as ImageIcon,
  Check,
  MousePointerClick,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProofStepItem } from '../types';
import { PdfCanvasViewer } from './PdfCanvasViewer';

interface ProofSectionProps {
  onInspectDocument: (item: {
    src: string;
    title: string;
    category?: string;
    description?: string;
    isPdf?: boolean;
    pages?: number;
  }) => void;
  onNavigateSection?: (index: number) => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onInspectDocument, onNavigateSection }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeTakeoffSubIndex, setActiveTakeoffSubIndex] = useState(0);

  const proofSteps: ProofStepItem[] = [
    {
      id: 'step-01',
      stepNumber: '01',
      name: 'TAKE-OFF',
      tool: 'Bluebeam Revu',
      title: 'Plan Calibration & Digital Quantity Take-Offs',
      description: 'Scale verification across architectural sheets and digital polygon take-offs for landscape areas, floor/ceiling finishes, door/window counts, roofing pitch, and linear perimeters.',
      storyContext: {
        unclearOrGoal: 'Calibrate drawing scale accurately and measure all architectural components directly from vectorized PDF sheets.',
        actionTaken: 'Set calibrated dimensions on plan views; generated dedicated subject layers for landscape areas, door/window counts, ceiling/floor finishes, roof geometry, and cornice perimeters.',
        outcome: 'Precision quantities captured in Bluebeam Markups List ready for export with exact measurement types and visual redline boundaries.',
      },
      images: [
        {
          src: '/assets/proof/plan-calibration.jpg',
          title: 'Plan Calibration Verification',
          category: 'Bluebeam Revu · Scale Setting',
          description: 'Verifying known dimension scale before measuring to guarantee 100% geometric accuracy.',
        },
        {
          src: '/assets/proof/area-takeoff-landscape.jpg',
          title: 'Landscape & External Area Take-Off',
          category: 'Bluebeam Revu · Area Polygon',
          description: 'Color-coded area markups for softscape, hardscape, pavements, and garden boundaries.',
        },
        {
          src: '/assets/proof/count-takeoff-doors-windows.jpg',
          title: 'Door & Window Count Take-Off',
          category: 'Bluebeam Revu · Count Markups',
          description: 'Exact itemized schedule counting for internal/external doors, aluminium windows, and glazing.',
        },
        {
          src: '/assets/proof/area-takeoff-ceiling-floor.jpg',
          title: 'Ceiling & Floor Finishes Take-Off',
          category: 'Bluebeam Revu · Area Measurements',
          description: 'Room-by-room area take-offs for ceramic tile, timber flooring, and plasterboard ceiling linings.',
        },
        {
          src: '/assets/proof/roofing-take-off.jpg',
          title: 'Roofing Geometry & Pitch Take-Off',
          category: 'Bluebeam Revu · Rafter & Sheeting',
          description: 'Calculating plan roof areas and applying slope pitch multipliers for roof sheeting and insulation.',
        },
      ],
    },
    {
      id: 'step-02',
      stepNumber: '02',
      name: 'CALCULATION',
      tool: 'Microsoft Excel',
      title: 'Quantity Derivation & Formula Calculations',
      description: 'Translating raw measured values into true purchase and installation quantities by applying slope multipliers, pitch factors, and standard material waste percentages.',
      storyContext: {
        unclearOrGoal: 'Plan measurements represent flat nominal dimensions; actual material procurement requires slope adjustments and waste factors.',
        actionTaken: 'Built dynamic Excel formulas converting measured Bluebeam markup areas into derived quantities (e.g. Roof Area × Pitch Factor 1.05 + 8% Waste).',
        outcome: 'Transparent, formula-linked lineage from raw drawing measurement to calculated trade quantity.',
      },
      images: [
        {
          src: '/pdfs/06_CSV_Traceability.pdf',
          title: 'Formula Derivation & Quantity Calculations',
          category: 'Excel Pack · Calculation Lineage',
          description: 'Direct CSV takeoff support and formula derivation tracing raw Bluebeam export rows (lengths, areas, counts) into intermediate computation roles and final BOQ quantities with zero variance.',
          isPdf: true,
          pages: 1,
        },
      ],
    },
    {
      id: 'step-03',
      stepNumber: '03',
      name: 'BOQ',
      tool: 'Microsoft Excel',
      title: 'Bill of Quantities (BOQ – Reviewed)',
      description: 'Structured, trade-by-trade BOQ organizing quantities into standardized line items, clear work descriptions, measurement units, unit rates, and total amounts.',
      storyContext: {
        unclearOrGoal: 'Transform derived quantities into an industry-standard format ready for pricing, contractor bidding, and client review.',
        actionTaken: 'Formatted quantities into itemized trade divisions (Demolition, Concrete, Carpentry, Finishes, Doors/Windows) with standardized descriptions and units.',
        outcome: 'A comprehensive, reviewed Bill of Quantities providing full transparency for tenders and budget approvals.',
      },
      images: [
        {
          src: '/pdfs/01_BOQ_Reviewed.pdf',
          title: 'BOQ Reviewed · Main Bill of Quantities',
          category: 'Excel Pack · Trade BOQ',
          description: 'Complete 3-page audited Bill of Quantities covering 11 architectural trade divisions with source lineage formulas and verification audit statuses.',
          isPdf: true,
          pages: 3,
        },
      ],
    },
    {
      id: 'step-04',
      stepNumber: '04',
      name: 'RFI',
      tool: 'Microsoft Excel',
      title: 'Request for Information (RFI – Demonstration)',
      description: 'Documenting plan queries and schedule discrepancies (e.g. door schedule contradictions between architectural floor plan and door schedule notes) to eliminate estimating ambiguity.',
      storyContext: {
        unclearOrGoal: 'Floor plan callouts indicated 900mm wide doors, while the door schedule specified 800mm leaf dimensions.',
        actionTaken: 'Logged an itemized RFI referencing drawing sheet numbers, pinpointing the contradiction, and proposing a documented basis of estimate pending clarification.',
        outcome: 'Preconstruction risk mitigated by eliminating guesswork before tender finalization.',
      },
      images: [
        {
          src: '/pdfs/03_RFI_Demonstration.pdf',
          title: 'RFI Demonstration · Door Schedule Discrepancy',
          category: 'Excel Pack · Preconstruction RFI',
          description: 'Itemized formal Request for Information highlighting conflicting architectural plan callouts vs door schedule dimensions.',
          isPdf: true,
          pages: 1,
        },
      ],
    },
    {
      id: 'step-05',
      stepNumber: '05',
      name: 'QC',
      tool: 'Microsoft Excel',
      title: 'Quality Control Reconciliation Matrix',
      description: 'Side-by-side reconciliation table verifying that all raw take-off quantities match the final BOQ totals with zero variance.',
      storyContext: {
        unclearOrGoal: 'Ensure no quantity was omitted, doubled, or miscalculated during the transfer from digital markup to pricing spreadsheet.',
        actionTaken: 'Created a cross-checking reconciliation matrix comparing raw Bluebeam layer totals against final BOQ line quantities with automated variance flags.',
        outcome: 'Zero-variance confirmation and verified audit trail before tender submission.',
      },
      images: [
        {
          src: '/pdfs/04_QC_Reconciliation.pdf',
          title: 'QC Reconciliation Matrix · Zero Variance Audit',
          category: 'Excel Pack · Quality Assurance',
          description: 'Side-by-side audit matrix reconciling raw takeoff sums against final BOQ line item quantities.',
          isPdf: true,
          pages: 1,
        },
      ],
    },
    {
      id: 'step-06',
      stepNumber: '06',
      name: 'TRACEABILITY',
      tool: 'Microsoft Excel / CSV',
      title: 'CSV Takeoff Support & Audit Lineage',
      description: 'Direct mapping showing how every single Bluebeam markup row maps to its corresponding row in the pricing sheet.',
      storyContext: {
        unclearOrGoal: 'Provide an unbreakable audit trail so any client or commercial director can trace every penny back to a specific vector polygon.',
        actionTaken: 'Exported structured CSV markups data, maintaining unique Bluebeam Markup IDs and linking them directly into the Excel workbook columns.',
        outcome: 'Complete mathematical transparency and instant auditability for every single line item in the tender.',
      },
      images: [
        {
          src: '/pdfs/06_CSV_Traceability.pdf',
          title: 'CSV Takeoff Support · Full Traceability Audit',
          category: 'Excel Pack · Audit Trail',
          description: 'Direct CSV takeoff support mapping individual Bluebeam markup IDs directly into pricing workbook columns.',
          isPdf: true,
          pages: 1,
        },
      ],
    },
  ];

  const currentStep = proofSteps[activeStepIndex];
  const isTakeoffStep = activeStepIndex === 0;

  return (
    <section
      id="proof"
      className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-28 sm:pb-32 overflow-hidden"
    >
      {/* Background CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-radial from-[#FF5600]/[0.03] dark:from-[#FF5600]/[0.05] to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Section Kicker, Headings, Highlights & Phase Selector */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Christoph Nagel Section Kicker */}
            <div className="flex items-center gap-3">
              <span className="section-kicker">
                <span className="kicker-badge">04</span>
                <span>ESTIMATING PROOF · THE 6-PHASE AUDIT PACK</span>
              </span>
            </div>

            {/* Bold Impact Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A1A1A] dark:text-[#F4F4F1] leading-[1.02] tracking-tight uppercase">
              INTERACTIVE PROOF & <span className="text-[#FF5600]">DRAWING INSPECTION</span>.
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#9E9E9E] leading-relaxed font-manrope">
              Step through the 6-phase preconstruction workflow: from plan calibration and Bluebeam polygon take-offs to formula derivations, BOQ assembly, RFI logging, and zero-variance QC matrices.
            </p>

            {/* 6 Phase Selector Pills with Clear Exploration Prompt */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-space text-[#FF5600] uppercase font-bold tracking-wider">
                  <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                  <span>Click Phases to Audit Deliverables:</span>
                </span>
                <span className="text-[10px] font-manrope text-[#7A7A7A] dark:text-[#8E8E8E]">
                  6 Precon Steps
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1.5 p-2 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border-2 border-[#FF5600]/30 dark:border-[#FF5600]/40 shadow-inner">
                {proofSteps.map((step, idx) => {
                  const phaseTags = [
                    '5 Bluebeam Drawings',
                    'Derivation Lineage PDF',
                    '3-Page BOQ Sheet',
                    'RFI Question Log',
                    'QC Variance Matrix',
                    'CSV Source Trail'
                  ];
                  const isCurrent = activeStepIndex === idx;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => {
                        setActiveStepIndex(idx);
                        if (idx === 0) setActiveTakeoffSubIndex(0);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col gap-0.5 relative ${
                        isCurrent
                          ? 'bg-[#FF5600] text-white shadow-md'
                          : 'text-[#4A4A4A] dark:text-[#B0B0B0] hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-space text-[10px] font-bold opacity-85">
                          PHASE {step.stepNumber}
                        </span>
                        <span className={`text-[8px] font-space px-1.5 py-0.2 rounded ${isCurrent ? 'bg-white/20 text-white' : 'bg-[#FF5600]/10 text-[#FF5600]'}`}>
                          {isCurrent ? 'Active' : 'Click'}
                        </span>
                      </div>
                      <span className="font-manrope text-xs font-bold truncate">
                        {step.name}
                      </span>
                      <span className={`text-[9px] font-manrope truncate ${isCurrent ? 'text-white/80' : 'text-[#777777] dark:text-[#8E8E8E]'}`}>
                        {phaseTags[idx]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Exploration Hint Box */}
              <div className="p-3 rounded-xl bg-[#FF5600]/[0.06] border border-[#FF5600]/20 flex items-start gap-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5600] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-manrope text-[#5A5A5A] dark:text-[#B0B0B0] leading-relaxed">
                  <strong className="text-[#1A1A1A] dark:text-[#F4F4F1]">Audit Pack Explorer:</strong> Click buttons above to inspect the complete 6-phase chain from initial plan calibration and take-offs to formula derivations, BOQ sheets, and reconciliation matrices.
                </p>
              </div>
            </div>

            {/* Quick Context Summary Box */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-space">
                <span className="text-[#FF5600] font-bold">TOOL USED:</span>
                <span className="text-[#1A1A1A] dark:text-[#E0E0E0]">{currentStep.tool}</span>
              </div>
              <p className="text-xs text-[#4A4A4A] dark:text-[#9E9E9E] font-manrope leading-relaxed">
                {currentStep.description}
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Document & Image Inspector Panel */}
          <div className="lg:col-span-7 w-full max-h-[calc(100dvh-10rem)] overflow-y-auto pr-1 sm:pr-3 panel-scrollbar flex flex-col gap-3">
            
            {/* If Phase 01 (Takeoff): 5 Sub-Drawing Markups */}
            {isTakeoffStep ? (
              <div className="flex flex-col gap-3 animate-subtle-fade-in">
                {/* Sub-Tabs for the 5 take-off drawings with clear invitation */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-space text-[#FF5600] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
                    <span>Click Drawing Buttons 1–5 to Switch Trade Markups:</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08]">
                    {currentStep.images.map((img, subIdx) => (
                      <button
                        key={img.title}
                        type="button"
                        onClick={() => setActiveTakeoffSubIndex(subIdx)}
                        className={`py-2 px-2 rounded-xl text-[10px] font-manrope font-bold transition-all cursor-pointer text-center truncate ${
                          activeTakeoffSubIndex === subIdx
                            ? 'bg-[#FF5600] text-white shadow-2xs'
                            : 'text-[#4A4A4A] dark:text-[#9E9E9E] hover:text-black dark:hover:text-white'
                        }`}
                      >
                        <div>Drawing {subIdx + 1}</div>
                        <div className={`text-[8px] truncate ${activeTakeoffSubIndex === subIdx ? 'text-white/80' : 'text-[#777777]'}`}>
                          {['Calibration', 'Landscape', 'Doors/Wins', 'Ceil/Floor', 'Roofing'][subIdx]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Drawing Preview Card */}
                {(() => {
                  const activeImg = currentStep.images[activeTakeoffSubIndex];
                  return (
                    <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-[#0E0E12] shadow-xl flex flex-col">
                      <div className="px-4 py-2.5 bg-[#14141A] border-b border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white font-manrope">
                            {activeImg.title}
                          </div>
                          <div className="text-[10px] font-space text-[#FF5600]">
                            {activeImg.category}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onInspectDocument(activeImg)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FF5600] text-white text-xs font-manrope font-bold hover:bg-[#E04C00] active:scale-95 transition-all shadow-xs cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Inspect Full Screen</span>
                        </button>
                      </div>

                      <div
                        className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/80 flex items-center justify-center p-1 cursor-pointer group"
                        onClick={() => onInspectDocument(activeImg)}
                      >
                        <img
                          src={activeImg.src}
                          alt={activeImg.title}
                          className="max-h-full max-w-full object-contain filter contrast-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-manrope text-xs font-bold backdrop-blur-2xs">
                          <ZoomIn className="w-4 h-4 text-[#FF5600]" />
                          <span>Click to Inspect High-Resolution Drawing</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#121216] border-t border-white/10 text-xs text-white/70 font-manrope">
                        {activeImg.description}
                      </div>
                    </div>
                  );
                })()}

                {/* Workflow Story Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-manrope">
                  <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">01 Goal</div>
                    <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.unclearOrGoal}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">02 Action</div>
                    <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.actionTaken}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">03 Outcome</div>
                    <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.outcome}</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Phases 02 to 06: PDF Documents */
              <div className="flex flex-col gap-3 animate-subtle-fade-in">
                {currentStep.images.map((img) => (
                  <div key={img.title} className="flex flex-col gap-3">
                    <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-[#0E0E12] shadow-xl">
                      <div className="px-4 py-2.5 bg-[#14141A] border-b border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white font-manrope">
                            {img.title}
                          </div>
                          <div className="text-[10px] font-space text-[#FF5600]">
                            {img.category}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onInspectDocument(img)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FF5600] text-white text-xs font-manrope font-bold hover:bg-[#E04C00] active:scale-95 transition-all shadow-xs cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Inspect PDF</span>
                        </button>
                      </div>

                      {/* Embedded Canvas PDF Previewer */}
                      <div className="p-2 bg-[#0A0A0D]">
                        <PdfCanvasViewer
                          url={img.src}
                          title={img.title}
                          maxContainerHeight="380px"
                          onExpand={() => onInspectDocument(img)}
                        />
                      </div>

                      <div className="p-3 bg-[#121216] border-t border-white/10 text-xs text-white/70 font-manrope">
                        {img.description}
                      </div>
                    </div>

                    {/* Story context */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-manrope">
                      <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">01 Goal</div>
                        <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.unclearOrGoal}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">02 Action</div>
                        <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.actionTaken}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="text-[10px] font-space text-[#FF5600] font-bold uppercase mb-1">03 Outcome</div>
                        <p className="text-[#4A4A4A] dark:text-[#9E9E9E]">{currentStep.storyContext.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* In-Content Navigation Invitation to Next Section */}
            {onNavigateSection && (
              <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-[#FF5600]/10 to-transparent border border-[#FF5600]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-space text-[#FF5600] font-bold uppercase tracking-wider block">
                    Completed Auditing Proof Pack?
                  </span>
                  <p className="text-xs font-manrope text-[#3A3A3A] dark:text-[#E0E0E0] font-medium">
                    Next: Review the 6 verified tender deliverables & download options.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateSection(5)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FF5600] hover:bg-[#E04C00] text-white font-manrope font-bold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>View Evidence Pack</span>
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
