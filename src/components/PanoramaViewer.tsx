import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Maximize2, RotateCcw, RotateCw, Minimize2 } from 'lucide-react';

/*
  راهنمای جایگزینی عکس ۳۶۰ درجه:
  فایل عکس پانورامای واقعی مرکز (فرمت equirectangular با نسبت ۲:۱) را
  در مسیر public/images/360/center-panorama.jpg جایگزین کنید.
*/

interface PanoramaViewerProps {
  src?: string;
}

const PanoramaViewer = ({ src = '/images/360/center-panorama.jpg' }: PanoramaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const offsetRef = useRef(0);
  const rafId = useRef<number>(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [offset, setOffset] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Animation loop: auto-rotate + drag momentum
  useEffect(() => {
    const loop = () => {
      if (!dragging.current) {
        if (Math.abs(velocity.current) > 0.1) {
          offsetRef.current += velocity.current;
          velocity.current *= 0.94;
        } else if (autoRotate) {
          offsetRef.current -= 0.25;
        }
        // Normalize offset to prevent float overflow in long sessions
        if (Math.abs(offsetRef.current) > 20000) {
          offsetRef.current = offsetRef.current % 20000;
        }
        setOffset(offsetRef.current);
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [autoRotate]);

  // Fullscreen state listener
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const scheduleAutoResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setAutoRotate(true), 4000);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
    setShowHint(false);
    setAutoRotate(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    offsetRef.current += dx * 1.2;
    velocity.current = dx * 1.2;
    setOffset(offsetRef.current);
  };

  const endDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    scheduleAutoResume();
  };

  const rotateBy = (amount: number) => {
    setShowHint(false);
    setAutoRotate(false);
    velocity.current = 0;
    offsetRef.current += amount;
    setOffset(offsetRef.current);
    scheduleAutoResume();
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen().catch(() => {});
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative w-full overflow-hidden rounded-[1.75rem] shadow-large border border-white/60 select-none bg-gradient-to-br from-primary/5 to-secondary/5"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Panorama */}
      <div
        className="relative w-full aspect-[16/9] md:aspect-[21/9] cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        role="img"
        aria-label="بازدید مجازی ۳۶۰ درجه از محیط مرکز رها"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: `${offset}px center`,
        }}
      />

      {/* Top Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent" />

      {/* Hint Overlay */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ x: [0, -24, 24, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white/90 backdrop-blur-md px-7 py-5 shadow-large"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                <Hand className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-bold text-text">برای چرخش ۳۶۰ درجه، بکشید</p>
              <p className="text-xs text-text-muted">با موس یا لمس، محیط مرکز را ببینید</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 360 Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 shadow-soft">
        <RotateCw className="h-3.5 w-3.5 text-primary" />
        <span className="text-xs font-bold text-text persian-nums">۳۶۰°</span>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => rotateBy(120)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-text shadow-soft hover:bg-white hover:text-primary transition-all"
          aria-label="چرخش به راست"
        >
          <RotateCw className="h-4 w-4" />
        </button>
        <button
          onClick={() => rotateBy(-120)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-text shadow-soft hover:bg-white hover:text-primary transition-all"
          aria-label="چرخش به چپ"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-text shadow-soft hover:bg-white hover:text-primary transition-all"
          aria-label="تمام صفحه"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Controls (always visible) */}
      <div className="absolute bottom-4 left-4 flex md:hidden items-center gap-2">
        <button
          onClick={() => rotateBy(120)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-text shadow-soft"
          aria-label="چرخش به راست"
        >
          <RotateCw className="h-4 w-4" />
        </button>
        <button
          onClick={() => rotateBy(-120)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-text shadow-soft"
          aria-label="چرخش به چپ"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PanoramaViewer;
