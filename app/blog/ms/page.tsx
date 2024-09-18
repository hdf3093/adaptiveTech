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
            <h1 className="text-4xl font-bold mb-4">Exploring Accessibility: MS, Adaptive Gaming, and Inclusive Tech Solutions</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">September 18th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <h2>Multiple Sclerosis</h2>
              <p> Multiple Sclerosis (MS) is a condition where the body’s immune system attacks the protective coating around nerve fibers in the brain and spinal cord. This causes issues with how signals are sent between the brain and the rest of the body, causing a variety of symptoms. There are different types of MS—sometimes symptoms come and go, and in other cases, they gradually get worse over time. Some people might start with periods of improvement, but eventually, it can progress without getting better in between.</p>
              <div className="flex justify-center">
                <Image
                  src="/ms.jpg" 
                  alt="neuron diagram of MS"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <h2>How MS Affects Individuals</h2>
              <p>MS can affect individuals differently, but common symptoms include mobility issues like muscle weakness, difficulty walking, and balance problems, as well as fatigue, vision problems, muscle stiffness and pain, memory loss or difficulty concentrating, bladder and bowel issues, and can affect your mental and emotional health.</p>

              <h2>Microsoft Inclusive Tech Lab</h2>
              <p>The Microsoft Inclusive Tech Lab focuses on creating accessible technology to empower people with disabilities. It designs and tests devices that cater to various impairments, ensuring inclusivity in tech. The lab works closely with the disability community to develop innovations that enhance accessibility and usability for all.</p>
              <h3>Xbox Adaptive Controller</h3>
              <div className="flex justify-center">
                <Image
                  src="/xbox.png" 
                  alt="Xbox Adaptive Controller"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>The Xbox Adaptive Controller is a device for individuals with physical disabilities that hinder their ability to use a traditional game controller. Developed to support a range of impairments, the controller features large, programmable buttons and numerous ports that allow users to connect external devices like switches, mounts, and joysticks. This modular design enables users with limited mobility, such as those affected by spinal cord injuries, muscular dystrophy, or limb differences, to tailor their gaming setup to their specific needs. It’s used by creating a personalized control scheme that can adapt to a wide range of physical needs, empowering users to fully engage in gaming experiences. </p>              
              <h3>Adaptive Mouse and Button Set</h3>
              <div className="flex justify-center">
                <Image
                  src="/mouse.png" 
                  alt=" Adaptive Mouse"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>The Adaptive Mouse and Button Set is designed for individuals with mobility impairments or limited dexterity. This customizable mouse allows users to adjust it for their specific needs by swapping out parts, including an attachable tail for different grip styles. The device is wireless and can be configured with additional buttons that can be programmed to perform various tasks, which is ideal for users who struggle with traditional mouse setups due to conditions like arthritis, cerebral palsy, or repetitive strain injuries. By offering a flexible and ergonomic design, it helps improve accessibility for computer interaction.</p>
                
              <h2>How to Treat a Person with Disabilities, According to People with Disabilities</h2>
              <p>“Say the word, I’m disabled, it’s okay!” – Wendy Lu</p>
              <p>“When you’re using terms like, differently abled, you’re actually erasing the fact that disability is part of my identity.” – Emily Ladau</p>
              <p>I thought that these quotes were important to bring up because there’s a lot of hesitance when people discuss disabilities. In my experience, I have made note of the ways to talk about disability by seeing posts made by disabled content creators and disability rights organizations, and I can understand the hesitation in not wanting to say the wrong thing. Terms like “differently abled” seem to dance around the word disabled while being synonymous with it, which makes me wonder its purpose. But then I think about it, and I can also see where it’s coming from. There is no single experience of disability, and different people use different vocabularies to refer to themselves. And, let’s be real– society, historically, has made “disability” taboo, an afterthought, when it never should have been. “Disability is something that happens when people with impairments face barriers in society; it is society that disables us, not our impairments, this is the thing all disabled people have in common.” – Office for Disability Issues, NZ</p>
              <p>“I don’t really feel that brave or inspirational for just going about my day with my disability.” – Wendy Lu</p>
              <p>People automatically helping you without asking first seems really uncomfortable. It gives shape to an assumption they made in their mind, and not only that, they don’t even ask if you need help to begin with. I sympathize and can see what they mean when they’re all describing these interactions and I think that the questions and order of the questions posed by Ryan Haddad are worth mentioning. It seems like common sense to first ask someone if they need help, but I like the way he also suggested asking the best way to support that person with what they need help with. I was really shocked to hear Emily Ladau’s interaction of someone grabbing her coat mid-way of her putting it on and “asked” if they could help (while already grabbing her coat). It’s in these quick assumptions and actions that people need to slow down and realize the implications of their actions (and a general reminder on not touching or invading people’s space without asking, it seems.) Overall, I liked this video and the unique perspectives shared by Wendy, Emily, and Ryan.</p>
              <div className="flex justify-center">
                <Image
                  src="/vice.jpg" 
                  alt="vice thumbnail"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
            
              
              <h2>Ablegamers</h2>
              <div className="flex justify-center">
                <Image
                  src="/ablegamers.webp" 
                  alt="ablegamers logo"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>AbleGamers’ Engineering Research focuses on developing adaptive technologies and solutions for gamers with disabilities. Their engineering team works to identify barriers in gaming and creates personalized setups that allow individuals with physical, sensory, or cognitive impairments to play video games. They design custom hardware, modify controllers, and innovate software solutions that address specific needs, helping individuals with limited mobility, dexterity, or other challenges access games in ways that standard setups do not accommodate.</p>           
              <p>One intervention is the Expansion Packs Program, where AbleGamers engineers develop customized game controllers tailored to individual needs, such as creating controllers that respond to light touch, voice commands, or non-traditional input methods like head or foot-operated switches. A second intervention involves Game Accessibility Guidelines, which AbleGamers contributes to by conducting research and testing to inform developers on how to make games more inclusive. This includes designing for customizable controls, ensuring visual accessibility, and enhancing the overall gaming experience for people with diverse abilities. </p>
              <h2>Adaptive Gaming Investigation</h2>
              <h3>Logitech Adaptive Gaming Kit</h3>
              <div className="flex justify-center">
                <Image
                  src="/Logitech.png" 
                  alt="Logitech adaptive gaming kit"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>The Logitech Adaptive Gaming Kit is designed to work in conjunction with adaptive controllers like the Xbox Adaptive Controller. It includes a variety of customizable buttons and switches that can be configured to suit individual needs. The kit features large, programmable buttons that can be easily connected to the adaptive controller, allowing users to create a setup that works best for them. This solution is particularly useful for gamers with limited hand dexterity or fine motor skills, as it allows them to map essential functions to larger, more accessible buttons. The kit also includes various mounting options, ensuring that the hardware can be positioned in a way that suits the user's specific physical capabilities. Priced at $100.00, I think this is reasonable, although of course that’s subjective. You do have to get the Xbox controller separately (another $100.00). Gaming is expensive in general, and these costs on top of games is a lot.</p>
              <p>Through researching, I found Gaming Readapted, a site that provides overviews and set up instructions for adaptive gaming equipment including the Quadstick, Xbox Adaptive Controller, and other common controllers: <a>https://www.gamingreadapted.com/</a></p>
              <h3>Quadstick</h3>
              <div className="flex justify-center">
                <Image
                  src="/quad.webp" 
                  alt="a person using a quadstick"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>

              <p>The Quadstick is an adaptive controller that allows someone to play video games only using their mouth. It contains four components: a joystick which the user can control with mouth and head movements, a mouthpiece with three holes that the user sips or blows into for the different controls in the game, a lip switch that the user can activate with their lower lip, and a side tube that the user can sip or blow into to switch between gaming profiles. The device can be mounted to a table and positioned in front of the user so that they can play video games using only their mouth and head movements. The Quadstick can be programmed so that virtually any sip or puff combination on the controller can be any control or combination of controls in the game. </p>


              
          
         
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
