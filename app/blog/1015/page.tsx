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
            <h1 className="text-4xl font-bold mb-4">Adaptive Game Documentation</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">October 14th, 2024</span>
              <User className="w-4 h-4 mr-2" />
              <span>Hannah Foppoli Hernández</span>
            </div>
            <div className="prose max-w-none">
              <h2>Concept Art by Robert</h2>
             

              <div className="flex justify-center">
                <Image
                  src="/concept1.png" 
                  alt="Concept Art 1"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/concept2.png" 
                  alt="Concept Art 2"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>

              

              <h2>Basic Game Functionality</h2>
              <p>2 buttons- left and right for movement</p>
              <p>Car slows down when offroad, slows a bit if obstacle/car is hit</p>
              <p>Increasing difficulty (speed)</p>
              <p>Menu load screen</p>
              <p>Music looping</p>
              <div className="flex justify-center">
                <Image
                  src="/gamegif.webp" 
                  alt="A gif of our game inspiration- 2 lanes"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>Sort of like this but with 4 lanes.</p>

              <h2>Task Assignment</h2>
              <p>Hannah & Amy: Code Implementation, Arduino Setup, Debugging</p>
              <p>Sandra & Robert: Interface Design, 3D Printing & Soldering</p>

             
              
            
                
              <h2>Hannah's Code Documentation</h2>
              <h3>10/9</h3>
              <p>I first created my own version of the game while Amy also did the same. In doing so, we were able to see each other's thought processes in how we would come together to create the final game.</p>
              <p>My first attempt involved creating global variables like playerCar, roadLeft (left boundary of road), roadRight (right boundary), speed (initial speed), grassSpeed (speed if the car goes offroad onto the grass, slower), gameStarted (a flag to check if the game has started), etc. I also added a difficultyIncreaseRate variable to control how often the game speed would increase (every 5 seconds). I also a start screen that would prompt the user to press any button to start. I then set up the following logic: </p>
              <h3>startGame() Function:</h3>
              <ul>
                <li>This function is responsible for initializing the game:</li>
                <li>Sets the gameStarted flag to true to prevent restarting.</li>
                <li>Creates the player's car sprite (playerCar) and positions it in the middle of the screen.</li>
                <li>Sets up a loop that spawns traffic cars every 2 seconds by calling the spawnTraffic() function.</li>
                <li>Another loop increases the game's difficulty by speeding up the traffic cars every 5 seconds, with a speed cap of 200.</li>

              </ul>
              <h3>Player Movement (moveCar Function):</h3>
              <ul>
                <li>The moveCar() function listens for button presses:</li>
                <li>Button A: Moves the player car to the left. If the car reaches the left grass area, it stops at the grass boundary.</li>
                <li>Button B: Moves the player car to the right. If the car reaches the right grass area, it stops at the grass boundary.</li>
              </ul>

              <h3>Collision Detection:</h3>
              <ul>
                <li>The sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function ()) function checks for any overlap (collision) between the player’s car and traffic cars.</li>
                <li>If a collision is detected, the game ends (game.over(false)), meaning Game Over.</li>
              </ul>

              <h3>Game Progression:</h3>
              <ul>
                <li>Over time, the game gets progressively harder as traffic speeds up. The speed increases every 5 seconds, but is capped at a maximum speed of 200 to keep the game playable.</li>
              </ul>

              <h3>Initial Bugs</h3>
              <p>After setting up this logic, some initial debugging I had to do involved making the enemy and player cars look like they were driving on the road tilemap. It at first looked like the cars were falling from the sky. This was solved by orienting the cars onto the tilemap.</p>
              <p>Another small bug was that you could only press A to start instead of any button for some reason.</p>
              <p>Lastly, I finished this initial game up with wanting to add styling elements like music, sound effects, and in general make the game more engaging.</p>

              <h2>Amy's Code Documentation</h2>
              <h3>Questions and Bugs:</h3>
              <p> generate too many cars when the down cars get destroyed </p>
              <p>car number is over 60 which is weird since it should only generate new cars if the car umber is below 5</p>
              <div className="flex justify-center">
                <Image
                  src="/amy.png" 
                  alt="amy's makecode image"
                  width={300} 
                  height={300} 
                  className="object-contain"
                />
              </div>
              <p>the minicar that comes from nowhere</p>
              <p>need a function to make sure there is space for the car to go </p>
              <p>right now there is a chance that all the roads are blocked and the car can only lose life</p>

              <h2>Combining Code Logic</h2>
              <h3>10/10</h3>
              <p>We decided to work off of Amy's code because she had already established more things like music and loss of lives and in that sense was further along than me.</p>
              <p>I was working on adding logic to the code to detect when the car is on the grass and slow it down/lose lives.</p>
              <p>We worked together to debug small issues like a random mini car showing up in the lanes.</p>
              <p>We worked together to try to make the game run smoother and generally debug issues relating to lane changes and speed.</p>
              <h2>Current Code: <a href="https://arcade.makecode.com/S54950-96268-93787-80521" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#90EE90] transition-colors">
                  <Github className="w-6 h-6" />
                </a></h2>

              <h2>Next week, we will work on combining the finalized code to the Arduino and the interface created by Sandra and Robert. Further documentation from their parts will be reflected in my blog below.</h2>
              <p>I am also in charge of creating the slides to present to the class.</p>
              








              
              
              
          
         
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
