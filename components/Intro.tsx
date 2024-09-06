"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
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
        "rounded-xl border border-white/[0.1] p-6 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden",
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
    HTML5: "/icons/html-5.svg",
    CSS3: "/icons/css-3.svg",
    MySQL: "/icons/mysql.svg",
    PostgreSQL: "/icons/postgresql.svg",
  };

  return (
    <img
      src={iconMap[name] || "/icons/default.svg"}
      alt={name}
      className="w-8 h-8 mr-2 inline-block"
    />
  );
};

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      ></div>
    </div>
  );
};

export default function Grid() {
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
      items: ["React", "NextJs", "TailwindCSS", "HTML5", "CSS3"],
    },
    { category: "Database", items: ["MySQL", "PostgreSQL"] },
  ];

  return (
    <section id="about" className="pt-16 md:pt-20">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 py-8">
          <h1 className="text-4xl font-bold text-center">
            About <span className="text-purple-500">Me</span>
          </h1>
        </div>

        <BackgroundGrid />

        <div className="relative z-10 py-12 container mx-auto px-4">
          <BentoGrid>
            <BentoGridItem className="md:col-span-2 md:row-span-2">
              <h2 className="text-3xl font-semibold mb-4 text-purple-500">Intro</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Passionate developer with a love for creating innovative
                  solutions. Always learning and exploring new technologies to push
                  the boundaries of what's possible in web development.
                </p>
                <p className="text-gray-300">
                  With a background in both frontend and backend technologies, I
                  strive to create seamless, user-centric applications that make a
                  difference.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-500">
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skillSet, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-300 mb-2">
                          {skillSet.category}
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {skillSet.items.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center">
                              <SkillIcon name={skill} />
                              <span className="ml-2">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BentoGridItem>
            <BentoGridItem>
              <h2 className="text-3xl font-semibold mb-4 text-purple-500">Goals</h2>
              <ul className="list-none text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">▹</span>
                  Master full-stack development
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">▹</span>
                  Contribute to open-source projects
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">▹</span>
                  Build scalable, user-centric applications
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">▹</span>
                  Explore AI and machine learning integration
                </li>
              </ul>
            </BentoGridItem>
            <BentoGridItem>
              <h2 className="text-3xl font-semibold mb-4 text-purple-500">
                Current Focus
              </h2>
              <p className="text-gray-300 mb-2">
                Diving deep into serverless architectures and exploring the
                potential of edge computing to create faster, more efficient web
                applications.
              </p>
              <p className="text-gray-300">
                Experimenting with new UI/UX paradigms to enhance user engagement
                and accessibility across all devices.
              </p>
            </BentoGridItem>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}