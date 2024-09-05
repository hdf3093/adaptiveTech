import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Github, Linkedin, Mail } from 'lucide-react'

export default function ProjectsPage() {
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
              <li><Link href="/projects" className="text-[#90EE90] font-medium">Projects</Link></li>

              <li><Link href="/about" className="hover:text-[#90EE90] transition-colors font-medium">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Exploring the intersection of physical computing and adaptive technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/placeholder.png" 
              alt="Adaptive Game Controller" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Adaptive Game Controller</h2>
              <p className="text-gray-600 mb-4">A customizable controller designed to make gaming accessible for individuals with limited mobility.</p>
              <Link href="/projects/adaptive-game-controller" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/placeholder.png" 
              alt="Smart Home Accessibility System" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Smart Home Accessibility System</h2>
              <p className="text-gray-600 mb-4">An IoT-based system that enhances home automation for individuals with disabilities.</p>
              <Link href="/projects/smart-home-accessibility" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/placeholder.png" 
              alt="AI-Powered Assistive Communication Device" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">AI-Powered Assistive Communication Device</h2>
              <p className="text-gray-600 mb-4">A device that uses machine learning to predict and suggest words, aiding communication for non-verbal individuals.</p>
              <Link href="/projects/ai-assistive-communication" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/placeholder.png" 
              alt="Wearable Navigation Aid for the Visually Impaired" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Wearable Navigation Aid</h2>
              <p className="text-gray-600 mb-4">A haptic feedback system that assists visually impaired individuals in navigating their environment.</p>
              <Link href="/projects/wearable-navigation-aid" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
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