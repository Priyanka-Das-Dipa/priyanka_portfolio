"use client";
import Image from "next/image";
import blog from "../../../../public/blogs.json";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import userImg from "../../../../public/image/img-2.jpg";

const BlogDetails = ({ params }) => {
  const id = params.id;

  const blogDetails = blog.find((blog) => blog.id === id);

  return (
    <div className="bg-[#120321] min-h-screen ">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-xl md:text-3xl font-bold py-7">
          {blogDetails?.title}
        </h1>
        <div className="flex flex-col md:flex-row  items-center justify-evenly gap-5 py-5">
          <div className=" flex flex-col md:flex-row  gap-5">
            <Image
              src={userImg}
              alt="user"
              width={80}
              height={100}
              className="border-2 border-2xl object-cover"
            />
            <div>
              <p className="text-white text-xl font-bold ">Priyanka Das Dipa</p>
              <p className="text-white font-bold ">{blogDetails?.date}</p>
            </div>
          </div>

          <div>
            <ul className="flex items-center justify-center text-white gap-5">
              <li>
                <FaFacebook className="text-4xl" />
              </li>
              <li>
                <FaGithub className="text-4xl" />
              </li>
              <li>
                <ImLinkedin className="text-4xl" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <Image
            width={800}
            height={500}
            src={blogDetails?.image}
            alt={blogDetails?.title}
            className="border border-white rounded-md bg-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-left text-white py-5">
            <p className="text-left px-0 md:px-24  text-base font-semibold">
              <span className="text-xl font-bold">Introduction: </span>
              {blogDetails?.introduction}
            </p>
            <ul className=" px-0 md:px-24 py-5 text-left list-disc text-base font-semibold">
              {blogDetails?.values?.map((point, index) => (
                <li key={index}> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
