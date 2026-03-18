import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal = ({ text, className = "" }: TextRevealProps) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
};
