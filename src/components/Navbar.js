import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar mt-20 w-screen flex items-center justify-center font-mono">
           <div className='absolute left-80 text-2xl '>Shashank.</div> 
            <ul className="relative left-72 list-none flex space-x-8 font-mono text-xl text-black"> 
               <li>Home</li>
               <li>Resume</li>
               <li>Projects</li>
               <li>TechStack</li>
               <li>Contact Me </li>
            </ul>
        </nav>
    );
}
