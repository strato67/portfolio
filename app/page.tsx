"use client";

import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Navbar from "@/components/ui/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
