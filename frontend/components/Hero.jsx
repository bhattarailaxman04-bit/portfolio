import { useState } from "react";
import HeroImage from "@/public/laxman1.jpg";
import { FaGithub, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Your specific projects
  const featuredProjects = [
    {
      title: "Medipro",
      repo: "bhattarailaxman04-bit/medipro",
      desc: "Healthcare management system built for efficiency.",
      tags: ["Next.js", "Node.js"]
    },
    {
      title: "StackOverflow Clone",
      repo: "bhattarailaxman04-bit/stackoverflow-clone",
      desc: "Full-stack Q&A platform with complex data relations.",
      tags: ["React", "Express"]
    }
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-10 bg-white text-slate-900 relative">
      
      {/* 1. Left side: content */}
      <div className="md:w-3/5 space-y-6">
        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded mt-4 md:mt-0">
          BCA Student & Developer
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
          Lokendra <br />
          <span className="text-sky-600">Bhattarai</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
          I build robust web architectures at <span className="font-semibold text-slate-800">Aryan Engineering College</span>. 
          Focused on the intersection of design and scalable code.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {['Next.js', 'React', 'Node.js', 'Java'].map((skill) => (
            <span key={skill} className="px-3 py-1 border border-slate-200 rounded-full text-sm text-slate-600 bg-slate-50">
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-8">
          {/* Action: Now opens the Modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-sm font-medium transition-all hover:bg-sky-600"
          >
            Explore Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* 2. Right side: Image */}
      <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
        <div className="relative p-2 bg-slate-100 rounded-2xl">
          <img
            src={HeroImage.src}
            alt="Lokendra"
            className="rounded-xl shadow-sm max-w-sm object-cover filter contrast-[1.05]"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-lg border border-slate-100 hidden lg:block">
            <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
            <p className="text-sm font-semibold text-slate-800">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC FEATURE: Project Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200">
            {/* Close UI */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-1">Select a Project</h2>
              <p className="text-slate-500 text-sm mb-6">Direct links to my GitHub repositories</p>

              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <a 
                    key={project.title}
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl hover:border-sky-500 hover:bg-sky-50 transition-all group"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-500">{project.desc}</p>
                    </div>
                    <FaGithub className="text-2xl text-slate-400 group-hover:text-slate-900" />
                  </a>
                ))}
              </div>
              
              <p className="mt-8 text-center text-xs text-slate-400">
                Click a project to view code on GitHub
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}