'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterEffect from "./TypewriterEffect"
import { Button } from "@/components/ui/button";

export default function Landing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Hi There!{" "}
              <span
                role="img"
                aria-label="wave"
                className="wave text-2xl inline-block animate-waving-hand"
              >
                👋🏻
              </span>
            </h1>

            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              I'm <strong className="text-purple">Mehedi Hasan Tanvir</strong>
            </h1>

            <div className="mt-6 flex justify-center md:justify-start">
              <TypewriterEffect />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple text-black-100 hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = 'mailto:mehedihtanvir@gmail.com'}
              >
                <span className="relative z-10">Email Me</span>
                <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple text-black-100 hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/MHThe1', '_blank')}
              >
                <span className="relative z-10">GitHub</span>
                <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/myDp.png"
              alt="Mehedi Hasan Tanvir"
              className="max-h-[450px] object-contain"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}