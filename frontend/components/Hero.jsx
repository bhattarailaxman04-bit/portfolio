import { useState } from "react";
import HeroImage from "@/public/laxman1.jpg";
import { FaGithub, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

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
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-10 bg-[#0f2e5a] text-white relative overflow-hidden">
      
      {/* 1. Static Dot Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
        }} 
      />

      {/* 2. MOVING WAVE COMPONENT */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[200%] h-[150px] md:h-[250px] animate-wave"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          {/* Second identical path for seamless looping */}
          <path 
            fill="#ffffff" 
            transform="translateX(1440)"
            d="M1440,192L1488,197.3C1536,203,1632,213,1728,229.3C1824,245,1920,267,2016,250.7C2112,235,2208,181,2304,181.3C2400,181,2496,235,2592,234.7C2688,235,2784,181,2832,154.7L2880,128L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z"
          ></path>
        </svg>
      </div>

      {/* 3. Content Side */}
      <div className="md:w-3/5 space-y-6 z-30">
        <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest rounded mt-4 md:mt-0">
          BCA Student & Developer
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          Lokendra <br />
          <span className="text-sky-400">Bhattarai</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
          I build robust web architectures at <span className="font-semibold text-white">Aryan Engineering College</span>. 
          Focused on the intersection of design and scalable code.
        </p>

        <div className="pt-8">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#e91e63] text-white rounded-md font-medium transition-all hover:scale-105 shadow-lg"
          >
            Explore Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* 4. Perfectly Circular Image Side */}
      <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center z-30">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-white/20 overflow-hidden shadow-2xl flex items-center justify-center bg-slate-800">
          <img
            src={HeroImage.src}
            alt="Lokendra Bhattarai"
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* 5. Project Modal (Kept from original) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative text-slate-900">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-black">
              <FaTimes size={20} />
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="space-y-4">
                {featuredProjects.map((p) => (
                  <a key={p.title} href={`https://github.com/${p.repo}`} target="_blank" className="flex items-center justify-between p-4 bg-slate-50 border rounded-xl hover:border-sky-500 transition-colors group">
                    <div>
                      <h3 className="font-bold group-hover:text-sky-600">{p.title}</h3>
                      <p className="text-sm text-slate-500">{p.desc}</p>
                    </div>
                    <FaGithub className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WAVE ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes waveSideToSide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: waveSideToSide 15s linear infinite;
        }
      `}</style>
    </section>
  );
}