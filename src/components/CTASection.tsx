import React from "react";

const CTASection = () => {
  return (
    /* OUTER SECTION */
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F0F7FF 0%, #00AAFF 55%, #001224 100%)",
      }}
    >
      {/* BACKGROUND DOT GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(52,141,240,0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.15,
        }}
      />

      {/* LEFT BLUE GLOW */}
      <div
        className="absolute top-[25%] left-[-8%] pointer-events-none"
        style={{
          width: "420px",
          height: "280px",
          background: "#348DF0",
          opacity: 0.42,
          filter: "blur(300px)",
          borderRadius: "50%",
        }}
      />

      {/* CTA WRAPPER */}
      <div className="max-w-[1280px] mx-auto px-[100px] py-[64px] relative z-10">
        <div
          className="relative rounded-[40px] flex flex-col items-center justify-center text-center"
          style={{
            minHeight: "380px", // ✅ Reduced height
            background: "rgba(52,141,240,0.72)",
            backdropFilter: "blur(60px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {/* INTERNAL DOT GRID */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.35,
              maskImage:
                "radial-gradient(circle at center, black 55%, transparent 85%)",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-[760px] px-6">
            {/* PILL */}
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full text-xs font-semibold tracking-widest uppercase text-white/90 bg-white/10 border border-white/20">
              From a CEO
            </div>

            {/* HEADING */}
            <h2 className="text-white font-bold text-[44px] leading-[1.1] mb-4">
              Ready to bring clarity to your IT?
            </h2>

            {/* SUBTEXT */}
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Let’s talk about your challenges, identify your risks, and give you
              a clear path forward — no jargon, no pressure.
            </p>

            {/* BUTTON */}
            <button className="px-10 py-4 rounded-full bg-white text-[#348DF0] font-semibold text-base shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:bg-white/95 active:scale-95 transition">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
