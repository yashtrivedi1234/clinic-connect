import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { UserCheck, Cpu, ClipboardList, Heart, MonitorCheck, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const benefits = [
  {
    icon: UserCheck,
    title: "Expert Doctors",
    desc: "Board-certified specialists with extensive experience in their fields.",
    stat: "200+",
    statLabel: "Specialists",
    gradient: "from-sky-400/20 via-blue-500/10 to-transparent",
    iconBg: "from-sky-400 to-blue-600",
  },
  {
    icon: Cpu,
    title: "Advanced Diagnostics",
    desc: "Latest medical technology for precise and reliable diagnostic results.",
    stat: "99.8%",
    statLabel: "Accuracy",
    gradient: "from-violet-400/20 via-purple-500/10 to-transparent",
    iconBg: "from-violet-400 to-purple-600",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    desc: "Treatment plans tailored to each patient's unique condition and needs.",
    stat: "100%",
    statLabel: "Tailored",
    gradient: "from-emerald-400/20 via-green-500/10 to-transparent",
    iconBg: "from-emerald-400 to-green-600",
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    desc: "Compassionate approach that puts your comfort and wellbeing first.",
    stat: "4.9★",
    statLabel: "Patient Rating",
    gradient: "from-rose-400/20 via-pink-500/10 to-transparent",
    iconBg: "from-rose-400 to-pink-600",
  },
  {
    icon: MonitorCheck,
    title: "Modern Equipment",
    desc: "State-of-the-art medical equipment for the best treatment outcomes.",
    stat: "50+",
    statLabel: "Devices",
    gradient: "from-amber-400/20 via-orange-500/10 to-transparent",
    iconBg: "from-amber-400 to-orange-500",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function WhyChooseUsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / CARD_STEP);
    setActiveIndex(Math.min(idx, benefits.length - 1));
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState]);

  const scrollTo = (idx: number) => {
    scrollRef.current?.scrollTo({ left: idx * CARD_STEP, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    scrollRef.current.scrollLeft = scrollStart.current - (e.clientX - dragStart.current);
  };

  const onMouseUp = () => setIsDragging(false);

  const progress = (activeIndex / (benefits.length - 1)) * 100;

  return (
    <section className="py-8 lg:py-8 bg-card overflow-hidden select-none">
      <div className="container mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 px-4 mb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-widest mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight"
            >
              What Sets Us Apart
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-3 sm:items-end"
          >
            <p className="text-muted-foreground text-sm max-w-xs sm:text-right leading-relaxed">
              Combining expertise, technology, and compassion for exceptional patient outcomes.
            </p>
            {/* Arrow controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTo(activeIndex - 1)}
                disabled={!canLeft}
                aria-label="Previous"
                className="group w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-200 hover:border-primary/50 hover:bg-secondary disabled:opacity-25 disabled:pointer-events-none"
              >
                <ChevronLeft size={16} className="text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={() => scrollTo(activeIndex + 1)}
                disabled={!canRight}
                aria-label="Next"
                className="group w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-200 hover:border-primary/50 hover:bg-secondary disabled:opacity-25 disabled:pointer-events-none"
              >
                <ChevronRight size={16} className="text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll track ── */}
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-card to-transparent" />

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className={`flex gap-4 overflow-x-auto pb-2 px-4 snap-x snap-mandatory ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                onClick={() => scrollTo(i)}
                className="snap-start shrink-0 relative rounded-2xl border border-border bg-background overflow-hidden group"
                style={{ width: CARD_WIDTH, minHeight: 260 }}
              >
                {/* Gradient wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                {/* Active indicator top bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                />

                <div className="relative p-6 flex flex-col h-full gap-4">

                  {/* Top row: icon + stat */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.iconBg} flex items-center justify-center shadow-soft shrink-0`}>
                      <b.icon className="text-white" size={22} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold font-heading text-foreground leading-none">{b.stat}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{b.statLabel}</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border group-hover:bg-primary/20 transition-colors duration-300" />

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors duration-200">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1">
                      {benefits.map((_, dot) => (
                        <div
                          key={dot}
                          className={`rounded-full transition-all duration-300 ${dot === i ? "w-4 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border"}`}
                        />
                      ))}
                    </div>
                    <motion.div
                      className="w-7 h-7 rounded-full border border-border bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight size={13} className="text-primary" />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            ))}
            <div className="shrink-0 w-4" />
          </div>
        </div>

      </div>
    </section>
  );
}