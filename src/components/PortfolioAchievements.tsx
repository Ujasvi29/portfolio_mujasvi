import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Medal, Trophy } from "lucide-react";

const achievements = [
  { text: "Finalist – Smart India Hackathon 2024", icon: Trophy },
  { text: "Runner-Up – SWECHA Hackathon", icon: Medal },
  { text: "3rd Prize – Hack4Good Hackathon", icon: Medal },
  { text: "Consolation Prize – WinnovX National Hackfest 2026", icon: Award },
  { text: "Top 10 – Algo Showdown", icon: Award },
];

const PortfolioAchievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Recognition" title="Achievements" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <a.icon size={17} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAchievements;
