import { useState } from 'react';
import { Heart } from 'lucide-react';

/*
  کامپوننت لوگوی رسمی مرکز رها
  ───────────────────────────────
  این کامپوننت ابتدا فایل واقعی لوگوی مرکز را از مسیر /logo.png بارگذاری می‌کند.

  راهنمای قرار دادن لوگوی اصلی:
  ۱) فایل لوگوی مرکز را دقیقاً با نام «logo.png» ذخیره کنید
  ۲) آن را در پوشه public/ پروژه قرار دهید
     (یا هنگام آپلود نهایی، کنار فایل index.html در پوشه dist بگذارید)
  ۳) بدون نیاز به هیچ تغییر کدی، لوگو در همه‌جا نمایش داده می‌شود:
     نوبار، صفحه لودینگ، فوتر، بخش درباره ما و تب مرورگر (فاویکون)

  تا زمانی که فایل logo.png وجود نداشته باشد، به‌صورت خودکار
  نشان قلب گرادیانی به‌عنوان جایگزین نمایش داده می‌شود.
*/

interface LogoProps {
  /** کلاس اندازه‌ی ظرف، مثل h-12 w-12 */
  className?: string;
  alt?: string;
  /** برای پس‌زمینه‌های تیره، لوگو داخل چیپ سفید قرار می‌گیرد */
  chip?: boolean;
}

const Logo = ({ className = 'h-12 w-12', alt = 'لوگوی مرکز توانبخشی بیماران اعصاب و روان رها', chip = false }: LogoProps) => {
  const [failed, setFailed] = useState(false);

  const img = !failed ? (
    <img
      src="/logo.png"
      alt={alt}
      onError={() => setFailed(true)}
      draggable={false}
      className="h-full w-full object-contain select-none"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-medium">
      <Heart className="h-1/2 w-1/2 text-white" fill="white" />
    </div>
  );

  if (chip) {
    return (
      <div className={`${className} flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-medium`}>
        {img}
      </div>
    );
  }

  return <div className={`${className} select-none`}>{img}</div>;
};

export default Logo;
