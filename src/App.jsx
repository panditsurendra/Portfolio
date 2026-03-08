// import { useState } from 'react'
// import Navbar from './components/Navbar';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Education from './component/Education';

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        {/* <Education /> */}
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-slate-500 text-sm">
          © 2026 Surendra Kumar Pandit. Built with React & Tailwind v4.
        </footer>
      </div>
      {/* <h1 className="text-4xl font-bold text-center mt-20 text-slate-800">
        Welcome to My Portfolio
      </h1>
      <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
        Explore my projects, skills, and experience in software development and AI.
      </p> */}
    </>
  );
}

export default App;
