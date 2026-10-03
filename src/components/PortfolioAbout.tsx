import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PortfolioAbout = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About" title="Professional Summary" />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl text-muted-foreground leading-relaxed text-base"
        >
          Computer Science Engineering student with hands-on experience in Artificial Intelligence, Cybersecurity, Machine Learning, and Full-Stack Web Development through research internships, hackathons, and industry projects. Skilled in Python, Java, React.js, SQL, Azure, and secure software development with a strong foundation in Data Structures, Algorithms, and Network Security.
        </motion.p>
      </div>
    </section>
  );
};

export default PortfolioAbout;
