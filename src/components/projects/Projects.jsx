import React from "react";
import "./imageCss.css";
import Link from "next/link";
const Projects = () => {
  return (
    <section id="project" className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-5 md:px-12 ">
      <div  className="mt-28 ">
        <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-5 sm:py-16 xl:py-16">
          <div className="">
            <div className="box1"></div>
          </div>
          <div className="text-left space-y-3">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-700 text-4xl py-2 font-extrabold">
              Library Service Management
            </h1>
            <div className="md:flex flex-col gap-2 text-left pb-2">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 text-md font-bold">
                Technology :
              </p>
              <div className="text-white">
                <h3 className="text-base font-medium">
                  Next js, Mongoose, Firebase, Cloudinary, Next ui, Uiverse.io.
                </h3>
              </div>
            </div>
            <div className="text-white">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-600 text-md font-bold">
                Project Feature&apos;s :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Fully integrated lending page with navbar, banner, recommended
                  and featured books, author section, and footer.
                </li>
                <li>
                  Stripe integration for subscription payments in the pricing
                  route.
                </li>
                <li>
                  Backend pagination and search functionality for the all books
                  page.
                </li>
                <li>Dynamic display of author&apos;s books on details page.</li>
                <li>
                  Admin dashboard for managing users, books, writers, book
                  requests, and membership requests.
                </li>
                <li>
                  Implemented secure user authentication system with login
                  functionality, save user&apos;s info in database.
                </li>
              </ul>
            </div>
            <div className="flex gap-7 mt-5">
              <Link href="https://library-service-management-system.vercel.app/">
                <button className="border text-white px-5 ">Live</button>
              </Link>

              <Link href="https://github.com/codefusion6/library-service-management-system">
                <button className="border text-white px-5 ">Github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
