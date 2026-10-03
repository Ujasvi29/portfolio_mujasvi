import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Download, FolderOpen } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const PortfolioHero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to internships & opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Ujasvi Mudakala
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base md:text-lg font-semibold text-primary max-w-2xl"
          >
            Computer Science Engineering Student | AI/ML | Cybersecurity | Full-Stack Development
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Computer Science Engineering student with hands-on experience in Artificial Intelligence, Cybersecurity, Machine Learning, and Full-Stack Web Development through research internships, hackathons, and industry projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" />
              Hyderabad, Telangana, India – 500028
            </span>
            <a href="mailto:ujasvim@gmail.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={15} className="text-primary" />
              ujasvim@gmail.com
            </a>
            <a href="tel:+919515834907" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={15} className="text-primary" />
              +91-95158-34907
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <FolderOpen size={16} />
              View My Projects
            </a>
            <a
              href={resumeAsset.url}
              download="Ujasvi_Mudakala_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 flex gap-2"
          >
            <a
              href="https://www.linkedin.com/in/ujasvi-mudakala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Ujasvi29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
