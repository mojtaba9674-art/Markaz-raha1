import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

/*
  راهنمای افزودن عکس پرسنل:
  ۱) عکس هر نفر را در پوشه public/images/team قرار دهید (مثلاً nargis-hoseini.jpg)
  ۲) مسیر عکس را در فیلد photo همان نفر بنویسید (مثلاً '/images/team/nargis-hoseini.jpg')
  ۳) تا وقتی عکسی قرار نداده باشید، آواتار گرادیانی با حرف اول نام نمایش داده می‌شود
  - فرمت پیشنهادی: JPG مربعی با ابعاد حداقل ۴۰۰×۴۰۰ پیکسل
*/

interface Member {
  name: string;
  role: string;
  degree: string;
  initial: string;
  gradient: string;
  badge: string | null;
  badgeStyle: string;
  photo: string | null;
}

const team: Member[] = [
  {
    name: 'دکتر نرجس حسینی',
    role: 'موسس و روانشناس',
    degree: 'دکتری تخصصی روانشناسی بالینی',
    initial: 'ن',
    gradient: 'from-primary to-primary-dark',
    badge: 'موسس مرکز',
    badgeStyle: 'from-primary to-secondary',
    photo: null, // مثال: '/images/team/nargis-hoseini.jpg'
  },
  {
    name: 'دکتر ام‌البنی رودباری',
    role: 'مسئول فنی',
    degree: 'دکتری تخصصی روانشناسی',
    initial: 'ا',
    gradient: 'from-secondary to-emerald-700',
    badge: 'مسئول فنی',
    badgeStyle: 'from-warm to-warm-dark',
    photo: null, // مثال: '/images/team/omolbanin-roodbari.jpg'
  },
  {
    name: 'عاطف مسلمی',
    role: 'کاردرمانگر',
    degree: 'کارشناسی کاردرمانی',
    initial: 'ع',
    gradient: 'from-sky-500 to-blue-600',
    badge: null,
    badgeStyle: '',
    photo: null, // مثال: '/images/team/atefe-maslami.jpg'
  },
  {
    name: 'آنیتا رشیدی',
    role: 'پرستار',
    degree: 'کارشناسی پرستاری',
    initial: 'آ',
    gradient: 'from-rose-400 to-pink-600',
    badge: null,
    badgeStyle: '',
    photo: null, // مثال: '/images/team/anita-rashidi.jpg'
  },
  {
    name: 'فرزانه مشایخی',
    role: 'مددکار اجتماعی',
    degree: 'کارشناسی مددکاری اجتماعی',
    initial: 'ف',
    gradient: 'from-amber-400 to-orange-500',
    badge: null,
    badgeStyle: '',
    photo: null, // مثال: '/images/team/farzaneh-mashayekhi.jpg'
  },
  {
    name: 'لیلی ارفند',
    role: 'مربی حرفه‌آموزی',
    degree: 'مربی تخصصی حرفه‌آموزی',
    initial: 'ل',
    gradient: 'from-violet-400 to-purple-600',
    badge: null,
    badgeStyle: '',
    photo: null, // مثال: '/images/team/leili-erfand.jpg'
  },
  {
    name: 'شفق شهابی',
    role: 'مربی ورزش و یوگا',
    degree: 'مربی تخصصی ورزش و یوگا',
    initial: 'ش',
    gradient: 'from-teal-400 to-cyan-600',
    badge: null,
    badgeStyle: '',
    photo: null, // مثال: '/images/team/shafagh-shahabi.jpg'
  },
];

// آواتار عضو تیم: اگر عکس موجود باشد نمایش می‌دهد، در غیر این صورت حرف اول نام
const MemberAvatar = ({ member }: { member: Member }) => {
  const [error, setError] = useState(false);
  const showPhoto = Boolean(member.photo) && !error;

  return (
    <div className="relative mb-5">
      {/* Glow */}
      <div className={`absolute -inset-2 rounded-[2rem] bg-gradient-to-br ${member.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-400`} />

      {/* Avatar Frame */}
      <div
        className={`relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-[1.75rem] shadow-medium ring-4 ring-white transition-transform duration-400 group-hover:scale-105 ${
          showPhoto ? 'bg-bg-alt' : `bg-gradient-to-br ${member.gradient}`
        }`}
      >
        {showPhoto && member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name} - ${member.role} مرکز توانبخشی رها`}
            loading="lazy"
            width={400}
            height={400}
            onError={() => setError(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <span className="text-5xl font-black text-white select-none">{member.initial}</span>
        )}
      </div>

      {/* Degree Icon */}
      <div className="absolute -bottom-1.5 -left-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-soft border border-border/60">
        <GraduationCap className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-primary/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">تیم درمانی مرکز</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            آشنایی با <span className="gradient-text">متخصصان</span> مرکز رها
          </h2>
          <p className="text-text-light leading-8">
            تیم چندرشته‌ای مرکز رها متشکل از متخصصان مجرب و متعهد حوزه سلامت روان است
            که با دانش روز و رویکردی انسان‌محور، همراه مددجویان در مسیر بهبودی هستند.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl bg-white p-6 border border-border/60 hover:border-primary/25 hover:shadow-large transition-all duration-400 overflow-hidden ${
                team.length % 3 === 1 && i === team.length - 1 ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Role Badge */}
              {member.badge && (
                <div className={`absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-l ${member.badgeStyle} px-3 py-1 shadow-medium`}>
                  <Award className="h-3 w-3 text-white" />
                  <span className="text-[10px] font-bold text-white">{member.badge}</span>
                </div>
              )}

              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 pointer-events-none`} />

              <div className="relative flex flex-col items-center text-center">
                {/* Avatar */}
                <MemberAvatar member={member} />

                {/* Info */}
                <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-secondary mb-2">
                  {member.role}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-alt border border-border/60 px-3 py-1 text-xs text-text-muted">
                  {member.degree}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-text-muted leading-7 max-w-2xl mx-auto">
            در کنار تیم تخصصی درمانی، مربیان هنری و کادر پشتیبانی مرکز نیز
            در ارائه خدمات باکیفیت و ایجاد محیطی امن و آرام برای مددجویان نقش دارند.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
