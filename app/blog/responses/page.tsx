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
            <h1 className="text-4xl font-bold mb-4">Judy Heumann and Disability in Doctor's Offices</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">October 9th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
                <h1>These Doctors Admit They Don’t Want Patients With Disabilities</h1>
                <p>"While disability takes many forms, the doctors had much to say about people who use wheelchairs. Some doctors said their office scales could not accommodate wheelchairs, so they had told patients to go to a supermarket, a grain elevator, a cattle processing plant or a zoo to be weighed, or they would tell a new patient the practice was closed."</p>
                <p>When I read this excerpt, I was so shocked that these were actually things said to people with disabilities. A cattle processing plant or a zoo? That's really something uttered by a doctor to a human patient?  </p>
                <p>"The doctors also explained why they could be so eager to get rid of these patients, focusing on the shrinking amount of time doctors are allotted to spend with individual patients."</p>
                <p>This really reminds me of the business model of healthcare in the United States and the turnover rate doctors are required to uphold, especially in emergency rooms. Recently my grandfather suffered a fall and he has a condition that makes it very hard for him to stop bleeding. Even though his bleeding wouldn't stop for almost a whole day and night, he barely stabilized for a few hours before the doctor was suggesting they check out. My grandmother was dumbfounded. For context, they were visiting my family in Albany from Rochester, NY, which is about a three hour drive. She started explaining this to the doctor- what was she to do if he started bleeding again on the road? It was a risk they couldn't take with such a condition. He suggested that they check out of the hospital and check into a hotel across the street. But, that didn't make sense either. Why go through all the trouble of being discharged when he could simply stay put where he is for another night, under the care of nurses and doctors? This is why I'm reminded of the ways doctors have to reach certain metrics that reflect their rate or skill in resolving things. </p>
                <p>"A specialist in one focus group said disabled patients took too much time, adding that they were “a disruption to clinic flow.”"</p>
                <p>This is just so upsetting to experience and hear. These performance rates and time limits are there so that doctors can see as many patients as possible, i.e. get as much business as possible-- you may think, well, that's good because the more people helped, the better. But is 15 minutes seriously enough time to properly understand someone's entire medical history and evaluate their current reason for coming in given that history, as well as hear out their own concerns and things they have to say? It's not... especially for those with extensive medical histories and diagnoses. The risk of being misdiagnosed has to increase with the less time spent with the patient, I assume...</p>
                <p>"He hesitates to complain. “You want the doctor to be on your side,” he said. And he worries that the doctor might spread word that he is a difficult patient, making other doctors spurn him."</p>
                <p>It's honestly just sad that people have to pick and choose their words and display of emotions carefully to someone who is supposed to assess you, your pain, and help you. Not to mention the politics of this-- women of color's pain not being taken seriously, etc.</p>

                <h1>The disabled activist who led a historic 24-day sit-in</h1>
                <p>I was shocked to learn about Judy Heumann and the 24-day sit-in that played such a pivotal role in disability rights history. While I knew about the Americans with Disabilities Act (ADA), I had no idea that such a powerful protest laid the groundwork for it. </p>
                <p>It’s hard to imagine being told you’re a "fire hazard" as a child and not allowed to attend pre-school— how cruel. The resilience of Judy and her fellow activists, especially when faced with being denied access to school or even a teaching license because of her disability, is truly noteworthy. </p>
                <p>What stood out most to me was how Judy and her community had to fight for basic human rights. From duct-taping air conditioning units to make fridges during the sit-in, it was all about pushing forward in the face of systemic oppression and discrimination. </p>
                <p>The way she confronted officials, refusing to accept segregation and demanding that the government enforce the law, really hit me. It’s a reminder of how often people in power will nod in agreement without truly understanding or intending to act. Judy's strength, built from years of exclusion, transformed into something that helped change the course of history for so many. It made me wonder where we would be today without her.</p>
                
                <h1>US Disability Rights Activist Judy Heumann Dies at 75</h1>
                <p>Judy's relentless advocacy transformed the way society views disability, not as a personal tragedy but as a failure of systems to be inclusive. Her words, “Disability only becomes a tragedy when society fails to provide the things we need,” resonate deeply—it’s a call to continue her work. She refused to accept limitations imposed by others, and her courage, especially in staging the 24-day sit-in that helped pave the way for the ADA, is so important. </p>
                <p>Her life reminds us that activism and change come from persistence, even when the barriers seem insurmountable. I was really glad to learn about Judy and her experience and pioneering activism.</p>
              
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
