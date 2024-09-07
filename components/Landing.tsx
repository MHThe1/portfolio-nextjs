"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TypewriterEffect from "./TypewriterEffect";
import { Button } from "@/components/ui/button";
import BackgroundGrid from "./ui/BackgroundGrid";

export default function Landing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <BackgroundGrid />
        <div className="relative z-10 py-12 container mx-auto px-4 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            <motion.div
              className="col-span-1 md:col-span-3 flex justify-center md:order-last order-first md:pl-60 mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/myDp.png"
                alt="Mehedi Hasan Tanvir"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                className="max-h-[250px] md:max-h-[450px]"
              />
            </motion.div>

            <motion.div
              className="col-span-1 md:col-span-4 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-black dark:text-white">
                Hi There!{" "}
                <span
                  role="img"
                  aria-label="wave"
                  className="wave text-xl inline-block animate-waving-hand"
                >
                  👋🏻
                </span>
              </h1>
              <h1 className="text-2xl sm:text-5xl font-bold md:mb-1 text-black dark:text-white">
                I&apos;m{" "}
                <strong className="text-purple-400">Mehedi Hasan Tanvir</strong>
              </h1>
              <div className="flex justify-center md:justify-start">
                <TypewriterEffect />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Passionate developer with a love for creating innovative
                solutions with a background in both frontend and backend
                technologies, I strive to create seamless, user-centric
                applications that make a difference.
              </p>
              <div className="mt-8 flex flex-row justify-center md:justify-start gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple-400 text-black-100 dark:text-white hover:bg-black hover:dark:bg-red-600 hover:text-primary"
                  style={{ borderRadius: "0.60rem" }}
                  onClick={() =>
                    (window.location.href = "mailto:mehedihtanvir@gmail.com")
                  }
                >
                  <span className="relative z-10">Email Me</span>
                  <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple-400 text-black-100 dark:text-white hover:bg-black hover:dark:bg-red-600 hover:text-primary"
                  style={{ borderRadius: "0.60rem" }}
                  onClick={() =>
                    window.open("https://github.com/MHThe1", "_blank")
                  }
                >
                  <span className="relative z-10">GitHub</span>
                  <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
