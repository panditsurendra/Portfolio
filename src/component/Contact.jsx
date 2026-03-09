import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Large Glass Container */}
        <div className="bg-white/80 backdrop-blur-md p-6 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)] grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Side: Info - Now forced to align left and handle long text */}
          <div className="w-full flex flex-col items-start text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 self-center md:self-start">
              Let's <span className="text-blue-600">Connect</span>
            </h3>
            <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed self-center md:self-start text-center md:text-left">
              I'm currently looking for internship opportunities in AI and Data Science. Let's build something innovative together!
            </p>
            
            {/* Contact Entries - Icon-aligned and shifted left */}
            <div className="space-y-5 md:space-y-6 w-full">
              {/* Personal Email */}
              <a href="mailto:skpbhn196@gmail.com" className="flex items-center gap-4 group cursor-pointer w-full">
                {/* Fixed width for icon containers ensures perfect vertical alignment */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110">
                    <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <div className="min-w-0">
                    <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Personal Email</p>
                    <span className="block font-bold text-slate-700 text-sm md:text-base transition-colors group-hover:text-blue-600 truncate">
                    skpbhn196@gmail.com
                    </span>
                </div>
              </a>

              {/* College Email - Adjusted to prevent overflow */}
              <a href="mailto:bt23mme068@students.vnit.ac.in" className="flex items-center gap-4 group cursor-pointer w-full">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110">
                    <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">College Email</p>
                    {/* 'truncate' prevents the long address from pushing icons right */}
                    <span className="block font-bold text-slate-700 text-sm md:text-base transition-colors group-hover:text-blue-600 truncate">
                    bt23mme068@students.vnit.ac.in
                    </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/surendra-kumar-pandit-9b806b2b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-full">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white border border-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110">
                    <Linkedin size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                    <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Network</p>
                    <span className="font-bold text-slate-700 text-sm md:text-base transition-colors group-hover:text-blue-600">
                    Surendra Kumar Pandit
                    </span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Side: Form (Remains centered in mobile box) */}
          <form action="https://formspree.io/f/mqeyarnw" method="POST" className="space-y-4 pt-6 md:pt-0 w-full flex flex-col items-center">
            <div className="space-y-4 w-full">
              <input name="name" type="text" required placeholder="Your Name" className="w-full bg-white/50 border border-slate-200 p-3.5 md:p-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm md:text-base" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full bg-white/50 border border-slate-200 p-3.5 md:p-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm md:text-base" />
              <textarea name="message" required placeholder="How can I help you?" rows="4" className="w-full bg-white/50 border border-slate-200 p-3.5 md:p-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 font-medium resize-none text-sm md:text-base"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 md:py-4 rounded-xl md:rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group active:scale-[0.98]">
              Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;







// import React from 'react';
// import { Mail, Linkedin, Send } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-6 bg-slate-50">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Main Section Header with blue underline */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold mb-2">Contact</h2>
//           <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
//         </div>

//         {/* Large Glass Container with Soft Blue Shadow */}
//         <div className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/40 shadow-[0_8px_30px_rgb(219,234,254)] grid md:grid-cols-2 gap-12">
          
//           {/* Left Side: Info */}
//           <div>
//             <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
//               Let's <span className="text-blue-600">Connect</span>
//             </h3>
//             <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//               I'm currently looking for internship opportunities in AI and Data Science. Let's build something innovative together!
//             </p>
            
//             <div className="space-y-6">
//               {/* Personal Email Entry - Clickable */}
//               <a 
//                 href="mailto:skpbhn196@gmail.com" 
//                 className="flex items-center gap-4 group cursor-pointer"
//               >
//                 <div className="w-12 h-12 bg-white border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200">
//                     <Mail size={20} />
//                 </div>
//                 <div>
//                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Personal Email</p>
//                     <span className="font-bold text-slate-700 transition-colors group-hover:text-blue-600">
//                     skpbhn196@gmail.com
//                     </span>
//                 </div>
//               </a>

//                 {/* College Email Entry - Clickable */}
//               <a 
//                 href="mailto:bt23mme068@students.vnit.ac.in" 
//                 className="flex items-center gap-4 group cursor-pointer"
//               >
//                 <div className="w-12 h-12 bg-white border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200">
//                     <Mail size={20} />
//                 </div>
//                 <div>
//                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest">College Email</p>
//                     <span className="font-bold text-slate-700 transition-colors group-hover:text-blue-600">
//                     bt23mme068@students.vnit.ac.in
//                     </span>
//                 </div>
//               </a>

//                 {/* LinkedIn Entry  */}
//                 <a 
//                     href="https://www.linkedin.com/in/surendra-kumar-pandit-9b806b2b3/" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="flex items-center gap-4 group cursor-pointer"
//                 >
//                     <div className="w-12 h-12 bg-white border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200">
//                         <Linkedin size={20} />
//                     </div>
//                     <div>
//                         <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Network</p>
//                         {/* Adding your name or 'LinkedIn' here makes it even clearer for recruiters */}
//                         <span className="font-bold text-slate-700 transition-colors group-hover:text-blue-600">
//                         Surendra Kumar Pandit
//                         </span>
//                     </div>
//                 </a>

//             </div>
//           </div>
          
//           {/* Right Side: Form */}
//           <form 
//             action="https://formspree.io/f/mqeyarnw" // Replace with your Formspree ID
//             method="POST"
//             className="space-y-4"
//           >
//             <div className="space-y-4">
//               <input 
//                 name="name" // Important: Formspree uses the 'name' attribute
//                 type="text" 
//                 required
//                 placeholder="Your Name" 
//                 className="w-full bg-white/50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium"
//               />
//               <input 
//                 name="email" 
//                 type="email" 
//                 required
//                 placeholder="Email Address" 
//                 className="w-full bg-white/50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium"
//               />
//               <textarea 
//                 name="message" 
//                 required
//                 placeholder="How can I help you?" 
//                 rows="4" 
//                 className="w-full bg-white/50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium resize-none"
//               ></textarea>
//             </div>
            
//             <button 
//               type="submit"
//               className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group active:scale-[0.98]"
//             >
//               Send Message
//               <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;







