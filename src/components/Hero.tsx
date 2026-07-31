import { motion } from 'framer-motion';
import { ArrowLeft, Phone, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden bg-pattern noise">
      {/* Decorative Elements - Refined */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-secondary/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/10 px-4 py-2 mb-7 shadow-[0_2px_12px_-4px_rgba(5,150,105,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-text-light">
                مرکز تخصصی توانبخشی | تحت نظارت بهزیستی
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.25] text-text mb-6"
            >
              <span className="block">راهی برای</span>
              <span className="gradient-text"> زندگی سالم و مستقل</span>
              <span className="block mt-2">همراه شما هستیم</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-text-light leading-8 mb-8 max-w-xl"
            >
              مرکز «رها» با تیمی متخصص از روانشناسان، کاردرمانگران و مددکاران اجتماعی،
              همراه شما در مسیر <b className="text-text">درمان، توانبخشی و بازگشت به زندگی</b> است.
              رویکرد ما انسان‌محور، علمی و مبتنی بر نیازهای فردی شماست.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: ShieldCheck, text: 'تیم متخصص و مجرب' },
                { icon: CalendarCheck, text: 'برنامه‌های فردمحور' },
                { icon: Sparkles, text: 'رویکرد درمان علمی' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-light">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light/60">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-primary to-secondary px-7 py-4 text-base font-bold text-white shadow-medium transition-all hover:shadow-large hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                تماس و رزرو مشاوره
                <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl bg-white border-2 border-border px-7 py-4 text-base font-bold text-text transition-all hover:border-primary/30 hover:bg-accent-light/30"
              >
                مشاهده خدمات مرکز
              </a>
            </motion.div>

            {/* Capacity Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white/70 border border-amber-200/70 px-4 py-3"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              </span>
              <p className="text-xs md:text-sm text-text-light leading-6">
                در حال حاضر <b className="text-text""ظرفیت پذیرش" <b className="text-amber-700">تکمیل</b> است؛
                برای ثبت نام در لیست انتظار تماس بگیرید.
              </p>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 pt-7 border-t border-border/60 flex flex-wrap items-center gap-6"
            >
              <div>
                <p className="text-xs text-text-muted mb-1">تماس تلفنی</p>
                <a href="tel:03443261711" className="text-xl font-bold text-text persian-nums hover:text-primary transition-colors">
                  ۰۳۴-۴۳۲۶۱۷۱۱
                </a>
              </div>
              <div className="h-10 w-px bg-border/60 hidden sm:block" />
              <div>
                <p className="text-xs text-text-muted mb-1">واتساپ</p>
                <a href="https://wa.me/989139603697" className="text-xl font-bold text-primary persian-nums hover:text-secondary transition-colors">
                  ۰۹۱۳-۹۶۰۳۶۹۷
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pr-8"
          >
            {/* Main Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-white via-accent-light/30 to-white p-2 shadow-large border border-white">
                <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-light/20">
                  {/* SVG Illustration - Mental Health */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Background Circles */}
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.15" />
                        </linearGradient>
                        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#0f766e" />
                        </linearGradient>
                        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#0f766e" />
                        </linearGradient>
                      </defs>
                      
                      {/* Decorative circles */}
                      <circle cx="200" cy="250" r="180" fill="url(#grad1)" />
                      <circle cx="120" cy="120" r="40" fill="#a7f3d0" opacity="0.5" />
                      <circle cx="320" cy="150" r="25" fill="#6ee7b7" opacity="0.5" />
                      <circle cx="80" cy="380" r="30" fill="#5eead4" opacity="0.4" />
                      <circle cx="340" cy="400" r="35" fill="#a7f3d0" opacity="0.4" />
                      
                      {/* Main Brain/Head Silhouette */}
                      <g transform="translate(200, 230)">
                        {/* Head outline */}
                        <ellipse cx="0" cy="0" rx="90" ry="105" fill="white" stroke="#059669" strokeWidth="2" opacity="0.95" />
                        
                        {/* Brain */}
                        <path d="M-50,-30 C-65,-50 -40,-70 -20,-65 C-10,-75 15,-75 25,-65 C45,-70 65,-50 50,-30 C70,-15 65,20 45,30 C50,55 25,70 0,65 C-25,70 -50,55 -45,30 C-65,20 -70,-15 -50,-30Z" 
                              fill="url(#brainGrad)" opacity="0.85" />
                        
                        {/* Brain details */}
                        <path d="M-30,-40 C-25,-55 -10,-55 -5,-45" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                        <path d="M10,-45 C20,-55 35,-50 35,-35" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                        <path d="M-35,-10 C-45,0 -35,20 -20,20" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                        <path d="M15,-15 C25,-5 20,15 10,25" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                        <path d="M-10,35 C0,45 10,45 20,35" stroke="white" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                      </g>
                      
                      {/* Heart */}
                      <g transform="translate(200, 410)" className="animate-pulse-soft">
                        <path d="M0,15 C-20,0 -30,-15 -15,-25 C-5,-30 0,-20 0,-15 C0,-20 5,-30 15,-25 C30,-15 20,0 0,15Z" 
                              fill="url(#heartGrad)" />
                        <path d="M-8,-12 C-4,-18 4,-18 8,-12" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
                      </g>
                      
                      {/* Connecting lines */}
                      <path d="M200,335 Q200,370 200,390" stroke="#059669" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.5" />
                      
                      {/* Leaves / Growth */}
                      <g transform="translate(90, 250)" opacity="0.8">
                        <path d="M0,0 Q-15,-25 0,-45 Q15,-25 0,0" fill="#10b981" />
                        <path d="M0,-45 L0,-65" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                      </g>
                      <g transform="translate(310, 280)" opacity="0.8">
                        <path d="M0,0 Q15,-20 0,-40 Q-15,-20 0,0" fill="#0f766e" />
                        <path d="M0,-40 L0,-55" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 - Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-2 md:-right-6 top-16 rounded-2xl bg-white p-4 shadow-large border border-border/50 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-text-muted leading-none">کیفیت خدمات</p>
                  <p className="text-sm font-bold text-text mt-1">استانداردهای علمی</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 - Team */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -left-2 md:-left-6 bottom-24 rounded-2xl bg-white p-4 shadow-large border border-border/50 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary-dark">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-text-muted leading-none">تیم درمانی</p>
                  <p className="text-sm font-bold text-text mt-1">چندرشته‌ای و مجرب</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
