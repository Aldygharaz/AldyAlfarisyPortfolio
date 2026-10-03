import { useMemo, useRef, useState } from 'react';
import { Check, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { useSegment, type SegmentId } from '../context/SegmentContext';
import { useOrder, type PackageId, type OrderStep } from '../context/OrderContext';
import { content } from '../locales/content';
import { buildOrderWaUrl, recommendPackage } from '../lib/whatsapp';
import { track } from '../lib/analytics';

// Kebutuhan yang paling sering dicari tiap jenis usaha, ditampilkan paling depan.
const SUGGESTED_NEEDS: Record<SegmentId, string[]> = {
  toko: ['kasir', 'pembukuan', 'website'],
  fnb: ['kasir', 'karyawan', 'website'],
  klinik: ['booking', 'karyawan', 'website'],
  distributor: ['pembukuan', 'pelanggan', 'website'],
  sekolah: ['sekolah', 'website', 'landing'],
  online: ['toko-online', 'website', 'landing'],
};

export default function OrderFlow() {
  const { locale } = useLocale();
  const { segment, setSegment } = useSegment();
  const { needs, toggleNeed, pkg, setPkg, otherBusiness, setOtherBusiness, step, setStep, reset } = useOrder();
  const [problem, setProblem] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  const t = content[locale].orderFlow;
  const seg = content[locale].segments;
  const packs = content[locale].packages;

  const kinds = useMemo(() => Object.fromEntries(t.needs.map((n) => [n.id, n.kind])), [t.needs]);
  const recommended = recommendPackage(needs, kinds);

  const orderedNeeds = useMemo(() => {
    const suggested = segment ? SUGGESTED_NEEDS[segment] : [];
    return [...t.needs].sort((a, b) => {
      if (a.id === 'konsultasi') return 1;
      if (b.id === 'konsultasi') return -1;
      const ia = suggested.indexOf(a.id);
      const ib = suggested.indexOf(b.id);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }, [t.needs, segment]);

  const goTo = (next: OrderStep) => {
    setStep(next);
    track('order_step', { step: next });
    // Jaga panel tetap terlihat di HP saat isi langkah berganti.
    requestAnimationFrame(() => {
      const el = panelRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const chooseBusiness = (id: SegmentId | 'lain') => {
    if (id === 'lain') {
      setSegment(null);
      setOtherBusiness(true);
    } else {
      setSegment(id);
      setOtherBusiness(false);
    }
    // Kalau kebutuhan dan paket sudah terisi (misalnya dari tombol "Ubah"), kembali ke ringkasan.
    goTo(needs.length > 0 && pkg ? 4 : 2);
  };

  const choosePackage = (id: PackageId) => {
    setPkg(id);
    track('package_select', { package: id, location: 'order_flow' });
    goTo(4);
  };

  const restart = () => {
    reset();
    setSegment(null);
    setProblem('');
    setStep(1);
  };

  const completed = step === 4 ? 3 : step - 1;
  const progressLabel =
    step === 4 ? t.doneLabel : completed > 0 ? t.stepDone.replace('{n}', String(completed)) : t.stepOf.replace('{n}', '1');

  const businessLabel = segment
    ? seg.items.find((i) => i.id === segment)?.label
    : otherBusiness
      ? t.otherBusiness
      : '';
  const needLabels = needs.map((id) => t.needs.find((n) => n.id === id)?.label).filter(Boolean).join(', ');
  const pkgItem = pkg ? packs.items.find((p) => p.id === pkg) : null;

  const waUrl = buildOrderWaUrl({ locale, segment, needs, pkg, problem });

  return (
    <section className="section order-section" id="pesan">
      <style>{`
        .order-card {
          border-radius: 24px;
          border: 1px solid var(--border-color);
          background: var(--surface);
          padding: 24px;
          box-shadow: 0 24px 60px -36px rgba(15, 23, 42, 0.35);
          scroll-margin-top: 96px;
        }
        @media (min-width: 768px) { .order-card { padding: 36px 40px; } }
        .order-progress-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 10px; }
        .order-progress-label { font-size: 14px; font-weight: 600; color: var(--accent-strong); }
        .order-bar { height: 8px; border-radius: 100px; background: var(--surface-2); overflow: hidden; }
        .order-bar-fill { height: 100%; border-radius: 100px; background: var(--accent-blue); transition: width 0.45s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .order-steps { display: flex; gap: 8px; margin: 14px 0 28px; flex-wrap: wrap; }
        .order-step-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; padding: 6px 10px; border-radius: 100px;
          background: var(--surface-2); color: var(--text-muted);
        }
        .order-step-chip.is-done { background: var(--accent-wash); color: var(--accent-strong); font-weight: 600; }
        .order-step-chip.is-current { outline: 1.5px solid var(--accent-blue); color: var(--text); font-weight: 600; }
        .order-q { font-family: var(--font-display); font-size: 24px; font-weight: 700; margin: 0 0 6px; color: var(--text); }
        .order-hint { font-size: 15px; color: var(--text-muted); margin: 0 0 18px; }
        .order-options { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 18px; }
        @media (min-width: 768px) { .order-options { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .order-opt {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          min-height: 56px; padding: 12px 14px; border-radius: 14px;
          border: 1px solid var(--border-color); background: var(--bg); color: var(--text);
          font-size: 16px; font-weight: 500; text-align: left; cursor: pointer; line-height: 1.3;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .order-opt:hover { border-color: var(--accent-blue); }
        .order-opt:focus-visible { outline: 2px solid var(--accent-blue); outline-offset: 2px; }
        .order-opt[aria-pressed='true'] { border-color: var(--accent-blue); background: var(--accent-wash); font-weight: 600; }
        .order-opt-check { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; border: 1.5px solid var(--border-color); }
        .order-opt[aria-pressed='true'] .order-opt-check { background: var(--accent-blue); border-color: var(--accent-blue); color: #fff; }
        .order-pkgs { display: grid; gap: 12px; margin-top: 18px; }
        @media (min-width: 900px) { .order-pkgs { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .order-pkg {
          position: relative; display: flex; flex-direction: column; gap: 6px; text-align: left;
          padding: 18px 16px; border-radius: 16px; border: 1px solid var(--border-color);
          background: var(--bg); color: var(--text); cursor: pointer; min-height: 120px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .order-pkg:hover { border-color: var(--accent-blue); }
        .order-pkg[aria-pressed='true'] { border: 2px solid var(--accent-blue); background: var(--accent-wash); }
        .order-pkg-name { font-weight: 700; font-size: 18px; }
        .order-pkg-price { font-size: 15px; color: var(--text-muted); }
        .order-pkg-rec { align-self: flex-start; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: var(--accent-blue); color: #fff; }
        .order-nav { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 26px; flex-wrap: wrap; }
        .order-back { display: inline-flex; align-items: center; gap: 6px; min-height: 48px; padding: 0 6px; font-size: 15px; font-weight: 500; color: var(--text-muted); background: none; border: none; cursor: pointer; }
        .order-back:hover { color: var(--text); }
        .order-next[disabled] { opacity: 0.4; cursor: not-allowed; }
        .order-summary { border-radius: 16px; background: var(--bg); border: 1px solid var(--border-color); }
        .order-row { display: grid; grid-template-columns: 1fr auto; gap: 4px 12px; padding: 14px 16px; border-bottom: 1px solid var(--border-color); }
        .order-row:last-child { border-bottom: none; }
        .order-row-label { font-size: 13px; color: var(--text-muted); grid-column: 1 / 2; }
        .order-row-value { font-size: 16px; font-weight: 600; color: var(--text); grid-column: 1 / 2; line-height: 1.4; }
        .order-row-edit { grid-column: 2 / 3; grid-row: 1 / 3; align-self: center; font-size: 14px; font-weight: 500; color: var(--accent-blue); background: none; border: none; cursor: pointer; min-height: 44px; padding: 0 4px; }
        .order-label { display: block; font-size: 15px; font-weight: 600; color: var(--text); margin: 22px 0 8px; }
        .order-textarea {
          width: 100%; min-height: 84px; padding: 12px 14px; border-radius: 14px;
          border: 1px solid var(--border-color); background: var(--bg); color: var(--text);
          font-family: var(--font-body); font-size: 16px; line-height: 1.5; resize: vertical;
        }
        .order-textarea:focus { outline: 2px solid var(--accent-blue); outline-offset: 1px; border-color: transparent; }
        .order-send { margin-top: 18px; width: 100%; justify-content: center; min-height: 54px; font-size: 17px; }
        @media (min-width: 768px) { .order-send { width: auto; } }
        .order-note { font-size: 14px; color: var(--text-muted); margin: 12px 0 0; }
        .order-restart { display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 14px; color: var(--text-muted); background: none; border: none; cursor: pointer; min-height: 44px; padding: 0; }
      `}</style>

      <div className="section-head reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
      </div>

      <div className="order-card" ref={panelRef}>
        <div className="order-progress-top">
          <span className="order-progress-label" aria-live="polite">{progressLabel}</span>
        </div>
        <div
          className="order-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={3}
          aria-valuenow={completed}
          aria-label={progressLabel}
        >
          <div className="order-bar-fill" style={{ width: `${(completed / 3) * 100}%` }} />
        </div>
        <div className="order-steps">
          {t.steps.map((label, i) => {
            const n = i + 1;
            const done = completed >= n;
            const current = step === n;
            return (
              <span key={label} className={`order-step-chip ${done ? 'is-done' : ''} ${current ? 'is-current' : ''}`}>
                {done ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <span aria-hidden="true">{n}</span>}
                {label}
              </span>
            );
          })}
        </div>

        {step === 1 && (
          <div>
            <p className="order-q">{t.q1}</p>
            <div className="order-options">
              {seg.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="order-opt"
                  aria-pressed={segment === item.id}
                  onClick={() => chooseBusiness(item.id as SegmentId)}
                >
                  <span>{item.label}</span>
                  <span className="order-opt-check" aria-hidden="true">{segment === item.id && <Check className="w-3.5 h-3.5" />}</span>
                </button>
              ))}
              <button
                type="button"
                className="order-opt"
                aria-pressed={otherBusiness}
                onClick={() => chooseBusiness('lain')}
              >
                <span>{t.otherBusiness}</span>
                <span className="order-opt-check" aria-hidden="true">{otherBusiness && <Check className="w-3.5 h-3.5" />}</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="order-q">{t.q2}</p>
            <p className="order-hint">{t.q2hint}</p>
            <div className="order-options">
              {orderedNeeds.map((n) => {
                const on = needs.includes(n.id);
                return (
                  <button key={n.id} type="button" className="order-opt" aria-pressed={on} onClick={() => toggleNeed(n.id)}>
                    <span>{n.label}</span>
                    <span className="order-opt-check" aria-hidden="true">{on && <Check className="w-3.5 h-3.5" />}</span>
                  </button>
                );
              })}
            </div>
            <div className="order-nav">
              <button type="button" className="order-back" onClick={() => goTo(1)}>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> {t.back}
              </button>
              <button
                type="button"
                className="btn btn-primary order-next"
                disabled={needs.length === 0}
                onClick={() => goTo(pkg ? 4 : 3)}
              >
                {t.next} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="order-q">{t.q3}</p>
            <div className="order-pkgs">
              {packs.items.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="order-pkg"
                  aria-pressed={pkg === p.id}
                  onClick={() => choosePackage(p.id as PackageId)}
                >
                  {recommended === p.id && <span className="order-pkg-rec">{t.recommended}</span>}
                  <span className="order-pkg-name">{p.name}</span>
                  <span className="order-pkg-price">
                    {p.price ? `${packs.from} ${p.price}` : packs.contactPrice}
                  </span>
                </button>
              ))}
            </div>
            <div className="order-nav">
              <button type="button" className="order-back" onClick={() => goTo(2)}>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> {t.back}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="order-q">{t.summaryTitle}</p>
            <div className="order-summary" style={{ marginTop: 16 }}>
              <div className="order-row">
                <span className="order-row-label">{t.summaryBusiness}</span>
                <span className="order-row-value">{businessLabel}</span>
                <button type="button" className="order-row-edit" onClick={() => goTo(1)}>{t.change}</button>
              </div>
              <div className="order-row">
                <span className="order-row-label">{t.summaryNeeds}</span>
                <span className="order-row-value">{needLabels}</span>
                <button type="button" className="order-row-edit" onClick={() => goTo(2)}>{t.change}</button>
              </div>
              <div className="order-row">
                <span className="order-row-label">{t.summaryPackage}</span>
                <span className="order-row-value">
                  {pkgItem ? `${pkgItem.name} · ${pkgItem.price ? `${packs.from} ${pkgItem.price}` : packs.contactPriceShort}` : ''}
                </span>
                <button type="button" className="order-row-edit" onClick={() => goTo(3)}>{t.change}</button>
              </div>
            </div>

            <label className="order-label" htmlFor="order-problem">{t.problemLabel}</label>
            <textarea
              id="order-problem"
              className="order-textarea"
              maxLength={300}
              placeholder={t.problemPlaceholder}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary order-send"
              onClick={() =>
                track('order_submit', {
                  segment: segment ?? 'lain',
                  package: pkg ?? 'belum',
                  needs_count: needs.length,
                  has_problem: problem.trim().length > 0,
                })
              }
            >
              {t.send}
            </a>
            <p className="order-note">{t.sendNote}</p>
            <button type="button" className="order-restart" onClick={restart}>
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> {t.restart}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
