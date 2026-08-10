import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'

// ── Mockup components ──────────────────────────────────────────────────────────

const PosMockup = () => (
  <div className="flex flex-col items-center justify-center h-full bg-[#F3F1FF] text-[#4F46E5] p-6 relative overflow-hidden">
    <h3 className="text-3xl font-bold mb-6 text-center leading-tight">Offline<br/>First</h3>
    <div className="w-32 h-32 rounded-full border-[12px] border-indigo-200 border-t-indigo-600 border-l-purple-500 relative flex items-center justify-center shadow-inner">
      <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden border-2 border-white shadow-md z-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl">
        POS
      </div>
      <span className="absolute -top-4 text-[7px] font-mono text-indigo-400 rotate-[-15deg]">Zero Latency</span>
      <span className="absolute -left-6 text-[7px] font-mono text-purple-400 -rotate-90">IndexedDB</span>
      <span className="absolute -bottom-4 text-[7px] font-mono text-fuchsia-400 rotate-12">Poka-Yoke</span>
    </div>
  </div>
);

const AccountingMockup = () => (
  <div className="flex flex-col items-center justify-center h-full bg-[#EFF6FF] p-6 relative">
    <div className="bg-[#93C5FD] w-48 h-12 rounded-full mb-6 flex items-center justify-center gap-1 shadow-sm opacity-90">
      {[3,6,4,8,5,3].map((h, i) => (
        <div key={i} className="w-1 bg-white rounded-full opacity-80" style={{height: `${h * 4}px`}}></div>
      ))}
    </div>
    <div className="bg-white rounded-xl p-4 shadow-sm text-[11px] font-medium text-gray-700 w-full max-w-[220px] leading-relaxed relative">
      <span className="text-blue-500 font-bold">SHA-256</span> Hash Chain verified. <span className="text-red-400">0.00</span> imbalance detected. <span className="text-green-600 font-bold">Ledger</span> is fully synchronized.
    </div>
  </div>
);

const HrmsMockup = () => (
  <div className="flex flex-col items-center justify-center h-full bg-[#78716C] relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-stone-600 to-stone-800 opacity-90" />
    <h3 className="relative z-10 text-white font-serif text-3xl drop-shadow-md">HRMS Core</h3>
    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur text-white text-[9px] px-2 py-1 rounded shadow-sm border border-white/30">AI Auto-Balance</div>
  </div>
);

const CrmMockup = () => (
  <div className="flex flex-col items-center justify-center h-full bg-[#FEF9C3] p-6 relative">
    <div className="absolute top-1/4 left-[15%] bg-white rounded px-2 py-1 shadow-sm text-[9px] text-gray-600 font-medium flex items-center gap-1">✅ +10 Juta Preset</div>
    <div className="absolute top-1/3 right-[15%] bg-white rounded px-2 py-1 shadow-sm text-[9px] text-gray-600 font-medium flex items-center gap-1">🔄 Auto-Fix Stale Deal</div>
    <div className="absolute bottom-[35%] left-[20%] bg-white rounded px-2 py-1 shadow-sm text-[9px] text-gray-600 font-medium flex items-center gap-1">📊 Kanban Pipeline</div>
    <h3 className="text-[28px] font-serif text-gray-800 text-center leading-tight mt-12">Sokara<br/>CRM</h3>
  </div>
);

const SpaMockup = () => (
  <div className="flex flex-col items-center justify-center h-full bg-[#DCFCE7] p-6 relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(134,239,172,0.5)_0%,transparent_70%)]"></div>
    <div className="absolute top-6 right-6 bg-green-200/50 text-green-800 text-[10px] font-medium px-3 py-1.5 rounded-full border border-green-300 shadow-sm">Promote Waitlist</div>
    <h3 className="text-3xl font-serif text-gray-800 text-center leading-tight mt-8 relative z-10">Sanctuary<br/>Booking</h3>
    <div className="absolute bottom-8 left-8 bg-white/60 rounded px-2 py-1 text-[8px] text-gray-600">✨ Capacity Inspector</div>
  </div>
);

