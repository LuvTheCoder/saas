import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Featured Products", to: "/featured-products" },
  { name: "Contact Us", to: "/contact" },
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
        ${scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <p className="text-[28px] font-extrabold text-white tracking-wide">
              SAAS
            </p>
          </a>

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
