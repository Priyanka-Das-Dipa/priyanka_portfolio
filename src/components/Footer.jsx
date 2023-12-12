"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedinIcon from "../../public/image/linkedin-icon.svg";
import GithubIcon from "../../public/image/github-icon.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#353434] text-neutral-content">
        <aside>
          <p>
            Priyanka Das Dipa
            <br />
            @2023 - All Rights Are Reserved by Priyanka
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://github.com/Priyanka-Das-Dipa">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/priyanka-das-dipa-58327b285/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>

            <Link href="https://www.facebook.com/priyankadas.dipa.7/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
