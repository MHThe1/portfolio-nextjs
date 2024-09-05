'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

interface NavItem {
  name: string
  link: string
}

interface NavBarProps {
  navItems: NavItem[]
}

export default function NavBar({ navItems }: NavBarProps) {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.link.slice(1)))
      let currentSection = ''

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  useEffect(() => {
    return scrollY.onChange((latest) => {
      scaleX.set(latest / (document.documentElement.scrollHeight - window.innerHeight))
    })
  }, [scrollY, scaleX])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-300 ${
                  activeSection === '' || activeSection === 'home' ? 'bg-purple text-white' : 'bg-gray-800 text-gray-50'
                }`}
              >
                /
              </div>
              <span className="text-xl font-bold">
                <span className={`text-white ${activeSection === 'home' ? 'text-purple' : ''}`}>mh</span>
                <span className="text-purple">the1</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-50 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.link.slice(1)
                    ? 'text-gray-900 bg-purple'
                    : 'text-gray-100 hover:bg-purple hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white bg-opacity-90 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center mt-16 p-4 space-y-4 bg-gray-800 rounded-b-lg shadow-lg">
          <div className="flex justify-end w-full p-4">
            <button
              className="text-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`block px-4 py-2 text-lg font-medium w-full text-center transition-colors duration-300 ${
                  activeSection === item.link.slice(1)
                    ? 'text-gray-900 bg-purple'
                    : 'text-gray-100 hover:bg-purple hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="h-1 bg-blue-600 origin-left"
        style={{ scaleX }}
      />
    </nav>
  )
}
