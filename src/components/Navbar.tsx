import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          relative
        "
      >
        {/* LOGO */}
        <div className="flex items-center pl-2">
          <img
            src={logo}
            alt="Wendigo Advisors"
            className="h-[24px] md:h-[28px] w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV LINKS (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-1">
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

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <button
            className="
              hidden md:block
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

          {/* Hamburger Menu Icon (Visible on Mobile only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 right-0 lg:hidden bg-[#001224] border border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button className="flex justify-between items-center w-full px-4 py-3 text-white bg-white/5 rounded-xl text-sm font-medium">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <MobileNavItem label="Pricing" />
            <MobileNavItem label="About Us" />
            <MobileNavItem label="Testimonials" />
            <MobileNavItem label="Resources" />
            
            <button className="mt-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-b from-[#338CF0] to-[#2B74E8]">
               Contact Us for Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ label }) => (
  <button className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition">
    {label}
  </button>
);

const MobileNavItem = ({ label }) => (
  <button className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition">
    {label}
  </button>
);

export default Navbar;