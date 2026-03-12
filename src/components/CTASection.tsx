import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="gradient-medical rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Start Your Journey to Better Health Today
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Don't let symptoms hold you back. Schedule your consultation and take the first step toward a healthier life.
          </p>
          <Button
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 px-10 shadow-elevated font-semibold"
          >
            <CalendarDays className="mr-2" size={18} />
            Book Your Appointment Now
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
