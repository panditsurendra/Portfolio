// import { GraduationCap, BookOpen, Target } from 'lucide-react';

// export default function About() {
//   return (
//     <section id="about" className="section-padding scroll-mt-20">
//       <div className="grid lg:grid-cols-2 gap-16 items-start">
        
//         {/* Left Side: Personal Bio */}
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
//             <div className="glass p-8 rounded-3xl leading-relaxed text-slate-600 space-y-4">
//               <p>
//                 I am a third-year **B.Tech student in Metallurgical Engineering at VNIT Nagpur**. 
//                 While my core studies focus on materials, I have developed a deep fascination 
//                 with how data-driven technologies can revolutionize traditional engineering.
//               </p>
//               <p>
//                 My journey is driven by a curiosity for **Artificial Intelligence, Machine Learning, and Data Analytics**. 
//                 I am actively bridging the gap between physical sciences and computational intelligence through 
//                 hands-on projects and specialized coursework.
//               </p>
//               <p className="font-medium text-blue-600 italic">
//                 "My goal is to apply advanced AI techniques to solve complex real-world problems 
//                 within innovative technical teams."
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="glass p-4 rounded-2xl flex items-center gap-3">
//               <div className="text-blue-500"><Target size={24} /></div>
//               <span className="text-sm font-bold text-slate-700">AI/ML Focus</span>
//             </div>
//             <div className="glass p-4 rounded-2xl flex items-center gap-3">
//               <div className="text-blue-500"><BookOpen size={24} /></div>
//               <span className="text-sm font-bold text-slate-700">Continuous Learner</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Education Timeline */}
//         <div>
//           <h2 className="text-3xl font-bold text-slate-800 mb-6">Education</h2>
//           <div className="space-y-6 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
            
//             {/* VNIT Nagpur Entry */}
//             <div className="relative pl-16">
//               <div className="absolute left-4 top-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 shadow-lg shadow-blue-200">
//                 <GraduationCap size={16} />
//               </div>
//               <div className="glass p-6 rounded-2xl border-l-4 border-l-blue-500">
//                 <span className="text-sm font-bold text-blue-600">2023 — Present</span>
//                 <h3 className="text-xl font-bold text-slate-800 mt-1">Bachelor of Technology</h3>
//                 <p className="text-slate-500 font-medium">Metallurgical & Materials Engineering</p>
//                 <p className="text-slate-700 mt-2 text-sm font-semibold">VNIT, Nagpur</p>
                
//                 <div className="mt-4 pt-4 border-t border-slate-100">
//                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Core Foundation</p>
//                   <ul className="text-sm text-slate-600 grid grid-cols-2 gap-1">
//                     <li>• Materials Science</li>
//                     <li>• Metallurgy</li>
//                     <li>• Thermodynamics</li>
//                     <li>• Engineering Design</li>
//                   </ul>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Self-Electives</p>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Artificial Intelligence</span>
//                     <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Machine Learning</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import { Brain, Database, Code, FlaskConical, Target, BookOpen } from 'lucide-react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      
//       {/* SECTION 1: ABOUT ME HEADER & GRID */}
//       <div>
//         <h2 className="text-center text-3xl font-extrabold text-[#1e293b] mb-12">About Me</h2>
        
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left: Bio Card */}
//           <div className="glass p-10 rounded-[2.5rem] shadow-xl border-white/50">
//             <p className="text-slate-600 leading-relaxed mb-6">
//               I am currently a third-year **B.Tech student in Metallurgical Engineering at VNIT Nagpur**. 
//               While my academic roots are in engineering principles and materials science, my curiosity 
//               drives me toward the digital frontier.
//             </p>
//             <p className="text-slate-600 leading-relaxed">
//               I focus on combining traditional engineering logic with **data-driven technologies**. 
//               My journey involves deep dives into AI and Machine Learning to solve real-world complexities. 
//               I am actively seeking opportunities to contribute to innovative teams as an intern.
//             </p>
//           </div>

//           {/* Right: Expertise Cards Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             <ExpertiseCard icon={<Brain />} title="AI/ML" desc="Deep Learning & NLP" color="blue" />
//             <ExpertiseCard icon={<Database />} title="Analytics" desc="Data Processing" color="blue" />
//             <ExpertiseCard icon={<Code />} title="Development" desc="MERN Stack" color="blue" />
//             <ExpertiseCard icon={<FlaskConical />} title="Materials" desc="Physical Metallurgy" color="blue" />
//           </div>
//         </div>
//       </div>

//       {/* SECTION 2: BIO QUOTE & EDUCATION TIMELINE */}
//       <div className="grid lg:grid-cols-2 gap-12">
//         {/* Left: Quote and Quick Links */}
//         <div className="space-y-8">
//           <div className="glass p-8 rounded-3xl border-l-4 border-l-blue-600 italic text-blue-800 font-medium">
//             "My goal is to apply advanced AI techniques to solve complex real-world problems 
//             within innovative technical teams."
//           </div>
//           <div className="flex gap-4">
//             <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm">
//                <Target className="text-blue-600" size={20} />
//                <span className="font-bold text-slate-700 text-sm">AI/ML Focus</span>
//             </div>
//             <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm">
//                <BookOpen className="text-blue-600" size={20} />
//                <span className="font-bold text-slate-700 text-sm">Continuous Learner</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Education Card */}
//         <div className="relative pl-8">
//           {/* Timeline Line */}
//           <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100"></div>
//           {/* Timeline Icon */}
//           <div className="absolute left-[-14px] top-6 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
//             <span className="text-[10px]">🎓</span>
//           </div>

