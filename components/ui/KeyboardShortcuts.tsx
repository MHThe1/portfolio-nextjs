import { motion } from "framer-motion"
import { FaKeyboard } from "react-icons/fa"

export default function KeyboardShortcuts() {
  return (
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
  )
}