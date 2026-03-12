import { motion } from "framer-motion";
import { UserCheck, Cpu, ClipboardList, Heart, MonitorCheck } from "lucide-react";

const benefits = [
  { icon: UserCheck, title: "Expert Doctors", desc: "Board-certified specialists with extensive experience in their fields." },
  { icon: Cpu, title: "Advanced Diagnostics", desc: "Latest medical technology for precise and reliable diagnostic results." },
  { icon: ClipboardList, title: "Personalized Plans", desc: "Treatment plans tailored to each patient's unique condition and needs." },
  { icon: Heart, title: "Patient-Centric Care", desc: "Compassionate approach that puts your comfort and wellbeing first." },
  { icon: MonitorCheck, title: "Modern Equipment", desc: "State-of-the-art medical equipment for the best treatment outcomes." },
];

const WhyChooseUsSection = () => (
  <section className="py-8 lg:py-8 bg-card">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold  uppercase tracking-wide">
          Why Choose Us
        </span>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-muted-foreground">
          Our clinic combines medical expertise with cutting-edge technology and genuine compassion.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl gradient-medical flex items-center justify-center shadow-soft">
              <b.icon className="text-primary-foreground" size={22} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
