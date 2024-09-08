"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import BackgroundGrid from "./ui/BackgroundGrid";
import Image from "next/image";

const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-white/[0.1] p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

const SkillIcon = ({ name }: { name: string }) => {
  const iconMap: { [key: string]: string } = {
    Python: "/icons/python.svg",
    "C++": "/icons/c-plusplus.svg",
    C: "/icons/c.svg",
    JavaScript: "/icons/javascript.svg",
    TypeScript: "/icons/typescript.svg",
    NumPy: "/icons/numpy.svg",
    Django: "/icons/django.svg",
    Flask: "/icons/flask.svg",
    "Django REST": "/icons/django-rest.svg",
    NodeJs: "/icons/nodejs.svg",
    React: "/icons/react.svg",
    NextJs: "/icons/nextjs.svg",
    TailwindCSS: "/icons/tailwindcss.svg",
    FramerMotion: "/icons/framer-motion.svg",
    MaterialUI: "/icons/material-ui.svg",
    HTML5: "/icons/html-5.svg",
    CSS3: "/icons/css-3.svg",
    MySQL: "/icons/mysql.svg",
    PostgreSQL: "/icons/postgresql.svg",
    VSCode: "/icons/visual-studio-code.svg",
    GitHub: "/icons/github.svg",
    Vercel: "/icons/vercel.svg",
    Netlify: "/icons/netlify.svg",
    Heroku: "/icons/heroku.svg",
  };

  return (
    <Image
      src={iconMap[name] || "/icons/default.svg"}
      alt={name}
      width={32}
      height={32}
      className="mr-2 inline-block"
    />
  );
};

export default function Intro() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "C++", "C", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Django", "Django REST", "Flask", "NodeJs"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "NextJs",
        "TailwindCSS",
        "FramerMotion",
        "MaterialUI",
        "HTML5",
        "CSS3",
      ],
    },
    { category: "Databases", items: ["MySQL", "PostgreSQL"] },
    {
      category: "Tools",
      items: ["VSCode", "GitHub", "Vercel", "Netlify", "Heroku"],
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 pt-20">
          <h1 className="text-4xl font-bold text-center text-black dark:text-white">
            Intro to <span className="text-purple-400">MHThe1</span>
          </h1>
        </div>

        <BackgroundGrid reverse={true} />

        <div className="relative z-10 py-12 container mx-auto px-4">
          <BentoGrid>
            <BentoGridItem className="lg:col-span-2 lg:row-span-2">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Skills
              </h2>
              <div className="space-y-4">
                <div className="mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {skills.slice(0, 3).map((skillSet, index) => (
                      <div
                        key={index}
                        className="bg-gray-200 dark:bg-gray-800 p-4"
                        style={{ borderRadius: "0.60rem" }}
                      >
                        <h4 className="font-medium text-purple-600 dark:text-purple-300 mb-2">
                          {skillSet.category}
                        </h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2 gap-2">
                          {skillSet.items.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center">
                              <SkillIcon name={skill} />
                              <span className="ml-2">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div
                      className="bg-gray-200 dark:bg-gray-800 p-4"
                      style={{ borderRadius: "0.60rem" }}
                    >
                      <h4 className="font-medium text-purple-600 dark:text-purple-300 mb-2 md:hidden">
                        Databases
                      </h4>
                      <h4 className="font-medium text-purple-600 dark:text-purple-300 mb-2 hidden md:block">
                        Databases & Tools
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2 gap-2">
                        {skills[3].items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center">
                            <SkillIcon name={skill} />
                            <span className="ml-2">{skill}</span>
                          </li>
                        ))}
                      </ul>
                      {/* <h4 className="font-medium text-purple-600 dark:text-purple-300 my-2 hidden md:block">
                        Tools & Others
                      </h4> */}
                      <hr className="my-3 border-t-2 border-gray-300 dark:border-gray-700 border-dotted shadow-sm w-3/4 mx-auto hidden md:flex" />

                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2 gap-2">
                        {skills[4].items.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="items-center hidden md:flex"
                          >
                            <SkillIcon name={skill} />
                            <span className="ml-2">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="bg-gray-200 dark:bg-gray-800 p-4 md:hidden"
                      style={{ borderRadius: "0.60rem" }}
                    >
                      <h4 className="font-medium text-purple-600 dark:text-purple-300 mb-2">
                        Tools
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2 gap-2">
                        {skills[4].items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center">
                            <SkillIcon name={skill} />
                            <span className="ml-2">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </BentoGridItem>
            <BentoGridItem>
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Goals
              </h2>
              <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▹</span>
                  Master full-stack development
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▹</span>
                  Contribute to open-source projects
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▹</span>
                  Build scalable, user-centric applications
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">▹</span>
                  Explore AI and machine learning integration
                </li>
              </ul>
            </BentoGridItem>
            <BentoGridItem>
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Current Focus
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Diving deep into serverless architectures and exploring the
                potential of edge computing to create faster, more efficient web
                applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Experimenting with new UI/UX paradigms to enhance user
                engagement and accessibility across all devices.
              </p>
            </BentoGridItem>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
