import {
  Heart, Phone, MapPin, Clock, ArrowLeft,
  ShieldCheck, Award, Star
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const services = [
    'روانشناسی فردی و خانواده',
    'توانبخشی شناختی',
    'کاردرمانی ذهنی و جسمی',
    'گروه‌درمانی و خانواده‌درمانی',
    'هنر درمانی و موسیقی درمانی',
    'برنامه‌های بازتوانی اجتماعی',
  ];

  const quickLinks = [
    { href: '#home', label: 'خانه' },
    { href: '#about', label: 'درباره ما' },
    { href: '#services', label: 'خدمات' },
    { href: '#team', label: 'تیم متخصصان' },
    { href: '#gallery', label: 'محیط مرکز' },
    { href: '#shop', label: 'فروشگاه خیریه' },
    { href: '#faq', label: 'سؤالات متداول' },
    { href: '#contact', label: 'تماس با ما' },
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: 'تحت نظارت بهزیستی' },
    { icon: Award, text: 'مجوز رسمی فعالیت' },
    { icon: Star, text: 'تیم متخصص و مجرب' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-text via-slate-800 to-text overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '28px 28px'
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <Logo chip className="h-14 w-14" />
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">مرکز رها</h3>
                <p className="text-xs text-white/60">توانبخشی بیماران اعصاب و روان</p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-8 mb-6">
              مرکز تخصصی آموزشی، درمانی و توانبخشی بیماران اعصاب و روان بزرگسالان
              با هدف ارتقای کیفیت زندگی، افزایش استقلال فردی و بازگشت بیماران به جامعه.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5">
                  <b.icon className="h-3.5 w-3.5 text-primary-light" />
                  <span className="text-xs text-white/80">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold text-white/60 mb-3">شبکه‌های اجتماعی</p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com/Markaz_Darmani_Raha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 hover:border-transparent transition-all"
                  aria-label="اینستاگرام"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/989139603697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 hover:border-transparent transition-all"
                  aria-label="واتساپ"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a
                  href="tel:03443261711"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent transition-all"
                  aria-label="تلفن"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-5">خدمات مرکز</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-5">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-5">اطلاعات تماس</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Phone className="h-4 w-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">تلفن تماس</p>
                  <a href="tel:03443261711" className="text-sm font-semibold text-white persian-nums hover:text-primary-light transition-colors">
                    ۰۳۴-۴۳۲۶۱۷۱۱
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <svg className="h-4 w-4 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">واتساپ</p>
                  <a href="https://wa.me/989139603697" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white persian-nums hover:text-primary-light transition-colors">
                    ۰۹۱۳-۹۶۰۳۶۹۷
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="h-4 w-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">آدرس</p>
                  <p className="text-sm text-white/85 leading-7">
                    جیرفت، خیابان حافظ غربی، کوچه حافظ غربی ۴
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Clock className="h-4 w-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5">ساعات کاری</p>
                  <p className="text-sm text-white/85 leading-7">
                    شنبه تا چهارشنبه: ۸ تا ۱۳<br />
                    پنجشنبه: ۸ تا ۱۲
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-right leading-7">
            © ۱۴۰۴ مرکز توانبخشی رها - تمامی حقوق محفوظ است.
            <span className="mx-1.5">|</span>
            استفاده از مطالب سایت با ذکر منبع بلامانع است.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>ساخته شده با</span>
            <Heart className="h-3.5 w-3.5 text-rose fill-current" />
            <span>برای سلامت روان شما</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
