import {
  Shield,
  FileText,
  Settings,
  Cog,
  TrendingUp,
  DollarSign,
} from "lucide-react";

/* ================= CARD ================= */
const AreaCard = ({ title, desc, icon: Icon, wide = false }) => {
  return (
    <div
      className={`
        relative bg-white
        rounded-[24px]
        px-9 py-7
        min-h-[180px]
        overflow-hidden
        shadow-[0_4px_4px_rgba(12,12,13,0.05),0_16px_32px_rgba(12,12,13,0.10)]
        ${wide ? "col-span-12 min-h-[160px]" : ""}
      `}
    >
      {/* INNER GRID */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(52,141,240,0.08)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(52,141,240,0.08)_1px,transparent_1px)]
          bg-[size:24px_24px]
          pointer-events-none
        "
      />

      {/* SOFT DASHED FLOW */}
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M5 20 H95
             M5 80 H95
             M20 5 V95
             M80 5 V95"
          stroke="#b2d5e1ff"
          strokeWidth="0.5"
          strokeDasharray="10"
          opacity="0.1"
        />
      </svg>

      {/* ICON */}
      <div className="absolute top-6 right-6 z-10">
        <div className="w-[74px] h-[74px] rounded-[20px] bg-[#CFE3FB] flex items-center justify-center shadow-[0_6px_12px_rgba(12,12,13,0.10)]">
          <Icon className="w-7 h-7 text-black" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[70%] flex flex-col justify-center h-full pt-4">
        <h3 className="text-[24px] font-bold text-black mb-2">
          {title}
        </h3>
        <p className="text-[15px] leading-[1.6] text-[#6B7280]">
          {desc}
        </p>
      </div>
    </div>
  );
};




/* ================= SECTION ================= */
const CriticalAreasSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#F4FAFF]">

      {/* DOT BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)]
          bg-[size:18px_18px]
          [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]
          [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]
          pointer-events-none
        "
      />

      <div className="relative max-w-[1100px] mx-auto">
<div className="flex justify-center mb-6">
  <span
    className="
      inline-flex items-center justify-center
      h-[30px]
      px-[16px]
      text-sm font-medium
      rounded-[30px]
      text-[#348DF0]
      bg-[rgba(52,141,240,0.12)]
      border border-[rgba(52,141,240,0.5)]
    "
  >
    What you get
  </span>
</div>

        {/* HEADER */}
        <div className="text-center mb-20">
          

          <h2 className="relative text-[44px] font-bold text-black mb-4 inline-block">
            #6 Critical Areas{" "}
            <span className="absolute left-0 -bottom-[6px] w-[345px] h-[6px] bg-[#7FB2FF]/70 rounded-full" />
            <span className="text-[#9CA3AF] font-normal">We</span>{" "}
            <span className="relative inline-block">
              Examine.
              {/* UNDERLINE — IMPORTANT */}
              <span className="absolute left-0 -bottom-[6px] w-full h-[6px] bg-[#7FB2FF]/70 rounded-full" />
            </span>
          </h2>

          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            <span className="font-semibold text-black">
              Every critical part
            </span>{" "}
            of your{" "}
            <span className="font-semibold text-black">
              IT environment
            </span>{" "}
            reviewed and{" "}
            <span className="font-semibold text-black">
              explained clearly.
            </span>
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-6">
            <AreaCard
              title="Security"
              desc="We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap."
              icon={Shield}
            />
          </div>

          <div className="col-span-6">
            <AreaCard
              title="Compliance"
              desc="We assess your HIPAA compliance status and evaluate your audit readiness."
              icon={FileText}
            />
          </div>

          <div className="col-span-12">
            <AreaCard
              title="Infrastructure"
              desc="We examine system health, identify legacy risks, and analyze scalability for growth."
              icon={Settings}
              wide
            />
          </div>

          <div className="col-span-6">
            <AreaCard
              title="Operations"
              desc="We evaluate IT team capabilities, incident management, and disaster recovery readiness."
              icon={Cog}
            />
          </div>

          <div className="col-span-6">
            <AreaCard
              title="Cost"
              desc="We review your technology spending to identify cost optimization opportunities."
              icon={DollarSign}
            />
          </div>

          <div className="col-span-12">
            <AreaCard
              title="Strategy"
              desc="We assess how your IT roadmap aligns with business goals and identify capability gaps."
              icon={TrendingUp}
              wide
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CriticalAreasSection;
