import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle,
  User, MessageSquare, Mail, Loader2, MessageCircle
} from 'lucide-react';
import LocationMap, { RAHA_LAT, RAHA_LNG } from './LocationMap';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'لطفاً نام و نام خانوادگی را وارد کنید';
    if (!form.phone.trim()) newErrors.phone = 'لطفاً شماره تماس را وارد کنید';
    else if (!/^[0-9۰-۹]{11}$/.test(form.phone.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()))) {
      if (!/^0\d{10}$/.test(form.phone)) newErrors.phone = 'شماره تماس صحیح نیست';
    }
    if (!form.type) newErrors.type = 'لطفاً نوع درخواست را انتخاب کنید';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('loading');
    await new Promise(resolve => setTimeout(resolve, 1800));
    setState('success');
    setForm({ name: '', phone: '', type: '', message: '' });
    setTimeout(() => setState('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'تلفن تماس',
      value: '۰۳۴-۴۳۲۶۱۷۱۱',
      sub: 'ساعات کاری پاسخگویی',
      href: 'tel:03443261711',
      color: 'from-primary to-primary-light',
    },
    {
      icon: MessageCircle,
      title: 'واتساپ',
      value: '۰۹۱۳-۹۶۰۳۶۹۷',
      sub: 'پیام در هر ساعت',
      href: 'https://wa.me/989139603697',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      title: 'اینستاگرام',
      value: '@Markaz_Darmani_Raha',
      sub: 'پیام دایرکت',
      href: 'https://instagram.com/Markaz_Darmani_Raha',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: MapPin,
      title: 'آدرس مرکز',
      value: 'جیرفت، خیابان حافظ غربی',
      sub: 'کوچه حافظ غربی ۴ — مشاهده روی نقشه',
      href: `https://www.google.com/maps/search/?api=1&query=${RAHA_LAT},${RAHA_LNG}`,
      color: 'from-secondary to-teal-500',
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      value: 'شنبه تا چهارشنبه ۸ تا ۱۳',
      sub: 'پنجشنبه ۸ تا ۱۲',
      href: null,
      color: 'from-warning to-amber-500',
    },
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'به‌زودی فعال می‌شود',
      sub: '—',
      href: null,
      color: 'from-info to-sky-500',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

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
            <Send className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">تماس با ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            اولین قدم را برای
            <span className="gradient-text"> شروع درمان</span> بردارید
          </h2>
          <p className="text-text-light leading-8">
            کارشناسان مرکز رها آماده پاسخگویی به شما و راهنمایی در مورد فرآیند پذیرش و خدمات هستند.
            با اطمینان خاطر با ما در ارتباط باشید.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-large border border-border/50">
              <h3 className="text-xl font-bold text-text mb-2">فرم درخواست مشاوره</h3>
              <p className="text-sm text-text-muted mb-7">
                فرم زیر را تکمیل کنید، کارشناسان ما در اسرع وقت با شما تماس می‌گیرند.
              </p>

              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 mb-5">
                    <CheckCircle2 className="h-10 w-10 text-success" />
                  </div>
                  <h4 className="text-2xl font-bold text-text mb-2">درخواست شما ثبت شد</h4>
                  <p className="text-text-light max-w-sm">
                    با تشکر از تماس شما. کارشناسان مرکز رها در اسرع وقت با شماره‌ای که وارد کرده‌اید
                    با شما تماس خواهند گرفت.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">
                        نام و نام خانوادگی <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full h-12 pr-12 pl-4 rounded-xl bg-bg-alt border-2 transition-all focus:outline-none ${
                            errors.name
                              ? 'border-error/40 focus:border-error'
                              : 'border-transparent focus:border-primary/40 focus:bg-white'
                          }`}
                          placeholder="مثلاً: علی رضایی"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-error">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">
                        شماره تماس <span className="text-error">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`w-full h-12 pr-12 pl-4 rounded-xl bg-bg-alt border-2 transition-all focus:outline-none persian-nums ${
                            errors.phone
                              ? 'border-error/40 focus:border-error'
                              : 'border-transparent focus:border-primary/40 focus:bg-white'
                          }`}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          dir="ltr"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-error">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      نوع درخواست <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className={`w-full h-12 px-4 pr-4 rounded-xl bg-bg-alt border-2 transition-all focus:outline-none appearance-none cursor-pointer ${
                          errors.type
                            ? 'border-error/40 focus:border-error'
                            : 'border-transparent focus:border-primary/40 focus:bg-white'
                        }`}
                      >
                        <option value="">لطفاً انتخاب کنید...</option>
                        <option value="waiting">ثبت نام در لیست انتظار پذیرش</option>
                        <option value="consult">درخواست مشاوره و پذیرش</option>
                        <option value="info">اطلاعات درباره خدمات</option>
                        <option value="visit">هماهنگی برای مراجعه حضوری</option>
                        <option value="family">آموزش خانواده</option>
                        <option value="workshop">ثبت نام در کارگاه</option>
                        <option value="other">سایر موارد</option>
                      </select>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.type && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-error">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.type}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">
                      توضیحات (اختیاری)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute right-4 top-4 h-5 w-5 text-text-muted" />
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className="w-full p-4 pr-12 rounded-xl bg-bg-alt border-2 border-transparent transition-all focus:outline-none focus:border-primary/40 focus:bg-white resize-none"
                        placeholder="در صورت تمایل می‌توانید توضیحات بیشتری در مورد درخواست خود بنویسید..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full group flex items-center justify-center gap-2 h-14 rounded-xl bg-gradient-to-l from-primary to-secondary text-white font-bold text-base shadow-medium transition-all hover:shadow-large hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {state === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                        ارسال درخواست مشاوره رایگان
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-text-muted leading-6">
                    با ارسال این فرم، اطلاعات شما محرمانه باقی می‌ماند و تنها برای تماس با شما استفاده می‌گردد.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper: any = info.href ? 'a' : 'div';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Wrapper
                    href={info.href || undefined}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-300"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-medium transition-transform group-hover:scale-110`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-text mb-0.5">{info.title}</h4>
                      <p className="text-sm font-semibold text-primary persian-nums truncate">{info.value}</p>
                      <p className="text-xs text-text-muted mt-0.5">{info.sub}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Interactive Location Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <LocationMap />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
