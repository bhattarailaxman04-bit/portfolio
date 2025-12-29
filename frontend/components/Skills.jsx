import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", bg: "hover:border-white/40" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400", bg: "hover:border-cyan-400/40" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400", bg: "hover:border-yellow-400/40" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", bg: "hover:border-sky-400/40" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", bg: "hover:border-green-500/40" },
  { name: "Express", icon: <SiExpress />, color: "text-slate-300", bg: "hover:border-slate-300/40" },
  { name: "Java", icon: <FaJava />, color: "text-red-500", bg: "hover:border-red-500/40" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600", bg: "hover:border-orange-600/40" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Technical <span className="text-sky-500">Toolkit</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in the JavaScript ecosystem, focusing on building scalable 
              full-stack applications with modern architecture and clean UI.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-400 font-mono">
              const status = "Always Learning";
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className={`group flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ${skill.bg} hover:bg-slate-800/80`}
            >
              <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold">Current Learning Phase</h4>
                <p className="text-sm text-slate-400">Deep diving into Backend System Design & AWS</p>
              </div>
           </div>
           <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-sky-400 hover:text-white transition-colors">
              Download CV
           </button>
        </div>

      </div>
    </section>
  );
}