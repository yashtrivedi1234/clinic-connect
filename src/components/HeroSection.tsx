import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountUp from "@/components/ui/CountUp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import doctorImg from "@/assets/doctor-hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 25%, #e8f4fd 50%, #dbeafe 75%, #ede9fe 100%)",
      }}
    >
      {/* Gradient mesh overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.13) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(6,182,212,0.12) 0%, transparent 50%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(56,189,248,0.22)" }}
      />
      <div
        className="absolute bottom-0 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(99,102,241,0.15)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(14,165,233,0.08)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center relative z-10 w-full">
        {/* Left — Hero Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:col-span-1"
        >
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-4">
            Trusted Healthcare Since 2014
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-heading font-extrabold text-foreground mb-4 sm:mb-6">
            Expert Care for Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Health & Wellbeing
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            Specializing in vertigo, ENT, and neurological conditions. Our
            clinic provides accurate diagnosis, advanced treatment, and
            compassionate patient care to help you live a healthier life.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              size="lg"
              variant="outline"
              className="gradient-medical border-0 text-primary-foreground px-6 sm:px-8 shadow-soft w-full xs:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-10">
            {[
              { val: 10, suffix: "+", label: "Years Exp." },
              { val: 5000, suffix: "+", label: "Patients" },
              { val: 98, suffix: "%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  <CountUp to={s.val} duration={2} />{s.suffix}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Center — Doctor Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden lg:flex lg:col-span-1 justify-center items-end relative"
        >
          {/* Decorative circle behind image */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(56,189,248,0.25) 0%, rgba(99,102,241,0.15) 60%, transparent 100%)",
            }}
          />

          {/* Floating badge — top left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-8 -left-4 bg-white rounded-2xl shadow-elevated px-3 py-2 flex items-center gap-2 border border-border z-20"
          >
            <span className="text-lg">🏥</span>
            <div>
              <p className="text-[10px] font-semibold text-foreground leading-none">Certified Clinic</p>
              <p className="text-[9px] text-muted-foreground leading-none mt-0.5">ISO Accredited</p>
            </div>
          </motion.div>

          {/* Floating badge — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-elevated px-3 py-2 flex items-center gap-2 border border-border z-20"
          >
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-[10px] font-semibold text-foreground leading-none">4.9 / 5 Rating</p>
              <p className="text-[9px] text-muted-foreground leading-none mt-0.5">2,400+ Reviews</p>
            </div>
          </motion.div>

          <img
            src={doctorImg}
            alt="Doctor"
            className="relative z-10 w-full max-w-xs object-contain drop-shadow-2xl select-none"
            draggable={false}
          />
        </motion.div>

        {/* Right — Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none lg:col-span-1"
        >
          <div className="bg-card rounded-2xl shadow-elevated p-5 sm:p-8 border border-border relative z-10">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-1">
              Book Your Appointment
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">
              Fill in the details below and we'll get back to you.
            </p>

            <form
              className="space-y-3 sm:space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                placeholder="Full Name"
                className="bg-muted/50 h-10 sm:h-11 text-sm"
                autoComplete="name"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-muted/50 h-10 sm:h-11 text-sm"
                autoComplete="tel"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-muted/50 h-10 sm:h-11 text-sm"
                autoComplete="email"
              />

              <Select>
                <SelectTrigger className="bg-muted/50 h-10 sm:h-11 text-sm">
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

              <Input
                type="date"
                className="bg-muted/50 h-10 sm:h-11 text-sm"
              />

              <Button
                type="submit"
                className="w-full gradient-medical border-0 text-primary-foreground shadow-soft h-10 sm:h-11 text-sm sm:text-base mt-1"
              >
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