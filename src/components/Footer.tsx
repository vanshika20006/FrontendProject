import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="pt-12 pb-8 px-6"   // ⬅️ more compact
      style={{
        background: "linear-gradient(180deg, #001224 0%, #00050A 100%)",
      }}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-12">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-5">
              <img
                src={logo}
                alt="Wendigo Advisors"
                className="h-8 w-auto object-contain opacity-90"
              />
            </div>

            <p className="text-white/60 text-[14px] leading-[1.6] mb-5 max-w-[300px] font-light">
              Fractional CIO Services & Strategic IT<br />
              Advisory for Healthcare Organizations
            </p>

            <div className="flex items-center gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 border border-white/10 rounded-[4px] flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8 pl-48">
            
            {/* SERVICES */}
            <div>
              <h4 className="text-white font-bold text-[11px] tracking-[0.25em] mb-6 opacity-90">
                SERVICES
              </h4>
              <ul className="space-y-4">
                {["Fractional CIO", "CIO360™ Assessment", "IT Health Check"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-[14px] font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-white font-bold text-[11px] tracking-[0.25em] mb-6 opacity-90">
                RESOURCES
              </h4>
              <ul className="space-y-4">
                {["Case Studies", "Blog / Insights", "Healthcare IT Guides"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-[14px] font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h4 className="text-white font-bold text-[11px] tracking-[0.25em] mb-6 opacity-90">
                ABOUT
              </h4>
              <ul className="space-y-4">
                {["Our Story", "Team", "Privacy Policy"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-[14px] font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-white font-bold text-[11px] tracking-[0.25em] mb-6 opacity-90">
                CONTACT
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/50 hover:text-white text-[14px] font-light transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/50 hover:text-white text-[14px] font-light transition-colors">
                    Phone
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-center text-white/20 text-[11px] tracking-[0.1em] font-light">
            © Copyright 2025, All Rights Reserved by Wendigo Advisors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
