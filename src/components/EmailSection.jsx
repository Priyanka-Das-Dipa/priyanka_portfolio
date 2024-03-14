"use client";
import LinkedinIcon from "../../public/image/linkedin-icon.svg";
import GithubIcon from "../../public/image/github-icon.svg";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      // console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <>
      <section id="contact" className="">
        <div
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
          <div className="z-10">
            <h5 className="text-xl md:text-3xl lg:text-7xl font-bold text-white my-2">
              Let&apos;s Work Together !
            </h5>
            <p className="text-[#adb7be] mb-4 max-w-md mt-3">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className="text-[#e8eaec] mb-5">
              <h1 className="text-xl font-semibold">Mail</h1>
              <span className="text-sm font-semibold">
                priyankadipa9102@gmail.com
              </span>
            </div>
            <div className="text-[#e5e9ec]">
              <h1 className="text-xl font-semibold">Address</h1>
              <span className="text-sm font-semibold">
                Akhaliya Kalibari, Sylhet
              </span>
            </div>
            <div className="socials flex flex-row gap-2 mt-3">
              <Link href="https://github.com/Priyanka-Das-Dipa">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/priyanka-das-dipa-58327b285/">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
          <div>
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    className="bg-gradient-to-b text-white from-[#0c0c1d] to-[#111132] w-full my-2 py-3 px-5 rounded border"
                    // className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-gradient-to-b text-white from-[#0c0c1d] to-[#111132] w-full my-2 py-3 px-5 rounded border"
                    // className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    id="message"
                    className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] w-full my-2 py-3 px-5 rounded border text-white"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#6549d5] to-[#e33fa1de] btn text-white  hover:bg-primary-600  font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailSection;
