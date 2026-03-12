import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita Desai",
    review: "After treatment, my vertigo symptoms improved within days. The doctor was very professional and caring. I feel like a new person!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    review: "I had been struggling with chronic migraines for years. Dr. Prashant's personalized approach changed my life. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    review: "The diagnostic testing was thorough and the staff was incredibly supportive. My balance issues have significantly improved.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    review: "Outstanding medical care with a human touch. The entire team made me feel comfortable throughout my treatment journey.",
    rating: 4,
  },
  {
    name: "Neha Sharma",
    review: "I came in with severe tinnitus and left with a clear treatment plan. The improvement has been remarkable. Thank you so much!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section id="testimonials" className="py-8 lg:py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>

          {/* Arrow controls - centered */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-secondary/50"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-secondary/50"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-80 bg-card border border-border rounded-2xl p-6 shadow-card flex flex-col justify-between"
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={15}
                      className={j < t.rating ? "text-amber-400 fill-amber-400" : "text-border"}
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full gradient-medical flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges hint */}
        <style>{`
          #testimonials .overflow-x-auto::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;