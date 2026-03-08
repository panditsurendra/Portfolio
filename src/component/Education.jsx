import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading matching your Skills/About style */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Education</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
          
          {/* Degree Entry: VNIT Nagpur */}
          <div className="relative pl-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Timeline Node Icon */}
            <div className="absolute left-4 top-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 shadow-lg shadow-blue-200">
              <GraduationCap size={16} />
            </div>

            {/* Glassmorphism Card */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <span className="text-sm font-bold text-blue-600">2023 — Present</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Bachelor of Technology</h3>
                  <p className="text-lg text-slate-500 font-medium">Metallurgical & Materials Engineering</p>
                </div>
                <p className="text-blue-700 font-black mt-2 md:mt-0 text-sm tracking-widest uppercase">VNIT, Nagpur</p>
              </div>
              
              {/* Academic Highlights */}
              <div className="grid md:grid-cols-2 gap-8 mt-6 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Core Foundation</p>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Materials Science
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Metallurgy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Engineering Principles
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Technical Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] rounded-lg font-bold border border-blue-100">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] rounded-lg font-bold border border-blue-100">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] rounded-lg font-bold border border-blue-100">
                      Data Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;