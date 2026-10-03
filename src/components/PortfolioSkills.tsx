import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code, Layers, Globe, Database, Brain, Cloud, Wrench, ShieldCheck, BookOpen } from "lucide-react";

const categories = [
  { title: "Languages", icon: Code, skills: ["Python (Core & Advanced)", "Java", "C"] },
  { title: "Frameworks & Libraries", icon: Layers, skills: ["React.js", "Streamlit", "TensorFlow.js", "Tailwind CSS"] },
  { title: "Web", icon: Globe, skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "REST APIs"] },
  { title: "Databases", icon: Database, skills: ["MySQL", "SQL"] },
  { title: "AI/ML", icon: Brain, skills: ["Machine Learning", "Artificial Intelligence", "Data Preprocessing", "Feature Engineering", "Data Analysis"] },
  { title: "Cloud", icon: Cloud, skills: ["Microsoft Azure", "Azure Cognitive Services"] },
  { title: "Developer Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Postman"] },
  { title: "Security", icon: ShieldCheck, skills: ["Network Security", "Intrusion Detection", "Threat Detection", "Secure Software Development"] },
  { title: "Core Subjects", icon: BookOpen, skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "Discrete Mathematics"] },
];

const PortfolioSkills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Skills" title="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-background hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;
