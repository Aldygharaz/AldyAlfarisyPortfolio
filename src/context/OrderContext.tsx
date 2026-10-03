import React, { createContext, useContext, useState } from 'react';

// Pilihan di alur pesan 3 langkah: kebutuhan (boleh lebih dari satu) dan paket.
// Jenis usaha disimpan di SegmentContext supaya sama dengan section lain.
export type PackageId = 'website' | 'aplikasi' | 'lengkap';
export type OrderStep = 1 | 2 | 3 | 4;

interface OrderContextType {
  needs: string[];
  toggleNeed: (id: string) => void;
  pkg: PackageId | null;
  setPkg: (pkg: PackageId | null) => void;
  otherBusiness: boolean;
  setOtherBusiness: (value: boolean) => void;
  step: OrderStep;
  setStep: (step: OrderStep) => void;
  /** Dipanggil saat jenis usaha dipilih di mana pun: langkah 1 dianggap selesai. */
  onBusinessChosen: () => void;
  /** Dipanggil saat paket dipilih dari section Paket: lompat ke langkah yang masih kosong. */
  onPackageChosen: (pkg: PackageId, hasBusiness: boolean) => void;
  reset: () => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [needs, setNeeds] = useState<string[]>([]);
  const [pkg, setPkg] = useState<PackageId | null>(null);
  const [otherBusiness, setOtherBusiness] = useState(false);
  const [step, setStep] = useState<OrderStep>(1);

  const onBusinessChosen = () => {
    setStep((current) => (current === 1 ? 2 : current));
  };

  const onPackageChosen = (chosen: PackageId, hasBusiness: boolean) => {
    setPkg(chosen);
    if (!hasBusiness) setStep(1);
    else if (needs.length === 0) setStep(2);
    else setStep(4);
  };

  const toggleNeed = (id: string) => {
    setNeeds((prev) => {
      // "Belum tahu" tidak digabung dengan pilihan lain.
      if (id === 'konsultasi') return prev.includes(id) ? [] : [id];
      const withoutUnknown = prev.filter((n) => n !== 'konsultasi');
      return withoutUnknown.includes(id) ? withoutUnknown.filter((n) => n !== id) : [...withoutUnknown, id];
    });
  };

  const reset = () => {
    setNeeds([]);
    setPkg(null);
    setOtherBusiness(false);
    setStep(1);
  };

  return (
    <OrderContext.Provider value={{ needs, toggleNeed, pkg, setPkg, otherBusiness, setOtherBusiness, step, setStep, onBusinessChosen, onPackageChosen, reset }}>
      {children}
    </OrderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within OrderProvider');
  }
  return context;
}
