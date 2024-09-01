import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Project_Card = (props) => {
  useEffect(() =>{
    Aos.init({duration: 1000})
  }, [])
  
  return (
    <div className=" bg-[#172a57] p-8 w-[90%] sm:w-[46%] mx-auto lg:w-[30%] flex flex-col gap-4 rounded-lg my-4" data-aos ="fade-up">
      <img src={props.img} className="w-96 h-60 rounded-lg " alt="" />
      <p className="text-purple-500 font-semibold text-xs py-3">
        <span className="bg-gray-600 p-2 rounded-lg">{props.tecnholgyF}</span>
        <span className="bg-gray-600 p-2 rounded-lg m-2">
          {props.tecnholgy}
        </span>
      </p>
      <h2 className="text-white text-3xl">{props.name}</h2>
      <p className="text-gray-500 text-xs">{props.date}</p>
      <p className="text-gray-500 text-md font-medium">{props.paragraph}</p>
    </div>
  );
};

export default Project_Card;
