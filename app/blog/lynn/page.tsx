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
            src="/icon.png" 
            alt="Lynn Valley" 
            width={1200} 
            height={600} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Lynn Valley, Abilitease, EquipMeOT, Terri Bryant</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">September 10th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <p>Lynn’s journey is central to the mission of the Adaptive Design Association, embodying the principles of creativity, possibility, and adaptation...</p>
              <h2>Computer Use</h2>
              <p>I was impressed with the adaptive hand modifications that Lynn’s husband helped to create...</p>
              <h2>Opening Jars</h2>
              <p>Opening jars is something that even I, an able-bodied person, struggle with often...</p>
              <h2>Putting Socks On</h2>
              <p>To put socks on, Lynn uses her teeth to open them...</p>
              <h2>Findings</h2>
              <p>In conclusion, Lynn’s use of adaptive technologies highlights both the creativity and resilience needed...</p>
              <br />
              <h2>Abilitease</h2>
              <p>Mark Fuglevand founded Abilitease Adaptive after a spinal cord injury...</p>
              <br />
              <h3>Adaptive Drink Holder (Cans and Bottles)</h3>
              <p>I was drawn to this first because it was sold out...</p>
              <div className="flex justify-center">
                <Image
                  src="/drinkholder.png" 
                  alt="Drink Holder"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <br />
              <h3>Can (12oz) Stabilizer w/ Insert</h3>
              <p>This can stabilizer supports the bottom portion of your 12 oz can beverage...</p>
              <div className="flex justify-center">
                <Image
                  src="/can.png" 
                  alt="Can Stabilizer"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <br />
              <h2>"How Makeup Artist Terri Bryant Is Using Her Parkinson's Diagnosis to Reinvent Makeup"</h2>
              <p>Makeup artist Terri Bryant, diagnosed with Parkinson's disease...</p>
              <br />
              <p>The star of the show seems to be the "Guide Wand"...</p>
              <div className="flex justify-center">
                <Image
                  src="/guidewand.png" 
                  alt="Guide Eyeliner"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>I really appreciate Bryant's approach to making makeup more adaptive...</p>
              <br />
              <h2>EquipMeOT with Lindsay DeLong</h2>
              <p>EquipMeOT with Lindsay DeLong is a Home and Community Occupational Therapist...</p>
              <br />
              <h3>EZ Stand-N-Go chair</h3>
              <p>The first item that DeLong is highlighting is the EZ Stand-N-Go chair...</p>
              <div className="flex justify-center">
                <Image
                  src="/ez.png" 
                  alt="EZ Stand-N-Go"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>I particularly liked that she highlighted this because this is a tool that I could see my grandparents benefit from...</p>
              <br />
              <h3>EOT Wellness Lotion Applicator</h3>
              <div className="flex justify-center">
                <Image
                  src="/lotion.png" 
                  alt="EOT Wellness Lotion Applicator"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>This lotion applicator seems to be very useful in reaching those hard-to-get-to spots...</p>
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
              <p className="text-gray-400 mb-4">123 Tech Avenue<br />New York, NY 10001<br />Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