// ── Project data ───────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "sokara-pos-evo",
    title: "Sokara POS EVO",
    summary: "Sistem kasir enterprise yang beroperasi 100% lokal tanpa interupsi. Dibangun dengan PWA dan IndexedDB untuk transaksi berkecepatan tinggi.",
    role: "Offline-First PWA",
    client: "Enterprise Retail",
    stack: ["React 19", "Zustand", "IndexedDB", "TailwindCSS"],
    metrics: ["< 50ms Scan", "100% Offline", "Zero Downtime"],
    link: "https://pos.aldyalfarisy.my.id/",
    mockup: <PosMockup />,
    problem: "Aplikasi Point of Sale (POS) tradisional sering kali lumpuh saat koneksi internet toko tidak stabil, menyebabkan antrean panjang di kasir. Di sisi lain, aplikasi kasir offline sering kali kaku, lambat, dan tidak sinkron dengan pusat. Kasir ritel membutuhkan sistem yang responsif di bawah tekanan (rapid scanning) dan tidak bergantung pada uptime server.",
    approach: "Sokara POS EVO dibangun dengan arsitektur Local-First PWA. Seluruh State Management dan logika transaksi berjalan di client-side menggunakan Zustand yang diintegrasikan dengan IndexedDB. Mulai dari user login, mencari produk, memindai barcode, hingga transaksi selesai, semua terjadi dalam Zero-Latency karena tidak ada network request yang terlibat di tengah transaksi.",
    result: "Global Hardware Barcode Scanner Listener dipadukan dengan Poka-Yoke Defensive UX mencegat input scanner tanpa kasir harus mengklik search bar. Saat stok habis, aplikasi tidak menampilkan error pasif, melainkan memicu fitur Auto-Fix Restock Poka-Yoke, menawarkan solusi 1-klik untuk penyesuaian stok langsung di tempat."
  },
  {
    id: "sokara-accounting",
    title: "Sokara Accounting",
    summary: "Aplikasi pembukuan retail dengan mesin double-entry murni di sisi browser. Menghitung HPP metode rata-rata tertimbang memakai Decimal.js.",
    role: "Pure Double-Entry Engine",
    client: "Retail & Distribution",
    stack: ["React 19", "Zustand 5", "Decimal.js", "SHA-256"],
    metrics: ["0 Selisih Debit", "SHA-256 Anti-Tamper", "60 FPS 1000+ Baris"],
    link: "https://sokaraaccountingdemo.netlify.app/",
    mockup: <AccountingMockup />,
    problem: "Pada bisnis retail dan distribusi, pencatatan POS, stok gudang, dan pembukuan sering terpisah. Akuntan menghitung ulang HPP secara manual, memicu selisih persediaan, jurnal tidak seimbang, dan keterlambatan arus kas aktual.",
    approach: "Sistem akuntansi double-entry terintegrasi yang berjalan 100% di browser tanpa kalkulasi backend. Menggunakan Decimal.js untuk perhitungan finansial standar PSAK demi presisi tinggi. Reaktivitas UI dijaga via Deep Mutation Proxy & Zustand 5. Menerapkan struktur data berantai mirip blockchain (SHA-256) untuk integritas buku besar anti-tamper.",
    result: "Strict Balance Validation menolak otomatis transaksi jika ada selisih debit/kredit. Poka-Yoke Defensive UX mengintervensi kesalahan operasional melalui modal 1-click auto-fix. DOM Virtualization menjaga rendering ribuan baris pembukuan tetap mulus 60FPS saat di-scroll cepat."
  },
  {
    id: "sokara-hrms",
    title: "Sokara HRMS",
    summary: "Sistem HRMS dengan standar estetik enterprise dan arsitektur Offline-First. Memiliki fitur AI Shift Auto-Balance sebagai co-pilot penjadwalan.",
    role: "State Management",
    client: "Enterprise Operations",
    stack: ["React", "TypeScript", "TailwindCSS", "Zustand"],
    metrics: ["1-Klik Resolve", "Cegah Fatigue Auto", "Offline-First Roster"],
    link: "https://hrms.aldyalfarisy.my.id/",
    mockup: <HrmsMockup />,
    problem: "Menyusun jadwal mingguan rawan human-error. Karyawan kerap menerima shift malam berturut-turut hingga menembus batas kelelahan (fatigue). HRIS biasa tidak punya proteksi ini, dan data roster sering hilang jika koneksi putus saat penyusunan.",
    approach: "Arsitektur data Offline-First menggunakan Zustand Atomic Selectors dan localStorage persistence. Setiap mutasi jadwal tersimpan seketika di memory lokal sehingga aman dari network drop. Untuk menanggulangi fatigue secara preventif, dirancang Poka-Yoke Defensive UX dengan fitur Smart Suggestion.",
    result: "Mekanisme AI Shift Auto-Balance bertindak sebagai co-pilot. Aplikasi menghitung ulang matriks jadwal dan menawarkan resolusi lewat 1-klik action button, memindahkan shift lembur dari staf berisiko tinggi secara real-time tanpa beban re-render berat di browser."
  },
  {
    id: "sokara-crm",
    title: "Sokara CRM",
    summary: "Aplikasi CRM berbasis Next.js dengan Kanban interaktif yang memangkas friksi operasional sales rep, dilengkapi Defensive UX Poka-Yoke.",
    role: "Pipeline Management",
    client: "Sales & Operations",
    stack: ["Next.js", "dnd-kit", "framer-motion", "SWR"],
    metrics: ["0 Ketikan Manual", "0 Loading Drag", "3D Deal Inspector"],
    link: "https://crm.aldyalfarisy.my.id/",
    mockup: <CrmMockup />,
    problem: "Sales rep menghindari pembaruan status deal karena input form yang repetitif (mengetik nominal besar manual) dan sistem yang sekadar memblokir deal usang tanpa memberikan jalan keluar cepat saat negosiasi tiba-tiba aktif kembali.",
    approach: "Antarmuka Kanban drag-and-drop dirancang agar terasa hidup. Input angka diganti auto-formatting real-time dengan tombol Quick Preset (+10 Juta, +50 Juta). Saat sales menyeret deal usang, sistem memicu PokaYoke Modal yang menahan kartu dan menawarkan opsi 1-klik Auto-Fix.",
    result: "Gesekan operasional sales turun drastis. Kombinasi optimistic updates via SWR dan Zustand membuat manipulasi data besar terjadi tanpa loading. Detail menggunakan slide-over Deal Inspector berefek 3D Tilt Card mencegah pengguna berpindah halaman untuk meninjau data klien."
  },
  {
    id: "sokara-sanctuary",
    title: "Sokara Sanctuary",
    summary: "Booking engine khusus luxury wellness. Menggunakan Zustand-based constraint engine untuk menghitung ketersediaan jadwal secara instan.",
    role: "Booking Engine",
    client: "Luxury Wellness",
    stack: ["WebGL", "Zustand", "Framer Motion"],
    metrics: ["3 Variabel Simultan", "Auto Waitlist", "Zero Konflik"],
    link: "https://spa.aldyalfarisy.my.id/",
    mockup: <SpaMockup />,
    problem: "Aplikasi booking standar gagal memenuhi standar luxury spa. Secara UX, form kaku membunuh 'rasa mewah'. Secara operasional, sistem gagal mendeteksi bentrok sumber daya sekunder (misal: terapis kosong, tapi mesin sedang dipakai), memicu pembatalan manual.",
    approach: "Double-Sided State Engine. Di sisi tamu, antarmuka dibangun dengan cinematic motion dan alur intent-based discovery. Di sisi backend, dibangun sistem manajemen konflik berlapis menggunakan Zustand yang berjalan sepenuhnya di client untuk keperluan offline-first.",
    result: "Multi-Layer Constraint Engine mengevaluasi tiga variabel secara simultan: Ketersediaan Terapis, Ketersediaan Hardware/Ruangan, dan Waitlist Auto-Promotion. Jika jadwal bentrok dibatalkan, engine otomatis mempromosikan antrean waitlist yang relevan. Seluruh logika berjalan reaktif sangat snappy."
  }
]

const GodTierModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [project]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  if (!project) return null;

  return createPortal(
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      style={{ padding: 'clamp(0px, 2vw, 48px)' }}
    >
      {/* Cinematic backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(5, 5, 20, 0.75)', backdropFilter: 'blur(24px) saturate(180%)' }}
        onClick={handleClose}
      />

      {/* Modal shell — full-width tall card */}
      <div
        className={`relative w-full max-w-5xl bg-white overflow-hidden transition-all duration-500 flex flex-col`}
        style={{
          borderRadius: 'clamp(16px, 2.5vw, 28px)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
          maxHeight: '90dvh',
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
          opacity: isVisible ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── TOP: Darkened hero band with mockup + title ── */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #16213e 100%)', minHeight: 220 }}>
          {/* Background noise texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
          
          {/* Subtle gradient blob */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
            {/* Mockup thumbnail — compact on left */}
            <div className="w-full sm:w-[280px] flex-shrink-0 relative" style={{ minHeight: 180 }}>
              <div className="absolute inset-0 opacity-90">
                {project.mockup}
              </div>
              {/* Gradient fade to blend into dark bg */}
              <div className="absolute inset-0 hidden sm:block" style={{ background: 'linear-gradient(to right, transparent 60%, #0f0f1a 100%)' }} />
            </div>

            {/* Title + meta */}
            <div className="flex-1 flex flex-col justify-center px-8 py-8 sm:pl-4">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold" style={{ color: 'rgba(139,92,246,0.9)' }}>
                {project.client}
              </p>
              <h2 className="font-semibold tracking-tight text-white mb-3" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}>
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 max-w-md" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {project.summary}
              </p>
              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s: string) => (
                  <span key={s} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-medium"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 grid place-items-center h-9 w-9 rounded-full transition-all duration-300 hover:rotate-90"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ── MIDDLE: Impact metrics strip ── */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex-shrink-0 grid gap-px" style={{
            gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
            background: '#e5e7eb',
          }}>
            {project.metrics.map((m: string, idx: number) => (
              <div key={idx} className="flex flex-col items-center justify-center py-4 px-4 bg-white gap-1 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#6366f1' }}>
                  {idx === 0 ? 'Speed' : idx === 1 ? 'Reliability' : 'UX'}
                </span>
                <span className="font-semibold text-gray-900" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)' }}>
                  {m}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── BOTTOM: Scrollable case study content ── */}
        <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ minHeight: 0 }}>
          <div className="p-8 md:p-10 space-y-8">

            {/* Problem */}
            {project.problem && (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fee2e2', color: '#dc2626' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Problem</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-8">{project.problem}</p>
              </div>
            )}

            {project.approach && <hr className="border-gray-100" />}

            {/* Approach */}
            {project.approach && (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#ede9fe', color: '#7c3aed' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">The Approach</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-8">{project.approach}</p>
              </div>
            )}

            {project.result && <hr className="border-gray-100" />}

            {/* Result */}
            {project.result && (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#dcfce7', color: '#16a34a' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Result</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-8">{project.result}</p>
              </div>
            )}

          </div>

          {/* Footer CTA */}
          <div className="sticky bottom-0 flex items-center justify-between px-8 md:px-10 py-5 gap-4 flex-wrap"
            style={{ background: 'linear-gradient(to top, white 80%, transparent 100%)', borderTop: '1px solid #f3f4f6' }}>
            <div>
              <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-0.5">Role</p>
              <p className="text-sm font-semibold text-gray-800">{project.role}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', color: 'white', padding: '12px 28px', borderRadius: 100, boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
            >
              Lihat Sistem Live <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Wheel Carousel ─────────────────────────────────────────────────────────────
