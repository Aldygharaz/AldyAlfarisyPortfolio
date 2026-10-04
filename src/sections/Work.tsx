import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { X, ArrowRight } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { content } from '../locales/content'
import { useSegment, type SegmentId } from '../context/SegmentContext'
import { useOrder } from '../context/OrderContext'
import { track } from '../lib/analytics'
import { buildWaUrl } from '../lib/whatsapp'

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
        poster="/videos/Sokara-pos-preview-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-pos-preview.webm" type="video/webm" />
        <source src="/videos/Sokara-pos-preview.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-Kavana-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-Kavana.webm" type="video/webm" />
        <source src="/videos/Sokara-Kavana.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-Accounting-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-Accounting.webm" type="video/webm" />
        <source src="/videos/Sokara-Accounting.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-HRMS-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-HRMS.webm" type="video/webm" />
        <source src="/videos/Sokara-HRMS.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-CRM-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-CRM.webm" type="video/webm" />
        <source src="/videos/Sokara-CRM.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-SPA-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-SPA.webm" type="video/webm" />
        <source src="/videos/Sokara-SPA.mp4" type="video/mp4" />
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
        poster="/videos/Sokara-LMS-poster.webp"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/Sokara-LMS.webm" type="video/webm" />
        <source src="/videos/Sokara-LMS.mp4" type="video/mp4" />
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
  stack: readonly string[];
  metrics: readonly string[];
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
    document.body.style.overflow = 'hidden';
    if (typeof window !== 'undefined' && (window as unknown as { lenis?: { stop: () => void } }).lenis) {
      (window as unknown as { lenis?: { stop: () => void } }).lenis?.stop();
    }
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && (window as unknown as { lenis?: { start: () => void } }).lenis) {
        (window as unknown as { lenis?: { start: () => void } }).lenis?.start();
      }
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  if (!project) return null;

  return createPortal(
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      style={{ padding: 'clamp(0px, 2vw, 48px)' }}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
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
                'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
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
              gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
              background: '#e5e7eb',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center py-4 px-4 bg-white gap-1 text-center"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  {locale === 'en' ? `Point ${idx + 1}` : `Poin ${idx + 1}`}
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
              onClick={() => track('demo_open', { project: project.id, location: 'modal' })}
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

// ── Grid Component ────────────────────────────────────────────────────────────
// Semua contoh sistem terlihat sekaligus (bukan carousel), dengan saringan
// jenis usaha yang terhubung ke section "Pilih jenis usaha".

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [inViewId, setInViewId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const { locale } = useLocale();
  const { segment, setSegment } = useSegment();
  const { onBusinessChosen } = useOrder();
  const workContent = content[locale].work;
  const segContent = content[locale].segments;

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
        video: '/videos/Sokara-Kavana.webm',
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

  const activeSegment = segContent.items.find((i) => i.id === segment) ?? null;
  const visibleProjects = activeSegment
    ? projects.filter((p) => (activeSegment.projects as readonly string[]).includes(p.id))
    : projects;

  // Di HP tanpa saringan, awalnya cukup 3 kartu supaya halaman tidak terlalu panjang.
  const MOBILE_LIMIT = 3;
  const limitOnMobile = !activeSegment && !showAllMobile && visibleProjects.length > MOBILE_LIMIT;

  // Kartu ajakan mengisi sisa baris terakhir grid (3 kolom di desktop, 2 di tablet).
  const n = visibleProjects.length;
  const lgSpan = ['lg:col-span-3', 'lg:col-span-2', 'lg:col-span-1'][n % 3];
  const smSpan = n % 2 === 0 ? 'sm:col-span-2' : 'sm:col-span-1';

  // Di layar sentuh tidak ada kursor untuk "hover", jadi video kartu diputar
  // otomatis saat kartunya terlihat jelas di layar (satu kartu sekaligus).
  // Dilewati kalau pengunjung memilih gerak dikurangi atau mode hemat data.
  useEffect(() => {
    const noHover = window.matchMedia('(hover: none)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (!noHover || reduceMotion || saveData || !('IntersectionObserver' in window)) return;

    const grid = gridRef.current;
    if (!grid) return;
    const ratios = new Map<string, number>();
    let timer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.projectId;
          if (id) ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        // Dari kartu yang terlihat jelas, putar yang paling dekat ke tengah layar.
        let best: string | null = null;
        let bestDistance = Infinity;
        const middle = window.innerHeight / 2;
        grid.querySelectorAll<HTMLElement>('[data-project-id]').forEach((el) => {
          const id = el.dataset.projectId;
          if (!id || (ratios.get(id) ?? 0) < 0.6) return;
          const box = el.getBoundingClientRect();
          const distance = Math.abs(box.top + box.height / 2 - middle);
          if (distance < bestDistance) {
            best = id;
            bestDistance = distance;
          }
        });
        // Berhenti langsung, tapi mulai memutar setelah jeda singkat supaya
        // gulir cepat tidak memulai video yang langsung terlewat.
        window.clearTimeout(timer);
        if (best === null) setInViewId(null);
        else timer = window.setTimeout(() => setInViewId(best), 250);
      },
      { threshold: [0, 0.3, 0.6, 0.8, 1] }
    );
    grid.querySelectorAll('[data-project-id]').forEach((el) => observer.observe(el));
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      setInViewId(null);
    };
  }, [segment, showAllMobile, locale]);

  const openStory = (project: Project) => {
    setSelectedProject(project);
    track('story_open', { project: project.id });
  };

  const chooseFilter = (id: SegmentId | null) => {
    setSegment(id);
    if (id) {
      onBusinessChosen();
      track('segment_select', { segment: id, location: 'work_filter' });
    }
  };

  const chipClass = (active: boolean) =>
    `inline-flex items-center whitespace-nowrap h-12 sm:h-10 px-4 rounded-full text-[15px] sm:text-sm font-medium transition-all duration-200 ${
      active
        ? 'bg-gray-900 text-white shadow-md'
        : 'bg-white/80 border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
    }`;

  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32" id="work">
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 5px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
          .work-chips { scrollbar-width: none; }
          .work-chips::-webkit-scrollbar { display: none; }
        `}</style>

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

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-10">
          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <p className="font-mono text-xs tracking-[0.2em] text-blue-600 font-semibold uppercase mb-3">
              {workContent.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold tracking-tight">
              {workContent.title}
            </h2>
            <p className="text-[17px] sm:text-base text-gray-600 mt-3 max-w-xl leading-relaxed">
              {workContent.subtitle}
            </p>
          </div>

          {/* Saringan jenis usaha */}
          <div className="mb-8 sm:mb-10">
            <p className="text-sm text-gray-500 mb-3">{workContent.filterLabel}</p>
            <div ref={chipsRef} className="work-chips flex gap-2 overflow-x-auto sm:flex-wrap -mx-5 px-5 sm:mx-0 sm:px-0 pb-1">
              <button type="button" className={chipClass(!activeSegment)} onClick={() => chooseFilter(null)} aria-pressed={!activeSegment}>
                {workContent.filterAll}
              </button>
              {segContent.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={chipClass(segment === item.id)}
                  onClick={() => chooseFilter(item.id as SegmentId)}
                  aria-pressed={segment === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Penjelasan saat daftar sedang disaring */}
          <p className="text-[15px] text-gray-700 mb-6 min-h-6" aria-live="polite">
            {activeSegment && (
              <>
                {workContent.filterShowing}: <strong className="font-semibold">{activeSegment.label}</strong>.{' '}
                <button
                  type="button"
                  className="inline-flex items-center min-h-11 px-1 font-semibold text-blue-700 underline underline-offset-4"
                  onClick={() => chipsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                >
                  {workContent.filterChange}
                </button>
              </>
            )}
          </p>

          {/* Grid kartu */}
          <div ref={gridRef} className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, idx) => (
              <article
                key={project.id}
                className={`group relative bg-white rounded-[1.5rem] overflow-hidden flex-col border border-gray-100 shadow-[0_16px_32px_rgba(0,0,0,0.07)] hover:shadow-[0_28px_56px_rgba(0,0,0,0.14)] transition-shadow duration-300 ${
                  limitOnMobile && idx >= MOBILE_LIMIT ? 'hidden sm:flex' : 'flex'
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <button
                  type="button"
                  className="relative w-full aspect-[16/10] overflow-hidden text-left"
                  data-project-id={project.id}
                  onClick={() => openStory(project)}
                  aria-label={`${workContent.btnReadStory}: ${project.title}`}
                >
                  {project.mockup(hoveredId === project.id || inViewId === project.id)}
                </button>

                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{project.title}</h3>
                  <p className="text-[13px] font-mono text-blue-600 mt-1 mb-3">{project.role}</p>
                  <p className="text-gray-700 text-[17px] sm:text-[15px] leading-relaxed mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.metrics?.slice(0, 2).map((m) => (
                      <span
                        key={m}
                        className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2.5">
                    <button
                      type="button"
                      onClick={() => openStory(project)}
                      className="flex-1 h-12 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      {workContent.btnReadStory} <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('demo_open', { project: project.id, location: 'card' })}
                      className="h-12 px-5 rounded-full border border-gray-200 text-gray-800 text-sm font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center bg-white"
                    >
                      {workContent.btnTryLive}
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {limitOnMobile && (
              <button
                type="button"
                onClick={() => setShowAllMobile(true)}
                className="sm:hidden h-12 rounded-full border border-gray-300 bg-white text-gray-900 text-[16px] font-semibold"
              >
                {workContent.showAll.replace('{n}', String(visibleProjects.length))}
              </button>
            )}

            <div
              className={`${smSpan} ${lgSpan} sm:self-center rounded-[1.5rem] p-7 sm:p-8 flex flex-col justify-center gap-3 border border-blue-200 bg-gradient-to-br from-blue-50 to-white`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">{workContent.ctaCard.title}</h3>
              <p className="text-gray-700 text-[17px] sm:text-[15px] leading-relaxed max-w-md">{workContent.ctaCard.desc}</p>
              <a
                href={buildWaUrl(locale, segment)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('wa_click', { location: 'work_cta', segment: segment ?? 'none' })}
                className="btn btn-primary self-start mt-2"
              >
                {workContent.ctaCard.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && <GodTierModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
