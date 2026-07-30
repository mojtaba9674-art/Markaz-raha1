import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Heart, Users, Hand, Home, Music, Palette, Briefcase,
  ClipboardCheck, GraduationCap, Stethoscope, UserCheck,
  Shield, BookOpen, Eye, Pill, ArrowLeft, Sparkles
} from 'lucide-react';

const services = [
  {
    id: 'therapy',
    category: 'خدمات درمانی',
    icon: Stethoscope,
    color: 'from-primary to-primary-dark',
    items: [
      { icon: Brain, title: 'توانبخشی اعصاب و روان', desc: 'برنامه‌های جامع توانبخشی برای بیماران روانی با هدف بهبود عملکرد روزمره' },
      { icon: Heart, title: 'روانشناسی فردی', desc: 'جلسات مشاوره و روان‌درمانی اختصاصی با توجه به نیازهای فردی هر مددجو' },
      { icon: Users, title: 'روانشناسی خانواده', desc: 'بهبود روابط خانوادگی و ایجاد محیط حمایتی برای بیمار و اعضای خانواده' },
      { icon: Brain, title: 'روان‌درمانی', desc: 'استفاده از روش‌های درمانی علمی و روز برای درمان اختلالات روانی' },
    ]
  },
  {
    id: 'rehab',
    category: 'توانبخشی و مهارت',
    icon: Hand,
    color: 'from-secondary to-secondary-dark',
    items: [
      { icon: Hand, title: 'کاردرمانی ذهنی و جسمی', desc: 'بهبود مهارت‌های حرکتی، شناختی و عملکردی از طریق فعالیت‌های درمانی' },
      { icon: Brain, title: 'توانبخشی شناختی', desc: 'ارتقای حافظه، توجه، قضاوت و سایر عملکردهای شناختی با روش‌های علمی' },
      { icon: GraduationCap, title: 'آموزش مهارت‌های زندگی', desc: 'آموزش توانمندی‌های مورد نیاز برای زندگی مستقل و خودکفایی' },
      { icon: Users, title: 'آموزش مهارت‌های اجتماعی', desc: 'بهبود تعاملات اجتماعی و برقراری ارتباطات سالم با دیگران' },
    ]
  },
  {
    id: 'group',
    category: 'گروه و خانواده',
    icon: Users,
    color: 'from-info to-blue-700',
    items: [
      { icon: Users, title: 'گروه‌درمانی', desc: 'جلسات درمانی گروهی برای بهبود مهارت‌های اجتماعی و اشتراک‌گذاری تجربیات' },
      { icon: Home, title: 'خانواده‌درمانی', desc: 'درمان مشکلات خانوادگی و تقویت نقش حمایتی خانواده در روند بهبودی' },
      { icon: UserCheck, title: 'مددکاری اجتماعی', desc: 'حمایت‌های اجتماعی، حقوقی و رفاهی برای مددجویان و خانواده‌های آنان' },
      { icon: ClipboardCheck, title: 'پایش و پیگیری پس از ترخیص', desc: 'پیگیری مستمر وضعیت بیماران پس از ترک مرکز برای جلوگیری از عود' },
    ]
  },
  {
    id: 'social',
    category: 'برنامه‌های اجتماعی',
    icon: Home,
    color: 'from-warning to-amber-700',
    items: [
      { icon: Home, title: 'برنامه‌های بازتوانی اجتماعی', desc: 'آماده‌سازی مددجویان برای بازگشت موفق به جامعه و زندگی مستقل' },
      { icon: BookOpen, title: 'آموزش خانواده بیماران', desc: 'کارگاه‌های آموزشی برای خانواده‌ها جهت مراقبت صحیح از بیمار' },
      { icon: Eye, title: 'ارزیابی شناختی', desc: 'سنجش و ارزیابی دقیق عملکردهای شناختی با ابزارهای استاندارد' },
      { icon: Pill, title: 'آموزش مدیریت بیماری', desc: 'آموزش راهکارهای مقابله با علائم بیماری و پیشگیری از عود' },
    ]
  },
  {
    id: 'art',
    category: 'درمان‌های تکمیلی',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    items: [
      { icon: Palette, title: 'هنر درمانی', desc: 'استفاده از هنر و خلاقیت برای بیان احساسات و بهبود سلامت روان' },
      { icon: Music, title: 'موسیقی درمانی', desc: 'بهره‌گیری از موسیقی برای آرامش، بهبود خلق و کاهش علائم بیماری' },
      { icon: Sparkles, title: 'فعالیت‌های تفریحی درمانی', desc: 'برنامه‌های سرگرمی و ورزشی متناسب با نیاز مددجویان' },
      { icon: Briefcase, title: 'برنامه‌های اشتغال حمایتی', desc: 'آماده‌سازی و راهنمایی مددجویان برای ورود به بازار کار' },
    ]
  },
  {
    id: 'prevent',
    category: 'آموزشی و پیشگیری',
    icon: Shield,
    color: 'from-purple-500 to-violet-600',
    items: [
      { icon: Shield, title: 'مشاوره سلامت روان', desc: 'ارائه مشاوره تخصصی برای ارتقای سلامت روان و پیشگیری از بیماری‌ها' },
      { icon: GraduationCap, title: 'برگزاری کارگاه‌های آموزشی', desc: 'کارگاه‌های متنوع آموزشی در حوزه سلامت روان برای عموم' },
      { icon: Eye, title: 'غربالگری سلامت روان', desc: 'شناسایی زودهنگام اختلالات روانی با استفاده از ابزارهای معتبر' },
      { icon: BookOpen, title: 'آموزش پیشگیری از عود', desc: 'آموزش راهکارهای عملی برای پیشگیری از بازگشت علائم بیماری' },
    ]
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('therapy');
  const active = services.find(s => s.id === activeTab)!;

  return (
    <section id="services" className="relative py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-secondary/8 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">خدمات تخصصی ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            <span className="gradient-text">خدمات جامع</span> درمانی، آموزشی و توانبخشی
          </h2>
          <p className="text-text-light leading-8">
            مرکز رها با ارائه طیف گسترده‌ای از خدمات تخصصی سلامت روان،
            همراه شما در تمام مراحل درمان و توانبخشی است تا به بهترین شکل به زندگی سالم بازگردید.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {services.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative inline-flex items-center gap-2 rounded-xl px-4 md:px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-l from-primary to-secondary text-white shadow-medium'
                      : 'bg-white text-text-light hover:text-primary border border-border/60 hover:border-primary/30'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform ${isActive ? '' : 'group-hover:scale-110'}`} />
                  <span>{tab.category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {active.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white p-6 shadow-soft border border-border/50 hover:shadow-large hover:border-primary/20 transition-all duration-400 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400`} />
                
                <div className="relative">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${active.color} mb-5 shadow-medium transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-text mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-7 mb-4">
                    {item.desc}
                  </p>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors"
                  >
                    اطلاعات بیشتر
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-text-light mb-4">
            نیاز به مشاوره رایگان درباره خدمات دارید؟
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-primary to-secondary px-8 py-4 text-base font-bold text-white shadow-medium transition-all hover:shadow-large hover:-translate-y-1"
          >
            تماس با کارشناسان مرکز
            <ArrowLeft className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
