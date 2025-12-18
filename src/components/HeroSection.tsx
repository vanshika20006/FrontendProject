import heroImage from "../assets/hero.png";

const BrushUnderline = () => (
  <svg
    className="absolute left-0 -bottom-1 w-full h-[14px] md:h-[20px] pointer-events-none"
    viewBox="0 0 320 20"
    fill="none"
    preserveAspectRatio="none"
  >
    {/* Main thick marker line */}
    <path
      d="M5 14 C60 18 120 10 180 14 C240 18 290 12 315 13"
      stroke="#338CF0"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0.25"
    />
    {/* Secondary highlight accent */}
    <path
      d="M10 15 C70 17 130 11 190 15 C250 19 300 13 310 14"
      stroke="#338CF0"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.15"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 min-h-screen grid-background overflow-hidden bg-[#F9FBFF]">
      
      {/* FIGMA GLOW (Ellipse 35) 
         Positioned absolutely relative to the section to act as a background element.
      */}
      <div
        className="
          absolute 
          hidden lg:block
          top-[245px] 
          right-[-100px] 
          w-[420px] 
          h-[280px] 
          bg-[#348DF0]
          opacity-[0.35]
          blur-[140px] 
          rounded-[100%] 
          pointer-events-none 
          z-0
        "
      />

      <div className="max-w-[1160px] mx-auto relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#6B7280] mb-8 md:mb-12">
          <span className="hover:text-[#338CF0] cursor-pointer transition">Services</span>
          <span className="text-black/20 font-light">/</span>
          <span className="text-black font-semibold">IT Health Check</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#338CF0]/20 bg-[#338CF0]/5 text-[#338CF0] text-[11px] font-bold tracking-[0.05em] mb-6 md:mb-8">
              IT HEALTH CHECK
            </div>

            <h1 className="text-[42px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.05] text-[#001224] mb-8 tracking-tight">
              <span className="relative inline-block">
                Know Exactly
                <BrushUnderline />
              </span>
              <br />
              <span className="relative inline-block">
                Where Your IT
                <BrushUnderline />
              </span>
              <br />
              <span className="relative inline-block">
                Stands.
                <BrushUnderline />
              </span>
            </h1>

            <p className="text-base md:text-[19px] text-[#4B5563] max-w-[480px] mb-10 leading-[1.6]">
              A <span className="font-bold text-[#001224]">2–3 week assessment</span>{" "}
              giving <span className="font-bold text-[#001224]">healthcare leaders clear, actionable insight</span>{" "}
              into their technology—minus the jargon.
            </p>

            {/* CTA */}
            <button className="group flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-b from-[#338CF0] to-[#2B74E8] text-white font-bold text-base shadow-[0_20px_40px_-10px_rgba(52,141,240,0.4)] hover:brightness-110 transition-all duration-300 active:scale-95">
              Take Assessment
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            
            {/* MOBILE GLOW (Smaller, centered) */}
            <div className="absolute lg:hidden w-[250px] h-[250px] bg-[#348DF0]/20 blur-[80px] rounded-full -z-10" />

            {/* IMAGE FRAME - Exact Figma Styling */}
            <div className="relative z-10 w-full max-w-[420px] lg:max-w-[502px] aspect-[502/524] p-[8%] lg:p-[42px] rounded-[36px] lg:rounded-[48px] bg-gradient-to-br from-[#EAF3FF] to-[#CFE3FB] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
              <div className="w-full h-full rounded-[28px] lg:rounded-[36px] bg-white p-[6px] shadow-sm">
                <div className="w-full h-full rounded-[22px] lg:rounded-[30px] overflow-hidden shadow-[0_12px_24px_-8px_rgba(0,0,0,0.15)]">
                  <img
                    src={heroImage}
                    alt="IT Health Check"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import heroImage from "../assets/hero.png";

// const BrushUnderline = () => (
//   <svg
//     className="absolute left-0 -bottom-1 w-full h-[12px] md:h-[18px]"
//     viewBox="0 0 320 18"
//     fill="none"
//     preserveAspectRatio="none"
//   >
//     <path
//       d="M4 12 Q48 17 96 10 T192 12 T316 11"
//       stroke="#338CF0"
//       strokeWidth="8"
//       strokeLinecap="round"
//       opacity="0.2"
//     />
//   </svg>
// );

// const HeroSection = () => {
//   return (
//     <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 min-h-screen grid-background overflow-hidden">
      
//       {/* BACKGROUND BLUE GLOW (Left side subtle glow) */}
//       <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-[#348DF0]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-[1160px] mx-auto relative z-10">

//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-xs md:text-sm text-[#6B7280] mb-8 md:mb-12">
//           <span>Services</span>
//           <span className="text-black/30 text-xs">/</span>
//           <span className="text-black font-semibold">IT Health Check</span>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div className="text-center lg:text-left order-2 lg:order-1">
//             <div className="inline-flex items-center px-4 py-1 rounded-full border border-[#7FB2FF]/30 bg-[#7FB2FF]/10 text-[#338CF0] text-[10px] md:text-xs font-bold tracking-widest mb-6 md:mb-8">
//               IT HEALTH CHECK
//             </div>

//             <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] text-[#001224] mb-6">
//               <span className="relative inline-block mr-2">
//                 Know Exactly
//                 <BrushUnderline />
//               </span>
//               <br className="hidden md:block" />
//               <span className="relative inline-block mr-2">
//                 Where Your IT
//                 <BrushUnderline />
//               </span>
//               <br className="hidden md:block" />
//               <span className="relative inline-block">
//                 Stands.
//                 <BrushUnderline />
//               </span>
//             </h1>

//             <p className="text-base md:text-lg text-[#4B5563] max-w-md mb-10 mx-auto lg:mx-0 leading-relaxed">
//               A <span className="font-bold text-[#001224]">2–3 week assessment</span>{" "}
//               giving <span className="font-bold text-[#001224]">healthcare leaders clear, actionable insight</span>{" "}
//               into their technology—minus the jargon.
//             </p>

//             {/* CTA */}
//             <button className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#338CF0] text-white font-bold text-sm shadow-[0_20px_40px_-10px_rgba(52,141,240,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(52,141,240,0.5)] transition-all duration-300 hover:-translate-y-1">
//               Take Assessment
//               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="5" y1="12" x2="19" y2="12"></line>
//                   <polyline points="12 5 19 12 12 19"></polyline>
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            
//             {/* FIGMA GLOW ELLIPSE */}
//             <div
//               className="
//                 absolute
//                 -right-20
//                 -bottom-10
//                 w-[300px] md:w-[420px] 
//                 h-[200px] md:h-[280px]
//                 bg-[#348DF0]/30
//                 blur-[80px] md:blur-[120px]
//                 rounded-[100%]
//                 pointer-events-none
//                 z-0
//               "
//             />

//             {/* IMAGE FRAME */}
//             <div className="relative z-10 w-full max-w-[350px] md:max-w-[502px] aspect-[502/524] p-[5%] md:p-[42px] rounded-[32px] md:rounded-[42px] bg-[linear-gradient(135deg,#EAF3FF,#CFE3FB)] shadow-inner">
//               <div className="w-full h-full rounded-[24px] md:rounded-[30px] bg-white p-[5px] md:p-[6px] shadow-sm">
//                 <div className="w-full h-full rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
//                   <img
//                     src={heroImage}
//                     alt="IT Health Check"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import heroImage from "../assets/hero.png";

// /* Rough marker-style underline (Figma-like) */
// const BrushUnderline = () => (
//   <svg
//     className="absolute left-0 -bottom-[10px] w-full"
//     height="18"
//     viewBox="0 0 320 18"
//     fill="none"
//     preserveAspectRatio="none"
//   >
//     <path
//       d="M4 12 Q48 17 96 10 T192 12 T316 11"
//       stroke="#7FB2FF"
//       strokeWidth="7"
//       strokeLinecap="round"
//       opacity="0.45"
//     />
//     <path
//       d="M8 13 Q56 15 104 11 T200 13 T312 12"
//       stroke="#7FB2FF"
//       strokeWidth="4"
//       strokeLinecap="round"
//       opacity="0.25"
//     />
//   </svg>
// );

// const HeroSection = () => {
//   return (
//     <section className="relative pt-40 pb-24 px-6 min-h-[90vh] grid-background overflow-hidden">

//       <div className="max-w-[1160px] mx-auto">

//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-10">
//           <span>Services</span>
//           <span className="text-black">&gt;</span>
//           <span className="text-black font-medium">IT Health Check</span>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>
//             <div className="inline-flex items-center px-4 py-[6px] rounded-full border border-[#7FB2FF]/40 bg-[#7FB2FF]/15 text-[#338CF0] text-sm font-medium mb-8">
//               IT HEALTH CHECK
//             </div>

//             <h1 className="text-[56px] font-bold leading-[1.1] text-black mb-6">
//               <span className="relative inline-block">
//                 Know Exactly
//                 <BrushUnderline />
//               </span>
//               <br />
//               <span className="relative inline-block">
//                 Where Your IT
//                 <BrushUnderline />
//               </span>
//               <br />
//               <span className="relative inline-block">
//                 Stands.
//                 <BrushUnderline />
//               </span>
//             </h1>

//             <p className="text-lg text-[#6B7280] max-w-md mb-10">
//               A <span className="font-semibold text-black">2–3 week assessment</span>{" "}
//               giving <span className="font-semibold text-black">healthcare leaders clear, actionable insight</span>{" "}
//               into their technology—minus the jargon.
//             </p>

//             {/* CTA */}
//             <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#338CF0] text-white font-semibold shadow-[0_16px_32px_-6px_rgba(52,141,240,0.35)] hover:brightness-110 transition">
//               Take Assessment
//               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M5 12H19M19 12L13 6M19 12L13 18"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center lg:justify-end">

//             {/* BLUE GLOW (FIGMA ELLIPSE: 420×280, blur 300) */}
//             <div
//               className="
//                 absolute
//                 right-[-140px]
//                 top-[245px]
//                 w-[420px] h-[280px]
//                 bg-[#348DF0]/35
//                 blur-[300px]
//                 rounded-full
//                 pointer-events-none
//               "
//             />

//             {/* IMAGE FRAME */}
//             <div className="relative w-[502px] h-[524px] p-[42px] rounded-[42px] bg-[linear-gradient(135deg,#EAF3FF,#CFE3FB)]">
//               <div className="w-full h-full rounded-[30px] bg-white p-[6px]">
//                 <div className="w-full h-full rounded-[24px] overflow-hidden shadow-[0_6px_12px_rgba(12,12,13,0.1)]">
//                   <img
//                     src={heroImage}
//                     alt="IT Health Check"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
