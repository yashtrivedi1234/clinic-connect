import { motion } from "framer-motion";
import { Clock, Users, ThumbsUp, Layers } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Patient Satisfaction" },
  { icon: Layers, value: 20, suffix: "+", label: "Advanced Treatments" },
];

const StatsSection = () => (
  <section className="py-8 gradient-medical relative overflow-hidden">
    <div className="absolute inset-0  opacity-50" />
    <div className="container mx-auto relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            
            <p className="text-3xl lg:text-4xl font-heading font-extrabold text-primary-foreground mb-1">
              <CountUp to={s.value} duration={2} />{s.suffix}
            </p>
            <p className="text-sm text-primary-foreground/80">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
