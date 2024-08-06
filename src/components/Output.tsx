import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";
// Final Output Info
const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className = "",
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}) => {
  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  return (
    <motion.ul
      initial={initial}
      animate={animate}
      className={`flex flex-row items-center justify-center text-black gap-8 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-sm text-green-500"
      >
        <i className="fa-solid fa-rocket mr-2"></i>
        accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1 }}
        className="text-sm text-red-500"
      >
        <i className="fa-solid fa-poo mr-2"></i>
        errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
        className="text-sm text-blue-500"
      >
        <i className="fa-solid fa-keyboard mr-2"></i>
        typed: {total}
      </motion.li>
    </motion.ul>
  );
};

export default Results;