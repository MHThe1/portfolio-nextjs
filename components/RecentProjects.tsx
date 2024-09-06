"use client";

import React from "react";
import { projects } from "@/data";
import Link from "next/link";
import BackgroundGrid from "./ui/BackgroundGrid";

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
    <div className="relative group bg-gray-900 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
      <p className="text-gray-300 mb-4 flex-grow">{project.des}</p>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex -space-x-2">
          {project.iconLists.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Technology ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-gray-800"
            />
          ))}
        </div>
        <Link
          href={project.link}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          View Project
        </Link>
      </div>
    </div>
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