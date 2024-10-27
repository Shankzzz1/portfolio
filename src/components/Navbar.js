import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar w-full flex items-center justify-between px-4 py-4 font-mono relative ">
            <div className="text-2xl md:text-3xl ml-7 lg:text-4xl">
                Shashank.
            </div> 

            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg
                    className="w-8 h-8 text-black cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-64 text-black p-6 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
            >
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg md:text-xl">
                    <li className="text-center md:text-left cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="text-center md:text-left cursor-pointer"><Link to="/resume">Resume</Link></li>
                    <li className="text-center md:text-left cursor-pointer"><Link to="/projects">Projects</Link></li>
                    <li className="text-center md:text-left cursor-pointer"><Link to="/techstack">TechStack</Link></li>
                    <li className="text-center md:text-left cursor-pointer"><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}
