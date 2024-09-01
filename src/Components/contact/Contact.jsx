import React, { useEffect } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="w-[90%] mx-auto " data-aos ="fade-up">
      <h1 className="text-white text-center text-5xl font-semibold">
        Contat US
      </h1>
      <p className="text-gray-300 text-xl text-center py-10">
        Here are some of my skills on which I have been working
      </p>

      <div className="input flex flex-col bg-[#111928d2] w-[90%] sm:w-[60%] lg:w-[50%] p-8 my-4 mx-auto border rounded-lg">
        <Input placeholder="Your Email" customClass="my-5" />
        <Input placeholder="Your Name" customClass="my-5" />
        <Input placeholder="Subject" customClass="my-5" />
        <Input placeholder="Massage" customClass="my-5 h-36" />
        <Button
          text="Contact"
          customClass="border border-[#64ffda] text-[#64ffda] mx-auto self-center"
        />
      </div>
    </div>
  );
};

export default Contact;
