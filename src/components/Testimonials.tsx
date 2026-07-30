import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight, ChevronLeft, Star, UserCircle, Heart } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'خانواده یکی از مددجویان',
    role: 'والد',
    rating: 5,
    text: 'از وقتی فرزندمان را به مرکز رها سپردیم، تغییرات مثبتی در او دیده‌ایم که کلمه‌ای برای توصیف آن نداریم. تیم مرکز با صبر و حوصله و حرفه‌ایگی کامل همراه ما بودند و به ما امید دادند. واقعاً از تمام زحماتشان سپاسگزاریم.',
    highlight: 'تغییرات مثبت و باورنکردنی'
  },
  {
    id: 2,
    name: 'س. م',
    role: 'مددجوی سابق',
    rating: 5,
    text: 'امروز می‌توانم با افتاد بگویم که توانسته‌ام به زندگی عادی خود برگردم. برنامه‌های توانبخشی مرکز رها به من یاد دادند که بیماری خود را مدیریت کنم و دوباره به خانواده و جامعه برگردم. برای همیشه مدیون این تیم هستم.',
    highlight: 'بازگشت به زندگی عادی'
  },
  {
    id: 3,
    name: 'م. ر',
    role: 'همسر مددجو',
    rating: 5,
    text: 'کارگاه‌های آموزشی برای خانواده‌ها فوق‌العاده بود. یاد گرفتیم که چگونه با بیماری همسرمان برخورد کنیم و محیط خانه را چگونه تنظیم کنیم. پیگیری‌های مداوم مرکز حتی بعد از ترخیص هم ادامه داشت و این خیلی به ما کمک کرد.',
    highlight: 'آموزش و پیگیری مستمر'
  },
  {
    id: 4,
    name: 'خانواده آقای ح',
    role: 'برادر مددجو',
    rating: 5,
    text: 'رویکرد انسان‌محور و احترام‌آمیز مرکز رها واقعاً قابل تقدیر است. محیط مرکز امن و آرام است و تیم درمانی واقعاً متعهد و دلسوز هستند. به همه خانواده‌هایی که در این راه مشکل دارند، معرفی می‌کنم.',
    highlight: 'محیط امن و رویکرد انسان‌محور'
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(-1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

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
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm font-semibold text-primary">نظرات خانواده‌ها و مددجویان</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            <span className="gradient-text">داستان‌هایی</span> از امید و بهبودی
          </h2>
          <p className="text-text-light leading-8">
            خوشبختانه سال‌هاست که توانسته‌ایم بخشی از مسیر بهبودی خانواده‌های زیادی باشیم.
            چند تجربه از آن‌ها را با شما در میان می‌گذاریم.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative min-h-[420px] md:min-h-[360px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-3xl bg-white p-8 md:p-10 shadow-large border border-border/50 overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 opacity-10">
                    <Quote className="h-24 w-24 text-primary" />
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-primary/10 to-secondary/10 px-4 py-1.5 mb-6 border border-primary/15">
                    <Star className="h-3.5 w-3.5 text-primary" fill="currentColor" />
                    <span className="text-xs font-bold text-primary">{testimonials[current].highlight}</span>
                  </div>
                  
                  {/* Text */}
                  <p className="text-base md:text-lg text-text-light leading-9 mb-8 relative z-10">
                    «{testimonials[current].text}»
                  </p>
                  
                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                        <UserCircle className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text">{testimonials[current].name}</h4>
                        <p className="text-sm text-text-muted">{testimonials[current].role}</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/60 text-text-light hover:text-primary hover:border-primary/30 hover:shadow-soft transition-all"
              aria-label="قبلی"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? -1 : 1);
                    setCurrent(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-gradient-to-l from-primary to-secondary'
                      : 'w-2.5 bg-border hover:bg-primary/40'
                  }`}
                  aria-label={`نظر ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/60 text-text-light hover:text-primary hover:border-primary/30 hover:shadow-soft transition-all"
              aria-label="بعدی"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
