"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "./link";
import { LuMoon } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="link"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="flex items-center space-x-2">
        <div className="flex flex-col space-y-1 text-sm leading-none">
          <Avatar>
            <AvatarImage src="https://github.com/tylermarcuscross.png" />
          </Avatar>
          <Link href="/" className="text-lg font-bold" title="home">
            Tyler Cross
          </Link>
          <div className="flex gap-1">
            <Link
              href="/blog"
              className="dark:text-zinc-300 text-zinc-800"
              title="blog"
            >
              blog
            </Link>

            <Link
              href="/resume.pdf"
              className="dark:text-zinc-300 text-zinc-800"
              target="_blank"
              title="resume"
            >
              resume
            </Link>
          </div>
        </div>
      </span>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
