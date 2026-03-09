


// import React from 'react';
// import { Code2, Globe, Settings, Wrench } from 'lucide-react';

// const Skills = () => {
//   const skillSets = [
//     {
//       title: "Programming Languages",
//       icon: <Code2 className="w-6 h-6 text-white" />,
//       skills: ["C++", "C", "Python", "JavaScript"]
//     },
//     {
//       title: "Web Development",
//       icon: <Globe className="w-6 h-6 text-white" />,
//       skills: ["HTML", "CSS", "React.js", "Node.js", "MERN Stack"]
//     },
//     {
//       title: "Tools & Technologies",
//       icon: <Wrench className="w-6 h-6 text-white" />,
//       skills: ["Postman", "pgAdmin", "Database Management"]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 px-6 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title with custom underline as per image */}
//         <div className="mb-12">
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold  mb-2">Skills</h2>
//             <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
//           </div>
//         </div>

//         {/* Skill Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skillSets.map((set, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-start"
//             >
//               {/* Icon Container with Blue Background */}
//               <div className="flex items-center gap-3 mb-6">
//                 {/* Icon */}
//                 <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg  shadow-blue-100">
//                     {set.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-slate-800">
//                     {set.title}
//                 </h3>
//               </div>

//               {/* Skill Tags */}
//               <div className="flex flex-wrap gap-3">
//                 {set.skills.map((skill) => (
//                   <span 
//                     key={skill} 
//                     className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold transition-colors hover:bg-blue-100"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;





import React from 'react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillSets = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-white" />,
      skills: ["C++", "C", "Python", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-white" />,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6 text-white" />,
      skills: ["Postman", "pgAdmin", "VS Code", "Git", "GitHub"]
    },
    {
      title: "Database Systems",
      icon: <Database className="w-6 h-6 text-white" />,
      skills: ["SQL", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    /* Changed bg-slate-50 to match About section background */
    <section id="skills" className="py-20 px-6 bg-slate-50">
      {/* Changed max-w-7xl to max-w-6xl to match About section width exactly */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title with custom underline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillSets.map((set, index) => (
            <div 
              key={index} 
              /* Updated card style to use the same soft blue shadow from the About cards */
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)] flex flex-col items-start"
            >
              {/* Icon Container with Blue Background */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                    {set.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                    {set.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {set.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold transition-colors hover:bg-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;