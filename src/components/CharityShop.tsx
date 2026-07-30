import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, ShoppingBag, X, Sparkles, HandHeart, MessageCircle,
  Quote, Package, Ruler, Paintbrush, ArrowLeft, BadgeCheck, LayoutGrid, Tag
} from 'lucide-react';

/*
  ┌─────────────────────────────────────────────────────────────┐
  │  راهنمای مدیریت فروشگاه خیریه (بدون محدودیت تعداد محصول)   │
  ├─────────────────────────────────────────────────────────────┤
  │  • افزودن محصول: عکس را در public/images/shop بگذارید و    │
  │    یک آیتم جدید به آرایه products اضافه کنید                │
  │  • اثر فروخته‌شده: فقط کافیست sold: true بنویسید؛          │
  │    عکسش می‌ماند و نشان «فروخته شد» روی آن نمایش داده می‌شود │
  │  • محصولات موجود همیشه اول نمایش داده می‌شوند و فروخته‌شده‌ها│
  │    به‌صورت خودکار به انتهای لیست می‌روند                     │
  └─────────────────────────────────────────────────────────────┘
*/

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  creator: string;
  condition: string;
  meaning: string;
  story: string;
  materials: string;
  dimensions: string;
  sold?: boolean; // برای اثر فروخته‌شده true کنید
}

const products: Product[] = [
  {
    id: 1,
    title: 'ست سفالی «مهر»',
    category: 'سفال و سرامیک',
    price: '۴۸۰٬۰۰۰',
    image: '/images/shop/pottery.jpg',
    creator: 'مهر (نام مستعار)',
    condition: 'مددجوی مرکز با تجربه‌ی اسکیزوفرنی',
    meaning: 'نماد وحدت و آرامشی که کنار هم پیدا می‌شود',
    story: 'مهر می‌گوید وقتی دست‌هایش روی چرخ سفال می‌چرخد، ذهنش آرام می‌گیرد و دنیا قابل تحمل‌تر می‌شود. این ست را با لعاب سبز امید پوشانده است؛ رنگی که به گفته‌ی خودش «یادآور بهاری است که پس از هر زمستانی می‌آید». هر ظرف این ست، ساعت‌ها تمرکز، صبر و عشق را در خود دارد.',
    materials: 'گل رس طبیعی، لعاب بهداشتی',
    dimensions: 'سه تکه، ارتفاع ۱۰ تا ۱۸ سانتی‌متر',
  },
  {
    id: 2,
    title: 'تابلوی «پنجره‌ی امید»',
    category: 'نقاشی اکریلیک',
    price: '۹۵۰٬۰۰۰',
    image: '/images/shop/painting.jpg',
    creator: 'آرمان (نام مستعار)',
    condition: 'مددجوی مرکز با تجربه‌ی اختلال دوقطبی',
    meaning: 'نوری که پس از تاریکی، از پنجره می‌تابد',
    story: 'آرمان این تابلو را در روزهایی کشید که یاد گرفته بود با فراز و فرودهایش کنار بیاید. می‌گوید: «هر بار که رنگ خورشید را روی بوم زدم، حس کردم خودم دارم طلوع می‌کنم.» این تابلو، قصه‌ی رهایی از تاریکی و رسیدن به روشنایی است؛ هدیه‌ای برای هر خانه‌ای که به امید نیاز دارد.',
    materials: 'اکریلیک روی بوم، قاب چوبی',
    dimensions: '۵۰ × ۷۰ سانتی‌متر',
  },
  {
    id: 3,
    title: 'گلیم «رنگ‌های بهار»',
    category: 'دستبافت سنتی',
    price: '۱٬۲۰۰٬۰۰۰',
    image: '/images/shop/kilim.jpg',
    creator: 'گلنار (نام مستعار)',
    condition: 'مددجوی مرکز با تجربه‌ی افسردگی',
    meaning: 'بازگشت رنگ‌ها به زندگی، گره به گره',
    story: 'گلنار می‌گوید روزهای اول، همه‌چیز برایش خاکستری بود. او گره به گره این گلیم را بافت و با هر رنگی که اضافه می‌کرد، رنگی به روزهایش برمی‌گرداند. حالا این گلیم، زیباترین سند این حقیقت است که زندگی دوباره می‌تواند رنگی شود؛ چه هدیه‌ای ارزشمندتر از این؟',
    materials: 'پشم طبیعی، رنگرزی گیاهی',
    dimensions: '۸۰ × ۱۲۰ سانتی‌متر',
  },
  {
    id: 4,
    title: 'فانوس «نورِ کنار هم»',
    category: 'موزاییک‌کاری',
    price: '۳۸۰٬۰۰۰',
    image: '/images/shop/mosaic-lamp.jpg',
    creator: 'هستی (نام مستعار)',
    condition: 'مددجوی مرکز با تجربه‌ی اختلال اضطراب',
    meaning: 'قطعه‌های شکسته که کنار هم، نور می‌سازند',
    story: 'هستی قطعه‌های کوچک شیشه را یکی‌یکی کنار هم چید و می‌گوید این کار به او یاد داد که «هیچ‌کس قرار نیست کامل باشد؛ فقط باید کنارِ بقیه باشد.» وقتی شمع این فانوس روشن می‌شود، رنگ‌هایش روی دیوار می‌رقصند؛ درست مثل امیدی که در تاریکی رقص می‌کند.',
    materials: 'شیشه‌ی موزاییک، فلز و شمع',
    dimensions: 'ارتفاع ۲۲ سانتی‌متر',
    sold: true, // نمونه‌ی اثر فروخته‌شده
  },
  {
    id: 5,
    title: 'سبد حصیری «لبخند»',
    category: 'حصیربافی',
    price: '۲۹۰٬۰۰۰',
    image: '/images/shop/basket.jpg',
    creator: 'صبا (نام مستعار)',
    condition: 'مددجوی مرکز با تجربه‌ی اسکیزوفرنی',
    meaning: 'سادگی، صمیمیت و دست‌هایی که می‌سازند',
    story: 'صبا با بافتن این سبد یاد گرفته که تمرکز کند و به کارش افتخار کند. می‌گوید: «وقتی می‌بینم کسی بافته‌ی من را به خانه می‌برد، حس می‌کنم من هم عضوی از این دنیا هستم.» این سبد با رعایت کامل اصول حصیربافی سنتی بافته شده و برای سفره، میوه یا گلدان شما ساخته شده است.',
    materials: 'حصیر طبیعی، آستر پارچه‌ای',
    dimensions: 'قطر ۳۰ سانتی‌متر',
  },
];

