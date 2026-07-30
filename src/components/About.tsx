import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target, HeartHandshake } from 'lucide-react';
import Logo from './Logo';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'هدف ما',
      desc: 'ارتقای کیفیت زندگی، افزایش استقلال فردی و بازگشت پایدار مددجویان به جامعه با حفظ کرامت انسانی'
    },
    {
      icon: Users,
      title: 'تیم ما',
      desc: 'متشکل از روانشناسان دکتری تخصصی، کاردرمانگر، مددکار اجتماعی، پرستار، مربی حرفه‌آموزی و مربی ورزش و یوگا'
    },
    {
      icon: Award,
      title: 'رویکرد ما',
      desc: 'درمان انسان‌محور، برنامه‌های فردی، استفاده از روش‌های علمی روز و پیگیری مستمر فرآیند درمان'
    },
    {
      icon: HeartHandshake,
      title: 'تعهد ما',
      desc: 'حمایت از خانواده‌ها، توانمندسازی مددجویان برای زندگی مستقل و ایجاد امید در مسیر بهبودی'
    }
  ];

  const highlights = [
    'تاسیس شده در سال ۱۴۰۱ با مجوز رسمی',
    'تحت نظارت سازمان بهزیستی کشور',
    'امکان پذیرش مددجویان بهزیستی و آزاد',
    'محیطی امن، آرام و دوستانه',
    'برنامه‌های درمانی متنوع و جامع',
    'حمایت و راهنمایی خانواده‌ها'
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-6 bg-gradient-to-br from-accent-light/60 via-primary/5 to-secondary/10 rounded-[2.5rem]" />
              
              <div className="relative grid grid-cols-2 gap-4 p-2">
                {/* Card 1 */}
                <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-large">
                  <div className="flex items-start justify-between mb-6">
                    <Logo chip className="h-16 w-16" alt="لوگوی مرکز رها" />
                    <span className="text-5xl font-black text-white/15">۱۴۰۱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">درباره مرکز رها</h3>
                  <p className="text-white/85 text-sm leading-7">
                    مرکز تخصصی آموزشی، درمانی و توانبخشی بیماران اعصاب و روان بزرگسالان
                    که با هدف ارتقای کیفیت زندگی و حمایت از خانواده‌ها در شهرستان جیرفت فعالیت می‌کند.
                  </p>
                </div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-5 shadow-soft border border-border/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-text mb-1">مجوز رسمی</h4>
                  <p className="text-xs text-text-muted leading-6">
                    تحت نظارت سازمان بهزیستی و در بخش خصوصی مدیریت می‌شود
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-5 shadow-soft border border-border/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 mb-3">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-bold text-text mb-1">پذیرش مددجویان</h4>
                  <p className="text-xs text-text-muted leading-6">
                    مددجویان بهزیستی و آزاد با ظرفیت ۵۰ نفر
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    ظرفیت تکمیل است
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">درباره مرکز رها</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
              همراه مطمئن در مسیر
              <span className="gradient-text block mt-1">سلامت روان و توانبخشی</span>
            </h2>

            <p className="text-text-light leading-8 mb-6 text-[15px]">
              مرکز «رها» با بهره‌گیری از تیمی متخصص و مجرب، خدمات درمانی، آموزشی و توانبخشی را
              بر اساس استانداردهای علمی روز به بیماران اعصاب و روان ارائه می‌دهد. ما معتقدیم
              <b className="text-text"> هر فردی شایسته زندگی با کرامت و استقلال است</b> و در این مسیر
              همراه شما هستیم.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-light leading-7">{item}</span>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl bg-bg-alt p-5 border border-transparent hover:border-primary/20 hover:bg-white transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 group-hover:from-primary group-hover:to-secondary transition-all">
                    <f.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-text mb-1.5">{f.title}</h4>
                  <p className="text-xs text-text-muted leading-6">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
