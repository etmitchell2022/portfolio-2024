import { motion } from "framer-motion";

type Props = {
  imageSrc: string;
};
const WiggleImage: React.FC<Props> = ({ imageSrc }) => {
  return (
    <motion.div
      initial={{ rotate: 5 }}
      whileHover={{
        rotate: [5, -3, 3, -3, 3, 5],
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      animate={{
        rotate: [5, -3, 3, -3, 3, 5],
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="relative w-[150px] h-[150px] rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  );
};

export default WiggleImage;
