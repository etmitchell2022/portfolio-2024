import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isDay, setIsDay] = useState(() => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 18;
  });
  const [showInitialWiggle, setShowInitialWiggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      const hours = currentTime.getHours();
      setIsDay(hours >= 6 && hours < 18);
    }, 1000);

    const timeout = setTimeout(() => {
      setShowInitialWiggle(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const hours = time
    .toLocaleTimeString("en-US", { hour: "2-digit", hour12: true })
    .split(" ")[0];
  const minutes = time
    .toLocaleTimeString("en-US", { minute: "2-digit" })
    .padStart(2, "0");
  const ampm = time.toLocaleTimeString("en-US", { hour12: true }).split(" ")[1];

  return (
    <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded-sm shadow-md space-x-1 w-fit">
      {/* Moon or Sun Icon */}
      <div className="flex items-center justify-center mr-1">
        {isDay ? (
          <motion.svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            <circle cx="12" cy="12" r="5" stroke="currentColor" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        ) : (
          <motion.svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            animate={
              showInitialWiggle ? { rotate: [-10, 10, -5, 5, 0] } : undefined
            }
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3c0 5.52 4.48 9.99 9.79 9.79z"
              stroke="currentColor"
            />
          </motion.svg>
        )}
      </div>

      {/* Time Display */}
      <div className="flex items-center justify-center font-mono text-sm text-white font-thin">
        <span>{hours}</span>
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
        >
          :
        </motion.span>
        <span>{minutes}</span>
        <span className="ml-1">{ampm}</span>
        <span className="ml-1">EST</span>
      </div>
    </div>
  );
};

export default Clock;
