




// import React from 'react';
// import { Cpu, MessageSquare, HardDrive, ArrowRight, Github, MessageCircle } from 'lucide-react';

// const Projects = () => {
//   const projectList = [
//     {
//       title: "Text Generator using NLP",
//       desc: "Developed a text generation model using N-gram language modeling and temperature scaling. Explores how statistical models generate human-like sequences.",
//       tags: ["PYTHON", "NLP", "LSTM", "STREAMLIT"],
//       icon: <Cpu className="w-20 h-20 text-white/50" />,
//       link: "#",
//       color: "from-blue-400 to-blue-600"
//     },
//     // {
//     //   title: "Sentiment Analysis",
//     //   desc: "An NLP project developed in Google Colab to classify text sentiment using machine learning datasets.",
//     //   tags: ["PYTHON", "NLP", "SCIKIT-LEARN"],
//     //   icon: <MessageSquare className="w-20 h-20 text-white/50" />,
//     //   link: "#",
//     //   color: "from-indigo-400 to-indigo-600"
//     // },
//     {
//     title: "Surenext Chat App",
//     desc: "A real-time chat application that allows users to communicate instantly with live messaging and online user tracking.",
//     tags: ["REACT", "NODE.JS", "EXPRESS", "SOCKET.IO", "MONGODB"],
//     icon: <MessageCircle className="w-20 h-20 text-white/50" />,
//     link: "#",
//     color: "from-indigo-400 to-indigo-600"
//     }
//     // {
//     //   title: "File Management System",
//     //   desc: "A CLI-based application designed for efficient file system management and organization.",
//     //   tags: ["C++", "DSA", "SYSTEMS"],
//     //   icon: <HardDrive className="w-20 h-20 text-white/50" />,
//     //   link: "#",
//     //   color: "from-cyan-400 to-cyan-600"
//     // }
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-slate-50">
//       {/* Width set to max-w-6xl to match About and Skills exactly */}
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Heading with the blue underline style */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
//           <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectList.map((project, index) => (
//             <div 
//               key={index} 
//               /* Updated card style to match About/Skills glassmorphism and soft blue shadow */
//               className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)] transition-transform hover:-translate-y-2 duration-300"
//             >
//               {/* Project Header Image/Gradient */}
//               <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
//                 {project.icon}
//               </div>

//               {/* Project Details */}
//               <div className="p-8 flex-grow">
//                 <h4 className="font-bold text-xl mb-3 text-slate-800">{project.title}</h4>
//                 <p className="text-slate-600 text-sm mb-6 leading-relaxed">
//                   {project.desc}
//                 </p>

//                 {/* Tech Tags */}
//                 <div className="flex flex-wrap gap-2 mb-6 text-[10px] font-black text-blue-600 uppercase tracking-widest">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-2 py-1 bg-blue-50 rounded-md border border-blue-100">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Link */}
//                 <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
//                   <a 
//                     href={project.link} 
//                     className="inline-flex items-center text-sm font-bold text-blue-600 hover:gap-2 transition-all"
//                   >
//                     View Project <ArrowRight className="w-4 h-4 ml-1" />
//                   </a>
//                   <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
//                     <Github size={18} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;













import React from 'react';
import { Cpu, MessageCircle, ArrowRight, Github, ExternalLink, Link } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      title: "Text Generator using NLP",
      desc: "Developed a text generation model using N-gram language modeling and temperature scaling. Explores how statistical models generate human-like sequences.",
      tags: ["PYTHON", "NLP", "LSTM", "STREAMLIT"],
      icon: <Cpu className="w-20 h-20 text-white/50" />,
      liveLink: "#",   // Link to the live project/demo
      githubLink: "https://colab.research.google.com/drive/1g7ds5KHewTJfa0t2UtCZhDJRlHFkB6x_?usp=sharing", // Link to the GitHub repository
      color: "from-blue-400 to-blue-600"
    },
    {
    title: "URL Shortener",
    desc: "A backend-focused application that converts long URLs into condensed, manageable links using hashing algorithms and custom aliasing.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB","REACT.JS", "NPM"],
    icon: <Link className="w-20 h-20 text-white/50" />, // Make sure to import 'Link' from lucide-react
    liveLink: "#",   
    githubLink: "https://github.com/panditsurendra/URL-Shortner", 
    color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Surenext Chat App",
      desc: "A real-time chat application that allows users to communicate instantly with live messaging and online user tracking.",
      tags: ["REACT", "NODE.JS", "EXPRESS", "SOCKET.IO", "MONGODB"],
      icon: <MessageCircle className="w-20 h-20 text-white/50" />,
      liveLink: "https://surenex-chat-app-client.onrender.com/",
      githubLink: "https://github.com/panditsurendra/Surenex-Chat-App",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      {/* Container width matches About and Skills */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with blue underline style */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              /* Soft blue diffuse boundary shadow */
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)] transition-all hover:-translate-y-2 duration-300"
            >
              {/* Project Header Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                {project.icon}
              </div>

              {/* Project Details */}
              <div className="p-8 flex-grow">
                <h4 className="font-bold text-xl mb-3 text-slate-800">{project.title}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 rounded-md border border-blue-100">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* TWO LINKS: Live Project and GitHub */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <a 
                    href={project.liveLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:gap-2 transition-all"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;