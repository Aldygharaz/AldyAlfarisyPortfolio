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
      document.title = 'Aldy Alfarisy | System Builder for Businesses';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'I build systems for your business: cash register, bookkeeping, staff scheduling, online stores, and school systems. Built around how your business works. Tell me your problem, free.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Aldy Alfarisy | System Builder for Businesses');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'I build systems for your business: cash register, bookkeeping, staff scheduling, online stores, and school systems. Built around how your business works. Tell me your problem, free.');
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Aldy Alfarisy | System Builder for Businesses');
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'I build systems for your business: cash register, bookkeeping, staff scheduling, online stores, and school systems. Built around how your business works. Tell me your problem, free.');
    } else {
      document.title = 'Aldy Alfarisy | Pembuat Sistem untuk Bisnis';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'Butuh sistem sendiri untuk bisnis Anda? Saya yang buatkan: kasir, pembukuan, jadwal karyawan, toko online, sampai sistem sekolah. Cerita dulu masalahnya, gratis.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Aldy Alfarisy | Pembuat Sistem untuk Bisnis');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Butuh sistem sendiri untuk bisnis Anda? Saya yang buatkan: kasir, pembukuan, jadwal karyawan, toko online, sampai sistem sekolah. Cerita dulu masalahnya, gratis.');
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Aldy Alfarisy | Pembuat Sistem untuk Bisnis');
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'Butuh sistem sendiri untuk bisnis Anda? Saya yang buatkan: kasir, pembukuan, jadwal karyawan, toko online, sampai sistem sekolah. Cerita dulu masalahnya, gratis.');
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