import { motion } from 'framer-motion';
import { Camera, Trees, Palette, Users, Sofa, RotateCw } from 'lucide-react';
import PanoramaViewer from './PanoramaViewer';

/*
  راهنمای افزودن عکس‌های محیط مرکز:
  عکس‌های جدید را در پوشه public/images/gallery قرار داده و
  به آرایه photos در زیر اضافه کنید.
*/

const photos = [
  {
    src: '/images/gallery/group-room.jpg',
    title: 'سالن گروه‌درمانی',
    desc: 'فضایی روشن و آرام برای جلسات گروهی و فعالیت‌های اجتماعی',
    icon: Users,
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/gallery/therapy-room.jpg',
    title: 'اتاق مشاوره فردی',
    desc: 'محیطی امن و صمیمی برای جلسات روان‌درمانی',
    icon: Sofa,
    span: '',
  },
  {
    src: '/images/gallery/art-workshop.jpg',
    title: 'کارگاه هنردرمانی',
    desc: 'جایی که خلاقیت، مسیر بهبودی را هموار می‌کند',
    icon: Palette,
    span: '',
  },
  {
    src: '/images/gallery/courtyard.jpg',
    title: 'حیاط و فضای سبز',
    desc: 'باغی آرام برای تفرح، ورزش و آرامش مددجویان',
    icon: Trees,
    span: 'md:col-span-2',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-warm/[0.04] rounded-full blur-[100px] pointer-events-none" />

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
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">محیط مرکز ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-5">
            فضایی <span className="gradient-text">امن، آرام</span> و سرشار از امید
          </h2>
          <p className="text-text-light leading-8">
            مرکز رها با فضایی طراحی‌شده برای آرامش و بهبودی، از اتاق‌های مشاوره‌ی دنج تا
            کارگاه‌های هنری پرانرژی و حیاطی سرسبز، خانه‌ی دوم مددجویان ماست.
          </p>
        </motion.div>

        {/* 360 Virtual Tour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-medium">
              <RotateCw className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text">بازدید مجازی ۳۶۰ درجه</h3>
              <p className="text-sm text-text-muted">محیط مرکز را از نزدیک و از همه زاویه‌ها ببینید</p>
            </div>
          </div>
          <PanoramaViewer />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 auto-rows-[240px]">
          {photos.map((photo, i) => {
            const Icon = photo.icon;
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl shadow-soft border border-white/60 ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={`${photo.title} - مرکز توانبخشی رها جیرفت`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Caption */}
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{photo.title}</h4>
                  </div>
                  <p className="text-sm text-white/80 leading-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {photo.desc}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
