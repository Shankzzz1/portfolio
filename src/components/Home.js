import React from "react";
import Navbar from "./Navbar";
import Counter from "./Counter";
import github from "../Images/social.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import whatsapp from "../Images/whatsapp.png";
import Modelviewer from "./ModelViewer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex p-12 space-x-8 mt-20"> {/* Flex container to align items side-by-side */}
        
        {/* Left Content Section */}
        <div className="text-lg space-y-5 w-1/2 bg- relative left-64"> {/* Set width to manage space */}
          <p className="text-2xl">Software Developer</p>
          <div className="flex items-center">
            <p className="text-6xl">Hello, I'm</p>
          </div>
          <p className="text-7xl text-green-500 animate-typing">
            Shashank Gavale
          </p>

          <div className="space-y-1 text-2xl mt-20">
            <p>I excel in crafting elegant digital experiences,</p>
            <p>I am proficient in various programming languages and</p>
            <p>technologies.</p>
          </div>

          <div className="flex items-center space-x-5 mt-8">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
              <a href="/CV.pdf" download>
                Download CV
              </a>
            </button>

            <a href="https://github.com/Shankzzz1">
              <img src={github} alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/shashank-gavale-041148261">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://x.com/1_Shankzzz">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/9834431768" // replace with the actual phone number
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* Right Model Section */}
        <div className="flex justify-center items-center w-1/2 ">
          <Modelviewer />
        </div>
      </div>

      {/* Counter positioned below the Flex container */}
      <div className="mt-12 flex justify-center">
        <Counter />
      </div>
    </>
  );
}
