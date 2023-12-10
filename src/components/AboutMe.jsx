import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div>
          <Image
            src="/image/about-image.png"
            alt="about Image"
            width={500}
            height={500}
            className="rounded-2xl"
          ></Image>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
