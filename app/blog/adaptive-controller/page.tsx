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
            src="/lynn.png" 
            alt="Lynn Valley" 
            width={1200} 
            height={600} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">LynnValley.net</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">September 10th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <p>
              Lynn’s journey is central to the mission of the Adaptive Design Association, embodying the principles of creativity, possibility, and adaptation. Her website offers more than just a glimpse into her daily life; it serves as an educational resource that showcases innovative solutions for overcoming physical challenges. In this blog, I reflect on three videos from Lynn's site, sharing my insights into how she uses adaptive technologies to navigate everyday tasks with remarkable ingenuity and resilience.
              </p>
              <h2>Computer Use</h2>
              <p>
              I was impressed with the adaptive hand modifications that Lynn’s husband helped to create to help her use and navigate the computer. I didn’t consider that the tip of some pegs, as she was describing, were not efficient enough because they would slide off of the keys. She said that she liked the current pegs that she had because the tip was sticky and could actually stick onto the key that she was trying to press. I was also surprised to see the spherical mouse that she was using, because I have actually seen it sold at a regular technology store in Japan (and I’m positive they’d have it somewhere in Best Buy in the US). I was surprised to see this, because when I first saw this spherical mouse design, I didn’t even consider that it would be beneficial as adaptive technology, and I just thought it was some modern, ergonomic design. Upon seeing this, I was surprised to see that they are far from new, and were (and continue to be) used in the adaptive sense. 

              </p>
              <h2>Opening Jars</h2>
              <p>
              Opening jars is something that even I, an able-bodied person, struggle with often. I learned from Lynn in this video that your grip is strongest when your hands are under your chin– for example, if you’re holding a jar within arms reach, your force is lessened when compared to your strength when they are directly under your chin. To open a jar, she has to get down on the ground and use her thighs to maintain the jar’s stability. This seems like a good solution for the challenge of opening jars, but it made me wonder what someone with low mobility in their legs would do, who can’t get up and down so easily. I’m also sure Lynn would prefer not to have to sit on the ground every time she wants to open a jar, but it’s a practical solution that she can do. In this case, I wonder if there are any advancements in adaptive technology specifically for opening jars. Upon looking it up, there are many pretty affordable options ($7-20) on Amazon. 

              </p>
              <h2>Putting Socks On</h2>
              <p>
              To put socks on, Lynn uses her teeth to open them, puts both her hands in, positions her foot and enters the socks by replacing her hands with her foot. She did both feet in less than 2 minutes, and she stated that she often uses her teeth to do things which most would find as a disturbance. Again, I wondered what someone with low leg mobility would do in this situation. Lynn seems to be pretty flexible and just fine moving her legs up, but this would be difficult for someone who can’t do that. I was curious, and on Amazon there are many sock assistance devices with similar design for less than $20, which seem to be good solutions for those who cannot move their legs much. 

              </p>
              
              <h2>Findings</h2>
              <p>
              In conclusion, Lynn’s use of adaptive technologies highlights both the creativity and resilience needed to navigate everyday tasks that many of us take for granted. 
              From computer use to opening jars and putting on socks, her innovative approaches demonstrate how technology can be adapted to meet individual needs. Her experiences also remind us of the importance of continual advancements in adaptive design, particularly for those with varying levels of mobility. 
              While solutions like sticky peg tips, spherical mice, and sock assistance devices exist, Lynn’s story emphasizes the ongoing need for accessible, affordable, and user-friendly tools that promote independence and ease in daily life.



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