import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Project from './components/Project';
import Techstack from './components/Techstack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/techstack" element={<Techstack/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
}
