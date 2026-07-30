import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'مرکز رها چه خدماتی ارائه می‌دهد؟',
    answer: 'مرکز رها طیف گسترده‌ای از خدمات تخصصی سلامت روان را ارائه می‌دهد از جمله: روانشناسی فردی و خانواده، روان‌درمانی، کاردرمانی ذهنی و جسمی، توانبخشی شناختی، آموزش مهارت‌های زندگی و اجتماعی، گروه‌درمانی، خانواده‌درمانی، مددکاری اجتماعی، هنر درمانی، موسیقی درمانی، برنامه‌های بازتوانی اجتماعی، اشتغال حمایتی و پایش و پیگیری بیماران پس از ترخیص.'
  },
  {
    question: 'پذیرش مددجویان به چه صورت است؟',
    answer: 'خدمات مرکز رها در درجه اول بر پذیرش مددجویان اعصاب و روان بهزیستی تمرکز دارد و پذیرش مددجویان آزاد نیز انجام می‌شود. ظرفیت کلی مرکز ۵۰ مددجو است که در حال حاضر ظرفیت تکمیل شده است؛ با این حال برای ثبت نام در لیست انتظار و اطلاع از زمان آزاد شدن ظرفیت می‌توانید با مرکز تماس بگیرید. برای پذیرش، ابتدا با مرکز تماس گرفته و پس از هماهنگی اولیه، مراحل ارزیابی و پذیرش انجام می‌گردد.'
  },
  {
    question: 'تیم درمانی مرکز شامل چه افرادی است؟',
    answer: 'تیم درمانی مرکز رها متشکل از متخصصان مجرب حوزه سلامت روان است: دکتر نرجس حسینی (موسس و روانشناس با مدرک دکتری تخصصی روانشناسی بالینی)، دکتر ام‌البنی رودباری (مسئول فنی مرکز با مدرک دکتری تخصصی روانشناسی)، خانم عاطف مسلمی (کاردرمانگر)، خانم آنیتا رشیدی (پرستار)، خانم فرزانه مشایخی (مددکار اجتماعی)، خانم لیلی ارفند (مربی حرفه‌آموزی) و خانم شفق شهابی (مربی ورزش و یوگا). همه اعضای تیم دارای مدارک معتبر و تجربه کاری در حوزه توانبخشی روان هستند.'
  },
  {
    question: 'برنامه‌های درمانی چگونه طراحی می‌شوند؟',
    answer: 'برنامه‌های درمانی به صورت فردی و با توجه به نیازها، وضعیت سلامت و اهداف هر مددجو طراحی می‌شود. ابتدا ارزیابی جامع شناختی و روانشناختی انجام شده و سپس تیم چندرشته‌ای مرکز، برنامه درمانی، آموزشی و توانبخشی اختصاصی را تهیه می‌کند. این برنامه به صورت دوره‌ای بازبینی و به‌روزرسانی می‌گردد.'
  },
  {
    question: 'آیا برای خانواده‌ها برنامه آموزشی وجود دارد؟',
    answer: 'بله، آموزش خانواده‌ها یکی از مهم‌ترین بخش‌های برنامه‌های مرکز رها است. کارگاه‌های آموزشی منظم در زمینه روش‌های صحیح مراقبت از بیمار، مدیریت بحران، پیشگیری از عود بیماری و ایجاد محیط حمایتی خانواده برای خانواده‌ها برگزار می‌شود. همچنین جلسات خانواده‌درمانی نیز بخشی جدایی‌ناپذیر از فرآیند درمان است.'
  },
  {
    question: 'پس از ترخیص، پیگیری برای بیماران وجود دارد؟',
    answer: 'بله، یکی از مزیت‌های مرکز رها، پایش و پیگیری مستمر بیماران پس از ترخیص است. این برنامه شامل تماس‌های تلفنی منظم، جلسات پیگیری حضوری، مشاوره‌های لازم و حمایت‌های رفاهی و اجتماعی است تا از عود بیماری جلوگیری شود و بازگشت پایدار مددجو به جامعه تضمین گردد.'
  },
  {
    question: 'فروشگاه خیریه مرکز رها چیست؟',
    answer: 'فروشگاه خیریه مرکز رها، محلی برای عرضه آثار دست‌سازی است که مددجویان در کارگاه‌های حرفه‌آموزی مرکز خلق می‌کنند؛ از سفال و نقاشی تا گلیم و موزاییک. تمام درآمد حاصل از فروش این آثار صرف تجهیز کارگاه حرفه‌آموزی و توانمندسازی خود مددجویان می‌شود. برای مشاهده آثار و ثبت سفارش، به بخش «فروشگاه خیریه» در همین صفحه مراجعه کنید یا از طریق واتساپ با ما در ارتباط باشید.'
  },
  {
    question: 'ساعات کاری مرکز چگونه است؟',
    answer: 'مرکز رها در روزهای شنبه تا چهارشنبه از ساعت ۸ صبح تا ۱۳ ظهر و روزهای پنجشنبه از ساعت ۸ صبح تا ۱۲ ظهر فعال است. برای مراجعه حضوری حتماً پیش از آمدن با مرکز هماهنگی کنید.'
  },
  {
    question: 'هزینه خدمات چگونه محاسبه می‌شود؟',
    answer: 'برای مددجویان بهزیستی، هزینه‌ها طبق تعرفه‌های سازمان بهزیستی محاسبه و پرداخت می‌گردد. برای مددجویان آزاد نیز هزینه‌ها با توجه به نوع خدمات و برنامه درمانی تعیین می‌شود. برای اطلاعات دقیق‌تر در مورد هزینه‌ها، لطفاً با واحد پذیرش مرکز تماس بگیرید.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Header Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-5">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">سؤالات متداول</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
              پاسخ سوالات شما
              <span className="gradient-text block mt-1">قبل از تماس با ما</span>
            </h2>

            <p className="text-text-light leading-8 mb-8">
              در این بخش سؤالات رایج خانواده‌ها و مددجویان را پاسخ داده‌ایم.
              اگر سؤال دیگری دارید، با ما تماس بگیرید.
            </p>

            {/* CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-6 md:p-7 text-white shadow-large">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">سؤال دیگری دارید؟</h3>
              <p className="text-white/85 text-sm leading-7 mb-5">
                کارشناسان ما آماده پاسخگویی به شما در تمام ساعات کاری هستند.
              </p>
              <div className="space-y-2.5">
                <a href="tel:03443261711" className="flex items-center gap-2 text-sm font-semibold hover:underline">
                  <span className="text-white/70">تلفن:</span>
                  <span className="persian-nums">۰۳۴-۴۳۲۶۱۷۱۱</span>
                </a>
                <a href="https://wa.me/989139603697" className="flex items-center gap-2 text-sm font-semibold hover:underline">
                  <span className="text-white/70">واتساپ:</span>
                  <span className="persian-nums">۰۹۱۳-۹۶۰۳۶۹۷</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-gradient-to-br from-white to-accent-light/20 border-primary/25 shadow-medium'
                      : 'bg-bg-alt border-border/50 hover:border-primary/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all ${
                        isOpen
                          ? 'bg-gradient-to-br from-primary to-secondary text-white'
                          : 'bg-white text-text-muted border border-border/60'
                      }`}>
                        {i + 1}
                      </span>
                      <h3 className={`font-bold text-base md:text-[15px] leading-8 pt-0.5 transition-colors ${
                        isOpen ? 'text-primary' : 'text-text'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-text-muted'
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <div className="px-5 md:px-6 pb-6 md:pb-7 pr-[60px] md:pr-[68px]">
                          <p className="text-sm md:text-[15px] text-text-light leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
