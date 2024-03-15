"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import scroll from "../../public/image/scroll.png";


const HeroSection = () => {
  return (
    <section className="lg:h-[70vh] md:mt-[7.5rem] mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="col-span-7 place-self-center">
          <h2 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I&apos;m <br />
            <span>
              <TypeAnimation
                sequence={[
                  "Priyanka Das Dipa",
                  1000,
                  "Front-End Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                // style={{ fontSize: "1.25rem", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-white text-lg lg:text-xl mb-4">
            I am a recent graduate from North East University, Bangladesh, with
            a strong dedication to advancing my skills in web development. Over
            the past six months, I have immersed myself in the world of
            technology, focusing particularly on key technologies such as
            React.js, Node.js, MongoDB, and the versatile CSS framework
            Tailwind.
          </p>
          <div className="">
            <div className="flex gap-2 items-start">
              <button className="rounded-full mb-5 w-full sm:w-fit font-bold bg-white hover:bg-stone-200 text-black px-6 py-2 ">
                See the lasted work
              </button>
              <button className="rounded-full w-full sm:w-fit font-bold bg-transparent hover:bg-stone-800 hover:text-black border text-white border-white  px-6 py-2">
                <a
                  href="resume.pdf"
                  download
                  className="hover:text-purple-700 text-white font-semibold py-2 rounded"
                >
                  Download Resume
                </a>
              </button>
            </div>
            <div>
              <Image
              src={scroll}
              alt="image"
              className="scroll-down w-[50px]"
              height={100}
              width={30}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4">
          <div className="rounded-full bg-[#252424] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image/hero-image.png"
              alt="profile Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
