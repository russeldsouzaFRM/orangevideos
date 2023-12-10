import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NumberAnimationCounter = ({ from, to, duration, delay }) => {
  const [currentNumber, setCurrentNumber] = useState(from);
  const intervalRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const incrementNumber = () => {
      if (currentNumber === to) {
        clearInterval(intervalRef.current);
      } else {
        setCurrentNumber(currentNumber + 1);
      }
    };

    if (inView) {
      intervalRef.current = setInterval(incrementNumber, duration);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentNumber, to, duration, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      {currentNumber}+
    </motion.span>
  );
};

export default NumberAnimationCounter;
