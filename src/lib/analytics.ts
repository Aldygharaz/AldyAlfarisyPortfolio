// Pelacakan event yang tidak terikat ke satu penyedia analytics.
// Belum ada script analytics yang dipasang (keputusan alat masih terbuka).
// Saat Vercel Analytics atau Plausible dipasang, event otomatis terkirim
// lewat window.va atau window.plausible. Sebelum itu, fungsi ini tidak
// melakukan apa-apa di produksi dan hanya mencatat ke konsol saat dev.
// Jangan pernah mengirim data pribadi (nama, nomor HP, isi pesan) lewat sini.

type EventProps = Record<string, string | number | boolean>;

type VercelVa = (event: 'event', payload: { name: string; data?: EventProps }) => void;
type PlausibleFn = (event: string, options?: { props?: EventProps }) => void;

declare global {
  interface Window {
    va?: VercelVa;
    plausible?: PlausibleFn;
  }
}

export type TrackEvent =
  | 'wa_click'
  | 'segment_select'
  | 'demo_open'
  | 'story_open'
  | 'package_select'
  | 'order_step'
  | 'order_submit';

export function track(name: TrackEvent, props: EventProps = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.plausible?.(name, { props });
    window.va?.('event', { name, data: props });
    if (import.meta.env.DEV) {
      console.debug('[track]', name, props);
    }
  } catch {
    // Pelacakan tidak boleh pernah mengganggu pengunjung.
  }
}
