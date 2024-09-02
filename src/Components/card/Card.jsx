import React from "react";
// import JS from './assets/Images/next.jpg'
import 'aos/dist/aos.css';

const Card = (props) => {
 
  
  return (
    <div
      className=" bg-[#174a57] text-xl w-[60%] sm:w-[36%] lg:w-[25%] h-52 sm:h-56 xl:w-[19%] flex flex-col items-center justify-center p-8 rounded-md group hover:bg-[#64ffda] transition-all duration-500 ease-linear hover:scale-115 hover:-translate-y-5">
      <img src={props.img} alt="" className="w-[60%]" />
      <p className="text-[#64ffda] text-2xl font-semibold pt-2 group-hover:text-gray-700">
        {props.text}
      </p>
    </div>
  );
};

export default Card;
