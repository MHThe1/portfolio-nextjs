"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaKeyboard } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";

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
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode === "true");
    }
  }, []);

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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 text-white bg-opacity-30 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } ${
          activeSection && activeSection !== "home"
            ? "border-b border-gray-300 border-opacity-50"
            : ""
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 ${
                    activeSection === "" || activeSection === "home"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-800 text-gray-50"
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
              <div className="hidden md:flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.link.slice(1)
                        ? "text-gray-100 bg-purple-600"
                        : `${
                            isDarkMode ? "text-gray-100" : "text-gray-800"
                          } hover:bg-purple-600 hover:text-gray-100`
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/mhthe1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mehedi-hasan-tanvir-5507b0228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
              <button
                onClick={toggleActionCenter}
                className="px-4 py-2 rounded-full bg-gray-300 bg-opacity-10 text-white font-medium hover:bg-purple-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <TbLayoutDashboardFilled size={24} />
                <span className="hidden md:inline">Quick Access</span>{" "}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="h-1 bg-purple-600 origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Action Center */}
      <AnimatePresence>
        {isActionCenterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 w-full h-full bg-opacity-[0.98] flex md:block ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-full md:w-80 h-full md:h-auto md:absolute md:top-0 md:right-0  p-6 overflow-y-auto`}
            >
              <button
                onClick={toggleActionCenter}
                className="absolute top-8 right-4 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-500 bg-opacity-25 text-gray-200 hover:text-gray-700"
              >
                <HiX size={24} />
              </button>

              <div className="space-y-6 mt-14">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Action Center</h2>
                  <motion.button
                    onClick={toggleDarkMode}
                    className={`w-32 h-20 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-purple-100"
                    } transition-colors duration-300 overflow-hidden flex flex-col p-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: isDarkMode ? 360 : 0 }}
                      transition={{ duration: 1 }}
                      className="flex items-center justify-center"
                    >
                      {isDarkMode ? (
                        <MdDarkMode size={24} className="text-purple-600" />
                      ) : (
                        <MdLightMode size={24} className="text-yellow-400" />
                      )}
                    </motion.div>

                    <span className="text-xs mt-auto">
                      Dark Mode: {isDarkMode ? "On" : "Off"}
                    </span>
                  </motion.button>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.link}
                          className={`block px-3 py-2 rounded-md text-sm font-medium border border-dotted border-gray-300 border-opacity-10 transition-colors duration-300 ${
                            activeSection === item.link.slice(1)
                              ? "bg-purple-500 text-white"
                              : `${
                                  isDarkMode
                                    ? "text-gray-300 hover:bg-purple-400"
                                    : "text-gray-700 hover:bg-purple-200"
                                }`
                          }`}
                          onClick={toggleActionCenter}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute bottom-20 left-20 text-sm text-primary p-4"
            >
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <FaKeyboard size={24} className="mr-2" />
                Keyboard Shortcuts
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="font-medium">Open Quick Access:</span>
                  <kbd className="px-3 py-1 rounded bg-gray-700 text-gray-300 text-sm">
                    Q
                  </kbd>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-medium">Close Quick Access:</span>
                  <kbd className="px-3 py-1 rounded bg-gray-700 text-gray-300 text-sm">
                    ESC
                  </kbd>
                  <span className="mx-1">or</span>
                  <kbd className="px-3 py-1 rounded bg-gray-700 text-gray-300 text-sm">
                    Q
                  </kbd>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-medium">Toggle Dark Mode:</span>
                  <kbd className="px-3 py-1 rounded bg-gray-700 text-gray-300 text-sm">
                    D
                  </kbd>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
