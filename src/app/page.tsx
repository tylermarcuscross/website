"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

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
        <motion.p custom={0} className="mb-2">
          Currently building data systems in healthcare. 
          Passionate about leveraging machine learning to solve complex, human-centered problems. 
        </motion.p>
        <motion.p custom={1}>
          When I'm not working with data, I'm an enthusiastic volleyball player 
          and music listener.
        </motion.p>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={controls} custom={2}>
        <Projects />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Home;
