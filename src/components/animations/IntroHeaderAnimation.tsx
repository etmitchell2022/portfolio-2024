import { motion } from 'framer-motion';

const IntroHeaderAnimation = () => {
  const nameHeader = "I'm Evan";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const helloVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const introVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className='flex flex-col'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={helloVariant}
        className='text-2xl text-white font-sans font-thin'
      >
        Hello,
      </motion.div>

      <motion.div
        className='text-3xl text-white font-sans mt-2 font-thin'
        variants={introVariants}
      >
        {nameHeader.split('').map((letter, index) => {
          if (letter === ' ') {
            return <span key={index}>&nbsp;</span>;
          }
          return (
            <motion.span
              key={index}
              variants={letterAnimation}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default IntroHeaderAnimation;
