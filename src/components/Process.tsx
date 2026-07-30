import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, BookOpen, Users, Home, ArrowLeft } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: '۰۱',
      icon: ClipboardList,
      title: 'ارزیابی و پذیرش اولیه',
      desc: 'در اولین مرحله، با انجام مصاحبه‌های تخصصی و ارزیابی‌های شناختی، وضعیت دقیق مددجو مشخص می‌شود و برنامه درمانی متناسب با نیازهای ایشان طراحی می‌گردد.',
      points: ['مصاحبه ورودی با متخصص', 'ارزیابی شناختی و روانشناختی', 'بررسی سوابق پزشکی و درمانی']
    },
    {
      num: '۰۲',
      icon: UserCheck,
      title: 'طراحی برنامه فردی',
      desc: 'بر اساس نتایج ارزیابی، تیم چندرشته‌ای مرکز یک برنامه درمانی و توانبخشی اختصاصی برای هر مددجو با هدف‌های مشخص و قابل اندازه‌گیری طراحی می‌کند.',
      points: ['برنامه چندحالته درمانی', 'تعیین اهداف کوتاه و بلندمدت', 'برنامه‌ریزی برای خانواده']
    },
    {
      num: '۰۳',
      icon: BookOpen,
      title: 'اجرای برنامه‌های درمانی',
      desc: 'در این مرحله، جلسات منظم روان‌درمانی، کاردرمانی، هنردرمانی و سایر برنامه‌های آموزشی و توانبخشی بر اساس برنامه از پیش تعیین شده اجرا می‌گردد.',
      points: ['جلسات درمانی منظم', 'کارگاه‌های مهارتی', 'فعالیت‌های هنری و ورزشی']
    },
    {
      num: '۰۴',
      icon: Users,
      title: 'پیگیری و بازسازی',
      desc: 'به صورت دوره‌ای پیشرفت مددجو ارزیابی شده و برنامه درمانی در صورت نیاز به‌روزرسانی می‌شود. همچنین خانواده‌ها در این فرآیند همراهی می‌گردند.',
      points: ['ارزیابی دوره‌ای پیشرفت', 'جلسات خانواده‌درمانی', 'اصلاح برنامه درمانی']
    },
    {
      num: '۰۵',
      icon: Home,
      title: 'آماده‌سازی برای بازگشت به جامعه',
      desc: 'در مرحله نهایی، مددجو برای بازگشت موفق به زندگی خانوادگی و اجتماعی آماده می‌شود و برنامه‌های پیگیری پس از ترخیص برای ایشان تعریف می‌گردد.',
      points: ['آموزش مهارت‌های اجتماعی پیشرفته', 'برنامه اشتغال حمایتی', 'پیگیری مستمر پس از ترخیص']
    },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 mb-5">
            <ArrowLeft className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">روند کاری ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            چگونه با شما همراه می‌شویم؟
            <span className="gradient-text block mt-1">فرآیند درمان و توانبخشی مرحله به مرحله</span>
          </h2>
          <p className="text-text-light leading-8">
            فرآیند درمان در مرکز رها به صورت سیستماتیک و مرحله‌ای طراحی شده تا
            بهترین نتیجه را برای مددجویان و خانواده‌هایشان به همراه داشته باشد.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent-light" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${isRight ? '' : 'md:[&>*:first-child]:order-2'}`}
                >
                  {/* Content */}
                  <div className={`${isRight ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right md:col-start-2'}`}>
                    <div className={`rounded-3xl bg-bg-alt p-6 md:p-7 border border-border/50 hover:border-primary/20 hover:shadow-medium transition-all duration-400 ${isRight ? '' : 'md:mr-auto'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-medium">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-4xl font-black text-primary/10">{step.num}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                      <p className="text-sm text-text-light leading-7 mb-4">{step.desc}</p>
                      
                      <ul className="space-y-2">
                        {step.points.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden md:flex absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center">
                    <div className="absolute h-14 w-14 rounded-full bg-white border-2 border-primary/30" />
                    <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-medium flex items-center justify-center">
                      <span className="text-white font-bold text-xs persian-nums">{i + 1}</span>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="md:hidden flex justify-center -mb-4 mt-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm shadow-medium persian-nums">
                      {i + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
