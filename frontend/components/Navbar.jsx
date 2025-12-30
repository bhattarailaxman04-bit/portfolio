export default function Navbar({ setActive }) {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-slate-900">
      <h1 className="text-xl font-bold text-sky-400 ">Lokendra</h1>

      <ul className="flex gap-6 text-slate-300 text-sm md:text-base">
        <li>
          <button className="hover:text-sky-400" onClick={() => setActive("home")}>Home</button>
        </li>
        <li>
          <button className="hover:text-sky-400" onClick={() => setActive("about")}>About</button>
        </li>
        <li>
          <button className="hover:text-sky-400" onClick={() => setActive("skills")}>Skills</button>
        </li>
        <li>
          <button className="hover:text-sky-400" onClick={() => setActive("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
