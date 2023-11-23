import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NumberAnimationCounter = ({ from, to, duration, delay }) => {
  const [currentNumber, setCurrentNumber] = useState(from);
  const intervalRef = useRef(null);

  useEffect(() => {
    const incrementNumber = () => {
      if (currentNumber === to) {
        clearInterval(intervalRef.current);
      } else {
        setCurrentNumber(currentNumber + 1);
      }
    };

    intervalRef.current = setInterval(incrementNumber, duration);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentNumber, to, duration]);

  return (
    <motion.span
      animate={{
        x: [0, 100],
        transition: {
          duration: delay, // Change the duration to 0.25 seconds
          //   ease: [0.4, 0, 0.2, 1],
        },
      }}
    >
      {currentNumber}+
    </motion.span>
  );
};

export default NumberAnimationCounter;
