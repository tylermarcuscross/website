import React from "react";
import Link from "@/components/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-between mt-3">
        <span>
          &copy; tyler cross {year} |{" "}
          <Link
            href="https://github.com/tylermarcuscross/website"
            className="dark:text-zinc-300 text-zinc-800"
            title="source"
          >
            source
          </Link>
        </span>
        <div className="flex gap-4">
          <Link href="mailto:hi@tyler.cross.me" title="email">
            <IoMdMailOpen />
          </Link>

          <Link href="https://github.com/tylermarcuscrosss" title="github">
            <FaGithubAlt />
          </Link>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
