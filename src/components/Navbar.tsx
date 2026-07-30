import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'خانه' },
    { href: '#about', label: 'درباره ما' },
    { href: '#services', label: 'خدمات' },
    { href: '#team', label: 'تیم ما' },
    { href: '#gallery', label: 'محیط مرکز' },
    { href: '#shop', label: 'فروشگاه خیریه' },
    { href: '#faq', label: 'سؤالات متداول' },
    { href: '#contact', label: 'تماس' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top Bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 text-sm text-text-light">
                <div className="flex flex-wrap items-center gap-6">
                  <a href="tel:03443261711" className="flex items-center gap-2 transition-colors hover:text-primary">
                    <Phone className="h-4 w-4" />
                    <span className="persian-nums">۰۳۴-۴۳۲۶۱۷۱۱</span>
                  </a>
                  <div className="hidden items-center gap-2 sm:flex">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>جیرفت، خیابان حافظ غربی</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-accent-light/60 px-3 py-1 text-primary">
                    شنبه تا چهارشنبه: ۸ تا ۱۳ | پنجشنبه: ۸ تا ۱۲
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Nav */}
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" aria-label="مرکز رها - صفحه اصلی">
            <div className="relative h-14 w-14 transition-transform group-hover:scale-105">
              <div className="absolute -inset-1 rounded-2xl bg-primary/15 -z-10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Logo className="h-14 w-14" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-text leading-tight">مرکز رها</h1>
              <p className="text-xs text-text-muted">توانبخشی بیماران اعصاب و روان</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline relative px-3 py-2 text-[13.5px] font-medium text-text-light transition-colors hover:text-primary rounded-lg whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-medium transition-all hover:shadow-large hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              رزرو مشاوره
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-soft xl:hidden text-text"
              aria-label="منو"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden container mx-auto px-4 mt-3"
          >
            <div className="rounded-2xl bg-white p-4 shadow-large border border-border">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-text-light transition-all hover:bg-accent-light/40 hover:text-primary"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-primary to-secondary px-5 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  رزرو مشاوره
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
