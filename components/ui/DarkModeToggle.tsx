"use client";

import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => (
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
);

export default DarkModeToggle;
