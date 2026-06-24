import { FaPhoneAlt, FaRegEnvelopeOpen, FaFacebookF, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


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

const quickLinks = [
  { label: "Home",    to: "/"        },
  { label: "About",   to: "/about"   },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Team",    to: "/team"    },
];

const serviceLinks = [
  { label: "Ocean Freight",  to: "/services" },
  { label: "Road Transport", to: "/services" },
  { label: "Air Freight",    to: "/services" },
  { label: "Warehousing",    to: "/services" },
  { label: "Cargo Insurance", to: "/services" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#F7F7F7] px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Logo + Text + Social */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
           <div>
             <img className="w-40 h-20" src={logo} alt="" />
              </div>
            </Link>
            <p className="text-gray-400 leading-7 text-sm mb-6">
              Delivering trusted logistics solutions with speed, safety, and reliability across the globe.
              Stay connected with us for seamless shipping and customer support.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF className="w-4 h-4" />, href: "#" },
                { icon: <FaTwitter   className="w-4 h-4" />, href: "#" },
                { icon: <FaYoutube   className="w-4 h-4" />, href: "#" },
                { icon: <FaBehance   className="w-4 h-4" />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href}
                  className="w-9 h-9 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[#EA0305] font-bold text-lg mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-[#EA0305] font-bold text-lg mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Services
            </h2>
            <ul className="space-y-3">
              {serviceLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-[#EA0305] font-bold text-lg mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-red-600">
              Information
            </h2>
            <div className="space-y-4">
              <a href="tel:+16478008569" className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group">
                <div className="w-9 h-9 bg-red-600/20 group-hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shrink-0">
                  <FaPhoneAlt className="text-red-500 group-hover:text-white w-3.5 h-3.5 transition-colors" />
                </div>
                <span className="text-sm">+1 647 800 8569</span>
              </a>
              <a href="mailto:info@shadowxpress.com" className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group">
                <div className="w-9 h-9 bg-red-600/20 group-hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shrink-0">
                  <FaRegEnvelopeOpen className="text-red-500 group-hover:text-white w-3.5 h-3.5 transition-colors" />
                </div>
                <span className="text-sm break-all">info@shadowxpress.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-600 text-white text-center py-4 text-sm">
        © 2025 Shadow Xpress All Rights Reserved and Developed By Roaslift
      </div>
    </footer>
  );
}
