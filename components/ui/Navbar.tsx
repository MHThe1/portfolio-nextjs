"use client";

import React, { useState, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import ActionCenter from "./ActionCenter";
import NavLinks from "./NavLinks";

interface NavItem {
  name: string;
  link: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

export default function NavBar({ navItems }: NavBarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isActionCenterOpen, setIsActionCenterOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollY } = useScroll();
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "false") {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.link.slice(1))
      );
      let currentSection = "";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      scaleX.set(
        latest / (document.documentElement.scrollHeight - window.innerHeight)
      );
    });
  }, [scrollY, scaleX]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "0" || e.key === "q" || e.key === "Q") {
        setIsActionCenterOpen(!isActionCenterOpen);
      } else if (e.key === "Escape") {
        setIsActionCenterOpen(false);
      } else if (e.key === "d" || e.key === "D") {
        setIsDarkMode(!isDarkMode);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isActionCenterOpen, isDarkMode]);

  const toggleActionCenter = () => setIsActionCenterOpen(!isActionCenterOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 text-gray-800 dark:text-white shadow-lg transition-all duration-300 ${
          activeSection && activeSection !== "home"
            ? "border-b border-gray-300 border-opacity-20 bg-white dark:bg-black-100 backdrop-blur-sm"
            : "border-b border-transparent"
        }`}
        style={{
          transition: "border-color 0.3s ease, border-opacity 0.3s ease",
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                    activeSection === "" || activeSection === "home"
                      ? "bg-purple-500 rounded-md text-white"
                      : "dark:bg-gray-900 bg-gray-300 dark:text-gray-50 text-black"
                  }`}
                >
                  /
                </div>

                <span className="text-xl font-bold">
                  <span
                    className={`${isDarkMode ? "text-white" : "text-black"} ${
                      activeSection === "home" ? "text-purple-400" : ""
                    }`}
                  >
                    mh
                  </span>
                  <span className="text-purple-400">the1</span>
                </span>
              </Link>
              <NavLinks navItems={navItems} activeSection={activeSection} />
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/mhthe1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-300 hover:dark:text-gray-50 hover:scale-125 transition-transform duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mehedi-hasan-tanvir-5507b0228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-300 hover:dark:text-gray-50 hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <button
                onClick={toggleActionCenter}
                className="px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 bg-gray-950 dark:bg-gray-700 bg-opacity-10 dark:text-white text-black font-medium hover:bg-purple-600 flex items-center space-x-2"
              >
                <TbLayoutDashboardFilled size={24} />
                <span className="hidden lg:inline">Quick Access</span>{" "}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="h-1 bg-purple-600 origin-left"
          style={{ scaleX }}
        />
      </nav>

      <ActionCenter
        isOpen={isActionCenterOpen}
        onClose={() => setIsActionCenterOpen(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}
