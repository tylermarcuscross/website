import React from "react";
import Link from "@/components/link";
import { FaGithubAlt, FaRegCopyright } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Image from "next/image";

const Footer: React.FC = () => {
  const yearShort = "'" + new Date().getFullYear().toString().slice(-2);
  
  return (
    <div className="prose">
      <hr />
      <footer className="flex justify-between mt-3">
        <span className="flex items-center">
          <FaRegCopyright className="mr-1" /> 
          <Image 
            src="/icon.png" 
            alt="Tyler Cross" 
            width={18} 
            height={18} 
            className="inline-block dark:invert-0 invert" 
          /> 
          <span className="ml-2">{yearShort}</span>{" "}
        </span>
        <div className="flex gap-4">
          <Link href="mailto:tyler.cross@me.com" title="email">
            <IoMdMailOpen />
          </Link>

          <Link href="https://github.com/tylermarcuscross" title="github">
            <FaGithubAlt />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
