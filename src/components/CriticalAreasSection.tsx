import { Shield, FileText, Settings, Cog, TrendingUp, DollarSign } from "lucide-react";

const IconWithRadiance = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
    <svg className="absolute inset-0 w-full h-full scale-125 md:scale-150" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="34" fill="none" stroke="#C8DCE8" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
    <div className="bg-[#D6E8F5] rounded-2xl md:rounded-3xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-sm">
      {children}
    </div>
  </div>
);

const cardOverlay = "absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(52,141,240,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,141,240,0.08)_1px,transparent_1px)] bg-[size:24px_24px]";

const CriticalAreasSection = () => {
  // Adjusted padding and alignment for mobile vs desktop
  const card =
    "relative bg-white rounded-[24px] px-6 py-8 md:px-9 md:py-7 min-h-[160px] md:min-h-[180px] flex flex-col md:flex-row justify-between items-start md:items-center overflow-hidden shadow-[0_4px_4px_rgba(12,12,13,0.05),0_16px_32px_rgba(12,12,13,0.10)]";

  return (
    <section className="relative py-16 md:py-28 px-6 overflow-hidden bg-[#F4FAFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        {/* BADGE */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center h-[30px] px-[16px] text-sm font-medium rounded-[30px] text-[#348DF0] bg-[rgba(52,141,240,0.12)] border border-[rgba(52,141,240,0.5)]">
            What you get
          </span>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="relative text-3xl md:text-[44px] font-bold text-black mb-4 inline-block leading-tight">
            <span className="relative inline-block">
              #6 Critical Areas
              <span className="absolute left-0 -bottom-[4px] w-full h-[4px] md:h-[6px] bg-[#7FB2FF]/70 rounded-full" />
            </span>{" "}
            <span className="text-[#9CA3AF] font-normal">We</span>{" "}
            <span className="relative inline-block">
              Examine.
              <span className="absolute left-0 -bottom-[4px] w-full h-[4px] md:h-[6px] bg-[#7FB2FF]/70 rounded-full" />
            </span>
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-black">Every critical part</span> of your{" "}
            <span className="font-semibold text-black">IT environment</span> reviewed and{" "}
            <span className="font-semibold text-black">explained clearly.</span>
          </p>
        </div>

        {/* GRID – TOP 3 CARDS */}
        <div className="grid grid-cols-12 gap-6">
          {/* Security */}
          <div className="col-span-12 md:col-span-6">
            <div className={card}>
              <div className={cardOverlay} />
              <div className="relative z-10 max-w-full md:max-w-[70%] flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Security</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap.
                </p>
              </div>
              <IconWithRadiance><Shield className="w-8 h-8 md:w-10 md:h-10 text-black" /></IconWithRadiance>
            </div>
          </div>

          {/* Compliance */}
          <div className="col-span-12 md:col-span-6">
            <div className={card}>
              <div className={cardOverlay} />
              <div className="relative z-10 max-w-full md:max-w-[70%] flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Compliance</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We assess your HIPAA compliance status and evaluate your audit readiness.
                </p>
              </div>
              <IconWithRadiance><FileText className="w-8 h-8 md:w-10 md:h-10 text-black" /></IconWithRadiance>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="col-span-12">
            <div className={`${card} md:min-h-[220px] md:px-16`}>
              <div className={cardOverlay} />
              <div className="relative z-10 max-w-full md:max-w-[50%] flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Infrastructure</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We examine system health, identify legacy risks, and analyze scalability for growth.
                </p>
              </div>
              <div className="relative z-10 md:mr-10">
                <IconWithRadiance>
                  <Settings className="w-8 h-8 md:w-10 md:h-10 text-black" />
                </IconWithRadiance>
              </div>
            </div>
          </div>
        </div>

        {/* ASYMMETRIC GRID – LAST 3 CARDS */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Operations - Vertical on Desktop, Stacked on Mobile */}
          <div className="col-span-12 md:col-span-6 md:row-span-2">
            <div className={`${card} h-full !flex-col !items-start !justify-between md:!justify-end pb-8 md:pb-12`}>
              <div className={cardOverlay} />
              <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-6 md:mb-0">
                <IconWithRadiance><Cog className="w-8 h-8 md:w-10 md:h-10 text-black" /></IconWithRadiance>
              </div>
              <div className="relative z-10 max-w-full md:max-w-[90%] flex flex-col gap-3">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Operations</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We evaluate IT team capabilities, incident management, and disaster recovery readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Cost */}
          <div className="col-span-12 md:col-span-6">
            <div className={card}>
              <div className={cardOverlay} />
              <div className="relative z-10 max-w-full md:max-w-[70%] flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Cost</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We review your technology spending to identify cost optimization opportunities.
                </p>
              </div>
              <IconWithRadiance><DollarSign className="w-8 h-8 md:w-10 md:h-10 text-black" /></IconWithRadiance>
            </div>
          </div>

          {/* Strategy */}
          <div className="col-span-12 md:col-span-6">
            <div className={card}>
              <div className={cardOverlay} />
              <div className="relative z-10 max-w-full md:max-w-[70%] flex flex-col gap-2 mb-6 md:mb-0">
                <h3 className="text-xl md:text-[22px] font-bold text-black">Strategy</h3>
                <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-[1.6]">
                  We assess how your IT roadmap aligns with business goals and identify capability gaps.
                </p>
              </div>
              <IconWithRadiance><TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-black" /></IconWithRadiance>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalAreasSection;






// /* ================= SECTION ================= */
// const CriticalAreasSection = () => {
//   return (
//     <section className="relative py-28 px-6 overflow-hidden bg-[#F4FAFF]">

//       {/* DOT BACKGROUND */}
//       <div
//         className="
//           absolute inset-0
//           bg-[radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)]
//           bg-[size:18px_18px]
//           [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]
//           [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]
//           pointer-events-none
//         "
//       />

//       <div className="relative max-w-[1100px] mx-auto">
// <div className="flex justify-center mb-6">
//   <span
//     className="
//       inline-flex items-center justify-center
//       h-[30px]
//       px-[16px]
//       text-sm font-medium
//       rounded-[30px]
//       text-[#348DF0]
//       bg-[rgba(52,141,240,0.12)]
//       border border-[rgba(52,141,240,0.5)]
//     "
//   >
//     What you get
//   </span>
// </div>

//         {/* HEADER */}
//         <div className="text-center mb-20">
          

//           <h2 className="relative text-[44px] font-bold text-black mb-4 inline-block">
//             #6 Critical Areas{" "}
//             <span className="absolute left-0 -bottom-[6px] w-[345px] h-[6px] bg-[#7FB2FF]/70 rounded-full" />
//             <span className="text-[#9CA3AF] font-normal">We</span>{" "}
//             <span className="relative inline-block">
//               Examine.
//               {/* UNDERLINE — IMPORTANT */}
//               <span className="absolute left-0 -bottom-[6px] w-full h-[6px] bg-[#7FB2FF]/70 rounded-full" />
//             </span>
//           </h2>

//           <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
//             <span className="font-semibold text-black">
//               Every critical part
//             </span>{" "}
//             of your{" "}
//             <span className="font-semibold text-black">
//               IT environment
//             </span>{" "}
//             reviewed and{" "}
//             <span className="font-semibold text-black">
//               explained clearly.
//             </span>
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-12 gap-6">

//           <div className="col-span-6">
//             <AreaCard
//               title="Security"
//               desc="We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap."
//               icon={Shield}
//             />
//           </div>

//           <div className="col-span-6">
//             <AreaCard
//               title="Compliance"
//               desc="We assess your HIPAA compliance status and evaluate your audit readiness."
//               icon={FileText}
//             />
//           </div>

//           <div className="col-span-12">
//             <AreaCard
//               title="Infrastructure"
//               desc="We examine system health, identify legacy risks, and analyze scalability for growth."
//               icon={Settings}
//               wide
//             />
//           </div>

//           <div className="col-span-6">
//             <AreaCard
//               title="Operations"
//               desc="We evaluate IT team capabilities, incident management, and disaster recovery readiness."
//               icon={Cog}
//             />
//           </div>

//           <div className="col-span-6">
//             <AreaCard
//               title="Cost"
//               desc="We review your technology spending to identify cost optimization opportunities."
//               icon={DollarSign}
//             />
//           </div>

//           <div className="col-span-12">
//             <AreaCard
//               title="Strategy"
//               desc="We assess how your IT roadmap aligns with business goals and identify capability gaps."
//               icon={TrendingUp}
//               wide
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CriticalAreasSection;
