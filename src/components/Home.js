import React from 'react';
import Navbar from './Navbar';
import Counter from './Counter';
import github from '../Images/social.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
import whatsapp from '../Images/whatsapp.png';
// import man from '../Images/man.png'; // Import your profile image
// import './Home.css'; // Import your CSS file

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative p-12">
        <div className="absolute left-80 top-32 text-lg space-y-5">
          <p className='text-2xl'>Software Developer</p>
          <div className="flex items-center">
            <p className="text-6xl">Hello, I'm</p>
          </div>
          <p className="text-7xl text-green-500 animate-typing">Shashank Gavale</p>
          
          <div className="space-y-1 text-2xl mt-20">
            <p>I excel in crafting elegant digital experiences,</p>
            <p>I am proficient in various programming languages and</p>
            <p>technologies.</p>
          </div>

          <div className="flex items-center space-x-5 mt-8">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
              Download CV
            </button>
            
            <img src={github} alt="GitHub" className="w-8 h-8" />
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            <img src={twitter} alt="Twitter" className="w-8 h-8" />
            <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
          </div>
          <div className='relative top-20'>
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}
