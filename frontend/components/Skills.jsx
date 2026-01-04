import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800", bg: "hover:border-rose-400/40" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-500", bg: "hover:border-cyan-400/40" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500", bg: "hover:border-yellow-400/40" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-500", bg: "hover:border-sky-400/40" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", bg: "hover:border-green-400/40" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-700", bg: "hover:border-gray-400/40" },
  { name: "Java", icon: <FaJava />, color: "text-red-500", bg: "hover:border-red-400/40" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", bg: "hover:border-orange-400/40" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-rose-100 via-pink-100 to-rose-50 text-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header Section - Centered on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Technical <span className="text-rose-500">Toolkit</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              I specialize in the JavaScript ecosystem, building scalable
              full-stack applications with modern architecture and clean UI.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="px-4 py-2 bg-white/60 border border-rose-200 rounded-lg text-sm text-slate-500 font-mono">
              const status = "Always Learning";
            </div>
          </div>
        </div>

        {/* Skills Grid - Responsive columns and padding */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center p-6 md:p-8 bg-white/70 border border-rose-200 rounded-2xl transition-all duration-300 ${skill.bg} hover:bg-rose-50 active:scale-95`}
            >
              <div
                className={`text-4xl md:text-5xl mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <span className="text-xs md:text-sm font-semibold tracking-wide text-slate-700 group-hover:text-slate-900 transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar - Stacks on mobile */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl border border-rose-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center shrink-0">
              <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base md:text-lg">Current Learning Phase</h4>
              <p className="text-xs md:text-sm text-slate-600">
                Deep diving into Backend System Design & AWS
              </p>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-rose-500 text-white font-bold rounded-xl md:rounded-lg hover:bg-rose-600 transition-all active:scale-95 shadow-md shadow-rose-200">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}