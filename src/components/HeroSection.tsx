import heroImage from "../assets/hero.png";

/* Rough marker-style underline (Figma-like) */
const BrushUnderline = () => (
  <svg
    className="absolute left-0 -bottom-[10px] w-full"
    height="18"
    viewBox="0 0 320 18"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M4 12 Q48 17 96 10 T192 12 T316 11"
      stroke="#7FB2FF"
      strokeWidth="7"
      strokeLinecap="round"
      opacity="0.45"
    />
    <path
      d="M8 13 Q56 15 104 11 T200 13 T312 12"
      stroke="#7FB2FF"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.25"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 min-h-[90vh] grid-background overflow-hidden">

      <div className="max-w-[1160px] mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-10">
          <span>Services</span>
          <span className="text-black">&gt;</span>
          <span className="text-black font-medium">IT Health Check</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center px-4 py-[6px] rounded-full border border-[#7FB2FF]/40 bg-[#7FB2FF]/15 text-[#338CF0] text-sm font-medium mb-8">
              IT HEALTH CHECK
            </div>

            <h1 className="text-[56px] font-bold leading-[1.1] text-black mb-6">
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

            <p className="text-lg text-[#6B7280] max-w-md mb-10">
              A <span className="font-semibold text-black">2–3 week assessment</span>{" "}
              giving <span className="font-semibold text-black">healthcare leaders clear, actionable insight</span>{" "}
              into their technology—minus the jargon.
            </p>

            {/* CTA */}
            <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#338CF0] text-white font-semibold shadow-[0_16px_32px_-6px_rgba(52,141,240,0.35)] hover:brightness-110 transition">
              Take Assessment
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* BLUE GLOW (FIGMA ELLIPSE: 420×280, blur 300) */}
            <div
              className="
                absolute
                right-[-140px]
                top-[245px]
                w-[420px] h-[280px]
                bg-[#348DF0]/35
                blur-[300px]
                rounded-full
                pointer-events-none
              "
            />

            {/* IMAGE FRAME */}
            <div className="relative w-[502px] h-[524px] p-[42px] rounded-[42px] bg-[linear-gradient(135deg,#EAF3FF,#CFE3FB)]">
              <div className="w-full h-full rounded-[30px] bg-white p-[6px]">
                <div className="w-full h-full rounded-[24px] overflow-hidden shadow-[0_6px_12px_rgba(12,12,13,0.1)]">
                  <img
                    src={heroImage}
                    alt="IT Health Check"
                    className="w-full h-full object-cover"
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