//           <div className="glass p-8 rounded-[2rem] shadow-lg border-white/40">
//             <span className="text-blue-600 font-bold text-sm">2023 — Present</span>
//             <h3 className="text-xl font-extrabold text-slate-900 mt-1">Bachelor of Technology</h3>
//             <p className="text-slate-500 font-medium mb-4">Metallurgical & Materials Engineering</p>
//             <p className="text-sm font-bold text-slate-800 mb-6">VNIT, Nagpur</p>
            
//             <div className="border-t border-slate-100 pt-6">
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Core Foundation</p>
//               <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600">
//                 <span>• Materials Science</span>
//                 <span>• Metallurgy</span>
//                 <span>• Thermodynamics</span>
//                 <span>• Engineering Design</span>
//               </div>
//             </div>

//             <div className="mt-8">
//               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Self-Electives</p>
//               <div className="flex gap-2">
//                 <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">Artificial Intelligence</span>
//                 <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">Machine Learning</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Helper Component for the Grid Icons
// function ExpertiseCard({ icon, title, desc }) {
//   return (
//     <div className="glass p-8 rounded-3xl text-center flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default group shadow-sm border-white/60">
//       <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
//         {icon}
//       </div>
//       <h4 className="font-extrabold text-slate-900 text-sm">{title}</h4>
//       <p className="text-[10px] text-slate-500 font-medium">{desc}</p>
//     </div>
//   );
// }













import React from 'react';
import { BrainCircuit, Database, Code2, Microscope, Lightbulb, Target, BookOpen, Brain,} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h3 className="text-3xl font-bold  mb-16">
          About <span className="text-blue-600">Me</span>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </h3>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
          {/* LEFT HALF: Your 4 Content Sections Stacked */}
            <div className="space-y-6">

                {/* 1. About Me Paragraph */}
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)]">
                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-3">
                    <Lightbulb className="text-blue-600" size={22} /> My Story
                </h4>
                <p className="text-slate-600 leading-relaxed">
                    I am <strong>Surendra Kumar Pandit</strong> , a pre-final year B.Tech student in Metallurgical Engineering at Visvesvaraya National Institute of Technology (VNIT), Nagpur. Alongside my core studies, I have developed a strong interest in Artificial Intelligence, Machine Learning, and Data Analytics.
                </p>
                </div>

                {/* 2. My Interests */}
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)]">
                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-3">
                    <BrainCircuit className="text-blue-600" size={22} /> My Interests
                </h4>

                <p className="text-slate-600 mb-3">
                 My interests lie in areas such as:
                </p>

                <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Data Analytics</li>
                <li>Natural Language Processing</li>
                <li>Transformers</li>
                <li>Large Language Models</li>
                </ul>
                </div>

                {/* 3. Learning Journey */}
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)]">
                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-3">
                    <BookOpen className="text-blue-600" size={22} /> Learning Journey
                </h4>
                <p className="text-slate-600">
                    To deepen my understanding, I pursue online learning through <strong>NPTEL courses</strong>, exploring advanced topics in AI. I actively learn programming and data science concepts and apply them through
                    projects and practical exercises.
                </p>
                </div>

                {/* 4. Goal */}
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)]">
                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-3">
                    <Target className="text-blue-600" size={22} /> The Goal
                </h4>
                <p className="text-slate-600">
                    I am currently looking for opportunities where I can apply my knowledge, learn from experienced professionals, and contribute to innovative projects in AI and data-driven technologies.
                </p>
                </div>
            </div>


          {/* Right Side: Skills Grid - Static */}
          <div className="grid grid-cols-2 gap-6 sticky top-25">
            {[
                { icon: <BrainCircuit className="w-10 h-10 mx-auto mb-4 text-blue-600" />, title: "AI/ML", desc: "Deep Learning & NLP" },
                { icon: <Database className="w-10 h-10 mx-auto mb-4 text-blue-600" />, title: "Analytics", desc: "Data Processing" },
                { icon: <Code2 className="w-10 h-10 mx-auto mb-4 text-blue-600" />, title: "Development", desc: "MERN Stack" },
                { icon: <Microscope className="w-10 h-10 mx-auto mb-4 text-blue-600" />, title: "Materials", desc: "Physical Metallurgy" }
            ].map((skill, index) => (
                <div 
                key={index} 
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl text-center border border-white/40 
                            shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                >
                {skill.icon}
                <h4 className="font-bold text-slate-900">{skill.title}</h4>
                <p className="text-[9px] md:text-[11px] text-slate-500 uppercase tracking-wider font-medium">
                    {skill.desc}
                </p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;








