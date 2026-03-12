import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita Desai",
    review: "After treatment, my vertigo symptoms improved within days. The doctor was very professional and caring. I feel like a new person!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    review: "I had been struggling with chronic migraines for years. Dr. Prashant personalized approach changed my life. Highly recommended!",
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
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-8 lg:py-8">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-medical mx-auto mb-5 flex items-center justify-center text-primary-foreground font-heading font-bold text-xl">
                {t.name.charAt(0)}
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.review}"</p>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">Patient</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
