"use client";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
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
      <div className="h-screen bg-purple-500"></div>
    </>
  );
}
