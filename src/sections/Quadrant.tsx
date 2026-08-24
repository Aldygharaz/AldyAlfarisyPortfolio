import { Sparkles, Zap, Building2, Rocket } from 'lucide-react';

const quadrants = [
  {
    cls: 'blue',
    icon: <Sparkles size={28} />,
    label: 'FULL-STACK',
    title: 'Web & App Development',
    desc: 'Membangun aplikasi full-stack berskala produksi menggunakan React, Next.js, dan arsitektur modern, mulai dari portal internal, sistem SaaS, hingga desktop app.',
  },
  {
    cls: 'pink',
    icon: <Zap size={28} />,
    label: 'AUTOMATION',
    title: 'AI-Powered Workflow',
    desc: 'Mengintegrasikan AI Agent ke dalam pipeline development dan operasional bisnis, mengotomasi tugas berulang dengan presisi dan konsistensi tinggi tanpa mengorbankan kontrol kualitas.',
  },
  {
    cls: 'amber',
    icon: <Building2 size={28} />,
    label: 'ARCHITECTURE & TRANSFORMATION',
    title: 'Sistem Custom yang Siap Bertumbuh',
    desc: 'Merancang topologi sistem sejak fase awal, hingga menjadi sistem manajemen terpadu yang tumbuh mengikuti valuasi bisnis Anda tanpa migrasi ulang.',
  },
  {
    cls: 'green',
    icon: <Rocket size={28} />,
    label: 'INTERACTIVE',
    title: 'Website Interaktif & Immersive',
    desc: 'Membangun landing page dan website dengan animasi scroll, transisi halus, dan elemen 3D interaktif menggunakan GSAP, Lenis, dan React Three Fiber untuk pengalaman yang terasa hidup, bukan sekadar halaman statis.',
  },
];

export default function Quadrant() {
  return (
    <section className="section" id="quadrant" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-head reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
        <span className="eyebrow">Solusi Terpadu</span>
        <h2>Apa yang Bisa Saya Bangun untuk Anda</h2>
        <p className="section-sub" style={{ maxWidth: '700px', margin: '16px auto 0' }}>
          Empat kemampuan ini saling terhubung dalam satu proses membangun sistem untuk bisnis Anda, mulai dari desain arsitektur hingga produk yang siap dipakai.
        </p>
      </div>
      <div className="quad-frame reveal">
        <span className="quad-axis-label quad-axis-top">Fokus Pengguna</span>
        <span className="quad-axis-label quad-axis-bottom">Performa Sistem</span>
        <span className="quad-axis-label quad-axis-left">Interaksi Manusia</span>
        <span className="quad-axis-label quad-axis-right">Otomasi Mesin</span>
        <div className="quad-grid">
          {quadrants.map((q, i) => (
            <div className={`quad-cell ${q.cls}`} key={i}>
              <div className="quad-icon">{q.icon}</div>
              <span className="quad-label">{q.label}</span>
              <h3 dangerouslySetInnerHTML={{ __html: q.title }} />
              <p>{q.desc}</p>
            </div>
          ))}
        </div>
        <div className="quad-center-dot" />
      </div>
    </section>
  );
}
