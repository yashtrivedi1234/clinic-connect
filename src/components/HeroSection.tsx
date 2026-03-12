import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import doctorImg from "@/assets/doctor-hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-6 tracking-wide uppercase">
            Trusted Healthcare Since 2014
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-heading font-extrabold text-foreground mb-6">
            Expert Care for Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Health & Wellbeing
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            Specializing in vertigo, ENT, and neurological conditions. Our clinic provides accurate diagnosis,
            advanced treatment, and compassionate patient care to help you live a healthier life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-medical border-0 text-primary-foreground px-8 shadow-soft">
              <CalendarDays className="mr-2" size={18} />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-foreground hover:bg-secondary">
              Learn More
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-10">
            {[
              { num: "10+", label: "Years Exp." },
              { num: "5k+", label: "Patients" },
              { num: "98%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-heading font-bold text-primary">{s.num}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Doctor image behind form */}
        

          <div className="bg-card rounded-2xl shadow-elevated p-8 border border-border relative z-10">
            <h3 className="font-heading font-bold text-xl text-foreground mb-1">Book Your Appointment</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill in the details below and we'll get back to you.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Full Name" className="bg-muted/50" />
              <Input placeholder="Phone Number" type="tel" className="bg-muted/50" />
              <Input placeholder="Email Address" type="email" className="bg-muted/50" />
              <Select>
                <SelectTrigger className="bg-muted/50">
                  <SelectValue placeholder="Select Treatment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vertigo">Vertigo Treatment</SelectItem>
                  <SelectItem value="migraine">Migraine Treatment</SelectItem>
                  <SelectItem value="balance">Balance Disorder</SelectItem>
                  <SelectItem value="ear">Ear Disorders</SelectItem>
                  <SelectItem value="neuro">Neurological Conditions</SelectItem>
                  <SelectItem value="diagnostic">Diagnostic Testing</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" className="bg-muted/50" />
              <Button type="submit" className="w-full gradient-medical border-0 text-primary-foreground shadow-soft">
                Submit Appointment Request
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
