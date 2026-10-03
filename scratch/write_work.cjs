const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '../src/sections/Work.tsx');

const workSource = `import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { content } from '../locales/content'

// ── Mockup components ──────────────────────────────────────────────────────────

const PosMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-pos-preview.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        {locale === 'en' ? 'Standalone Register' : 'Kasir Mandiri'}
      </div>
    </div>
  );
};

const FashionMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-stone-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Video-Kavana.webm" type="video/webm" />
        <source src="/videos/Video Kavana.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-[#26201C]/80 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E26D3C] animate-pulse"></span>
        {locale === 'en' ? 'Online Store' : 'Toko Online'}
      </div>
    </div>
  );
};

const AccountingMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-Accounting.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        {locale === 'en' ? 'Auto Bookkeeping' : 'Pembukuan Otomatis'}
      </div>
    </div>
  );
};

const HrmsMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-HRMS.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        {locale === 'en' ? 'Schedule & Shift' : 'Jadwal & Shift'}
      </div>
    </div>
  );
};

const CrmMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-CRM.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
        {locale === 'en' ? 'Track Sales' : 'Pantau Penjualan'}
      </div>
    </div>
  );
};

const SanctuaryMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-SPA.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        {locale === 'en' ? 'Organized Booking' : 'Booking Teratur'}
      </div>
    </div>
  );
};

const LmsMockup = ({ isFront = true }: { isFront?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!videoRef.current) return;
    if (isFront) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isFront]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-LMS.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
        {locale === 'en' ? 'School Exams & Grades' : 'Ujian & Nilai Sekolah'}
      </div>
    </div>
  );
};

export interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  metrics: string[];
  link: string;
  video: string;
  mockup: (isFront?: boolean) => React.ReactNode;
  situation: string;
  made: string;
  aftermath: string;
  suitable: string;
  note: string;
  techDetails: string;
}

// ── Modal Component ──────────────────────────────────────────────────────────

function GodTierModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();
  const workContent = content[locale].work;
  const modalContent = workContent.modal;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setIsOpen(true), 10);
      return () => clearTimeout(timer);
    }
    setIsOpen(false);
  }, [project]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      document.body.style.overflow = '';
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) return null;

  return createPortal(
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      style={{ padding: 'clamp(0px, 2vw, 48px)' }}
    >
      <div
        className={\`absolute inset-0 transition-all duration-500 ease-out \${
          isOpen ? 'opacity-100' : 'opacity-0'
        }\`}
        style={{
          background: 'rgba(5, 5, 20, 0.75)',
          backdropFilter: 'blur(24px) saturate(180%)',
        }}
        onClick={handleClose}
      />

      <div
        className="relative w-full max-w-5xl bg-white overflow-hidden transition-all duration-500 flex flex-col"
        style={{
          borderRadius: 'clamp(16px, 2.5vw, 28px)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
          maxHeight: '90dvh',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
          opacity: isOpen ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Hero Header */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #16213e 100%)',
            minHeight: 220,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\\'200\\' height=\\'200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\'/%3E%3C/filter%3E%3Crect width=\\'200\\' height=\\'200\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)',
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
            <div className="w-full sm:w-[280px] flex-shrink-0 relative" style={{ minHeight: 180 }}>
              <div className="absolute inset-0 opacity-90">
                {typeof project.mockup === 'function' ? project.mockup(true) : project.mockup}
              </div>
              <div
                className="absolute inset-0 hidden sm:block"
                style={{ background: 'linear-gradient(to right, transparent 60%, #0f0f1a 100%)' }}
              />
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 py-8 sm:pl-4">
              <p
                className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold"
                style={{ color: 'rgba(139,92,246,0.9)' }}
              >
                {workContent.cardLabel}
              </p>
              <h2
                id="modal-project-title"
                className="font-semibold tracking-tight text-white mb-3"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}
              >
                {project.title}
              </h2>
              <p
                className="text-sm leading-relaxed mb-4 max-w-md"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {project.summary}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 grid place-items-center h-9 w-9 rounded-full transition-all duration-300 hover:rotate-90"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label={locale === 'en' ? 'Close dialog' : 'Tutup dialog'}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            className="flex-shrink-0 grid gap-px"
            style={{
              gridTemplateColumns: \`repeat(\${project.metrics.length}, 1fr)\`,
              background: '#e5e7eb',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center py-4 px-4 bg-white gap-1 text-center"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  {locale === 'en' ? \`Point \${idx + 1}\` : \`Poin \${idx + 1}\`}
                </span>
                <span
                  className="font-semibold text-gray-900"
                  style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)' }}
                >
                  {m}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Scrollable Case Study Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ minHeight: 0 }}>
          <div className="p-8 md:p-10 space-y-7">
            {project.situation && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
                  1. {modalContent.headingSituation}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.situation}</p>
              </div>
            )}

            {project.made && <hr className="border-gray-100" />}

            {project.made && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  2. {modalContent.headingMade}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.made}</p>
              </div>
            )}

            {project.aftermath && <hr className="border-gray-100" />}

            {project.aftermath && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  3. {modalContent.headingAftermath}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.aftermath}</p>
              </div>
            )}

            {project.suitable && <hr className="border-gray-100" />}

            {project.suitable && (
              <div className="text-sm text-gray-800">
                <span className="font-semibold text-gray-900">
                  4. {modalContent.headingSuitable}:{' '}
                </span>
                <span>{project.suitable}</span>
              </div>
            )}

            {project.link && <hr className="border-gray-100" />}

            {project.link && (
              <div className="text-sm text-gray-800 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-900">
                    5. {modalContent.headingTryLive}:{' '}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 break-all"
                  >
                    <span>{project.link}</span>
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
                {project.note && (
                  <p className="text-xs text-blue-700 font-medium bg-blue-50/80 border border-blue-200 px-3.5 py-2.5 rounded-xl">
                    {locale === 'en' ? 'Note: ' : 'Catatan: '}
                    {project.note}
                  </p>
                )}
              </div>
            )}

            {project.techDetails && (
              <details className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50/70 text-xs text-gray-600">
                <summary className="font-semibold text-gray-700 cursor-pointer select-none">
                  6. {modalContent.headingTech}
                </summary>
                <p className="mt-2.5 leading-relaxed font-mono text-[11px] text-gray-500">
                  {project.techDetails}
                </p>
              </details>
            )}
          </div>

          {/* Modal Sticky Bottom Action */}
          <div
            className="sticky bottom-0 flex items-center justify-between px-8 md:px-10 py-5 gap-4 flex-wrap"
            style={{
              background: 'linear-gradient(to top, white 80%, transparent 100%)',
              borderTop: '1px solid #f3f4f6',
            }}
          >
            <div>
              <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-0.5">
                {locale === 'en' ? 'Category' : 'Kategori'}
              </p>
              <p className="text-sm font-semibold text-gray-800">{project.role}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                color: 'white',
                padding: '12px 28px',
                borderRadius: 100,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              {workContent.btnTryLive} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Carousel Component ────────────────────────────────────────────────────────

const TRANSITION_MS = 480;

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentDeg, setCurrentDeg] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { locale } = useLocale();
  const workContent = content[locale].work;

  const projects: Project[] = useMemo(() => {
    const t = content[locale].work.projects;
    return [
      {
        id: 'sokara-pos-evo',
        title: 'Sokara POS EVO',
        summary: t.pos.summary,
        role: t.pos.role,
        stack: ['React 19', 'Zustand', 'IndexedDB', 'TailwindCSS'],
        metrics: t.pos.metrics,
        link: 'https://pos.aldyalfarisy.my.id/',
        video: '/videos/Sokara-pos-preview.webm',
        mockup: (isFront?: boolean) => <PosMockup isFront={isFront} />,
        situation: t.pos.situation,
        made: t.pos.made,
        aftermath: t.pos.aftermath,
        suitable: t.pos.suitable,
        note: t.pos.liveNote,
        techDetails: t.pos.techDetails,
      },
      {
        id: 'kavana-lifestyle',
        title: 'KAVANA',
        summary: t.kavana.summary,
        role: t.kavana.role,
        stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'SQLite', 'Recharts'],
        metrics: t.kavana.metrics,
        link: 'https://kavana.aldyalfarisy.my.id/',
        video: '/videos/Video-Kavana.webm',
        mockup: (isFront?: boolean) => <FashionMockup isFront={isFront} />,
        situation: t.kavana.situation,
        made: t.kavana.made,
        aftermath: t.kavana.aftermath,
        suitable: t.kavana.suitable,
        note: t.kavana.liveNote,
        techDetails: t.kavana.techDetails,
      },
      {
        id: 'sokara-accounting',
        title: 'Sokara Accounting',
        summary: t.accounting.summary,
        role: t.accounting.role,
        stack: ['React 19', 'Zustand 5', 'Decimal.js', 'SHA-256'],
        metrics: t.accounting.metrics,
        link: 'https://sokaraaccountingdemo.netlify.app/',
        video: '/videos/Sokara-Accounting.webm',
        mockup: (isFront?: boolean) => <AccountingMockup isFront={isFront} />,
        situation: t.accounting.situation,
        made: t.accounting.made,
        aftermath: t.accounting.aftermath,
        suitable: t.accounting.suitable,
        note: t.accounting.liveNote,
        techDetails: t.accounting.techDetails,
      },
      {
        id: 'sokara-hrms',
        title: 'Sokara HRMS',
        summary: t.hrms.summary,
        role: t.hrms.role,
        stack: ['React', 'TypeScript', 'TailwindCSS', 'Zustand'],
        metrics: t.hrms.metrics,
        link: 'https://hrms.aldyalfarisy.my.id/',
        video: '/videos/Sokara-HRMS.webm',
        mockup: (isFront?: boolean) => <HrmsMockup isFront={isFront} />,
        situation: t.hrms.situation,
        made: t.hrms.made,
        aftermath: t.hrms.aftermath,
        suitable: t.hrms.suitable,
        note: t.hrms.liveNote,
        techDetails: t.hrms.techDetails,
      },
      {
        id: 'sokara-crm',
        title: 'Sokara CRM',
        summary: t.crm.summary,
        role: t.crm.role,
        stack: ['Next.js', 'dnd-kit', 'framer-motion', 'SWR'],
        metrics: t.crm.metrics,
        link: 'https://crm.aldyalfarisy.my.id/',
        video: '/videos/Sokara-CRM.webm',
        mockup: (isFront?: boolean) => <CrmMockup isFront={isFront} />,
        situation: t.crm.situation,
        made: t.crm.made,
        aftermath: t.crm.aftermath,
        suitable: t.crm.suitable,
        note: t.crm.liveNote,
        techDetails: t.crm.techDetails,
      },
      {
        id: 'sokara-sanctuary',
        title: 'Sokara Sanctuary',
        summary: t.sanctuary.summary,
        role: t.sanctuary.role,
        stack: ['WebGL', 'Zustand', 'Framer Motion'],
        metrics: t.sanctuary.metrics,
        link: 'https://spa.aldyalfarisy.my.id/',
        video: '/videos/Sokara-SPA.webm',
        mockup: (isFront?: boolean) => <SanctuaryMockup isFront={isFront} />,
        situation: t.sanctuary.situation,
        made: t.sanctuary.made,
        aftermath: t.sanctuary.aftermath,
        suitable: t.sanctuary.suitable,
        note: t.sanctuary.liveNote,
        techDetails: t.sanctuary.techDetails,
      },
      {
        id: 'sokara-lms',
        title: 'Sokara LMS',
        summary: t.lms.summary,
        role: t.lms.role,
        stack: ['Hono', 'tRPC v11', 'React 19', 'Drizzle ORM', 'SQLite', 'PWA'],
        metrics: t.lms.metrics,
        link: 'https://lms.aldyalfarisy.my.id/',
        video: '/videos/Sokara-LMS.webm',
        mockup: (isFront?: boolean) => <LmsMockup isFront={isFront} />,
        situation: t.lms.situation,
        made: t.lms.made,
        aftermath: t.lms.aftermath,
        suitable: t.lms.suitable,
        note: t.lms.liveNote,
        techDetails: t.lms.techDetails,
      },
    ];
  }, [locale]);

  const total = projects.length;

  const [isPointerDown, setIsPointerDown] = useState(false);
  const [pointerStartX, setPointerStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rotateTo = useCallback(
    (targetIndex: number) => {
      if (isRotating) return;
      setIsRotating(true);

      const normalizedTarget = ((targetIndex % total) + total) % total;
      let diff = normalizedTarget - activeIndex;

      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      setCurrentDeg((prev) => prev + diff * 30);
      setActiveIndex(normalizedTarget);

      setTimeout(() => setIsRotating(false), TRANSITION_MS);
    },
    [activeIndex, isRotating, total]
  );

  const next = useCallback(() => rotateTo(activeIndex + 1), [activeIndex, rotateTo]);
  const prev = useCallback(() => rotateTo(activeIndex - 1), [activeIndex, rotateTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, selectedProject]);

  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32" id="work">
        <style>{\`
          .wheel-scene {
            perspective: 1100px;
            perspective-origin: 50% 50%;
          }
          .wheel-track {
            transform-style: preserve-3d;
          }
          .custom-scrollbar::-webkit-scrollbar { width: 5px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        \`}</style>

        {/* Ambient background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute -left-20 top-[5%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_65%)]"
            style={{ contain: 'strict' }}
          />
          <div
            className="absolute -top-20 right-[-5%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_65%)]"
            style={{ contain: 'strict' }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-blue-600 font-semibold uppercase mb-3">
                {workContent.eyebrow}
              </p>
              <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold tracking-tight">
                {workContent.title}
              </h2>
              <p className="text-sm text-gray-500 mt-3 max-w-xl leading-relaxed">
                {workContent.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => rotateTo(idx)}
                  className={\`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden \${
                    idx === activeIndex
                      ? 'bg-gray-900 text-white shadow-md scale-105'
                      : 'bg-white/70 border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800'
                  }\`}
                >
                  <span className="relative z-10">{proj.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3D Wheel Viewport */}
          <div
            className="wheel-scene flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ height: isMobile ? 520 : 600, touchAction: 'pan-y' }}
            onPointerDown={(e) => {
              setPointerStartX(e.clientX);
              setIsPointerDown(true);
              setIsDragging(false);
              if (e.pointerType === 'mouse') e.preventDefault();
            }}
            onPointerMove={(e) => {
              if (!isPointerDown) return;
              const diff = e.clientX - pointerStartX;
              if (Math.abs(diff) > 10) setIsDragging(true);
            }}
            onPointerUp={(e) => {
              if (!isPointerDown) return;
              setIsPointerDown(false);
              const diff = e.clientX - pointerStartX;
              if (diff > 50) prev();
              else if (diff < -50) next();
            }}
            onPointerLeave={() => setIsPointerDown(false)}
          >
            <div className="wheel-track relative flex items-center justify-center" style={{ width: 0, height: 0 }}>
              {projects.map((project, idx) => {
                const radius = isMobile ? 520 : 780;
                const angle = idx * 30 - currentDeg;
                const rad = (angle * Math.PI) / 180;
                const x = Math.sin(rad) * radius;
                const z = Math.cos(rad) * radius - radius;

                const isCurrent = idx === activeIndex;
                const dist = Math.abs(idx - activeIndex);

                const opacity = dist === 0 ? 1 : dist === 1 ? 0.75 : dist === 2 ? 0.45 : 0.12;
                const cardWidth = isCurrent ? (isMobile ? 340 : 450) : isMobile ? 260 : 320;
                const cardHeight = isCurrent ? (isMobile ? 500 : 570) : isMobile ? 440 : 500;

                return (
                  <div
                    key={project.id}
                    className="absolute"
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      transform: \`translateX(\${x}px) translateZ(\${z}px) rotateY(\${angle}deg)\`,
                      transition:
                        'transform 480ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 480ms ease, width 480ms ease, height 480ms ease',
                      opacity,
                      zIndex: isCurrent ? 10 : Math.max(0, 5 - dist),
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      visibility: dist > 2 ? 'hidden' : 'visible',
                    }}
                  >
                    <div
                      className={\`group relative w-full h-full bg-white rounded-[1.75rem] overflow-hidden flex flex-col
                        \${
                          isCurrent
                            ? 'shadow-[0_32px_64px_rgba(0,0,0,0.16)] ring-1 ring-black/5'
                            : 'shadow-[0_16px_32px_rgba(0,0,0,0.07)] border border-gray-100'
                        }
                        transition-shadow duration-300 cursor-pointer select-none\`}
                      onClick={() => {
                        if (!isDragging) {
                          if (isCurrent) setSelectedProject(project);
                          else rotateTo(idx);
                        }
                      }}
                    >
                      <div
                        className={\`w-full relative overflow-hidden flex-shrink-0 \${
                          isCurrent ? 'h-[48%]' : 'h-[58%]'
                        }\`}
                      >
                        {typeof project.mockup === 'function' ? project.mockup(isCurrent) : project.mockup}
                      </div>

                      <div className="flex-1 px-6 sm:px-7 pt-4 sm:pt-5 pb-5 sm:pb-6 flex flex-col bg-white justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                                {project.title}
                              </h3>
                            </div>
                            {isCurrent && (
                              <span className="flex-shrink-0 text-[11px] font-mono font-medium bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-full">
                                {project.role}
                              </span>
                            )}
                          </div>

                          {isCurrent ? (
                            <>
                              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3.5 line-clamp-2">
                                {project.summary}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mb-2.5">
                                {project.metrics?.slice(0, 2).map((m) => (
                                  <span
                                    key={m}
                                    className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                                  >
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </>
                          ) : (
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-1">
                              {project.summary}
                            </p>
                          )}
                        </div>

                        {isCurrent && (
                          <div className="mt-auto flex gap-2.5 pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDragging) setSelectedProject(project);
                              }}
                              className="flex-1 h-10 rounded-full bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            >
                              {workContent.btnReadStory} <ArrowRight className="h-4 w-4" />
                            </button>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (isDragging) e.preventDefault();
                              }}
                              className="h-10 px-5 rounded-full border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center bg-white"
                            >
                              {workContent.btnTryLive}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white hover:scale-105 transition-all text-gray-600 shadow-sm disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label={locale === 'en' ? 'Previous project' : 'Proyek sebelumnya'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-gray-400 font-mono tracking-wider select-none hidden sm:block">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              disabled={activeIndex === total - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white hover:scale-105 transition-all text-gray-600 shadow-sm disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label={locale === 'en' ? 'Next project' : 'Proyek selanjutnya'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {selectedProject && <GodTierModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
`;

fs.writeFileSync(target, workSource, 'utf8');
console.log('Work.tsx generated successfully! Bytes:', workSource.length);
