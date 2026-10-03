import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy } from "lucide-react";

const projects = [
  {
    title: "AyuCare",
    badge: "Runner-Up – SWECHA Hackathon",
    type: null,
    points: [
      "Developed an AI-based healthcare advisory platform for early health risk detection using TensorFlow.js, Chatbase, and Teachable Machine.",
      "Built a responsive, accessible interface with Tailwind CSS, translating on-device ML predictions into actionable health guidance.",
    ],
    tags: ["TensorFlow.js", "Chatbase", "Teachable Machine", "Tailwind CSS", "AI/ML"],
  },
  {
    title: "UDAAN AI – Opportunity Intelligence Platform",
    badge: null,
    type: "Mini Project",
    points: [
      "Developed an AI-powered platform to streamline opportunity discovery through a responsive web interface.",
      "Built modular frontend components and integrated REST APIs using modern web technologies.",
    ],
    tags: [],
  },
  {
    title: "Legal Guardian AI",
    badge: "GenAI Hackathon",
    type: null,
    points: [
      "Developed a Generative AI legal assistance platform with secure user access, document handling, and AI-assisted legal guidance.",
      "Contributed to frontend design and secure data management using modern web technologies.",
    ],
    tags: [],
  },
  {
    title: "Hack4Good Platform",
    badge: "3rd Prize – Hack4Good Hackathon",
    type: null,
    points: [
      "Built a real-time community service coordination platform connecting volunteers with local service requests.",
    ],
    tags: [],
  },
  {
    title: "Smart Adaptive Attendance Intelligence System (SAAIS)",
    badge: null,
    type: "Mini Project",
    points: [
      "Developed a secure smart attendance platform using dynamic QR verification, GPS, WiFi, device binding, and intelligent confidence scoring to prevent proxy attendance and enable real-time attendance analytics.",
    ],
    tags: [],
  },
];

const PortfolioProjects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Work" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
                {p.type && (
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {p.type}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {p.badge && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold w-fit">
                  <Trophy size={13} className="text-primary" />
                  {p.badge}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
