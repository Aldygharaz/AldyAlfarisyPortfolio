// Pelacakan event lewat Vercel Web Analytics.
// - Tampilan halaman dicatat otomatis setelah initAnalytics() dipanggil di produksi.
// - Event kustom (track) hanya tercatat di paket Vercel Pro atau Enterprise.
//   Di paket Hobby, panggilan track aman dan tidak berefek, jadi tidak ada yang rusak.
// - Maksimal 2 properti per event (batas Vercel Pro). Nilai: teks, angka, atau boolean.
// - Jangan pernah mengirim data pribadi (nama, nomor HP, isi pesan) lewat sini.
import { inject, track as vercelTrack } from '@vercel/analytics';

type EventProps = Record<string, string | number | boolean>;

export type TrackEvent =
  | 'wa_click'
  | 'email_click'
  | 'hero_price_link'
  | 'segment_select'
  | 'demo_open'
  | 'story_open'
  | 'package_select'
  | 'order_step'
  | 'order_submit';

const isLocalHost = () =>
  ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname) ||
  window.location.hostname.endsWith('.localhost');

// Dipanggil sekali saat aplikasi dimulai. Tidak memasang apa pun saat
// pengembangan atau saat dibuka lewat localhost (skrip hanya ada di Vercel).
export function initAnalytics() {
  if (typeof window === 'undefined') return;
  if (!import.meta.env.PROD || isLocalHost()) return;
  try {
    inject({ mode: 'production' });
  } catch {
    // Pelacakan tidak boleh pernah mengganggu pengunjung.
  }
}

export function track(name: TrackEvent, props: EventProps = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (import.meta.env.DEV) {
      console.debug('[track]', name, props);
      return;
    }
    if (isLocalHost()) return;
    vercelTrack(name, props);
  } catch {
    // Pelacakan tidak boleh pernah mengganggu pengunjung.
  }
}
