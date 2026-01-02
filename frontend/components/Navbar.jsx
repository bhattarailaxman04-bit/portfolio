export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-slate-900 fixed top-0 z-50">
      <h1 className="text-xl font-bold text-sky-400">Lokendra</h1>

      <ul className="flex gap-6 text-slate-300">
        <li><a href="#home" className="hover:text-sky-400">Home</a></li>
        <li><a href="#about" className="hover:text-sky-400">About</a></li>
        <li><a href="#skills" className="hover:text-sky-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
        
      </ul>
    </nav>
  );
}
