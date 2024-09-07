"use client";

import React from "react";
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
  iconLists: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={project.link}
      className="text-purple-400 hover:text-purple-300 transition-colors"
    >
      <div className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:rotate-3">
        <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
        <p className="text-gray-300 mb-4 flex-grow">{project.des}</p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[0.2] rounded-full bg-gray-400/20 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-[-10px]"
              >
                <Image
                  src={icon}
                  alt={`Icon ${index}`}
                  width={32}
                  height={32}
                  className="p-2"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center bg-gray-400/20 rounded-full px-4 py-2 hover:bg-white/80 hover:scale-105 transition-all duration-300 ease-in-out">
            <p className="text-sm lg:text-base text-purple-400">
              Check Live Site
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
    <section id="projects" className="pt-16 md:pt-20 bg-transparent">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 py-8">
          <h1 className="text-4xl font-bold text-center">
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
