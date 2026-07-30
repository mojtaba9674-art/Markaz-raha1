import { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check } from 'lucide-react';

/*
  موقعیت جغرافیایی مرکز رها
  برای تغییر موقعیت، فقط مقادیر LAT و LNG را عوض کنید.
*/
export const RAHA_LAT = 28.661949;
export const RAHA_LNG = 57.750687;

const BBOX_DELTA = 0.004; // میزان زوم نقشه (کمتر = نزدیک‌تر)

const LocationMap = () => {
  const [copied, setCopied] = useState(false);

  const bbox = [
    RAHA_LNG - BBOX_DELTA,
    RAHA_LAT - BBOX_DELTA,
    RAHA_LNG + BBOX_DELTA,
    RAHA_LAT + BBOX_DELTA,
  ].join('%2C');

  // نقشه تعاملی OpenStreetMap (بدون نیاز به کلید API)
  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${RAHA_LAT}%2C${RAHA_LNG}`;

  // لینک‌های مسیریابی
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${RAHA_LAT},${RAHA_LNG}`;
  const googleDirections = `https://www.google.com/maps/dir/?api=1&destination=${RAHA_LAT},${RAHA_LNG}`;
  const neshanLink = `https://neshan.org/maps/@${RAHA_LAT},${RAHA_LNG},17z`;
  const baladLink = `https://balad.ir/location?latitude=${RAHA_LAT}&longitude=${RAHA_LNG}&zoom=17`;

  const copyCoords = async () => {
    try {
      await navigator.clipboard.writeText(`${RAHA_LAT}, ${RAHA_LNG}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* بی‌صدا رد شود */
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft border border-border/50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-teal-500 shadow-medium">
          <MapPin className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-text text-sm">موقعیت مرکز روی نقشه</h4>
          <p className="text-xs text-text-muted truncate">
            جیرفت، خیابان حافظ غربی، کوچه حافظ غربی ۴
          </p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="relative aspect-[16/11] bg-bg-alt">
        <iframe
          src={osmEmbed}
          title="نقشه موقعیت مرکز توانبخشی رها در جیرفت"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
          style={{ filter: 'saturate(1.05)' }}
        />

        {/* Center Pin Badge */}
        <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-soft border border-border/50">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-[11px] font-bold text-text">مرکز رها</span>
        </div>
      </div>

      {/* Coordinates */}
      <button
        onClick={copyCoords}
        className="group flex w-full items-center justify-between gap-3 px-4 py-3 border-b border-border/50 hover:bg-bg-alt/60 transition-colors"
        aria-label="کپی مختصات جغرافیایی"
      >
        <span className="text-xs text-text-muted">مختصات جغرافیایی</span>
        <span className="flex items-center gap-2 text-xs font-semibold text-text persian-nums" dir="ltr">
          {RAHA_LAT}, {RAHA_LNG}
          {copied ? (
            <Check className="h-3.5 w-3.5 text-success" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-text-muted group-hover:text-primary transition-colors" />
          )}
        </span>
      </button>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 divide-x divide-x-reverse divide-border/50">
        <a
          href={googleDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-gradient-to-l from-primary to-secondary hover:opacity-95 transition-opacity"
        >
          <Navigation className="h-4 w-4" />
          مسیریابی
        </a>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          گوگل مپ
        </a>
      </div>

      {/* Iranian Map Apps */}
      <div className="grid grid-cols-2 divide-x divide-x-reverse divide-border/50 border-t border-border/50">
        <a
          href={neshanLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-text-light hover:text-primary hover:bg-bg-alt/60 transition-colors"
        >
          <MapPin className="h-3.5 w-3.5" />
          نمایش در نشان
        </a>
        <a
          href={baladLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-text-light hover:text-primary hover:bg-bg-alt/60 transition-colors"
        >
          <MapPin className="h-3.5 w-3.5" />
          نمایش در بلد
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
