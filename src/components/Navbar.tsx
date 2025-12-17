import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div
        className="
          mx-auto
          max-w-[1160px]
          h-[56px]
          flex items-center justify-between
          px-4
          rounded-full
          bg-gradient-to-b from-[#001224] to-[#00050A]
          shadow-[0_4px_4px_-4px_rgba(12,12,13,0.05),0_16px_16px_-8px_rgba(12,12,13,0.10)]
        "
      >
        {/* LOGO ONLY (TEXT REMOVED) */}
        <div className="flex items-center pl-2">
          <img
            src={logo}
            alt="Wendigo Advisors"
            className="h-[28px] w-auto object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
            Services
            <ChevronDown className="w-4 h-4" />
          </button>

          <NavItem label="Pricing" />
          <NavItem label="About Us" />
          <NavItem label="Testimonials" />

          <button className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition">
            Resources
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* CTA BUTTON */}
        <button
          className="
            px-5 py-2
            rounded-full
            text-sm font-semibold
            text-white
            bg-gradient-to-b from-[#338CF0] to-[#2B74E8]
            shadow-[0_16px_32px_-4px_rgba(52,141,240,0.10)]
            hover:brightness-110
            transition
          "
        >
          Contact Us for Free
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ label }) => (
  <button className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition">
    {label}
  </button>
);

export default Navbar;
