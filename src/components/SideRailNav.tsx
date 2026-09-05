import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SideRailNavProps {
  currentIndex: number;
  totalSections: number;
  sectionIds: string[];
  sectionNames: string[];
  viewMode: 'panel' | 'scroll';
  onSelectSection: (index: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const SideRailNav: React.FC<SideRailNavProps> = ({
  currentIndex,
  totalSections,
  sectionIds,
  sectionNames,
  viewMode,
  onSelectSection,
  onPrevious,
  onNext,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSections - 1;
  const prevSectionName = sectionNames[currentIndex - 1] || 'Start';
  const nextSectionName = sectionNames[currentIndex + 1] || 'End';

  return (
    <aside
      id="side-rail-nav"
      style={{
        position: 'fixed',
        right: '1.25rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
      }}
      className="flex flex-col items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#121216]/85 dark:bg-[#0A0A0E]/90 text-white backdrop-blur-xl border border-white/15 dark:border-white/10 shadow-2xl select-none"
      aria-label={viewMode === 'panel' ? 'Slide Deck Navigation' : 'Section Quick Jump'}
    >
      {/* 1. In Slide Mode: UP / PREVIOUS NAVIGATION BUTTON */}
      {viewMode === 'panel' && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirst}
            aria-label={`Previous Section: ${prevSectionName}`}
            className={`group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150 ${
              isFirst
                ? 'opacity-25 cursor-not-allowed text-white/40'
                : 'text-white/80 hover:text-white bg-white/5 hover:bg-[#FF5600] active:scale-95'
            }`}
            title={isFirst ? 'At First Section' : `Back to ${prevSectionName}`}
          >
            <ChevronUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:-translate-y-0.5" />
            
            {/* Left Tooltip */}
            <span className="absolute right-11 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 translate-x-2 group-hover:translate-x-0 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-manrope font-semibold bg-[#121216]/95 text-[#FAFAFA] border border-white/15 shadow-xl flex items-center gap-1.5 z-50">
              <span className="font-space text-[10px] text-[#FF5600] uppercase font-bold">Prev</span>
              <span>{prevSectionName}</span>
            </span>
          </button>

          {/* Subtle Separator */}
          <div className="w-4 h-[1px] bg-white/10 my-0.5" />
        </>
      )}

      {/* 2. SECTION BUTTONS (Identical uniform size in both modes) */}
      <div className="flex flex-col items-center gap-1 sm:gap-1.5">
        {sectionIds.map((id, index) => {
          const isActive = currentIndex === index;
          const name = sectionNames[index] || id;
          const formattedIndex = String(index).padStart(2, '0');

          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectSection(index)}
              className={`group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150 ${
                isActive
                  ? 'bg-[#FF5600] text-white shadow-[0_0_14px_rgba(255,86,0,0.65)]'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`Go to section ${index + 1}: ${name}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {viewMode === 'panel' ? (
                /* Slide Mode: Numbers for fast visual indexing */
                <span
                  className={`font-space text-[10px] sm:text-[11px] font-bold tracking-tight ${
                    isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                  }`}
                >
                  {formattedIndex}
                </span>
              ) : (
                /* Scroll Mode: Classic minimalist dot in uniform button container */
                <span
                  className={`block rounded-full transition-transform duration-150 ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                      : 'w-2 h-2 bg-white/40 group-hover:bg-[#FF5600] group-hover:scale-125'
                  }`}
                />
              )}

              {/* Hover Tooltip on Left */}
              <span className="absolute right-11 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 translate-x-2 group-hover:translate-x-0 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-manrope font-semibold bg-[#121216]/95 text-[#FAFAFA] border border-white/15 shadow-xl flex items-center gap-1.5 z-50">
                <span className="font-space text-[10px] text-[#FF5600] font-bold">
                  {formattedIndex}
                </span>
                <span>{name}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. In Slide Mode: DOWN / NEXT NAVIGATION BUTTON */}
      {viewMode === 'panel' && (
        <>
          {/* Subtle Separator */}
          <div className="w-4 h-[1px] bg-white/10 my-0.5" />

          <button
            type="button"
            onClick={onNext}
            disabled={isLast}
            aria-label={`Next Section: ${nextSectionName}`}
            className={`group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150 ${
              isLast
                ? 'opacity-25 cursor-not-allowed text-white/40'
                : 'bg-[#FF5600] hover:bg-[#E04C00] text-white shadow-[0_2px_12px_rgba(255,86,0,0.5)] hover:shadow-[0_4px_16px_rgba(255,86,0,0.7)] active:scale-95'
            }`}
            title={isLast ? 'At Last Section' : `Next: ${nextSectionName}`}
          >
            <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-y-0.5" />

            {/* Left Tooltip */}
            <span className="absolute right-11 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 translate-x-2 group-hover:translate-x-0 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-manrope font-semibold bg-[#121216]/95 text-[#FAFAFA] border border-white/15 shadow-xl flex items-center gap-1.5 z-50">
              <span className="font-space text-[10px] text-[#FF5600] uppercase font-bold">Next</span>
              <span>{nextSectionName}</span>
            </span>
          </button>
        </>
      )}
    </aside>
  );
};
