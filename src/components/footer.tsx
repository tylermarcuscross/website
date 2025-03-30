import React from "react";
import Link from "@/components/link";
import { FaGithubAlt, FaCopyright } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer: React.FC = () => {
  const yearShort = "'" + new Date().getFullYear().toString().slice(-2);
  const { theme } = useTheme();
  
  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-between mt-3">
        <span className="flex items-center">
          <FaCopyright className="mr-1" /> 
          <Image 
            src="/icon.png" 
            alt="Tyler Cross" 
            width={20} 
            height={20} 
            className="inline-block dark:invert-0 invert" 
          /> 
          <span className="ml-2">{yearShort}</span>{" "}
        </span>
        <div className="flex gap-4">
          <Link href="mailto:hi@tyler.cross.me" title="email">
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
