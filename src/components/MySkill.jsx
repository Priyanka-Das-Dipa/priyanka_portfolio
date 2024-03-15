import React from "react";
import tailwind from "../../public/image/tailwindcss-icon.svg";
import Image from "next/image";
import html from "../../public/image/html.svg";
import css from "../../public/image/css.svg";
import JavaScript from "../../public/image/javaScript.svg";
import react from "../../public/image/react.svg";
import reactRouter from "../../public/image/reactRouter.png";
import next from "../../public/image/next.png";
import firebase from "../../public/image/firebase-icon.svg";
import node from "../../public/image/nodejs.svg";
import express from "../../public/image/express.png";
import MongoDB from "../../public/image/mongodb.svg";
import git from "../../public/image/git-scm-icon.svg";
import figma from "../../public/image/figma-icon.svg";
import mongoose from "../../public/image/mongoose.png";
// bg-gradient-to-r from-[#059bff62] via-[#6549d5] to-[#e33fa1]
const MySkill = () => {
  return (
    <div id="skill" className="mb-10 px-5 md:px-12 ">
        <div className="flex gap-3 items-start" >
            <span className="w-[10px] h-[40px] bg-gradient-to-r from-[#059bff62] via-[#6549d5] to-[#e33fa1]"></span>
            <span className="text-white"> I am comfortable with this technology&apos;s <br className="hidden lg:block"/><span>Committed to learning new technologies and staying up-to-date in my field.</span></span>
        </div>
      <h1 className="text-2xl font-bold text-slate-200 py-8">
        Frontend Technology{" "}
      </h1>
      <div className="flex flex-wrap items-center gap-5 md:gap-8">
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={html}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="tailwind"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">HTML</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={css}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="tailwind"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">CSS</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={tailwind}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="tailwind"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Tailwind</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={JavaScript}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="tailwind"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">JavaScript</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={react}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="react"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">React js</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={reactRouter}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="reactRouter"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">React Router</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={next}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="next"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Next js</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-slate-200 py-8">
        Backend Technology{" "}
      </h1>
      <div className="flex flex-wrap items-center gap-5 md:gap-8">
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={firebase}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="firebase"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Firebase</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={node}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="node"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Node js</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={express}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="express"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Express js</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={MongoDB}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="mongodb"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">MongoDB</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={mongoose}
              className="w-6 xl:w-8 h-6 xl:h-8 bg-cover"
              alt="mongoose"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Mongoose</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-slate-200 py-8">Tools</h1>
      <div className="flex flex-wrap items-center gap-5 md:gap-8">
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={git}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="mongodb"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Git</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#059dff]/10 via-[#6549d5]/10 to-[#e33fa1]/10 rounded-md">
          <div className="flex justify-center items-center gap-3 px-2 py-1 sm:px-8 sm:py-3 h-full w-full">
            <Image
              src={figma}
              className="w-6 xl:w-8 h-6 xl:h-8"
              alt="figma"
              width={10}
              height={10}
            />
            <p className="font-semibold text-xl text-white">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
