"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading mt-10">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-2 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center mt-10 h-[25rem] sm:h-[25rem] md:h-[35rem] lg:h-[35rem] xl:h-[35rem] 2xl:h-[35rem]"
          >
            <PinContainer href={link} title={title}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 abosolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4 mb-2">
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal 
                font-light text-sm line-clamp-2"
              >
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                      flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
