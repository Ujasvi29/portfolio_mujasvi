import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const PortfolioEducation = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Education" title="Academic Background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-4 p-6 rounded-xl border border-border bg-card max-w-2xl hover:border-primary/30 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
            <GraduationCap size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">
              B.E. Computer Science Engineering
            </h3>
            <p className="text-primary font-medium text-sm mt-0.5">
              Stanley College of Engineering &amp; Technology for Women, Hyderabad
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                CGPA: 8.55/10
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                Expected Graduation: 2027
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioEducation;
