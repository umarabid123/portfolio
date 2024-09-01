import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./App.css";
import profile from "./assets/Images/profile.jpg";
import html from './assets/Images/html.png'
import css from './assets/Images/css.png'
import tailwind from './assets/Images/tailwind.png'
import bootstrap from './assets/Images/bootstrape.png'
import react from './assets/Images/React.png'
import next from './assets/Images/next.jpg'
import git from './assets/Images/github.png'
import javascript from './assets/Images/JS.png'
import About from "./Components/about/About";
import Button from "./Components/button/Button";
import Card from "./Components/card/Card";
import Contact from "./Components/contact/Contact";
import Navbar from "./Components/navbar/Navbar";
import Project_Card from "./Components/projectCard/Project_Card";
import { data } from "./data";
import { SparklesCore } from "./Components/sparkles/Sparkles";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const skillData = [
  {
    img: html,
    text: "HTML",
  },
  {
    img: css,
    text: "CSS",
  },
  {
    img: tailwind,
    text: "Tailwind",
  },
  {
    img: bootstrap,
    text: "Bootstrap",
  },
  {
    img: javascript,
    text: "JavaScript",
  },
  {
    img: react,
    text: "React JS",
  },
  {
    img: next,
    text: "Next JS",
  },
  {
    img: git,
    text: "GitHub",
  },
];

function App() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Designer"],
    loop: {},
  });

useEffect(() =>{
  Aos.init({duration: 2000})
}, [])

  return (
    <div className="bg-[#0a192f] h-full lg:px-6 xl:px-0 overflow-hidden" >


<div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full -z-10"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="container xl:max-w-6xl mx-auto relative z-20">
        {" "}
        <Navbar data-aos ='fade-up' />
        {/* Hero Section */}
        <div className="main-hero lg:mt-14 flex flex-col-reverse lg:flex-row justify-between items-center px-6 z-20">
          {" "}
          <div className="hero-txt w-full lg:w-[55%] text-center lg:text-start pt-8 lg:pt-0">
            <h1 className="text-gray-200 text-3xl sm:text-4xl lg:text-[3rem] leading-tight">
              Hi, I am <br /> Muhammad Umar
            </h1>
            <p className="text-2xl sm:text-3xl text-white pt-3">
              I am a <span className="text-[#64ffda] text-3xl">{text}</span>
              <span className="font-bold">
                <Cursor />
              </span>
            </p>
            <p className="text-lg text-gray-400 leading-8 pt-5">
              As a frontend developer, I am passionate about transforming ideas
              into engaging and interactive web experiences. My approach to
              development emphasizes clean code, efficient performance, and
              modern design principles, ensuring that every interface I create
              is both functional and aesthetically pleasing.
            </p>

            <div className="icons flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=100043144280043">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#64ffda"
                className="w-7"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
              </a>
              <a href="www.linkedin.com/in/muhammad-umar-abid-webdev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6"
                fill="#64ffda"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#64ffda"
                className="w-6"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
              </svg>
              <a href="https://github.com/umarabid123">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-6"
                  fill="#64ffda"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </div>
            <Button
              text="Resume"
              customClass="bg-[#64ffda] my-6 w-36 hover:text-white transition-all duration-300 ease-linear rounded-3xl"
            />
          </div>
          <div className="img-section w-full sm:w-[70%] lg:w-[35%] rounded-full  border-2 border-[#64ffda]">
            <img src={profile} alt="" className="rounded-full" />
          </div>
        </div>

        {/* Skills Section  */}
        <div className="skills pb-10 pt-36 px-6 " data-aos ="fade-down">
          <h1 className="text-white text-center text-5xl font-semibold" >
            Skills
          </h1>
          <p className="text-gray-300 text-xl text-center pt-4">
            Here are some of my skills on which I have been working
          </p>
          <div className="cards flex gap-6 flex-wrap justify-center pt-10">
            {skillData.map((item, i) => {
              return <Card img={item.img} text={item.text} key={i} />;
            })}
          </div>
        </div>

        {/* Project  Section  */}
        <div className="project pt-36">
          <h1 className="text-white text-center text-5xl font-semibold" data-aos ="fade-left">
            Project
          </h1>
          <p className="text-gray-300 text-xl text-center py-10" data-aos ="fade-left">
            Here are some of my skills on which I have been working
          </p>
          <div className="flex justify-between flex-wrap">
            {data.map((item, i) => {
              return (
                <Project_Card
                  i={i}
                  img={item.img}
                  tecnholgyF={item.tecnholgyF}
                  tecnholgy={item.tecnholgy}
                  name={item.name}
                  date={item.date}
                  paragraph={item.paragraph}
                  
                />
              );
            })}
          </div>
        </div>

         {/* About Section  */}
        <div className="about my-16 w-[90%] mx-auto">
          <About />
        </div>
         
      {/* Contact Section  */}
        <div className="Contact">
          <Contact />
        </div>
        <div className="last-text py-20">
          <p className="text-[#64ffda] text-xl text-center font-medium">Muhammad Umar</p>
          <p className="text-[#fff] text-center font-medium">© 2024 Muhammad Umar. All rights reserved.</p> 
        </div>
      </div>
    </div>
  );
}

export default App;
