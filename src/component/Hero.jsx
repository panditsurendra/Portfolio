

import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Code2, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[90vh] overflow-hidden">
      
      {/* Background Floating Particles (CSS Only) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-bounce duration-[5000ms]"></div>
      </div>

      {/* Left Content with Fade-in Animation */}
      <div className="flex-1 text-left space-y-6 animate-in fade-in slide-in-from-left-10 duration-1000">
        
        {/* White "Ready to Innovate" Pill */}
        <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <span className="text-lg">🚀</span>
          <span className="text-slate-400 font-bold tracking-tight text-sm md:text-base ">
            Ready to Innovate
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
          Hi, I'm <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#06b6d4]">
            Surendra Kumar Pandit
          </span>
        </h1>
        
        {/* Dynamic Typing Effect for Roles */}
        <div className="text-xl md:text-2xl font-semibold text-slate-700 h-12 flex items-center">
            <span className="mr-2 ">A</span>

            <span className="min-w-[260px] text-slate-500">
                <Typewriter
                options={{
                    strings: [
                    'Full Stack Developer',
                    'Machine Learning Enthusiast',
                    'Problem Solver',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
                />
            </span>
        </div>
        
        {/* <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Pre-final Year B.Tech Student at VNIT Nagpur. I specialize in turning complex data into actionable insights through Machine Learning.
        </p> */}

        {/* Hover Animations on Buttons */}

        <div className="flex flex-wrap items-center gap-6 pt-6">
        {/* Primary Action Button */}
            <a 
                href="#projects"
                className="px-8 py-3.5 bg-[#2563eb] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-200 
                            hover:-translate-y-2 hover:shadow-blue-300 transition-all duration-300 active:scale-95 inline-block"
                >
                View Projects
            </a>

            <a 
                href="#contact"
                className="px-8 py-3.5 bg-[#2563eb] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-200 
                            hover:-translate-y-2 hover:shadow-blue-300 transition-all duration-300 active:scale-95 inline-block"
                >
                Contact Me
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4">
                {/* Compact Download Resume Button */}
                <a 
                    href="/resume_AI_ML_surendra_kumar.pdf" 
                    download
                    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl 
                        text-slate-700 font-bold text-sm shadow-sm
                        hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 
                        hover:-translate-y-1 hover:shadow-md
                        transition-all duration-300 active:scale-95"
                            >
                    <Download size={18} />
                    Resume
                </a>
                {/* GitHub */}
                <a 
                    href="https://github.com/panditsurendra?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-sm 
                                hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                    title="GitHub"
                    >
                    <Github size={24} />
                </a>

                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/surendra-kumar-pandit-9b806b2b3/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-sm 
                                hover:text-[#0077b5] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                    title="LinkedIn"
                    >
                    <Linkedin size={24} />
                </a>

                {/* LeetCode */}
                <a 
                    href="https://codolio.com/profile/panditSurendra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-sm 
                                hover:text-[#ffa116] hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
                    title="LeetCode"
                    >
                    <Code2 size={24} />
                </a>
            </div>
        </div>
      </div>

      {/* Right Content Profile Image Card with Shadow Glow */}
        <div className="flex-1 flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
                <div className="absolute inset-0 bg-blue-100/40 blur-[100px] rounded-full"></div>

                <div className="relative glass p-3 rounded-[2.5rem] border-white/40 
                                shadow-xl cursor-pointer transition-all duration-500 ease-out
                                hover:scale-105 hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] 
                                hover:border-blue-300/50">

                    <img 
                    src="/profile.jpg"
                    alt="Surendra Kumar Pandit"
                    className="w-full h-full object-cover rounded-[2rem]"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}