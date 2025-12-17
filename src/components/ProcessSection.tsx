import React from 'react';

const ProcessSection = () => {
  return (
    /* Main section with the exact background color from Figma (#F0F7FF/F4FAFF) */
    <section className="relative py-32 overflow-hidden bg-[#F4FAFF]">
      
      {/* 1. LINED GRID BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(52, 141, 240, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(52, 141, 240, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }}
      />

      {/* 2. THE BLUE GLOW (Ellipse 34 from Figma) */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '420px',
          height: '280px',
          backgroundColor: '#348DF0',
          opacity: 0.42,
          filter: 'blur(300px)', // Layer blur 300 from Figma
          borderRadius: '100%'
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block mb-6 px-4 py-1 text-xs rounded-full border border-[#348DF0]/30 bg-white/50 text-[#348DF0] font-medium backdrop-blur-sm">
            How it works?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            <span className="text-gray-400">A</span>{" "}
            <span className="relative inline-block">
              Simple, Non-Disruptive 3-Week
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#348DF0]/20 rounded-full" />
            </span>
            <br />
            <span className="relative inline-block mt-2">
              Process
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#348DF0]/20 rounded-full" />
            </span>
          </h2>

          <p className="text-gray-500 font-medium">
            <span className="text-black">Fast, structured,</span> and <span className="text-black">low-friction.</span>
          </p>
        </div>

        {/* FLOW AREA */}
        <div className="relative h-[650px] w-full mt-10">
          
          {/* 3. CURVED CONNECTORS (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 650"
            fill="none"
          >
            {/* Week 1 to Week 2 */}
            <path
              d="M360 160 C 500 160, 500 360, 600 360"
              stroke="black"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              className="opacity-[0.15]"
            />
            {/* Week 2 to Week 3 */}
            <path
              d="M600 360 C 500 360, 500 560, 420 560"
              stroke="black"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              className="opacity-[0.15]"
            />
          </svg>

          {/* WEEK 1 */}
          <ProcessCard
            className="top-[40px] left-[10%] md:left-[15%]"
            week="WEEK 1"
            title="Discovery"
            desc="Interviews, document review, initial scans, early insights."
          />

          {/* WEEK 2 */}
          <ProcessCard
            className="top-[260px] right-[10%] md:right-[15%]"
            week="WEEK 2"
            title="Deep Analysis"
            desc="Security testing, compliance review, infrastructure analysis, vendor/cost evaluation."
          />

          {/* WEEK 3 */}
          <ProcessCard
            className="bottom-[20px] left-[20%] md:left-[25%]"
            week="WEEK 3"
            title="Reporting"
            desc="Executive summary, full findings, risk matrix, remediation roadmap."
          />
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ week, title, desc, className }) => {
  return (
    <div
      className={`
        absolute z-10
        w-[250px]
        bg-white
        rounded-[24px]
        p-1
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        ${className}
      `}
    >
      <div className="relative px-5 pt-7 pb-6">
        {/* TOP DOT */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/80 rounded-full" />

        <p className="text-[10px] font-bold text-gray-500 mb-3 tracking-[0.2em]">
          {week}
        </p>

        {/* INNER BOX */}
        <div className="border border-[#348DF0]/30 rounded-[18px] overflow-hidden">
          <div className="bg-[#EAF3FF] px-4 py-2.5 font-bold text-[14px] text-black border-b border-[#348DF0]/10">
            {title}
          </div>
          <div className="bg-white px-4 py-4 text-[13px] text-gray-500 leading-relaxed font-medium">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;