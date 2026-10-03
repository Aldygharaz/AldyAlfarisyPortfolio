import { useLocale } from '../context/LocaleContext';

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="lang-toggle-wrap" role="group" aria-label="Language selector">
      <style>{`
        .lang-toggle-wrap {
          display: inline-flex;
          align-items: center;
          padding: 2px;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
          background: var(--surface);
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        }
        .lang-btn {
          padding: 4px 9px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
        }
        .lang-btn.active {
          background: var(--text);
          color: var(--bg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }
        .lang-btn:hover:not(.active) {
          color: var(--text);
        }
      `}</style>
      <button
        type="button"
        className={`lang-btn ${locale === 'id' ? 'active' : ''}`}
        onClick={() => setLocale('id')}
        aria-pressed={locale === 'id'}
        aria-label="Pilih Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="Select English Language"
      >
        EN
      </button>
    </div>
  );
}