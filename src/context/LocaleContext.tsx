import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'id' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'id';
  try {
    const saved = localStorage.getItem('sokara_lang') as Locale | null;
    if (saved === 'id' || saved === 'en') return saved;
    const lang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const isIndo = lang.startsWith('id') || tz.includes('Jakarta') || tz.includes('Makassar') || tz.includes('Jayapura') || tz.includes('Pontianak');
    return isIndo ? 'id' : 'en';
  } catch {
    return 'id';
  }
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('sokara_lang', newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    if (locale === 'en') {
      document.title = 'Aldy Alfarisy | Custom Apps and Websites for Businesses';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'I build custom apps and websites around how your business works: point of sale, bookkeeping, bookings, staff scheduling, and online stores. Business websites start from Rp 499.000.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Aldy Alfarisy | Custom Apps and Websites for Businesses');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'I build custom apps and websites around how your business works: point of sale, bookkeeping, bookings, staff scheduling, and online stores. Business websites start from Rp 499.000.');
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Aldy Alfarisy | Custom Apps and Websites for Businesses');
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'I build custom apps and websites around how your business works: point of sale, bookkeeping, bookings, staff scheduling, and online stores. Business websites start from Rp 499.000.');
    } else {
      document.title = 'Aldy Alfarisy | Aplikasi dan Website Custom untuk Usaha';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'Saya bikin aplikasi dan website custom yang mengikuti cara kerja usaha Anda: kasir, pembukuan, booking, jadwal karyawan, sampai toko online. Website usaha mulai dari Rp 499.000.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Aldy Alfarisy | Aplikasi dan Website Custom untuk Usaha');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Saya bikin aplikasi dan website custom yang mengikuti cara kerja usaha Anda: kasir, pembukuan, booking, jadwal karyawan, sampai toko online. Website usaha mulai dari Rp 499.000.');
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Aldy Alfarisy | Aplikasi dan Website Custom untuk Usaha');
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'Saya bikin aplikasi dan website custom yang mengikuti cara kerja usaha Anda: kasir, pembukuan, booking, jadwal karyawan, sampai toko online. Website usaha mulai dari Rp 499.000.');
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}