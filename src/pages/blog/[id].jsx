// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const BlogDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch("/blogs.json")
//         .then((res) => res.json())
//         .then((data) => {
//           const foundBlog = data.find((item) => item.id === id);
//           setBlog(foundBlog);
//         });
//     }
//   }, [id]);

//   if (!blog) return <p className="text-center mt-10">Loading...</p>;
//   return (
//     <div className="container mx-auto p-6">
//       <Link href="/blog">
//         <button className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-md">
//           ← Back to Blog
//         </button>
//       </Link>
//       <Image
//         height={300}
//         width={300}
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-60 object-cover rounded-md"
//       />
//       <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
//       <p className="text-gray-600 mt-2">{blog.content}</p>
//     </div>
//   );
// };

// export default BlogDetails;

"use client";
import fs from "fs";
import path from "path";

const BlogDetails = ({ blog }) => {
  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <img
        src={blog?.image}
        alt={blog?.title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{blog?.title}</h1>
      <p className="text-gray-600 mt-2">{blog?.content}</p>
    </div>
  );
};

// ✅ Pre-generates paths for all blog posts
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const jsonData = fs.readFileSync(filePath);
  const blogs = JSON.parse(jsonData);

  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return { paths, fallback: false };
}

// ✅ Fetches blog data for a given ID
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const jsonData = fs.readFileSync(filePath);
  const blogs = JSON.parse(jsonData);

  const blog = blogs.find((blog) => blog.id === params.id);

  return { props: { blog } };
}

export default BlogDetails;
