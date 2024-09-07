'use client'

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { HiX } from "react-icons/hi"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { FaKeyboard } from "react-icons/fa"
import KeyboardShortcuts from "./KeyboardShortcuts";

interface NavItem {
  name: string
  link: string
}

interface ActionCenterProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
  navItems: NavItem[]
  activeSection: string
}

export default function ActionCenter({
  isOpen,
  onClose,
  isDarkMode,
  toggleDarkMode,
  navItems,
  activeSection,
}: ActionCenterProps) {
  return (
    <AnimatePresence>
      {isOpen && (
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
              onClick={onClose}
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
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <KeyboardShortcuts />
        </motion.div>
      )}
    </AnimatePresence>
  )
}