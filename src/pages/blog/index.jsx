"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <section className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-5 md:px-12 ">
      <div className="pt-28 pb-28">
        <h1 className="text-3xl font-bold text-slate-200 text-left mb-6">
          My Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-slate-800 shadow-lg rounded-lg p-4 h-[450px]"
            >
              <Image
                height={300}
                width={300}
                src={blog?.image}
                alt={blog?.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <h2 className="text-xl text-slate-100 font-semibold mt-4">
                {blog?.title}
              </h2>
              <p className="text-slate-100 mt-2">{blog?.description}</p>
              <Link href={`/blog/${blog?.id}`}>
                <button className="mt-4 px-4 py-2 border border-slate-100 text-slate-100 rounded-md">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
