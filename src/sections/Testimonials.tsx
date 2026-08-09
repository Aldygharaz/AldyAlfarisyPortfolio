import { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Aldy ngerti banget apa yang aku butuhin, bahkan sebelum aku selesai jelasin. Hasil akhirnya jauh lebih rapi dari yang aku bayangin.",
    name: 'Budi Santoso',
    role: 'Founder, TechStart',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: "Komunikasinya enak, progresnya jelas tiap minggu. Gak ada drama nunggu update kayak biasanya kerja sama freelancer lain.",
    name: 'Sarah Amalia',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: "Sistemnya jalan lancar sampai sekarang, dan pas ada masalah kecil, responnya cepat banget. Worth it.",
    name: 'Reza Pratama',
    role: 'Owner, Kedai Kopi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg tilt for elegance
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setStyle({
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      zIndex: 10,
    } as React.CSSProperties);
  };
  
  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      zIndex: 1,
    });
  };

  return (
    <div 
      className="testi-card-modern reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transitionDelay: style.transform ? '0s' : `${i * 0.12}s` }}
    >
      <div className="testi-spotlight" />
      <div className="testi-content">
        <div className="testi-stars-modern" style={{ display: 'flex', gap: '4px' }}>
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" color="currentColor" />)}
        </div>
        <p className="testi-quote-modern">"{t.quote}"</p>
        <div className="testi-author-modern">
          <img src={t.image} alt={t.name} loading="lazy" />
          <div className="testi-author-info">
            <h4 className="testi-name-modern">{t.name}</h4>
            <span className="testi-role-modern">{t.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-head center reveal">
        <span className="eyebrow">Kata mereka</span>
        <h2>Apa kata <em>klien saya</em></h2>
        <p className="section-sub">Beberapa cerita singkat dari orang-orang yang pernah bekerja sama dengan saya.</p>
      </div>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} i={i} />
        ))}
      </div>
    </section>
  );
}
