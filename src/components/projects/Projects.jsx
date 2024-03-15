import Image from "next/image";
import React from "react";
import demo from "../../../public/image/demo.png";
import "./imageCss.css";
const Projects = () => {
  return (
    <div id="project" className="mt-28">
      <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <div className="">
          {/* <Image
            src={demo}
            alt="landing page image"
            className="w-[580px] h-[400px] transition duration-12000 ease-in-out bg-cover bg-top hover:bg-bottom"
            height={500}
            width={500}
          /> */}
          <div className="box"></div>
        </div>
        <div className="text-left">
          <h1 className="text-gradient-to-r from-blue-500 via-indigo-600 to-pink-500 text-3xl py-3 font-bold">Library Service Management</h1>
          <div className="text-white">
            <ul className="list-disc">
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
          <div>
            <button>Live</button>
            <button>Live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
