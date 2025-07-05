import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Sanjeev</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Left - Logo */}
//         <div className="text-xl font-bold">Zain's Portfolio</div>

//         {/* Right - Nav Links */}
//         <ul className="flex space-x-6">
//           <li><a href="#" className="hover:text-gray-400">Home</a></li>
//           <li><a href="#about" className="hover:text-gray-400">About</a></li>
//           <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
//           <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
