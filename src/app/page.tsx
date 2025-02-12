"use client";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/about";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.9,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <div className="bg-purple-400 h-screen"></div>
    </>
  );
}
