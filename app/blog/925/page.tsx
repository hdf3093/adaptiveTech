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
            <h1 className="text-4xl font-bold mb-4">Beyond Inspiration: Ableism, Accessibility, and the Realities of Disability Representation in Tech and Society</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">September 25th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <h2>I'm not your inspiration, thank you very much</h2>
              <p> “We’re not real people, we’re there to inspire.”</p>
              <p> I had heard of the term ‘inspiration porn’ before, where disabled people are objectified for the benefit of non-disabled people. I liked that the speaker, Stella Young, discussed the true meaning behind saying things like, “You’re so brave”, when she’s just existing, not doing anything in particular to justify a remark in-passing by a stranger. She brings up images with text like, “The only disability in life is a bad attitude.”, where it’s just blatantly obvious that having a disability is seen as a horrible thing, the worst thing to happen to someone, therefore their mere existence calls for unwanted remarks of, “You’re so inspiring”. She says, “I want to live in a world where we value genuine achievement for disabled people… Disability doesn’t make you exceptional, but questioning what you know about it does.” I really enjoyed her take and think it’s important to listen to.</p>

              <div className="flex justify-center">
                <Image
                  src="/stella.jpg" 
                  alt="Stella Young, speaker"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p> Above is a picture of Stella Young, the TEDX speaker.</p>

              

              <h2>Santa’s Little Hackers</h2>
              <p>I watched the Dice Roller adaptation video. I thought this was an amazing resource and that the documentation was really well-done. It was easy to follow, and the directions were clear. It does require being comfortable and/or open to working with hardware and tools like pliers and wiring. It gets pretty meticulous and you’d have to be nimble with your fingers. Overall I thought this was an awesome resource for DIY adapting.</p>
              <div className="flex justify-center">
                <Image
                  src="/santa.png" 
                  alt="Santa's little hackers"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>You can watch the video  <Link href="https://www.youtube.com/watch?v=4Af5vx0WLOI&feature=youtu.be" className="text-[#90EE90] underline">here</Link>!</p>
              
                
              <h2>Zuckerberg’s Threads is just the latest slap in the face to disabled users.</h2>
              <p>“I don’t want an app. I want a webpage. I want to access the platform on my Windows desktop PC or laptop.”</p>
              <p>I agree! This is exactly what put me off to Threads in the first place, apart from thinking it was pretty pointless anyway.</p>
              <p>A point that was brought up was the increasing use of two-factor authentication. When websites make this a requirement, it cuts off access to people who don’t have a phone, and effectively cuts them off from being able to use the website. “If a text message comes in, a notification is briefly on the phone screen in very small font. If I’m lucky, I can get a glimpse of the code before it disappears.” This point reminded me of an iOS feature that actually exists and is quite useful for me, once that code is received, I never have to go into my actual messaging app to get the code, it just pops up on the same screen where I am prompted to enter the code. However, for some, the entire concept of 2FA makes their experience using technology a whole lot more of a hassle when it shouldn’t be. It’s frustrating that it’s required for a lot of things now– even at NYU, the Duo Push notifications we have to attend to whenever we try to log in to use anything at school with our account is time-consuming, even more so for someone with difficulties accessing their phone.</p>
              <div className="flex justify-center">
                <Image
                  src="/thread.png" 
                  alt="threadslogo"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
            
              
              <h2>Bringing Braille Fun Home: LEGO® Braille Bricks on Sale for the First Time</h2>
              <div className="flex justify-center">
                <Image
                  src="/lego.png" 
                  alt="lego braille"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>The launch of Lego Braille Bricks represents a significant milestone in creating more inclusive learning experiences through play, as highlighted in the article I read. I was genuinely surprised to learn that these were only released last year; I had expected such an initiative to have been around for much longer. Nevertheless, I find this development truly inspiring! As someone with very low vision (legally blind without aid) and having family members with visual impairments, I am always encouraged by advancements in technology for the blind. Lego Braille Bricks appear to offer an innovative way for children to engage with learning and play through tactile exploration.</p>           
              <h2>Adaptive Clothing</h2>
              <h3>Wheelchair Adaptive Pants</h3>
              <div className="flex justify-center">
                <Image
                  src="/wheelchair.png" 
                  alt="Wheelchair Adaptive Pants"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>These adaptive trousers are designed specifically for men in wheelchairs, featuring a high waist to ensure comfort in a seated position. Tailored for individuals with paraplegia, quadriplegia, or other disabilities, these cargo-style pants provide practical functionality with multiple pockets for easy access to essentials. The design focuses on accommodating the unique needs of wheelchair users, enhancing comfort and usability in daily life.</p>
              <h3>Zipback Pajamas</h3>
              <div className="flex justify-center">
                <Image
                  src="/pj.png" 
                  alt="Zipback Pajamas"
                  width={500} 
                  height={500} 
                  className="object-contain"
                />
              </div>

              <p>The Zipback Pajama is an innovative solution for parents needing support with nighttime undressing and messes. The hidden zipper design and cuffed ankles help keep children secure and comfortable throughout the night. The option to layer underneath or over the pajamas adds versatility, making them suitable for different weather conditions. While the original price of $40 may seem steep, the fact that they come in packs of four provides a more economical choice for families. Overall, this product could significantly ease bedtime struggles while promoting independence for children.</p>

              <h2>MakeCode Arcade</h2>
              <p>I have used MakeCode in the past to program an Adafruit CPX that was the brain of a simple robot with ultrasonic sensors and motorized wheels. The goal was to have the robot go through an obstacle course and pass successfully.
              <Link href="https://hdf3093.github.io/robotics.html">
                Click here to see this project!
            </Link>
              </p>
              <p>MakeCode is really nice. The block visuals make understanding programming logic really simple to understand. They have a plethora of options and tutorials that teach you how to make a type of game, for example, choose your own adventure game is really simple to program.</p>
              <h2>Scratch</h2>
              <p>Scratch also has a variety of tutorials and ideas for inspiration. It is similar in block code logic which makes it very accessible and easy to program. </p>
            
              <h2>Design Meets Disability: “Identity Meets Ability”</h2>
              <p>In "Identity Meets Ability," Pullin highlights the importance of recognizing the diverse identities within the disabled community. The distinction between "Deaf" (with a capital D) and "deaf" (with a lowercase d) illustrates how deafness can be an integral part of cultural identity for some, while for others, it represents social isolation. He notes that “a shared disability does not preclude a diversity of culture, tastes, wealth, temperament, education, values, attitudes, and priorities.” This observation resonates with me, as it challenges the often narrow definitions that surround disability. It’s crucial to acknowledge that individuals with disabilities are not a monolith; their experiences and needs vary widely. The traditional focus on clinical aspects of disability can overlook the rich cultural contexts that shape a person's identity. As we move toward more inclusive design, it’s essential to ensure that we don’t fall into the trap of stereotyping individuals based solely on their disabilities.</p>

              

              
          
         
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
