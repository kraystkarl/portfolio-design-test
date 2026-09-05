import React from 'react';

interface SideRailNavProps {
  currentIndex: number;
  sectionIds: string[];
  sectionNames: string[];
  onSelectSection: (index: number) => void;
}

export const SideRailNav: React.FC<SideRailNavProps> = ({
  currentIndex,
  sectionIds,
  sectionNames,
  onSelectSection,
}) => {
  return (
    <aside
      id="side-rail-nav"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3.5 py-4 px-2 rounded-full bg-black/20 dark:bg-white/[0.04] backdrop-blur-md border border-black/5 dark:border-white/10"
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
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            aria-label={`Jump to ${name}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {/* Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-[#FF5600] shadow-[0_0_12px_rgba(255,86,0,0.8)]'
                  : 'w-2 h-2 bg-black/30 dark:bg-white/30 group-hover:bg-[#FF5600]/80 group-hover:scale-125'
              }`}
            />

            {/* Hover Tooltip on Left */}
            <span className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-manrope font-semibold bg-[#121216]/90 text-[#FAFAFA] border border-white/15 shadow-lg flex items-center gap-1.5 z-50">
              <span className="font-space text-[10px] text-[#FF5600]">
                0{index}
              </span>
              <span>{name}</span>
            </span>
          </button>
        );
      })}
    </aside>
  );
};
