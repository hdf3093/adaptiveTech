import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Github, Linkedin, Mail, Calendar, User } from 'lucide-react'

export default function BlogPage() {
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
              <li><Link href="/blog" className="text-[#90EE90] font-medium">Blog</Link></li>
              <li><Link href="/projects" className="hover:text-[#90EE90] transition-colors font-medium">Projects</Link></li>

              <li><Link href="/about" className="hover:text-[#90EE90] transition-colors font-medium">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Insights and experiences in physical computing and adaptive technology.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/icon.png" 
              alt="Lynn Valley" 
              width={800} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/lynn" className="hover:text-[#90EE90] transition-colors">
                  Lynn Valley, Abilitease, EquipMeOT, Terri Bryant, Activity Analysis
                </Link>
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">September 10th, 2024</span>
                <User className="w-4 h-4 mr-2" />
                <span>Hannah Foppoli Hernández</span>
              </div>
              <p className="text-gray-600 mb-4">
              In this blog post, I explore Lynn’s innovative use of adaptive technologies, highlighting how they help with everyday tasks like computer use, jar opening, and putting on socks. I also review adaptive products from Abilitease and EquipMeOT, and discuss makeup artist Terri Bryant’s approach to designing tools for those with Parkinson’s. These insights reveal the creative solutions that improve daily life for individuals with disabilities.

              </p>
              <Link href="/blog/lynn" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Read more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </article>


          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/90EE90.png" 
              alt="90EE90 color light green img" 
              width={800} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/ms" className="hover:text-[#90EE90] transition-colors">
                Exploring Accessibility: MS, Adaptive Gaming, and Inclusive Tech Solutions
                </Link>
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">September 18th, 2024</span>
                <User className="w-4 h-4 mr-2" />
                <span>Hannah Foppoli Hernández</span>
              </div>
              <p className="text-gray-600 mb-4">An exploration of how Multiple Sclerosis impacts individuals, alongside reviews of adaptive gaming technology and inclusive solutions from Microsoft and AbleGamers.
              </p>
              <Link href="/blog/ms" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Read more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src="/90EE90.png" 
              alt="90EE90 color light green img" 
              width={800} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                <Link href="/blog/925" className="hover:text-[#90EE90] transition-colors">
                Beyond Inspiration: Ableism, Accessibility, and the Realities of Disability Representation in Tech and Society                </Link>
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">September 25th, 2024</span>
                <User className="w-4 h-4 mr-2" />
                <span>Hannah Foppoli Hernández</span>
              </div>
              <p className="text-gray-600 mb-4">This blog post delves into the pervasive issue of ableism, challenging the harmful narratives that portray disabled individuals as mere sources of inspiration. It explores the implications of "inspiration porn," accessibility in technology, and recent advancements like LEGO Braille Bricks, while emphasizing the importance of inclusive design and genuine representation. 
              </p>
              <Link href="/blog/925" className="inline-flex items-center text-[#90EE90] hover:underline font-medium">
                Read more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </article>

        
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