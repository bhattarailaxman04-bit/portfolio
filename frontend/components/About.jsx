export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-slate-50 text-slate-900 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: The Narrative */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Crafting digital experiences with <span className="text-sky-600">purpose.</span>
              </h2>
              <div className="h-1 w-20 bg-sky-500 rounded"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              I am <span className="font-semibold text-slate-900">Lokendra Bhattarai</span>, 
              a BCA student at Aryan Engineering College. I don't just write code; I build 
              solutions that bridge the gap between complex backend logic and intuitive frontend design.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Currently in my 6th semester, I spend my time mastering the 
              <span className="text-slate-900 font-medium italic"> JavaScript ecosystem</span>. 
              My philosophy is simple: write clean, maintainable code that solves real-world problems.
            </p>

            {/* Simple Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <p className="text-3xl font-bold text-sky-600">BCA</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">6th Semester</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sky-600">Full-Stack</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Aspirant</p>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Info Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-2xl mb-3 block">🎓</span>
              <h4 className="font-bold text-slate-800">Education</h4>
              <p className="text-sm text-slate-500">Aryan Engineering College, Kathmandu</p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-2xl mb-3 block">💻</span>
              <h4 className="font-bold text-slate-800">Tech Stack</h4>
              <p className="text-sm text-slate-500">React, Next.js, Node.js, Java</p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-2xl mb-3 block">🚀</span>
              <h4 className="font-bold text-slate-800">Current Focus</h4>
              <p className="text-sm text-slate-500">Scaling web apps & UI/UX Design</p>
            </div>

            <div className="p-6 bg-sky-600 text-white rounded-2xl shadow-lg shadow-sky-200">
              <span className="text-2xl mb-3 block">🌱</span>
              <h4 className="font-bold">Goal</h4>
              <p className="text-sm opacity-90">Becoming a skilled Software Engineer and lifelong learner.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}