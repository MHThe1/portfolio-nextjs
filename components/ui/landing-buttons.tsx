'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingButtons() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple-400 text-white hover:bg-black hover:dark:bg-purple-600 hover:text-white"
          style={{ borderRadius: "0.60rem" }}
          onClick={() => window.location.href = "mailto:mehedihtanvir@gmail.com"}
        >
          <span className="relative z-10">Email Me</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="group relative overflow-hidden transition-all duration-300 ease-out bg-purple-400 text-white hover:bg-black hover:dark:bg-purple-600 hover:text-white"
          style={{ borderRadius: "0.60rem" }}
          onClick={() => window.open("https://github.com/MHThe1", "_blank")}
        >
          <span className="relative z-10">GitHub</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </Button>
      </motion.div>
    </>
  )
}