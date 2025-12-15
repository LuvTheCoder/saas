import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Featured Products", to: "/featured-products" },
  { name: "Contact Us", to: "/contact" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.linkedin.com/company/saas-infosolutions/",
  },
  {
    icon: <FaTwitter />,
    href: "https://www.linkedin.com/company/saas-infosolutions/",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/saas-infosolutions/",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <p className="text-[28px] font-extrabold text-white tracking-wide">
              SAAS
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm font-medium text-white/90
                           hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Social Icons - Desktop */}
            <div className="flex items-center space-x-4 ml-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white
                             transition transform hover:scale-110"
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-black/90 backdrop-blur-md
        `}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-white/90
                         hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Social Icons - Mobile */}
          <div className="flex justify-center space-x-6 pt-4 border-t border-white/20">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white
                           transition transform hover:scale-110"
              >
                <span className="text-xl">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

