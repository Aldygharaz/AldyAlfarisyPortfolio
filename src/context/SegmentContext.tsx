import React, { createContext, useContext, useState } from 'react';

// Jenis usaha yang sedang dipilih pengunjung (toko, fnb, klinik, ...).
// Dipakai bersama oleh section Pilih jenis usaha, saringan Contoh sistem,
// dan tombol WhatsApp melayang supaya pesan pembukanya sesuai usaha.
export type SegmentId = 'toko' | 'fnb' | 'klinik' | 'distributor' | 'sekolah' | 'online';

interface SegmentContextType {
  segment: SegmentId | null;
  setSegment: (segment: SegmentId | null) => void;
}

const SegmentContext = createContext<SegmentContextType | null>(null);

export function SegmentProvider({ children }: { children: React.ReactNode }) {
  const [segment, setSegment] = useState<SegmentId | null>(null);
  return (
    <SegmentContext.Provider value={{ segment, setSegment }}>
      {children}
    </SegmentContext.Provider>
  );
}

export function useSegment() {
  const context = useContext(SegmentContext);
  if (!context) {
    throw new Error('useSegment must be used within SegmentProvider');
  }
  return context;
}
