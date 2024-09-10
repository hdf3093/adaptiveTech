'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function PersonalBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-[#90EE90] transition-colors">
            Hannah Foppoli Hernández
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li><Link href="/" className="block py-2 md:py-0 hover:text-[#90EE90] transition-colors font-medium" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/blog" className="block py-2 md:py-0 hover:text-[#90EE90] transition-colors font-medium" onClick={toggleMenu}>Blog</Link></li>
              <li><Link href="/projects" className="block py-2 md:py-0 hover:text-[#90EE90] transition-colors font-medium" onClick={toggleMenu}>Projects</Link></li>
              <li><Link href="/about" className="block py-2 md:py-0 hover:text-[#90EE90] transition-colors font-medium" onClick={toggleMenu}>About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#90EE90] to-[#66CDAA] text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Innovating in
                <span className="block text-white drop-shadow-md">Physical Computing</span>
                <span className="block">&amp; Adaptive Technology</span>
              </h1>
              <p className="text-xl mb-8 max-w-md">
                Exploring the intersection of hardware and accessibility to create impactful solutions.
              </p>
              <div className="flex space-x-4">
                <Link href="/projects" className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/blog" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-gray-800 transition-colors">
                  Read Blog
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-xl"></div>
                <Image 
                  src="/placeholder.png"
                  alt="Innovative Technology"
                  width={600}
                  height={300}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Blog Posts */}
        <div className="md:w-2/3">
          <article className="bg-white rounded-lg shadow-md p-6 mb-8 transition-shadow hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-[#90EE90] transition-colors">
              <Link href="/blog/adaptive-controller">Building an Adaptive Controller for Accessibility</Link>
            </h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nulla venenatis ipsum facilisis blandit. In egestas, massa sit amet euismod tincidunt, mauris nisi feugiat est, in vulputate est massa id lacus.</p>

            <Link href="/blog/adaptive-controller" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
              Read more <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 mb-8 transition-shadow hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-[#90EE90] transition-colors">
              <Link href="/blog/machine-learning-assistive-devices">Wearable Navigation Aid</Link>
            </h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nulla venenatis ipsum facilisis blandit. In egestas, massa sit amet euismod tincidunt, mauris nisi feugiat est, in vulputate est massa id lacus.</p>

            <Link href="/blog/machine-learning-assistive-devices" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
              Read more <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">About Me</h3>
            <p className="text-gray-600 mb-4">
              I'm a student passionate about using technology to solve real-world problems. 
              My current focus is on physical computing and adaptive technology, aiming to make 
              technology more accessible and inclusive.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/hdf3093" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#90EE90]" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hannah-foppoli-hern%C3%A1ndez-064081283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#90EE90]" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hdf3093@nyu.edu" className="text-gray-400 hover:text-[#90EE90]" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                <span>React.js & Next.js</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                <span>Arduino & Physical Computing</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                <span>Machine Learning</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                <span>3D Modeling & Printing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/adaptive-game-controller" className="text-gray-600 hover:text-[#90EE90] transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Adaptive Game Controller
                </Link>
              </li>
              <li>
                <Link href="/projects/smart-home-accessibility" className="text-gray-600 hover:text-[#90EE90] transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Wearable Navigation Aid
                </Link>
              </li>
              
            </ul>
          </div>
        </aside>
      </main>

      {/* Improved Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Hannah Foppoli Hernández</h2>
              <p className="text-gray-400 mb-4">Innovating at the intersection of physical computing and adaptive technology.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/hdf3093" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/hannah-foppoli-hern%C3%A1ndez-064081283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:hdf3093@nyu.edu" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#90EE90] transition-colors">Home</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-[#90EE90] transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-[#90EE90] transition-colors">Blog</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#90EE90] transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: hdf3093@nyu.edu</p>
              <p className="text-gray-400 mb-2">Location: New York, USA</p>
              <p className="text-gray-400">University: New York University</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hannah Foppoli Hernández. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}