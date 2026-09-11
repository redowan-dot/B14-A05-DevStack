import { useState } from "react";

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "Technologies", href: "#technologies" },
{ name: "Projects", href: "#projects" },
{ name: "About", href: "#about" },
{ name: "Contact", href: "#contact" },
];

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
const [activeLink, setActiveLink] = useState("Home");

return ( <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">


  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

    {/* Hamburger - Mobile */}
    <button
      className="md:hidden text-2xl text-gray-700"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

    {/* Logo */}
    <a href="#home" className="flex items-center">
      <img
        src="/assets/logo-text.png"
        alt="DevStack Logo"
        className="h-8 w-auto object-contain"
      />
    </a>

    {/* Desktop Nav Links */}
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className={
              activeLink === link.name
                ? "text-[#E12D86] font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>

    {/* Auth Buttons */}
    <div className="flex items-center gap-3">
      <button className="text-sm font-medium text-gray-700 hover:text-gray-950 whitespace-nowrap">
        Sign In
      </button>

      <button className="bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap">
        Sign Up
      </button>
    </div>

  </nav>

  {/* Mobile Menu */}
  {menuOpen && (
    <ul className="md:hidden flex flex-col gap-1 px-4 pb-5 text-gray-600 font-medium">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => {
              setActiveLink(link.name);
              setMenuOpen(false);
            }}
            className={
              activeLink === link.name
                ? "block px-3 py-2.5 rounded-lg bg-pink-50 text-[#E12D86] font-semibold"
                : "block px-3 py-2.5 rounded-lg hover:bg-gray-50"
            }
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )}

</header>

);
}

export default Navbar;
