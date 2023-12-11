import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ imgUrl, title, description, liveLink, gitHubLink }) => {
  return (
    <div className="card card-compact w-96 rounded-xl shadow-3xl ">
      <div
        className="h-72  w-full rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center gap-2 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={liveLink}
            className="h-14 w-14 border-2 relative rounded-full border-[#9e64d5] hover:border-white "
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ecf5ef] m-2 cursor-pointer"></CodeBracketIcon>
            <span className="hidden group-hover:block text-[10px] text-center text-white">
              View Live Link
            </span>
          </Link>
          <Link
            href={gitHubLink}
            className="h-14 w-14 border-2 relative rounded-full border-[#9e64d5] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ecf5ef] m-2 cursor-pointer"></EyeIcon>
            <span className="hidden group-hover:block text-[10px] text-center text-white">
              View GitHub
            </span>
          </Link>
        </div>
      </div>

      <div className="text-white card-body rounded-b-xl text-left bg-[#181818] py-6 px-2">
        <h5 className="card-title">{title}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