type Filter = 'all' | 'available' | 'sold';

const toFa = (n: number) => n.toLocaleString('fa-IR');

const CharityShop = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  // محصولات موجود اول، فروخته‌شده‌ها آخر — بدون محدودیت تعداد
  const sortedProducts = useMemo(() => {
    const available = products.filter(p => !p.sold);
    const sold = products.filter(p => p.sold);
    if (filter === 'available') return available;
    if (filter === 'sold') return sold;
    return [...available, ...sold];
  }, [filter]);

  const counts = useMemo(() => ({
    all: products.length,
    available: products.filter(p => !p.sold).length,
    sold: products.filter(p => p.sold).length,
  }), []);

  const filters: { id: Filter; label: string; icon: any }[] = [
    { id: 'all', label: 'همه آثار', icon: LayoutGrid },
    { id: 'available', label: 'موجود', icon: Tag },
    { id: 'sold', label: 'فروخته‌شده', icon: BadgeCheck },
  ];

  const orderLink = (p: Product) =>
    `https://wa.me/989139603697?text=${encodeURIComponent(
      `سلام، برای خرید اثر «${p.title}» از فروشگاه خیریه مرکز رها پیام می‌دهم. ممنون می‌شوم راهنمایی کنید.`
    )}`;

  return (
    <section id="shop" className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm Friendly Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-light/40 via-bg to-bg" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-rose/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-warm/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-rose/20 px-4 py-1.5 mb-5 shadow-soft">
            <Heart className="h-4 w-4 text-rose" fill="currentColor" />
            <span className="text-sm font-semibold text-rose">فروشگاه خیریه مرکز رها</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            هر اثر، یک قصه‌ی <span className="warm-gradient-text">امید</span> است
          </h2>
          <p className="text-text-light leading-8">
            این آثار در کارگاه‌های حرفه‌آموزی مرکز رها، با دست‌های مددجویانی خلق شده‌اند که
            هر روز یک قدم به زندگی مستقل نزدیک‌تر می‌شوند. با خرید هر اثر، شما فقط یک کالا نمی‌خرید؛
            <b className="text-text"> به یک قصه‌ی بهبودی معنا می‌بخشید.</b>
          </p>
        </motion.div>

        {/* Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-warm to-rose p-[1.5px] shadow-warm">
            <div className="flex flex-col sm:flex-row items-center gap-4 rounded-[calc(1.5rem-1.5px)] bg-white/95 backdrop-blur px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-warm to-rose shadow-warm">
                <HandHeart className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm md:text-[15px] text-text-light leading-7 text-center sm:text-right">
                <b className="text-text">۱۰۰٪ درآمد فروش</b> این آثار صرف <b className="text-warm-dark">تجهیز کارگاه حرفه‌آموزی</b> و
                <b className="text-warm-dark"> توانمندسازی خود مددجویان</b> می‌شود؛ یعنی خرید شما مستقیم به دست‌هایی می‌رسد که این زیبایی را خلق کرده‌اند.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? f.id === 'sold'
                      ? 'bg-gradient-to-l from-slate-600 to-slate-700 text-white shadow-medium'
                      : 'bg-gradient-to-l from-warm to-rose text-white shadow-warm'
                    : 'bg-white text-text-light border border-border/70 hover:border-warm/30 hover:text-warm-dark'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{f.label}</span>
                <span className={`flex h-6 min-w-6 items-center justify-center rounded-lg px-1.5 text-xs font-black persian-nums ${
                  isActive ? 'bg-white/25 text-white' : 'bg-bg-alt text-text-muted'
                }`}>
                  {toFa(counts[f.id])}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid — بدون محدودیت تعداد */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
          >
            {sortedProducts.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white border shadow-soft transition-all duration-400 ${
                  product.sold
                    ? 'border-border/70 hover:shadow-medium'
                    : 'border-border/70 hover:shadow-large hover:border-warm/25'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
                  <img
                    src={product.image}
                    alt={`${product.title} - اثر دست‌ساز مددجویان مرکز رها`}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      product.sold
                        ? 'grayscale-[60%] opacity-80'
                        : 'group-hover:scale-110'
                    }`}
                  />

                  {product.sold ? (
                    <>
                      {/* Sold Overlay */}
                      <div className="absolute inset-0 bg-slate-900/25" />
                      {/* Sold Ribbon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg]">
                        <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-3 shadow-large border-2 border-slate-200">
                          <BadgeCheck className="h-5 w-5 text-slate-600" />
                          <span className="text-lg font-black text-slate-700">فروخته شد</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Handmade Badge */}
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/92 backdrop-blur-sm px-3 py-1.5 shadow-soft">
                        <Sparkles className="h-3.5 w-3.5 text-warm" />
                        <span className="text-[11px] font-bold text-text">دست‌ساز مددجویان</span>
                      </div>
                    </>
                  )}

                  {/* Category */}
                  <div className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1.5 shadow-medium ${
                    product.sold
                      ? 'bg-slate-600'
                      : 'bg-gradient-to-l from-primary to-secondary'
                  }`}>
                    <span className="text-[11px] font-bold text-white">{product.category}</span>
                  </div>

                  {/* Quick View */}
                  <button
                    onClick={() => setSelected(product)}
                    className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-2xl bg-white/95 backdrop-blur-sm py-3 text-sm font-bold text-text shadow-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-warm-dark"
                  >
                    <Quote className="h-4 w-4" />
                    قصه‌ی این اثر را بخوانید
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    product.sold ? 'text-text-light' : 'text-text group-hover:text-warm-dark'
                  }`}>
                    {product.title}
                  </h3>

                  {/* Creator */}
                  <div className="flex items-start gap-2 mb-3">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                      product.sold ? 'bg-bg-alt' : 'bg-rose-light'
                    }`}>
                      <Heart className={`h-3.5 w-3.5 ${product.sold ? 'text-text-muted' : 'text-rose'}`} fill="currentColor" />
                    </div>
                    <p className="text-xs text-text-muted leading-6">
                      خلق شده توسط <b className="text-text-light">{product.creator}</b>
                      <br />
                      {product.condition}
                    </p>
                  </div>

                  {/* Meaning */}
                  <p className="text-[13px] text-text-light leading-7 mb-4 pb-4 border-b border-border/60">
                    «{product.meaning}»
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-text-muted mb-0.5">قیمت (تومان)</p>
                      <p className={`text-xl font-black persian-nums ${product.sold ? 'text-text-muted' : 'text-text'}`}>
                        {product.price}
                      </p>
                    </div>
                    {product.sold ? (
                      <span className="inline-flex items-center gap-2 rounded-2xl bg-bg-alt border border-border/70 px-4 py-2.5 text-sm font-bold text-text-muted cursor-default">
                        <BadgeCheck className="h-4 w-4" />
                        فروخته شد
                      </span>
                    ) : (
                      <a
                        href={orderLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-warm to-rose px-4 py-2.5 text-sm font-bold text-white shadow-warm transition-all hover:shadow-large hover:-translate-y-0.5"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        سفارش
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-soft mb-4">
                  <ShoppingBag className="h-8 w-8 text-text-muted" />
                </div>
                <p className="text-text-light font-semibold">فعلاً اثری در این دسته وجود ندارد</p>
                <p className="text-sm text-text-muted mt-1">به‌زودی آثار جدید اضافه می‌شود</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Support CTA — جدا از گرید تا با هر تعداد محصول سازگار باشد */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-secondary-dark p-8 md:p-10 shadow-large">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20">
                <Paintbrush className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">اثر بعدی، قصه‌ی شماست</h3>
                <p className="text-sm md:text-[15px] text-white/85 leading-8">
                  با حمایت از کارگاه حرفه‌آموزی مرکز رها، به مددجویان کمک کنید مهارت‌های بیشتری بیاموزند
                  و آثار بیشتری خلق کنند. آثار جدید به‌مرور در همین صفحه قرار می‌گیرد.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-bold text-primary shadow-medium transition-all hover:shadow-large hover:-translate-y-0.5"
              >
                حمایت از کارگاه
                <ArrowLeft className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Story Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-[2rem] sm:rounded-[2rem] bg-white shadow-large"
              role="dialog"
              aria-modal="true"
              aria-label={`قصه‌ی اثر ${selected.title}`}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-sm text-text shadow-medium hover:text-error transition-colors"
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative aspect-square md:aspect-auto md:min-h-full bg-bg-alt">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className={`absolute inset-0 h-full w-full object-cover ${selected.sold ? 'grayscale-[40%]' : ''}`}
                  />
                  {selected.sold ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
                      <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-2.5 shadow-large rotate-[-6deg]">
                        <BadgeCheck className="h-5 w-5 text-slate-600" />
                        <span className="text-base font-black text-slate-700">فروخته شد</span>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/92 backdrop-blur-sm px-3 py-1.5 shadow-soft">
                      <Sparkles className="h-3.5 w-3.5 text-warm" />
                      <span className="text-[11px] font-bold text-text">دست‌ساز مددجویان</span>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="flex flex-col p-6 md:p-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
                    {selected.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-text mb-4">{selected.title}</h3>

                  {/* Creator Card */}
                  <div className="rounded-2xl bg-gradient-to-br from-rose-light/60 to-warm-light/40 border border-rose/15 p-4 mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-rose" fill="currentColor" />
                      <span className="text-sm font-bold text-text">خالق اثر: {selected.creator}</span>
                    </div>
                    <p className="text-xs text-text-light leading-6 mb-2">{selected.condition}</p>
                    <p className="text-xs text-text-muted leading-6 italic">
                      معنای اثر: «{selected.meaning}»
                    </p>
                  </div>

                  {/* Story */}
                  <div className="relative mb-5">
                    <Quote className="absolute -top-1 right-0 h-6 w-6 text-warm/30" />
                    <p className="text-sm text-text-light leading-8 pr-8">
                      {selected.story}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2.5 mb-6 pb-6 border-b border-border/60">
                    <div className="flex items-center gap-2.5 text-sm">
                      <Package className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-text-muted">جنس:</span>
                      <span className="font-semibold text-text">{selected.materials}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Ruler className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-text-muted">ابعاد:</span>
                      <span className="font-semibold text-text">{selected.dimensions}</span>
                    </div>
                  </div>

                  {/* Price + Order */}
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-text-muted mb-1">قیمت (تومان)</p>
                      <p className={`text-3xl font-black persian-nums ${selected.sold ? 'text-text-muted' : 'text-text'}`}>
                        {selected.price}
                      </p>
                    </div>
                    {selected.sold ? (
                      <span className="inline-flex items-center gap-2 rounded-2xl bg-bg-alt border border-border/70 px-6 py-3.5 text-base font-bold text-text-muted cursor-default">
                        <BadgeCheck className="h-5 w-5" />
                        فروخته شد
                      </span>
                    ) : (
                      <a
                        href={orderLink(selected)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-warm to-rose px-6 py-3.5 text-base font-bold text-white shadow-warm transition-all hover:shadow-large hover:-translate-y-0.5"
                      >
                        <MessageCircle className="h-5 w-5" />
                        سفارش در واتساپ
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-center text-[11px] text-text-muted leading-6">
                    {selected.sold
                      ? 'این اثر به فروش رسیده است؛ مبلغ آن صرف تجهیز کارگاه و توانمندسازی خالقش شد.'
                      : 'تمام مبلغ این اثر صرف تجهیز کارگاه حرفه‌آموزی و توانمندسازی خالق آن می‌شود.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CharityShop;
