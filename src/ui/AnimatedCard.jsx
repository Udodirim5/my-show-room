import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

const AnimatedCard = ({ children, index, className, variant = "slide" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Memoize the animations object to prevent unnecessary recreations
  const animations = useMemo(() => ({
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
  }), [index]); // Add dependencies here if needed

  useEffect(() => {
    if (isInView) {
      controls.start(animations[variant].animate);
    }
  }, [controls, isInView, variant, animations]); // animations is now stable

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[variant].initial}
      animate={controls}
      transition={
        animations[variant].transition || {
          duration: 0.6,
          delay: index * 0.2,
          ease: "easeOut",
        }
      }
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;