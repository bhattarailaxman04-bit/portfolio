import { useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" }); // To show success/error on screen
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.msg || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Could not connect to the server. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Text & Social Links */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold tracking-tight">
                Let's <span className="text-sky-600">Connect.</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                Whether you have a question or just want to say hi, my inbox is always open. 
                I'm currently looking for <span className="text-slate-900 font-semibold underline decoration-sky-400 underline-offset-4">internship opportunities</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:bhattarailaxman04@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-200 transition-all group">
                <div className="p-3 bg-white rounded-lg shadow-sm text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all"><FaEnvelope /></div>
                <span className="font-semibold text-sm">Email Me</span>
              </a>
              <a href="https://wa.me/9861626348" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-green-50 hover:border-green-200 transition-all group">
                <div className="p-3 bg-white rounded-lg shadow-sm text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all"><FaWhatsapp /></div>
                <span className="font-semibold text-sm">WhatsApp</span>
              </a>
              <a href="https://github.com/bhattarailaxman04-bit" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-400 hover:border-slate-900 transition-all group">
                <div className="p-3 bg-white rounded-lg shadow-sm text-slate-900 group-hover:bg-white group-hover:text-slate-900 transition-all"><FaGithub /></div>
                <span className="font-semibold text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/laxman-bhattarai-497670382/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600 group-hover:bg-white group-hover:text-blue-600 transition-all"><FaLinkedinIn /></div>
                <span className="font-semibold text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name" 
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com" 
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can I help you?" 
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm"
                  ></textarea>
                </div>

                {/* Status Message Display */}
                {status.message && (
                  <div className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium ${
                    status.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
                  }`}>
                    {status.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
                    {status.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-slate-200 disabled:bg-slate-400 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}