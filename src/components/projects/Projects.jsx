import React from "react";
import "./imageCss.css";
import Link from "next/link";
const Projects = () => {
  return (
    <section
      id="project"
      className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-5 md:px-12 "
    >
      <div className="pt-28 pb-16">
        {/* project 1 */}
        <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-5 sm:py-16 xl:py-20 ">
          <div className="">
            <div className="box1"></div>
          </div>
          <div className="text-left space-y-3">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-700 text-4xl py-2 font-extrabold">
              Library Service Management
            </h1>
            <div className="flex md:flex-row flex-col gap-2 text-left pb-2">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 text-md font-bold">
                Technology :
              </p>
              <div className="text-white">
                <h3 className="text-base font-medium">
                  Next js, Mongoose, Firebase, Cloudinary, Next ui, Uiverse.io.
                </h3>
              </div>
            </div>
            <p className="text-slate-200">
              Introducing our innovative Library Service Management System – a
              comprehensive web-based platform designed to revolutionise the way
              users interact with library services. Our feature-rich website
              ensures a seamless experience for both administrators and members,
              offering a plethora of functionalities to streamline the
              subscription and management of books.
            </p>
            <div className="text-white">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-600 text-md font-bold">
                Project Feature&apos;s :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-bold">
                    Subscription Management System:{" "}
                  </span>
                  Showcase your implementation of a subscription management
                  system using Stripe integration, allowing users to easily
                  subscribe to your service and make payments through the
                  pricing route.
                </li>
                <li>
                  <span className="font-bold">
                    Search and Pagination Functionality:{" "}
                  </span>
                  Highlight your implementation of search functionality and
                  pagination for the all books page. Search for books using
                  backend search capabilities and navigate through multiple
                  pages of search results using pagination.
                </li>
                <li>
                  <span className="font-bold">Writer Management: </span>
                  Showcase the functionality for managing writers on your
                  website, including the ability for users to view all writers
                  and access detailed information about specific writers via the
                  writers page.
                </li>
                <li>
                  <span className="font-bold">
                    User Management in Admin Dashboard:{" "}
                  </span>
                  Emphasize the user management features available in the admin
                  dashboard, such as viewing a list of users, adding new users,
                  and deleting existing users. Highlight any additional
                  functionality related to user management, such as user roles
                  and permissions, account settings, or user activity tracking,
                  showcasing your ability to create robust admin interfaces for
                  managing user-related tasks efficiently.
                </li>
              </ul>
            </div>
            <div className="flex gap-7 mt-5 ">
              <Link href="https://library-service-management-system.vercel.app/">
                <button className="border text-white px-5 py-1 rounded-md ">
                  Live
                </button>
              </Link>

              <Link href="https://github.com/codefusion6/library-service-management-system">
                <button className="border text-white px-5 py-1 rounded-md">
                  Github
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-5 sm:py-16 xl:py-20 ">
          <div className="">
            <div className="box3"></div>
          </div>
          <div className="text-left space-y-3">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-700 text-4xl py-2 font-extrabold">
              Gardening Tips and Tricks
            </h1>
            <div className="flex md:flex-row flex-col gap-2 text-left pb-2">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 text-md font-bold">
                Technology:
              </p>
              <div className="text-white">
                <h3 className="text-base font-medium">
                  Next js, MongoDB, Typescript, Cloudinary, JWT-based user
                  authentication, Node.js, Express,
                </h3>
              </div>
            </div>
            <p className="text-slate-200">
              The Gardening Tips & Trick Platform is a comprehensive full-stack
              web application designed for gardening enthusiasts and
              professionals to share, discover, and engage with gardening
              knowledge. It will provide users with insightful tips, plant care
              advice, seasonal guides, and techniques to enhance their gardening
              experiences.
            </p>
            <div className="text-white">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-600 text-md font-bold">
                Project Feature&apos;s :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-bold">
                    User Authentication with JWT –
                  </span>
                  Secure login and role-based access control for normal users,
                  verified users, and admins.
                </li>
                <li>
                  <span className="font-bold">Admin and User Dashboards –</span>
                  Admins can manage users, monitor activity, and generate
                  reports, while users can track their posts, followers, and
                  interactions.
                </li>
                <li>
                  <span className="font-bold">
                    Post Creation with Jodit Text Editor –{" "}
                  </span>
                  Rich-text post creation with image support and formatting.
                </li>
                <li>
                  <span className="font-bold">
                    Follow System & Post Interaction –
                  </span>
                  Users can follow others, upvote/downvote posts, and engage
                  through comments.
                </li>
                <li>
                  <span className="font-bold">
                    Admin-Only Category Management –
                  </span>
                  Admins can create, edit, and delete post categories to
                  organize content.
                </li>
              </ul>
            </div>
            <div className="flex gap-7 mt-5 ">
              <Link href="https://garderning-website-client.vercel.app/">
                <button className="border text-white px-5 py-1 rounded-md ">
                  Live
                </button>
              </Link>

              <Link href="https://github.com/Priyanka-Das-Dipa/gardening_website_client">
                <button className="border text-white px-5 py-1 rounded-md">
                  Client Site
                </button>
              </Link>
              <Link href="https://github.com/Priyanka-Das-Dipa/gardening_tips_server">
                <button className="border text-white px-5 py-1 rounded-md">
                  Server Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-5 sm:py-16 xl:py-20 ">
          <div className="">
            <div className="box4"></div>
          </div>
          <div className="text-left space-y-3">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-700 text-4xl py-2 font-extrabold">
              Meeting Room Service
            </h1>
            <div className="flex md:flex-row flex-col gap-2 text-left pb-2">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 text-md font-bold">
                Technology:
              </p>
              <div className="text-white">
                <h3 className="text-base font-medium">
                  React ,Redux Toolkit & RTK Query, Antd Design, TypeScript,
                  Express.js, Mongoose, JWT Authentication, Stripe API
                </h3>
              </div>
            </div>
            <p className="text-slate-200">
              A full-featured meeting room booking platform built using the MERN
              stack, TypeScript, and Antd Design. This system allows users to
              book meeting rooms, manage bookings, and handle payments
              seamlessly. Admins can efficiently manage rooms, users, and
              booking slots through an intuitive interface. The platform
              features a modern and responsive design using Antd Design,
              Tailwind CSS, React, and Redux.
            </p>
            <div className="text-white">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-600 text-md font-bold">
                Project Feature&apos;s :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-bold">
                    User Authentication with JWT –
                  </span>
                  Secure login and registration with protected routes for
                  seamless navigation.
                </li>
                <li>
                  <span className="font-bold">
                    Room Booking with Time Slots –
                  </span>
                  Book rooms in one-hour increments with support for consecutive
                  slot bookings.
                </li>
                <li>
                  <span className="font-bold">
                    Payment Integration with Stripe –{" "}
                  </span>
                  Secure payment processing ensures bookings are confirmed only
                  after successful payment.
                </li>
                <li>
                  <span className="font-bold">Admin Dashboard –</span>
                  Manage users, rooms, and bookings with real-time availability
                  and activity tracking.
                </li>
                <li>
                  <span className="font-bold">
                    Search, Filter, and Sort Rooms –
                  </span>
                  Find rooms easily based on name, amenities, capacity, and time
                  slots.
                </li>
                <li>
                  <span className="font-bold">Responsive UI – </span>
                  Modern and professional design with Ant Design and Tailwind
                  CSS for all devices.
                </li>
              </ul>
            </div>
            <div className="flex gap-7 mt-5 ">
              <Link href="https://meeting-room-client-beta.vercel.app/">
                <button className="border text-white px-5 py-1 rounded-md ">
                  Live
                </button>
              </Link>

              <Link href="https://github.com/Priyanka-Das-Dipa/meeting_room_client">
                <button className="border text-white px-5 py-1 rounded-md">
                  Client Site
                </button>
              </Link>
              <Link href="https://github.com/Priyanka-Das-Dipa/meeting_room_server">
                <button className="border text-white px-5 py-1 rounded-md">
                  Server Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* project 4 */}
        <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-2 items-start py-8 px-4 xl:gap-5 sm:py-16 xl:py-20">
          <div className="">
            <div className="box2"></div>
          </div>
          <div className="text-left space-y-3">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-700 text-4xl py-2 font-extrabold">
              Technology and Electronics
            </h1>
            <div className="flex flex-col md:flex-row gap-2 text-left pb-2">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 text-md font-bold">
                Technology:
              </p>
              <div className="text-white">
                <h3 className="text-base font-medium">
                  React, React Router DOM, Firebase, Node js, Express, MongoDB,
                  JWT, Mamba UI
                </h3>
              </div>
            </div>
            <p className="text-slate-200">
              This is a web based online Mobile project which is mainly about
              the brands of the mobile phones. There are six brand of mobile
              phones. Each category have own brand of mobile, laptop etc. Anyone
              can easily buy phones from the website.
            </p>
            <div className="text-white">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-600 text-md font-bold">
                Project Feature&apos;s :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-bold">User-Friendly Navigation: </span>
                  Implement a user-friendly navigation system that allows users
                  to easily browse through the six different mobile phone brands
                  and their respective products.
                </li>
                <li>
                  <span className="font-bold">E-commerce Functionality: </span>
                  Showcase your implementation of e-commerce features such as
                  adding products to a shopping cart, viewing product details,
                  and completing purchases securely.
                </li>
                <li>
                  <span className="font-bold">
                    User Authentication and Authorization:
                  </span>
                  Detail your implementation of user authentication and
                  authorization features to ensure secure access to
                  user-specific functionalities.
                </li>
                <li>
                  <span className="font-bold">Responsive Design:</span>
                  Emphasize your use of responsive web design techniques to
                  ensure the website is accessible and functional across various
                  devices and screen sizes.
                </li>
              </ul>
            </div>
            <div className="flex gap-3 mt-5">
              <Link href="https://technology-and-electroni-8514d.firebaseapp.com/">
                <button className="border text-white px-5 py-1 rounded-md">
                  Live
                </button>
              </Link>

              <Link href="https://github.com/Priyanka-Das-Dipa/techonology_and_electronics">
                <button className="border text-white px-5 py-1 rounded-md">
                  Client Site
                </button>
              </Link>
              <Link href="https://github.com/Priyanka-Das-Dipa/techonology_and_electronics_server">
                <button className="border text-white px-5 py-1 rounded-md">
                  Server Site
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
