import { Github, Linkedin, Code2, Download } from 'lucide-react';
export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter text-[#4f46e5] md:text-blue-600">
          {/* S.K.P */}
        </div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* High-Contrast Resume Button */}
        {/* <button className="bg-[#2563eb] text-white px-8 py-2.5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
          Resume
        </button> */}
        <a 
            href="/resume_AI_ML_surendra_kumar.pdf" 
            download
            className="flex items-center gap-2 px-8 py-2.5 bg-[#2563eb] text-white 
             rounded-full text-lg font-bold
             shadow-lg shadow-blue-100
             hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-200
             transition-all duration-300 active:scale-95"
                    >
            <Download size={18} />
            Resume
        </a>
      </div>
    </nav>
  );
}





// export default function Navbar() {
//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Education", href: "#education" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
//       <div className="w-full px-6 md:px-12 py-3.5 flex justify-between items-center">
//         <div className="font-bold text-2xl tracking-tighter text-blue-600">S.K.P</div>
        
//         <div className="hidden lg:flex items-center gap-7">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* High-Contrast Resume Pill from Image 2 */}
//         <button className="bg-[#2563eb] text-white px-7 py-2.5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
//           Resume
//         </button>
//       </div>
//     </nav>
//   );
// }
