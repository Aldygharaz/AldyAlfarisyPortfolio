import { content, type Locale } from '../locales/content';
import type { SegmentId } from '../context/SegmentContext';

export const WA_PHONE = '6281410538887';

// Link WhatsApp dengan pesan pembuka yang sudah terisi.
// Tanpa segmen: pakai pesan umum dari nav.waUrl.
// Dengan segmen: pesan menyebut jenis usaha + penanda kecil (web-<segmen>)
// supaya Aldy bisa menghitung chat yang datang dari website.
export function buildWaUrl(locale: Locale, segment: SegmentId | null): string {
  if (!segment) return content[locale].nav.waUrl;
  const seg = content[locale].segments;
  const item = seg.items.find((i) => i.id === segment);
  if (!item) return content[locale].nav.waUrl;
  const text = `${seg.waTemplate.replace('{usaha}', item.waName)} (web-${item.id})`;
  return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(text)}`;
}

// Gulir halus ke sebuah section, memakai Lenis kalau aktif.
export function scrollToSection(id: string) {
  const lenis = (window as unknown as {
    lenis?: { scrollTo: (target: string, opts?: { duration?: number; offset?: number }) => void };
  }).lenis;
  if (lenis) {
    lenis.scrollTo(`#${id}`, { duration: 1.2, offset: -24 });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
