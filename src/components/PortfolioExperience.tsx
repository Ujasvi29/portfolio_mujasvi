import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experience = [
  {
    title: "Research Intern",
    company: "DRDO",
    meta: "Hyderabad · 2026 – Present",
    points: [
      "Engineered an Intrusion Detection System (IDS) leveraging the CICIDS2017 dataset to identify and classify network-based threat patterns.",
      "Performed data preprocessing and feature engineering on large-scale network traffic data to improve threat detection accuracy.",
    ],
    tags: ["Cybersecurity", "Intrusion Detection", "CICIDS2017", "Data Preprocessing", "Feature Engineering"],
  },
  {
    title: "Frontend Design Intern",
    company: "Hindustan Aeronautics Limited (HAL)",
    meta: "Hyderabad · 2025",
    points: [
      "Designed a UI dashboard for an RS-422 based LRU (Line Replacement Unit) monitoring system, visualizing flow bits, stop bits, parity, and serial communication parameters.",
      "Collaborated with engineering teams to translate technical serial-communication data into an intuitive, real-time monitoring interface.",
    ],
    tags: [],
  },
  {
    title: "Frontend Development Intern",
    company: "Purview",
    meta: "Remote · 2025",
    points: [
      "Developed a responsive React.js dashboard for an AI-powered Selling Apartment Calling Agent featuring lead management, analytics, follow-up scheduling, and call monitoring interfaces.",
      "Built reusable frontend components using React, JavaScript, HTML, and CSS while preparing the application for FastAPI, PostgreSQL, and AI service integration.",
    ],
    tags: [],
  },
  {
    title: "Tech Lead Intern",
    company: "SWECHA & Vishwam AI",
    meta: "Hyderabad · 2025",
    points: [
      "Led and mentored a team of 10 interns contributing to the SWECHA Corpus App, coordinating task delivery across the team.",
      "Delivered multiple production-ready projects using Python and Streamlit, improving contributor onboarding and code quality.",
    ],
    tags: [],
  },
  {
    title: "Azure AI Intern",
    company: "Microsoft Edunet Foundation",
    meta: "Remote · 2025",
    points: [
      "Built an AI-powered quote generator application using Microsoft Azure Cognitive Services.",
      "Integrated cloud-based AI APIs to deliver dynamic, context-aware text generation for end users.",
    ],
    tags: [],
  },
  {
    title: "AI Image Annotation Freelancer",
    company: "Student Tribe",
    meta: "Remote · 2026",
    points: [
      "Evaluated 200–250 AI-generated images daily, with 3,000+ images evaluated across 14 days, against source prompts for accuracy and quality.",
      "Delivered structured quality feedback that helped identify recurring AI image-generation errors and improve model outputs.",
    ],
    tags: [],
  },
];

const PortfolioExperience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Experience" title="Experience" />
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />
          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.title + item.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative sm:pl-16"
              >
                <div className="absolute left-0 top-6 w-10 h-10 rounded-lg bg-secondary border border-border items-center justify-center hidden sm:flex">
                  <Briefcase size={17} className="text-primary" />
                </div>
                <div className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.meta}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioExperience;
