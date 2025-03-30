"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Link from "@/components/link";

const Home: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-container px-4 flex flex-col gap-3 py-8`}
    >
      <Header />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={controls}
        className="flex flex-col gap-2 mt-4 mb-6"
      >
        <motion.div custom={0} className="mb-2">
          <p className="mb-1">
            Hi! This is Tyler 😌. I'm a data analyst at a telehealth clinic in NYC.<sup className="text-xs">1</sup> My background is in emergency medicine, where I worked as an EMT for several years until I became interested in software and ML. I graduated with a BA in philosophy in 2023 and am now finishing my MS in data science.<sup className="text-xs">2</sup> I'm a fan of {" "}
            <Link href="https://open.spotify.com/playlist/5WRxTRXvEL2njjY9oRWhUc" title="Techno playlist">
            techno
            </Link>, love espresso, and am working on a planted aquarium 🪷.
          </p>
          
          <div className="text-xs mt-4 text-zinc-600 dark:text-zinc-400">
            <p className="mb-1"><sup>1</sup>  <Link href="https://www.ophelia.com/" title="Ophelia Health">Ophelia Health</Link>, I've had several roles, but have recently been leaning more technical.</p>
            <p><sup>2</sup> Undergrad was Cornell, Master's from Berkeley.</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={controls} custom={2}>
        <Projects />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Home;
