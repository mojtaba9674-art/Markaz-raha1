import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, MessageSquare, Calendar } from 'lucide-react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const options = [
    {
      icon: Phone,
      label: 'تماس تلفنی',
      sub: '۰۳۴-۴۳۲۶۱۷۱۱',
      href: 'tel:03443261711',
      color: 'from-primary to-primary-light',
    },
    {
      icon: MessageSquare,
      label: 'واتساپ',
      sub: 'پیام سریع',
      href: 'https://wa.me/989139603697',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      label: 'فرم مشاوره',
      sub: 'ثبت درخواست',
      href: '#contact',
      color: 'from-secondary to-teal-500',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-2.5 mb-2"
          >
            {options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.a
                  key={i}
                  href={opt.href}
                  target={opt.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="group flex items-center gap-3"
                >
                  <span className="flex flex-col items-end ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-text shadow-soft border border-border/60 whitespace-nowrap">
                      {opt.label}
                    </span>
                    <span className="text-[10px] text-white/80 mt-0.5 persian-nums mr-1">
                      {opt.sub}
                    </span>
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${opt.color} shadow-medium transition-all group-hover:scale-110 group-hover:shadow-large`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-large transition-all ${
              isOpen
                ? 'bg-gradient-to-br from-error to-red-500'
                : 'bg-gradient-to-br from-primary to-secondary hover:shadow-glow'
            }`}
            aria-label="تماس سریع"
          >
            {/* Pulse Ring */}
            {!isOpen && (
              <>
                <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                <span className="absolute inset-0 rounded-full bg-primary/15 animate-pulse" />
              </>
            )}
            <div className="relative z-10 text-white">
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <MessageCircle className="h-7 w-7" />
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;
