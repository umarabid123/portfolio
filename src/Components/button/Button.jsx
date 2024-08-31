import React from "react";
import { motion } from "framer-motion";
const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{duration:0.7, delay:0.5, ease:"easeInOut"}}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className={`text-[1rem] font-semibold rounded-3xl p-3 w-32 ${props.customClass}`}
    >
      {props.text}
    </motion.button>
  );
};

export default Button;
