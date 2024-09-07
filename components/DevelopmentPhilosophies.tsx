'use client'

import React from "react"
import { philosophies } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import BackgroundGrid from "./ui/BackgroundGrid"

export default function DevelopmentPhilosophies() {
  return (
    <section id="philosophies" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 pt-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Dev <span className="text-purple-400">Philosophies</span>
          </h1>
        </div>

        <BackgroundGrid reverse={true} />

        <div className="relative z-10 container mx-auto px-4">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={philosophies}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}