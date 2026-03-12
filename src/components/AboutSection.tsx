import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import clinicImg from "@/assets/clinic-about.jpg";

const credentials = ["MBBS", "MD – Neurology", "Fellowship in Vestibular Medicine", "Member – AAN"];

const highlights = [
  "Accurate diagnosis using advanced vestibular testing",
  "Personalized treatment plans for every patient",
  "Patient-centered care with compassion & empathy",
  "State-of-the-art diagnostic equipment",
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img src={clinicImg} alt="Our clinic" className="rounded-2xl shadow-elevated w-full object-cover" />
        <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-5 shadow-elevated hidden md:flex items-center gap-3">
          <Award className="text-primary-foreground" size={28} />
          <div>
            <p className="font-heading font-bold text-primary-foreground text-lg">10+ Years</p>
            <p className="text-primary-foreground/80 text-xs">of Excellence</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 uppercase tracking-wide">
          About Us
        </span>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          Meet <span className="text-primary">Dr. Rajesh Sharma</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With over a decade of experience in neurology and vestibular medicine, Dr. Sharma leads our clinic
          with a commitment to accurate diagnosis, personalized treatment plans, and compassionate patient care.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {credentials.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
              {c}
            </span>
          ))}
        </div>

        <ul className="space-y-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
              <span className="text-sm text-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
