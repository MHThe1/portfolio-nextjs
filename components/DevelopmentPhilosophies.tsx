"use client";

import React from "react";

import { philosophies } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const DevelopmentPhilosophies = () => {
  return (
    <section id="philosophies" className="py-20">
      <h1 className="heading">
        Development and Desgin
        <span className="text-purple"> philosophies</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={philosophies}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPhilosophies;