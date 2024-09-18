import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-[#90EE90] transition-colors">
            Hannah Foppoli Hernández
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-[#90EE90] transition-colors font-medium">Home</Link></li>
              <li><Link href="/blog" className="hover:text-[#90EE90] transition-colors font-medium">Blog</Link></li>
              <li><Link href="/projects" className="hover:text-[#90EE90] transition-colors font-medium">Projects</Link></li>
              <li><Link href="/about" className="text-[#90EE90] font-medium">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image 
                src="/90EE90.png" 
                alt="Hannah Foppoli Hernández" 
                width={400} 
                height={400} 
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600 mb-4">
                Hello! I'm Hannah Foppoli Hernández, a passionate student and innovator in the field of physical computing and adaptive technology. Currently pursuing my degree at New York University, I'm dedicated to creating technology for social good.
              </p>
              <p className="text-gray-600 mb-4">
                My journey in this field began with a simple desire to make technology more accessible and intuitive for everyone, regardless of their physical abilities. This passion has led me to explore various aspects of adaptive technology by finding a course at NYU ITP encompassing all of these goals.
              </p>
              <p className="text-gray-600 mb-4">
                When I'm not tinkering with circuits or coding, you can find me mixing music, reading William Blake, or practicing Japanese.
              </p>
              <div className="flex space-x-4 mb-6">
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
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>Physical Computing</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>Adaptive Technology</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>Arduino & Raspberry Pi</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>3D Modeling & Printing</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>Web Development</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#90EE90]" />
                  <span>User-Centered Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">New York University</h3>
            <p className="text-gray-600 mb-2"> Gallatin School of Individualized Study</p>
            <p className="text-gray-600 mb-2">BA in Ethical and Accesible Design in Human-Computer Interaction</p>
            <p className="text-gray-600 mb-2">Minor in Computer Science</p>

            <p className="text-gray-600">Expected Graduation: May 2025</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              I'm always excited to collaborate on new projects or discuss innovations in adaptive technology. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
            </p>
            <a href="mailto:hdf3093@nyu.edu" className="inline-flex items-center bg-[#90EE90] text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-[#7CCD7C] transition-colors">
              Contact Me
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
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