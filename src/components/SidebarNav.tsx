import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  Wrench,
  ShieldCheck,
  FolderGit2,
  Mail,
  Calendar,
  Download,
  Sun,
  Moon,
  Layers,
  ScrollText,
  Menu,
  X,
  Linkedin,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarNavProps {
  activeSectionIndex: number;
  onSelectSection: (index: number) => void;
  viewMode: 'panel' | 'scroll';
  onToggleViewMode: () => void;
  onOpenBooking?: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeSectionIndex,
  onSelectSection,
  viewMode,
  onToggleViewMode,
  onOpenBooking,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile drawer on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileDrawerOpen]);

  const navItems = [
    { label: 'Intro', index: 0, kicker: '00', icon: Home, hash: '#intro' },
    { label: 'About', index: 1, kicker: '01', icon: User, hash: '#about' },
    { label: 'Experience', index: 2, kicker: '02', icon: Briefcase, hash: '#experience' },
    { label: 'Methodology', index: 3, kicker: '03', icon: Wrench, hash: '#methodology' },
    { label: 'Proof & QA', index: 4, kicker: '04', icon: ShieldCheck, hash: '#proof' },
    { label: 'Evidence Package', index: 5, kicker: '05', icon: FolderGit2, hash: '#evidence' },
    { label: 'Contact', index: 6, kicker: '06', icon: Mail, hash: '#contact' },
  ];

  const handleNavClick = (index: number) => {
    onSelectSection(index);
    setMobileDrawerOpen(false);
  };

  return (
    <>
      {/* =========================================================================
          1. DESKTOP ASkim-Style Persistent Left Sidebar (lg and up: 272px fixed)
          ========================================================================= */}
      <aside
        id="askim-sidebar"
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-68 xl:w-72 z-40 flex-col bg-[#F7F7F8]/95 dark:bg-[#09090C]/95 backdrop-blur-2xl border-r border-black/[0.08] dark:border-white/[0.08] shadow-[4px_0_24px_rgba(0,0,0,0.03)] dark:shadow-[4px_0_32px_rgba(0,0,0,0.4)] select-none transition-colors duration-300"
        aria-label="Sidebar Portfolio Navigation"
      >
        <div className="flex flex-col h-full overflow-y-auto panel-scrollbar p-4 xl:p-5">
          {/* A. Header Brand / Profile Card (Askim aesthetic) */}
          <div className="flex flex-col pb-4 border-b border-black/[0.07] dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => handleNavClick(0)}
              className="group flex items-center gap-3.5 text-left cursor-pointer focus:outline-none"
            >
              {/* Avatar with subtle Askim-style glow outline ring */}
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#FF5600] via-[#FF5600]/40 to-transparent shadow-md group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/assets/profile/IMG_2080-web.jpg"
                  alt="Christ Carl Tapat"
                  className="w-full h-full object-cover rounded-full bg-[#1A1A22]"
                  onError={(e) => {
                    // Fallback to monogram if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full rounded-full bg-[#121218] flex items-center justify-center font-space text-xs font-bold text-white"><span class="text-[#FF5600]">C</span><span>T</span></div>';
                    }
                  }}
                />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#111114] dark:text-[#F0F0F4] font-manrope truncate group-hover:text-[#FF5600] transition-colors">
                    Christ Carl Tapat
                  </span>
                </div>
                <span className="text-[11px] font-space text-[#7A7A85] dark:text-[#9A9AA6] truncate">
                  Civil Engineer · Estimator
                </span>
              </div>
            </button>

            {/* Askim Availability Indicator Pill */}
            <div className="mt-3.5 flex items-center justify-between px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 dark:border-emerald-500/30">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-bold font-space text-emerald-600 dark:text-emerald-400 tracking-wider">
                  #OPENFORWORK
                </span>
              </div>
            </div>
          </div>

          {/* B. Navigation Links (Askim Vertical Menu) */}
          <nav className="flex-1 py-4 flex flex-col gap-1" aria-label="Main Navigation">
            <div className="px-3 pb-2 text-[10px] font-space font-bold uppercase tracking-wider text-[#8A8A96] dark:text-[#6E6E7A]">
              Navigation
            </div>

            {navItems.map((item) => {
              const isActive = activeSectionIndex === item.index;
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.index)}
                  className={`group relative flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-manrope font-semibold cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-[#111115] text-white dark:bg-white dark:text-[#0B0B0E] shadow-sm font-bold'
                      : 'text-[#50505A] dark:text-[#A0A0AD] hover:text-[#111115] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`p-1.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-white/15 text-white dark:bg-black/10 dark:text-[#0B0B0E]'
                          : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#7A7A88] dark:text-[#90909F] group-hover:text-[#FF5600] group-hover:bg-[#FF5600]/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>

                  <span
                    className={`font-space text-[10px] tracking-tight ${
                      isActive
                        ? 'text-[#FF5600] dark:text-[#E04D00] font-bold'
                        : 'text-[#8A8A95] dark:text-[#656572] opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    {item.kicker}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* C. Bottom Section: Quick Actions & Utilities */}
          <div className="pt-3 border-t border-black/[0.07] dark:border-white/[0.08] flex flex-col gap-2.5">
            {/* Primary Action Button (Schedule Discovery Call) */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FF5600] hover:bg-[#E04D00] active:scale-[0.98] text-white text-xs font-manrope font-bold shadow-[0_4px_16px_rgba(255,86,0,0.3)] transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Discovery Call</span>
              </button>
            )}

            {/* Secondary Action: Resume / Pack Download */}
            <a
              href="/documents/Resume-Construction-Estimator-TAPAT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.07] dark:hover:bg-white/[0.09] text-[#2A2A32] dark:text-[#D0D0D8] text-xs font-manrope font-semibold border border-black/[0.06] dark:border-white/[0.07] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#FF5600]" />
              <span>Resume & CV (.PDF)</span>
            </a>

            {/* Utility Bar: Presentation Mode + Theme Switcher + Socials */}
            <div className="flex items-center justify-between pt-1 text-[#666672] dark:text-[#9A9AA8]">
              {/* Presentation Mode Toggle */}
              <button
                type="button"
                onClick={onToggleViewMode}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-[#FF5600] text-[11px] font-manrope font-medium transition-colors cursor-pointer"
                title={`Current: ${viewMode === 'panel' ? 'Slide Deck' : 'Scroll'}. Click to toggle.`}
              >
                {viewMode === 'panel' ? (
                  <>
                    <Layers className="w-3.5 h-3.5 text-[#FF5600]" />
                    <span>Slide Deck</span>
                  </>
                ) : (
                  <>
                    <ScrollText className="w-3.5 h-3.5 text-[#FF5600]" />
                    <span>Continuous</span>
                  </>
                )}
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#303038] dark:text-[#D5D5E0] hover:text-[#FF5600] transition-colors cursor-pointer"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#FF5600]" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-[#FF5600] transition-colors text-[#555] dark:text-[#AAA]"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          2. MOBILE / TABLET TOP BAR (screens < lg)
          ========================================================================= */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 px-4 flex items-center justify-between bg-[#F7F7F8]/95 dark:bg-[#09090C]/95 backdrop-blur-xl border-b border-black/[0.07] dark:border-white/[0.08] shadow-sm select-none transition-colors duration-300">
        {/* Mobile Brand Link */}
        <button
          type="button"
          onClick={() => handleNavClick(0)}
          className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF5600] to-transparent shadow-sm">
            <img
              src="/assets/profile/IMG_2080-web.jpg"
              alt="Christ Carl Tapat"
              className="w-full h-full object-cover rounded-full bg-[#1A1A22]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#111114] dark:text-[#F0F0F4] font-manrope">
              Christ Carl Tapat
            </span>
            <span className="text-[10px] font-space text-[#7A7A85] dark:text-[#9A9AA6]">
              Civil Engineer · Estimator
            </span>
          </div>
        </button>

        {/* Mobile Right Controls: Theme + Menu Trigger */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-[#222228] dark:text-[#E0E0E8] active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FF5600]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-2 rounded-lg bg-[#FF5600] text-white active:scale-95 shadow-sm"
            aria-label="Toggle mobile menu"
          >
            {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* =========================================================================
          3. MOBILE / TABLET OFF-CANVAS DRAWER
          ========================================================================= */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-xs h-full bg-[#F7F7F8] dark:bg-[#0B0B0E] border-r border-black/[0.08] dark:border-white/[0.08] shadow-2xl flex flex-col p-5 overflow-y-auto z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/profile/IMG_2080-web.jpg"
                  alt="Christ Carl Tapat"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#111] dark:text-white font-manrope">
                    Christ Carl Tapat
                  </h3>
                  <p className="text-[10px] font-space text-[#777] dark:text-[#999]">
                    Civil Engineer · Estimator
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1.5 rounded-lg text-[#555] dark:text-[#aaa] hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Availability */}
            <div className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 dark:border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-space font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>#OPENFORWORK</span>
            </div>

            {/* Drawer Nav Items */}
            <nav className="flex-1 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSectionIndex === item.index;
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.index)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-manrope font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-[#111115] text-white dark:bg-white dark:text-[#0B0B0E] font-bold'
                        : 'text-[#444] dark:text-[#bbb] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#FF5600]" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </button>
                );
              })}
            </nav>

            {/* Drawer Bottom CTAs */}
            <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-2">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#FF5600] text-white text-xs font-bold font-manrope shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Discovery Call</span>
                </button>
              )}

              <a
                href="/documents/Resume-Construction-Estimator-TAPAT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-black/5 dark:bg-white/5 text-[#222] dark:text-[#ddd] text-xs font-semibold font-manrope text-center border border-black/10 dark:border-white/10"
              >
                Download Resume (.PDF)
              </a>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={onToggleViewMode}
                  className="flex items-center gap-1 text-[11px] text-[#666] dark:text-[#aaa]"
                >
                  {viewMode === 'panel' ? <Layers className="w-3.5 h-3.5 text-[#FF5600]" /> : <ScrollText className="w-3.5 h-3.5 text-[#FF5600]" />}
                  <span>{viewMode === 'panel' ? 'Slide Deck Mode' : 'Scroll Mode'}</span>
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] dark:text-[#aaa] hover:text-[#FF5600] transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
