import React from 'react';
import { ArrowRight, Check } from "lucide-react";

const deliverables = [
  {
    title: "Executive Summary",
    description: "Top risks, priorities, recommendations.",
  },
  {
    title: "Scorecard",
    description: "Security, compliance, infrastructure, operations.",
  },
  {
    title: "Full Findings Report",
    description: "Detailed analysis and evidence.",
  },
  {
    title: "90-Day Roadmap",
    description: "Milestones, KPIs, responsibilities.",
  },
];

const DeliverablesSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-[#F0F7FF]">
      {/* 1. GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 141, 240, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 141, 240, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. BACKGROUND GLOWS (Updated with your specific code) */}
      <div className="absolute top-[40%] md:bottom-[33%] right-[75%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#348DF0] opacity-30 md:opacity-30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[65%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#348DF0] opacity-15 md:opacity-25 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />


      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 bg-[#EAF3FF] border border-[#348DF0]/20 rounded-full text-[#348DF0] text-xs font-bold tracking-wide mb-6 md:mb-8">
              Your deliverables
            </div>

            <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
              <span className="text-gray-400">Clear</span>
              <br />
              <span className="text-black relative">
                Documentation
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-[#348DF0]/30 blur-[1px] rounded-full" />
              </span>
              <br />
              <span className="text-gray-400">You</span>{" "}
              <span className="text-black relative">
                Can Act On.
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-[4px] bg-[#348DF0]/30 blur-[1px] rounded-full" />
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-10 font-medium max-w-md">
              Fast, <span className="text-black font-bold">structured,</span> and <span className="text-black font-bold">low-friction.</span>
            </p>

            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#348DF0] hover:bg-[#2a7bd1] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg group">
              Book an Assessment
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* RIGHT - TIMELINE LIST */}
          <div className="relative mt-8 lg:mt-0">
            {/* THE VERTICAL LINE */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#348DF0]/20" />

            <div className="space-y-6 md:space-y-8">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start md:items-center gap-4 md:gap-8 group">
                  {/* ICON WITH DOUBLE RING */}
                  <div className="relative z-10 flex-shrink-0 mt-2 md:mt-0">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-[#348DF0] flex items-center justify-center shadow-sm">
                      <Check className="w-5 h-5 text-black" strokeWidth={3} />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#348DF0]/10 -m-1.5" />
                  </div>

                  {/* PILL CARD */}
                  <div className="flex-1 bg-white border-[2px] md:border-[2.5px] border-[#348DF0]/40 rounded-[24px] md:rounded-[28px] px-6 md:px-8 py-5 md:py-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                    <h3 className="font-bold text-black text-lg md:text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;

// import React from 'react';
// import { ArrowRight, Check } from "lucide-react";

// const deliverables = [
//   {
//     title: "Executive Summary",
//     description: "Top risks, priorities, recommendations.",
//   },
//   {
//     title: "Scorecard",
//     description: "Security, compliance, infrastructure, operations.",
//   },
//   {
//     title: "Full Findings Report",
//     description: "Detailed analysis and evidence.",
//   },
//   {
//     title: "90-Day Roadmap",
//     description: "Milestones, KPIs, responsibilities.",
//   },
// ];

// const DeliverablesSection = () => {
//   return (
//     <section className="relative py-24 px-6 overflow-hidden bg-[#F0F7FF]">
//       {/* 1. GRID BACKGROUND */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(52, 141, 240, 0.08) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(52, 141, 240, 0.08) 1px, transparent 1px)
//           `,
//           backgroundSize: '40px 40px',
//         }}
//       />

//       {/* 2. BACKGROUND GLOW */}
//       <div 
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//         style={{
//           width: '600px',
//           height: '400px',
//           backgroundColor: '#348DF0',
//           opacity: 0.15,
//           filter: 'blur(120px)',
//           borderRadius: '100%'
//         }}
//       />

//       <div className="container max-w-6xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
//           {/* LEFT CONTENT */}
//           <div>
//             <div className="inline-block px-4 py-1.5 bg-[#EAF3FF] border border-[#348DF0]/20 rounded-full text-[#348DF0] text-xs font-bold tracking-wide mb-8">
//               Your deliverables
//             </div>
            
//             <h2 className="text-[44px] lg:text-[56px] font-bold leading-[1.1] mb-8 tracking-tight">
//               <span className="text-gray-400">Clear</span>
//               <br />
//               <span className="text-black relative">
//                 Documentation
//                 <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#348DF0]/30 blur-[1px] rounded-full" />
//               </span>
//               <br />
//               <span className="text-gray-400">You</span>{" "}
//               <span className="text-black relative">
//                 Can Act On.
//                 <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#348DF0]/30 blur-[1px] rounded-full" />
//               </span>
//             </h2>

//             <p className="text-lg text-gray-500 mb-10 font-medium">
//               Fast, <span className="text-black font-bold">structured,</span> and <span className="text-black font-bold">low-friction.</span>
//             </p>

//             <button className="inline-flex items-center gap-3 bg-[#348DF0] hover:bg-[#2a7bd1] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg group">
//               Book an Assessment
//               <div className="bg-white/20 rounded-full p-1">
//                 <ArrowRight className="w-4 h-4" />
//               </div>
//             </button>
//           </div>

//           {/* RIGHT - TIMELINE LIST */}
//           <div className="relative">
//             {/* THE VERTICAL LINE */}
//             <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#348DF0]/20" />

//             <div className="space-y-8">
//               {deliverables.map((item, index) => (
//                 <div key={index} className="flex items-center gap-8 group">
//                   {/* ICON WITH DOUBLE RING */}
//                   <div className="relative z-10 flex-shrink-0">
//                     <div className="w-11 h-11 rounded-full bg-white border-2 border-[#348DF0] flex items-center justify-center shadow-sm">
//                       <Check className="w-5 h-5 text-black" strokeWidth={3} />
//                     </div>
//                     <div className="absolute inset-0 rounded-full bg-[#348DF0]/10 -m-1.5" />
//                   </div>

//                   {/* PILL CARD WITH BORDER - Fixed as per Figma */}
//                   <div className="flex-1 bg-white border-[2.5px] border-[#348DF0]/40 rounded-[28px] px-8 py-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
//                     <h3 className="font-bold text-black text-xl mb-1">{item.title}</h3>
//                     <p className="text-gray-500 font-medium text-sm">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeliverablesSection;