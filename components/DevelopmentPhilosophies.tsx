"use client";

import React from "react";

import { philosophies } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import BackgroundGrid from "./ui/BackgroundGrid";

const DevelopmentPhilosophies = () => {
  return (
    <section id="philosophies" className="pt-16 md:pt-20 bg-transparent">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 py-8">
          <h1 className="text-4xl font-bold text-center">
            Dev <span className="text-purple-400">Philosophies</span>
          </h1>
        </div>

        <BackgroundGrid />

        <div className="relative z-10 container mx-auto px-4">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={philosophies}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPhilosophies;
