import React from "react";
// import JS from './assets/Images/next.jpg'
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      className=" bg-[#174a57] text-xl w-[60%] sm:w-[36%] lg:w-[25%] h-52 sm:h-56 xl:w-[19%] flex flex-col items-center justify-center p-8 rounded-md group hover:bg-[#64ffda] transition-all duration-300 ease-linear"
    >
      <img src={props.img} alt="" className="w-[60%]" />
      <p className="text-[#64ffda] text-2xl font-semibold pt-2 group-hover:text-gray-700">
        {props.text}
      </p>
    </motion.div>
  );
};

export default Card;
