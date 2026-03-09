
import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    /* Mobile: absolute & bg-transparent to merge with Hero
       Desktop (lg): fixed, bg-white/80, and border-b for the standard look
    */
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent lg:bg-white/80 lg:backdrop-blur-md lg:border-b lg:border-slate-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - S.K.P */}
        <div className="font-bold text-2xl tracking-tighter text-blue-600">
          {/* S.K.P */}
        </div>
        
        {/* Desktop Nav Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button - Desktop */}
        <div className="hidden lg:block">
          <a 
            href="/resume_AI_ML_surendra_kumar.pdf" 
            download
            className="flex items-center gap-2 px-8 py-2.5 bg-[#2563eb] text-white 
             rounded-full text-lg font-bold shadow-lg shadow-blue-100
             hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button - Darker text for visibility on transparent bg */}
        <button 
          className="lg:hidden text-slate-800 focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Always needs a background for readability */}
      <div className={`lg:hidden bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-b border-slate-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume_AI_ML_surendra_kumar.pdf" 
            download
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] text-white 
             rounded-2xl text-lg font-bold shadow-lg shadow-blue-100 mt-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}










// import { Github, Linkedin, Code2, Download } from 'lucide-react';
// export default function Navbar() {
//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     // { name: "Education", href: "#education" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
//       <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="font-bold text-2xl tracking-tighter text-[#4f46e5] md:text-blue-600">
//           {/* S.K.P */}
//         </div>
        
//         {/* Nav Links */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* High-Contrast Resume Button */}
//         {/* <button className="bg-[#2563eb] text-white px-8 py-2.5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
//           Resume
//         </button> */}
//         <a 
//             href="/resume_AI_ML_surendra_kumar.pdf" 
//             download
//             className="flex items-center gap-2 px-8 py-2.5 bg-[#2563eb] text-white 
//              rounded-full text-lg font-bold
//              shadow-lg shadow-blue-100
//              hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-200
//              transition-all duration-300 active:scale-95"
//                     >
//             <Download size={18} />
//             Resume
//         </a>
//       </div>
//     </nav>
//   );
// }



