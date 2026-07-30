import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Award, CalendarDays } from 'lucide-react';

const Counter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: '',
      label: 'ظرفیت پذیرش مددجو',
      desc: 'پذیرش مددجویان بهزیستی و آزاد (ظرفیت تکمیل)',
      color: 'from-primary to-primary-light',
    },
    {
      icon: Heart,
      value: 24,
      suffix: '+',
      label: 'خدمت تخصصی',
      desc: 'ارائه خدمات درمانی، آموزشی و توانبخشی متنوع',
      color: 'from-secondary to-teal-400',
    },
    {
      icon: Award,
      value: 7,
      suffix: '+',
      label: 'متخصص حوزه سلامت',
      desc: 'روانشناس، کاردرمانگر، مددکار، پرستار و مربیان تخصصی',
      color: 'from-info to-sky-400',
    },
    {
      icon: CalendarDays,
      value: 4,
      suffix: '',
      label: 'سال تجربه موفق',
      desc: 'فعالیت مستمر از سال ۱۴۰۱ تاکنون با مجوز رسمی',
      color: 'from-warning to-amber-400',
    },
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-secondary-dark" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 mb-5 border border-white/20">
            <Award className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">دستاوردهای ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            آمار و ارقامی که از <span className="text-accent">تعهد ما</span> می‌گوید
          </h2>
          <p className="text-white/80 leading-8">
            در طول سال‌های فعالیت، مرکز رها توانسته است با ارائه خدمات کیفی،
            دستاوردهای قابل توجهی در حوزه سلامت روان داشته باشد.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white/10 backdrop-blur-md p-6 md:p-7 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-400 overflow-hidden"
              >
                {/* Decorative circle */}
                <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} mb-5 shadow-large`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 persian-nums tracking-tight">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-sm text-white/70 leading-7">{stat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
