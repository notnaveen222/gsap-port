import { motion } from "motion/react";

interface FlippingTextprops {
  title: string;
  styles: string;
}

const DURATION = 0.3;

export default function FlippingText({ title, styles }: FlippingTextprops) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`${styles} relative block overflow-hidden  whitespace-normal`}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: DURATION,
          ease: "easeOut",
        }}
        className="text-white mix-blend-difference"
      >
        {title}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-white mix-blend-difference"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{
          duration: DURATION,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
