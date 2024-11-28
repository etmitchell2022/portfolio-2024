import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedDTLogo = ({ size = 100 }) => {
  const aspectRatio = 36 / 42;

  const [isBlue, setIsBlue] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlue((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const color = isBlue ? "#50B4E5" : "#FFFFFF";

  return (
    <motion.svg
      key={color}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size / aspectRatio}
      viewBox="0 0 36 42"
      fill="none"
    >
      {/* Roof */}
      <motion.path
        d="M1 14L18 4L35 14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="butt"
        initial={{ strokeDasharray: 50, strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Bar 1 */}
      <motion.line
        x1="3.89194"
        y1="22.678"
        x2="31.61394"
        y2="22.678"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
        initial={{ strokeDasharray: 28, strokeDashoffset: 28 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Horizontal Bar 2 */}
      <motion.line
        x1="3.89194"
        y1="32.678"
        x2="31.61394"
        y2="32.678"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
        initial={{ strokeDasharray: 28, strokeDashoffset: 28 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.75,
        }}
      />

      {/* Vertical Bar 1 */}
      <motion.line
        x1="12.739"
        y1="14.8"
        x2="12.739"
        y2="40.465"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
        initial={{ strokeDasharray: 25.665, strokeDashoffset: 25.665 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Vertical Bar 2 */}
      <motion.line
        x1="23.027"
        y1="14.8"
        x2="23.027"
        y2="40.465"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
        initial={{ strokeDasharray: 25.665, strokeDashoffset: 25.665 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1.25,
        }}
      />
    </motion.svg>
  );
};

export default AnimatedDTLogo;
