import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const PortfolioContact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Contact" title="Get in Touch" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about tech. Feel free to reach out!
          </p>

          <div className="space-y-3 pt-2">
            <a href="mailto:ujasvim@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail size={16} className="text-primary" />
              </div>
              <span className="text-sm">ujasvim@gmail.com</span>
            </a>
            <a href="tel:+919515834907" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone size={16} className="text-primary" />
              </div>
              <span className="text-sm">+91-95158-34907</span>
            </a>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                <MapPin size={16} className="text-primary" />
              </div>
              <span className="text-sm">Hyderabad, Telangana, India – 500028</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href="https://www.linkedin.com/in/ujasvi-mudakala/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ujasvi29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioContact;
