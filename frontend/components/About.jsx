export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-8 bg-slate-50 text-slate-900 border-y border-slate-100 relative overflow-hidden">
      
      {/* Subtle Background Accent for Mobile */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          
          {/* Left Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Crafting digital experiences with <span className="text-sky-600">purpose.</span>
              </h2>
              <div className="h-1.5 w-16 bg-sky-500 rounded mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="text-base md:text-lg leading-relaxed">
                I am <span className="font-semibold text-slate-900">Lokendra Bhattarai</span>, 
                a BCA student at Aryan Engineering College. I don't just write code; I build 
                solutions that bridge the gap between backend logic and intuitive frontend design.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Currently in my 6th semester, I spend my time mastering the 
                <span className="text-slate-900 font-medium italic"> JavaScript ecosystem</span>. 
                My philosophy is simple: write clean, maintainable code.
              </p>
            </div>

            {/* Simple Stats - Fixed for Mobile Flow */}
            <div className="flex justify-center md:justify-start gap-10 pt-4">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-sky-600">BCA</p>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">6th Semester</p>
              </div>
              <div className="w-px h-10 bg-slate-200 self-center"></div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-sky-600">Full-Stack</p>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Aspirant</p>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Info Cards - Adjusted Grid for Mobile */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all active:scale-[0.98]">
              <span className="text-2xl mb-2 block">🎓</span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Education</h4>
              <p className="text-xs md:text-sm text-slate-500">Aryan Engineering College, Kathmandu</p>
            </div>

            <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all active:scale-[0.98]">
              <span className="text-2xl mb-2 block">💻</span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Tech Stack</h4>
              <p className="text-xs md:text-sm text-slate-500">React, Next.js, Node.js, Java</p>
            </div>

            <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all active:scale-[0.98]">
              <span className="text-2xl mb-2 block">🚀</span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">Current Focus</h4>
              <p className="text-xs md:text-sm text-slate-500">Scaling web apps & UI/UX Design</p>
            </div>

            <div className="p-5 md:p-6 bg-sky-600 text-white rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-[0.98]">
              <span className="text-2xl mb-2 block">🌱</span>
              <h4 className="font-bold text-sm md:text-base">Goal</h4>
              <p className="text-xs opacity-90">Becoming a skilled Software Engineer and lifelong learner.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}