//  Each card sits on a fixed angular slot on an invisible cylinder.
//  Navigation shifts the "rotation offset" of the whole wheel.
//  This guarantees a perfect, smooth semi-circle arc — no linear track.

const RADIUS = 720      // px — radius of the invisible cylinder
const STEP_DEG = 30     // degrees between adjacent cards
const TRANSITION_MS = 480

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotOffset, setRotOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [previewProject, setPreviewProject] = useState<any>(null)
  
  // Drag state
  const [dragStartX, setDragStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const n = PROJECTS.length

  const rotateTo = useCallback((idx: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(idx)
    setRotOffset(idx * STEP_DEG)
    setTimeout(() => setIsAnimating(false), TRANSITION_MS + 50)
  }, [isAnimating])

  const prev = useCallback(() => rotateTo(Math.max(0, activeIndex - 1)), [rotateTo, activeIndex])
  const next = useCallback(() => rotateTo(Math.min(n - 1, activeIndex + 1)), [rotateTo, activeIndex, n])

  // ── Keyboard navigation ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <>
      <section
        id="work"
        className="relative w-full bg-transparent py-24 sm:py-32 min-h-[900px] flex flex-col justify-center overflow-hidden"
      >
        <style>{`
          @keyframes blob-float {
            0%   { transform: translate(0px,   0px) scale(1); }
            33%  { transform: translate(30px, -50px) scale(1.1); }
            66%  { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px,   0px) scale(1); }
          }
          .animate-blob     { animation: blob-float 15s infinite alternate ease-in-out; will-change: transform; }
          .animation-delay-2000 { animation-delay: 2s; }
          .wheel-scene {
            perspective: 1200px;
            perspective-origin: center 50%;
          }
          .wheel-track { transform-style: preserve-3d; }
          .custom-scrollbar::-webkit-scrollbar { width: 5px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        `}</style>

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -left-32 top-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28)_0%,transparent_65%)] animate-blob"></div>
          <div className="absolute -top-32 right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18)_0%,transparent_65%)] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10">

          {/* Header row: title + project pills */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-blue-600 font-semibold uppercase mb-3">Selected work</p>
              <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold tracking-tight">
                Karya Terpilih
              </h2>
            </div>

            {/* Project name pills — quick jump */}
            <div className="flex flex-wrap gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => rotateTo(i)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    i === activeIndex
                      ? 'bg-gray-900 text-white shadow-md scale-105'
                      : 'bg-white/70 border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800'
                  }`}
                >
                  <span className="relative z-10">{p.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Wheel carousel ── */}
          <div 
            className="wheel-scene flex items-center justify-center cursor-grab active:cursor-grabbing select-none" 
            style={{ height: isMobile ? 440 : 500, touchAction: 'pan-y' }}
            onPointerDown={(e) => {
              setDragStartX(e.clientX)
              setIsDragging(true)
              setHasDragged(false)
              if (e.pointerType === 'mouse') e.preventDefault()
            }}
            onPointerMove={(e) => {
              if (!isDragging) return
              const diff = e.clientX - dragStartX
              if (Math.abs(diff) > 10) setHasDragged(true)
            }}
            onPointerUp={(e) => {
              if (!isDragging) return
              setIsDragging(false)
              const diff = e.clientX - dragStartX
              
              if (diff > 50) {
                prev()
              } else if (diff < -50) {
                next()
              }
            }}
            onPointerLeave={() => setIsDragging(false)}
          >
            <div
              className="wheel-track relative flex items-center justify-center"
              style={{ width: 0, height: 0 }}
            >
              {PROJECTS.map((p, i) => {
                const currentRadius = isMobile ? 500 : RADIUS
                const angleDeg = (i * STEP_DEG) - rotOffset
                const angleRad = (angleDeg * Math.PI) / 180
                const xPos = Math.sin(angleRad) * currentRadius
                const zPos = Math.cos(angleRad) * currentRadius - currentRadius

                const isFront = i === activeIndex
                const distFromActive = Math.abs(i - activeIndex)
                const opacity = distFromActive === 0 ? 1 : distFromActive === 1 ? 0.7 : distFromActive === 2 ? 0.4 : 0.12

                // Active card is wider to show inline info — side cards are narrower
                const cardW = isFront ? (isMobile ? 320 : 380) : (isMobile ? 240 : 280)
                const cardH = isFront ? (isMobile ? 440 : 500) : (isMobile ? 400 : 460)

                return (
                  <div
                    key={p.id}
                    className="absolute"
                    style={{
                      width: cardW,
                      height: cardH,
                      transform: `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${angleDeg}deg)`,
                      transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94), opacity ${TRANSITION_MS}ms ease, width ${TRANSITION_MS}ms ease, height ${TRANSITION_MS}ms ease`,
                      opacity,
                      zIndex: isFront ? 10 : Math.max(0, 5 - distFromActive),
                      visibility: distFromActive > 3 ? 'hidden' : 'visible',
                    }}
                  >
                    <div
                      className={`group relative w-full h-full bg-white rounded-[1.75rem] overflow-hidden flex flex-col
                        ${isFront
                          ? 'shadow-[0_32px_64px_rgba(0,0,0,0.14)] ring-1 ring-black/5'
                          : 'shadow-[0_16px_32px_rgba(0,0,0,0.07)] border border-gray-100'
                        }
                        transition-shadow duration-300 cursor-pointer select-none`}
                      onClick={() => {
                        if (hasDragged) return;
                        if (!isFront) {
                          rotateTo(i);
                        } else {
                          setPreviewProject(p);
                        }
                      }}
                    >
                      {/* Mockup area — shorter on active to leave room for text */}
                      <div className={`w-full relative overflow-hidden flex-shrink-0 ${isFront ? 'h-[52%]' : 'h-[62%]'}`}>
                        {p.mockup}
                      </div>

                      {/* Text area */}
                      <div className="flex-1 px-6 pt-5 pb-6 flex flex-col bg-white">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
                          {isFront && (
                            <span className="flex-shrink-0 text-[10px] font-mono bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">{p.role}</span>
                          )}
                        </div>

                        {isFront ? (
                          // Active card: show summary + metrics + stack + CTA
                          <>
                            <p className="text-gray-500 text-[11px] leading-relaxed mb-3 line-clamp-2">{p.summary}</p>
                            
                            {/* Impact chips — visible only on active card */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {p.metrics?.map((m: string) => (
                                <span key={m} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                                  ✦ {m}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {p.stack.map((s: string) => (
                                <span key={s} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">{s}</span>
                              ))}
                            </div>
                            <div className="mt-auto flex gap-2">
                              <button
                                onClick={(e) => { 
                                  e.stopPropagation();
                                  if (hasDragged) return;
                                  setPreviewProject(p);
                                }}
                                className="flex-1 h-9 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-1.5"
                              >
                                Case Study <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (hasDragged) e.preventDefault();
                                }}
                                className="h-9 px-4 rounded-full border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
                              >
                                Live
                              </a>
                            </div>
                          </>
                        ) : (
                          // Side cards: show just title hint
                          <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2">{p.summary}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom navigation: arrows + keyboard hint */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white hover:scale-105 transition-all text-gray-600 shadow-sm disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] text-gray-400 font-mono tracking-wider select-none hidden sm:block">
              {String(activeIndex + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>

            <button
              onClick={next}
              disabled={activeIndex === n - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white hover:scale-105 transition-all text-gray-600 shadow-sm disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-[10px] text-gray-300 font-mono tracking-wider select-none hidden sm:block ml-2">
              ← → to navigate
            </span>
          </div>

        </div>
      </section>

      {/* God-Tier Modal */}
      <GodTierModal project={previewProject} onClose={() => setPreviewProject(null)} />
    </>
  )
}
