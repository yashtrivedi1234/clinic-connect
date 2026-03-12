import { motion } from "framer-motion";
import { Ear, Brain, Activity, Stethoscope, HeartPulse, TestTube2 } from "lucide-react";

const treatments = [
  { icon: Activity, title: "Vertigo Treatment", desc: "Comprehensive evaluation and treatment for all types of vertigo and dizziness conditions." },
  { icon: Brain, title: "Migraine Treatment", desc: "Advanced migraine management with preventive and acute treatment strategies." },
  { icon: HeartPulse, title: "Balance Disorders", desc: "Specialized testing and rehabilitation for balance and gait disorders." },
  { icon: Ear, title: "Ear Disorders", desc: "Diagnosis and treatment of tinnitus, hearing loss, and inner ear conditions." },
  { icon: Stethoscope, title: "Neurological Conditions", desc: "Expert care for a wide range of neurological conditions and disorders." },
  { icon: TestTube2, title: "Diagnostic Testing", desc: "State-of-the-art diagnostic equipment for accurate vestibular assessment." },
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-8 lg:py-8">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide">
          Our Services
        </span>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          Treatments We Offer
        </h2>
        <p className="text-muted-foreground">
          We provide a comprehensive range of treatments using the latest medical technology and evidence-based approaches.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-7 border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:gradient-medical transition-all duration-300">
              <t.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={26} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
