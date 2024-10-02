import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Github, Linkedin, Mail, Calendar, User } from 'lucide-react'

export default function BlogPost() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800 hover:text-[#90EE90] transition-colors">
            Hannah Foppoli Hernández
          </a>
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
        <Link href="/blog">
          <a className="inline-flex items-center text-[#90EE90] hover:underline font-medium mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
          </a>
        </Link>


        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image 
            src="/90ee90.png" 
            alt="90ee90 color (light green)" 
            width={1200} 
            height={600} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Camp Crip, Virtual Barriers, Flying Disabled, and Assistive Tech</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">October 2nd, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <h2>Crip Camp</h2>
              <p> “But it was a utopia. When we were there, there was no outside world.”</p>
              <p> Crip Camp is a documentary that tells the story of Camp Jened, a summer camp for disabled teens in the 1970s, and how it became a catalyst for the disability rights movement in the United States. Jened was more than just your typical summer camp—it was a place where disabled teens could be themselves and make friends with others that they could relate to by just existing in the same society; at camp, they were free from the societal limitations, othering, and prejudices they faced in everyday life.</p>
              <p>I was so shocked how much footage there was to be able to compile it into something that could be explained just through the film itself– usually gaps have to be filled with filler footage, excessive interviewing, etc. And not only having extensive footage, but great audio too. I’m sure it may have been enhanced while compiling the Netflix documentary, but I’m really glad they were using microphones to catch everything properly in the first place. Just from a preservation perspective!</p>¥
              <p>I was so appalled to learn about Willowbrook and the treatment that these children had to face. Three minutes to eat is so ridiculously inhumane and a terrifying institution. It shows how far we've come but how cruel people with disabiltiies have been treated and percieved.</p>
              <p>I learned that many of the campers, emboldened by their experiences at Jened, went on to become key figures in the fight for disability rights, leading to significant legislation like the Americans with Disabilities Act (ADA). The documentary really nicely  intertwines the personal stories of campers with the larger historical context, showing how grassroots activism can bring about systemic change. It invites us to reflect on how far society has come in recognizing the rights of disabled people, while also acknowledging the plenty of work still to be done.</p>
              <p>“The problem existed with people that didn’t have disabilities… it was important for us to change.”</p>

              <div className="flex justify-center">
                <Image
                  src="/crip-camp-long-1.jpeg" 
                  alt="Crip Camp Poster"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>

              

              <h2>Accessibility to digital technology: Virtual barriers, real opportunities</h2>
              <p>“Digital accessibility is best understood as a chain of dependencies where training, hardware, software, content, and standards must work together harmoniously, and each of these elements must be understood as a dynamic process. For example, smartphones can be incompatible with hearing aids required by the deaf, touch screens too sensitive for those with motor impairments, and web pages often lack the text labels needed by screen reading software used by the blind.”</p>
              <p>“Too often, even in circumstances where this chain of dependencies is mostly working as it should, persons with disabilities still encounter many obstacles. For example, a person who is blind might hear most of the text and links of a web page, but then encounter buttons and images without labels. In such situations the screen reading software on the computer, tablet, or smartphone, will say generic words such as “image,” “link,” or “button,” which is almost entirely useless. Other obstacles can be more subtle, including pages with hundreds of links or dozens of paragraphs, but without properly defined titles and subtitles, forcing the user to read it from beginning to end, instead of quickly focusing on the most relevant sections, as a sighted person would"</p>
              <p>I thought this was really important to note, especially after I have taken a web design course which included a focus on accessible design. It made me wonder if there could be some sort of AI integration to account for times when the web developer did not make accessible friendly design- maybe the AI could scan the page and provide proper descriptions. I thought of this also after the author mentioned a lack of transcript or ASL in online video presentations. AI has been used to create transcripts and video captions, I feel it should be a tool to lean on in these times. </p>
              <p>“Just as curb cuts make sidewalks significantly more accessible to persons with disabilities, and simultaneously friendlier to those without disabilities, modifications to accessibility, patent, and copyright law could also benefit everyone." </p>
              <p>“Underrepresented languages also place persons who are blind at a disadvantage, as speakers of these languages do not usually have access to compatible optical character recognition (OCR), and speech synthesis technologies.” Yes! This is also especially noteworthy to mention after I brought up the potential AI usages. AI is trained on vast amounts of data, and if there is not enough data, for example in low-resource languages, it could be flawed.</p>

              
              
                
              <h2>What flying is Like for those who use wheelchairs</h2>
              <p>Flying seems very exhausting for those who use wheelchairs with huge risks attached, like getting injured or having your incredibly expensive equipment just get lost by the airline. It also is more expensive for wheelchair users, and they need to make their travel plans well in advance to secure the proper accommodations. This eliminates the sort of spontaneous travel mindset that able-bodied people get to enjoy, like, let me just hop on a plane and get a vacation! But, for people using wheelchairs, there’s a lot of cognitive load to deal with for the treatment you will recieve and preparations to make.</p>
              <p>I actually also watched this video, which had Emily Ladau in it, someone we’ve heard from this semester before. <Link href="https://www.youtube.com/watch?v=MRntgEiTHIY&ab_channel=VICENews">
                Click here to watch.</Link></p>
              <p>“The horror is real, with one indignity after another.” She describes the invasive pat-down process. “When they get ready to board, they say, ‘first we have to get the wheelchair on’, as if I’m not an actual person, but an expensive piece of machinery.” </p>
              <p>“I never feel as much a burden as when I do when I’m on an airplane." This desperately needs reform.</p>
              
            
              
              <h2>Six Everyday Products Initially Developed as Assistive Technology: Designing for Typically Excluded Users</h2>
              <p>The curb cut example was brought up in my web design class when we talked about accessibility, and how making things more accessible benefits everyone, not just disabled people. I think that for some reason, some people’s brains just shut off when they hear about accessibility because they have never had to consider operating in a world where things are literally inaccessible to you, so they don’t consider how it could benefit them, too.</p>
              <p>I love audiobooks. They’re a great creation and benefit so many. Also, closed captions. They are so helpful for me. I’m not hard of hearing, however sometimes things are just hard to catch. I also feel like captions ensure you of the best understanding of the movie or show you’re watching, if you really want to get every single detail (which I do!) </p>
              <p>When we design for individuals typically excluded, we end up designing better solutions for everyone.</p>
              
              
              
          
         
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
        </div>
      </footer>
    </div>
   </>
  );
}
