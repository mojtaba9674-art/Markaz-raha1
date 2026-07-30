import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Team from './components/Team';
import Gallery from './components/Gallery';
import CharityShop from './components/CharityShop';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-bg to-accent-light"
          >
            <div className="flex flex-col items-center gap-6">
              {/* لوگوی رسمی مرکز با تنفس نرم */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-125 animate-pulse-soft" />
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative h-28 w-28"
                >
                  <Logo className="h-full w-full" />
                </motion.div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold gradient-text">مرکز رها</h2>
                <p className="mt-1 text-sm text-text-muted">در حال بارگذاری...</p>
                {/* نوار پیشرفت */}
                <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-primary/15">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-l from-primary to-secondary"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-bg ${loading ? 'overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Statistics />
          <Team />
          <Gallery />
          <CharityShop />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
