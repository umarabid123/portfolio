import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-white text-center text-5xl font-semibold">About</h1>
      <p className="text-gray-400 text-md sm:text-xl py-10">
        Hello! I'm <span className="text-[#64ffda]">Umar</span>, a passionate frontend developer with a knack for
        creating engaging and user-friendly web applications.
        <p className="pt-4">
          My journey in the world of web development has been fueled by a deep
          love for technology and a commitment to delivering exceptional user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          have honed my skills in modern frameworks and libraries like React JS
          and Next JS.{" "}
        </p>
        <p className="pt-4">
          My recent projects, including a dynamic expense tracker and a
          versatile CRUD app, showcase my ability to build functional and
          visually appealing web solutions. I take pride in my attention to
          detail and my ability to translate complex design concepts into clean,
          responsive interfaces.
          <p className="pt-4">
            My approach to development is centered around a user-first
            mentality, ensuring that every project I work on is not only
            technically sound but also intuitively navigable. I am also
            continuously learning and adapting, embracing new technologies and
            best practices to stay ahead in this ever-evolving field.
          </p>
        </p>
      </p>
    </div>
  );
};

export default About;
