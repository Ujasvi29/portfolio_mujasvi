import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BadgeCheck } from "lucide-react";

const groups = [
  {
    title: "Programming & AI",
    items: [
      "Full Stack Python Development – Orbit IT Solutions",
      "Python Programming – Udemy",
      "Machine Learning – IBM Skills Network",
    ],
  },
  {
    title: "Systems & Data",
    items: [
      "Operating Systems & Discrete Mathematics – Mind Luster",
      "DBMS – Great Learning",
      "Computer Networks & IoT using Drones – IIT Kanpur",
    ],
  },
];

const PortfolioCertifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <BadgeCheck size={16} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCertifications;
