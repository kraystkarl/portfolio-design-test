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
}) => {
  // Completely removed in panel/slide mode per user request
  if (viewMode !== 'scroll') {
    return null;
  }

  return (
    <aside
      id="side-rail-nav"
      style={{
        position: 'fixed',
        right: '0.85rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
      }}
      className="hidden lg:flex flex-col items-center gap-2 py-2.5 px-1.5 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 select-none transition-all"
      aria-label="Section Quick Jump"
    >
      {sectionIds.map((id, index) => {
        const isActive = currentIndex === index;
        const name = sectionNames[index] || id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelectSection(index)}
            className="group relative p-1 flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label={`Jump to ${name}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {/* Ultra-small minimal dot indicator (3px inactive, 5px active) */}
            <span
              className={`block rounded-full transition-all duration-200 ${
                isActive
                  ? 'w-2 h-4 bg-[#FF5600] rounded-full shadow-[0_0_8px_rgba(255,86,0,0.8)]'
                  : 'w-1.5 h-1.5 bg-black/30 dark:bg-white/40 group-hover:bg-[#FF5600] group-hover:scale-125'
              }`}
            />

            {/* Subtle Left Tooltip on hover */}
            <span className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-manrope font-semibold bg-[#111115]/95 text-white dark:bg-white dark:text-[#111115] shadow-md z-50">
              {name}
            </span>
          </button>
        );
      })}
    </aside>
  );
};
