import { content, type Locale } from '../locales/content';
import type { SegmentId } from '../context/SegmentContext';
import type { PackageId } from '../context/OrderContext';

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

// Gulir halus ke sebuah section. Di layar sentuh pakai guliran bawaan browser,
// karena Lenis tidak selalu menuntaskan guliran jauh di perangkat sentuh.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as {
    lenis?: { scrollTo: (target: HTMLElement, opts?: { duration?: number; offset?: number }) => void; resize?: () => void };
  }).lenis;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (lenis && !coarse) {
    lenis.resize?.();
    lenis.scrollTo(el, { duration: 1.2, offset: -24 });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Paket yang disarankan dari kebutuhan yang dipilih. Ini hanya saran awal yang
// jujur (bukan dorongan ke paket termahal): hanya website -> Website Usaha,
// satu kebutuhan aplikasi -> Aplikasi Usaha, dua atau lebih -> Sistem Lengkap.
export function recommendPackage(needIds: string[], kinds: Record<string, string>): PackageId | null {
  const apps = needIds.filter((n) => kinds[n] === 'app').length;
  const webs = needIds.filter((n) => kinds[n] === 'web').length;
  if (apps >= 2) return 'lengkap';
  if (apps === 1) return 'aplikasi';
  if (webs >= 1) return 'website';
  return null;
}

interface OrderMessageInput {
  locale: Locale;
  segment: SegmentId | null;
  needs: string[];
  pkg: PackageId | null;
  problem: string;
}

// Pesan WhatsApp berisi ringkasan alur pesan, sesuai template di plan.
export function buildOrderWaUrl({ locale, segment, needs, pkg, problem }: OrderMessageInput): string {
  const c = content[locale];
  const wa = c.orderFlow.wa;
  const lines: string[] = [];

  const segItem = segment ? c.segments.items.find((i) => i.id === segment) : null;
  lines.push(segItem ? wa.greeting.replace('{usaha}', segItem.waName) : wa.greetingOther);

  const needLabels = needs
    .map((id) => c.orderFlow.needs.find((n) => n.id === id)?.label)
    .filter(Boolean)
    .map((l) => (l as string).toLowerCase());
  if (needLabels.length) lines.push(wa.needs.replace('{needs}', needLabels.join(', ')));

  const pkgItem = pkg ? c.packages.items.find((p) => p.id === pkg) : null;
  if (pkgItem) {
    lines.push(
      pkgItem.price
        ? wa.packagePrice.replace('{paket}', pkgItem.name).replace('{harga}', pkgItem.price)
        : wa.packageChat.replace('{paket}', pkgItem.name)
    );
  }

  const trimmed = problem.trim().slice(0, 300);
  if (trimmed) lines.push(wa.problem.replace('{masalah}', trimmed));

  lines.push(`(web-${segment ?? 'lain'}-${pkg ?? 'belum'})`);
  return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(lines.join('\n'))}`;
}
