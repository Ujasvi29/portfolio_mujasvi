import { motion } from "framer-motion";

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-2">
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
      {title}
    </h2>
  </motion.div>
);

export default SectionHeading;
