import React from "react"
import { experiences } from "@/data"
import { Button } from "./ui/moving-border"
import BackgroundGrid from "./ui/BackgroundGrid"
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experiences" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 pt-20">
          <h1 className="text-4xl font-bold text-center text-black dark:text-white">
            <span className="text-purple-400">Experience</span>
          </h1>
        </div>

        <BackgroundGrid />

        <div className="relative z-10 py-12 container mx-auto px-4">
          <div className="w-full mt-4 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {experiences.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <div className="relative w-16 md:w-20 lg:w-32">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.thumbnail}
                        alt={card.thumbnail}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-gray-700 dark:text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}