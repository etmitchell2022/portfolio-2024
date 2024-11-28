import { motion } from "framer-motion";
import { BSULogo } from "../bsu-logo"; // Assuming your BSULogo component is in the same directory

export const AnimatedBSULogo = ({ size = 300 }) => {
  // Define animation variants
  const animationVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: [0, -5, 5, -5, 0], // Wiggling effect
      transition: {
        duration: 1.5, // Total animation duration
        ease: "easeInOut", // Smooth transitions
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      style={{
        width: size,
        height: "auto", // Maintain aspect ratio
      }}
    >
      <BSULogo size={size} />
    </motion.div>
  );
};
