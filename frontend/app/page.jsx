"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Page() {
  const [active, setActive] = useState("home");

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar setActive={setActive} />

      {active === "home" && <Hero />}
      {active === "about" && <About />}
      {active === "skills" && <Skills />}
      {active === "contact" && <Contact />}
    </div>
  );
}
