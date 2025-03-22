import { motion } from "framer-motion";

const AnimatedCard = ({ children, index, className, variant = "slide" }) => {
  const animations = {
    slide: {
      initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
      animate: { opacity: 1, x: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -15 },
      animate: { opacity: 1, rotate: 0 },
    },
    bounce: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={className}
      initial={animations[variant].initial}
      whileInView={animations[variant].animate}
      transition={animations[variant].transition || { duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
