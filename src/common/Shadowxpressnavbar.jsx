import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

const NAV_LINKS = [
  { label: "Home",             to: "/"                },
  { label: "About Us",         to: "/about"           },
  { label: "Services",         to: "/services"        },
  { label: "Team",             to: "/team"            },
  { label: "Find Job Status",  to: "/find-job-status" },
  { label: "Apply Now",        to: "/apply"           },
  { label: "Contact Us",       to: "/contact"         },
];

function TruckIcon() {
  return (
    <svg viewBox="0 0 64 40" className="w-10 h-7" fill="none">
      <rect x="2" y="12" width="38" height="22" rx="3" fill="#cc0000" />
      <rect x="40" y="18" width="20" height="16" rx="2" fill="#cc0000" />
      <rect x="42" y="20" width="16" height="10" rx="1" fill="#b3d4f5" opacity="0.7" />
      <circle cx="12" cy="36" r="5" fill="#222" stroke="#888" strokeWidth="1.5" />
      <circle cx="12" cy="36" r="2.5" fill="#555" />
      <circle cx="50" cy="36" r="5" fill="#222" stroke="#888" strokeWidth="1.5" />
      <circle cx="50" cy="36" r="2.5" fill="#555" />
      <circle cx="30" cy="36" r="5" fill="#222" stroke="#888" strokeWidth="1.5" />
      <circle cx="30" cy="36" r="2.5" fill="#555" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) => location.pathname === to;

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-sm px-4 py-1.5 flex flex-wrap gap-x-6 gap-y-1 items-center">
        <a href="tel:+16478008569" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +1 647 800 8569
        </a>
        <a href="mailto:info@shadowxpress.com" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@shadowxpress.com
        </a>
      </div>

      {/* Main navbar */}
      <nav className={`bg-white w-full transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
            <img className="w-30 h-14" src={logo} alt="" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`px-2.5 py-2 text-sm font-medium transition-colors duration-150 rounded whitespace-nowrap
                    ${isActive(link.to) ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-red-600 text-white text-sm font-bold uppercase tracking-wide hover:bg-red-700 active:bg-red-800 transition-colors rounded">
                Get a Quote
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded focus:outline-none focus:ring-2 focus:ring-red-600">
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"}`}>
          <div className="px-4 py-3 flex flex-col gap-1 bg-white">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive(link.to) ? "text-red-600 bg-red-50 font-semibold" : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact"
              className="mt-2 px-4 py-2.5 bg-red-600 text-white text-sm font-bold uppercase tracking-wide text-center rounded hover:bg-red-700 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
