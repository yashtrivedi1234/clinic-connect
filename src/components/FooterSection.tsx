import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FooterSection = () => (
  <footer id="footer" className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Clinic Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-medical flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold">M</span>
            </div>
            <span className="font-heading font-bold text-lg text-background">MediCare</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed mb-4">
            Expert healthcare for vertigo, ENT, and neurological conditions with compassionate patient care.
          </p>
          <div className="space-y-2 text-sm text-background/60">
            <p className="flex items-center gap-2"><MapPin size={14} /> 123 Health Avenue, Mumbai</p>
            <p className="flex items-center gap-2"><Phone size={14} /> +1 (234) 567-890</p>
            <p className="flex items-center gap-2"><Mail size={14} /> info@medicare.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["Home", "About", "Treatments", "Blog", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-background transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Working Hours</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Newsletter</h4>
          <p className="text-sm text-background/60 mb-4">Subscribe for health tips and clinic updates.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Your email" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 text-sm" />
            <Button size="sm" className="gradient-medical border-0 text-primary-foreground shrink-0">
              Join
            </Button>
          </form>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:gradient-medical hover:text-primary-foreground transition-all"
                aria-label="Social media"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
        © 2026 MediCare Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
