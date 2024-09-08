"use client";

import React, { useState } from "react";
import { projects } from "@/data";
import Link from "next/link";
import BackgroundGrid from "./ui/BackgroundGrid";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: { icon: string; name: string }[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isGithubLink = project.link.includes("github.com");
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const handleIconInteraction = (index: number) => {
    if (activeIcon === index) {
      setActiveIcon(null);
    } else {
      setActiveIcon(index);
    }
  };

  return (
    <Link href={project.link} className="block">
      <div className="relative group bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105">
        <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          {project.des}
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-between mt-7 mb-3 gap-4">
          <div className="flex items-center flex-wrap" onClick={(e) => e.preventDefault()}>
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                onClick={() => handleIconInteraction(index)}
                onMouseEnter={() => setActiveIcon(index)}
                onMouseLeave={() => setActiveIcon(null)}
                className={`border border-gray-300 dark:border-white/[0.2] rounded-full bg-gray-200 dark:bg-gray-400/20 w-14 h-14 lg:w-10 lg:h-10 flex justify-center items-center relative transition-all duration-300 hover:z-10 hover:scale-110 cursor-pointer mb-2 lg:mb-0`}
                style={{ marginLeft: index === 0 ? '0' : '-10px' }}
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={32}
                  height={32}
                  className="p-2 scale-150 lg:scale-100"
                />
                {activeIcon === index && (
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
                    {icon.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center scale-110 lg:scale-100 bg-gray-200 dark:bg-gray-400/20 rounded-full px-4 py-2 hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
            <p className="text-sm lg:text-base text-purple-600 dark:text-purple-400">
              {isGithubLink ? "View GitHub Repo" : "Visit Live Site"}
            </p>
            <FaLocationArrow className="ml-2" color="#CBACF9" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const RecentProjects: React.FC = () => {
  return (
    <section id="projects" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 pt-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Recent <span className="text-purple-400">Projects</span>
          </h1>
        </div>

        <BackgroundGrid />
        <div className="relative z-10 py-12 container mx-auto px-4">
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;