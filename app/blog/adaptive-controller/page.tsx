import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Github, Linkedin, Mail, Calendar, User } from 'lucide-react'

export default function BlogPost() {
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
        <Link href="/blog" className="inline-flex items-center text-[#90EE90] hover:underline font-medium mb-8">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image 
            src="/placeholder.png" 
            alt="Building an Adaptive Controller for Accessibility" 
            width={1200} 
            height={600} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Building an Adaptive Controller for Accessibility</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">September 5th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <p>
                In the realm of gaming, accessibility has become an increasingly important topic. 
                As a student passionate about adaptive technology, I embarked on a project to create 
                a customizable controller that would make gaming more accessible for individuals with 
                limited mobility. This post details my journey from concept to creation, highlighting 
                the challenges faced and the solutions developed along the way.
              </p>
              <h2>The Concept</h2>
              <p>
                The idea for this project stemmed from conversations with gamers who have various 
                physical disabilities. Many expressed frustration with standard controllers that 
                didn't accommodate their specific needs. I realized that a one-size-fits-all approach 
                wasn't the answer; instead, a modular, customizable controller could provide the 
                flexibility required to address a wide range of accessibility needs.
              </p>
              <h2>Design and Prototyping</h2>
              <p>
                Using 3D modeling software, I designed a base unit that could accommodate various 
                input modules. The key was to create a system where buttons, joysticks, and other 
                controls could be easily swapped out or repositioned. After several iterations, I 
                settled on a design that used magnetic connections, allowing for easy customization 
                without the need for tools.
              </p>
              <h2>Arduino Integration</h2>
              <p>
                To bring the controller to life, I turned to Arduino. The Arduino Mega 2560 provided 
                the perfect balance of input/output pins and processing power. I wrote custom firmware 
                that could recognize different input modules and map them to standard controller outputs. 
                This approach ensured compatibility with a wide range of gaming systems.
              </p>
              <h2>3D Printing and Assembly</h2>
              <p>
                With the designs finalized, I used a 3D printer to create the controller's base and 
                various input modules. The printing process required careful calibration to ensure 
                that all parts fit together seamlessly. Assembly involved soldering connections for 
                the electronic components and testing each module extensively.
              </p>
              <h2>Testing and Refinement</h2>
              <p>
                The testing phase was crucial and involved working closely with individuals who have 
                different accessibility needs. Their feedback was invaluable, leading to several 
                refinements in both the hardware design and the firmware. We tested the controller 
                with various games across multiple platforms to ensure broad compatibility and responsiveness.
              </p>
              <h2>Results and Future Development</h2>
              <p>
                The final product was a success, offering a level of customization that surpassed 
                initial expectations. Users could easily configure the controller to suit their 
                specific needs, whether that meant clustering all inputs on one side, using oversized 
                buttons, or incorporating sip-and-puff controls.
              </p>
              <p>
                Looking ahead, I see numerous opportunities for further development. Ideas include 
                wireless modules, integration with eye-tracking technology, and the development of 
                game-specific profiles that can be easily loaded onto the controller.
              </p>
              <h2>Conclusion</h2>
              <p>
                This project reinforced my belief in the power of adaptive technology to create more 
                inclusive experiences. By combining 3D printing, Arduino, and user-centered design, 
                we can develop solutions that adapt to people's needs rather than forcing people to 
                adapt to technology. As I continue my studies and research in this field, I'm excited 
                about the potential to create more innovations that can make a real difference in 
                people's lives.
              </p>
            </div>
          </div>
        </article>
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