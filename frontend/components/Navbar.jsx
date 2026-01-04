import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex justify-between items-center bg-slate-900 fixed top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-sky-400">
        Lokendra
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-slate-300">
        <li><a href="#home" className="hover:text-sky-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-sky-400 transition">About</a></li>
        <li><a href="#skills" className="hover:text-sky-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-slate-300 text-xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-slate-300">
            <li>
              <a onClick={() => setOpen(false)} href="#home" className="hover:text-sky-400">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(false)} href="#about" className="hover:text-sky-400">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(false)} href="#skills" className="hover:text-sky-400">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(false)} href="#contact" className="hover:text-sky-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}
