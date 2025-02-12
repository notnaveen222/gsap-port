import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".particle-speed-1",
      { y: window.innerHeight + 50 },
      {
        y: -window.innerHeight,
        scrollTrigger: {
          trigger: ".particle-speed-1 ",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".particle-speed-2 ",
      { y: window.innerHeight },
      {
        y: -window.innerHeight,
        scrollTrigger: {
          trigger: ".particle-speed-2 ",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".particle-speed-3 ",
      { y: window.innerHeight - 50 },
      {
        y: -window.innerHeight - 50,
        scrollTrigger: {
          trigger: ".particle-speed-3 ",
          start: "bottom bottom",
          end: "bottom top-=300px",
          scrub: 1,
        },
      }
    );
    gsap.utils.toArray(".particle-speed-4").forEach((particle) => {
      gsap.fromTo(
        particle as HTMLElement,
        { y: window.innerHeight },
        {
          y: -window.innerHeight - 100 - Math.floor(Math.random() * 200),
          scrollTrigger: {
            trigger: particle as HTMLElement,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );
    });
    gsap.utils.toArray(".layer-2-particle-speed-2").forEach((particle) => {
      gsap.fromTo(
        particle as HTMLElement,
        { y: window.innerHeight },
        {
          y: -window.innerHeight + Math.floor(Math.random() * 50),
          scrollTrigger: {
            trigger: particle as HTMLElement,
            start: "bottom bottom-=100px",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
    gsap.utils.toArray(".layer-2-particle-speed-1").forEach((particle) => {
      gsap.fromTo(
        particle as HTMLElement,
        { y: window.innerHeight },
        {
          y: -window.innerHeight + 100 + Math.floor(Math.random() * 50),
          scrollTrigger: {
            trigger: particle as HTMLElement,
            start: "bottom bottom-=100px",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
    gsap.fromTo(
      ".about-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-text",
          scrub: true,
          // toggleActions: "play reverse none none",
          start: "top top+=100px",
          end: "top top-=100px",
        },
      }
    );
  });
  return (
    <div className="relative w-screen  bg-black">
      <div className=" z-10 left-0 right-0 h-screen absolute mix-blend-difference">
        <div className="flex justify-evenly mt-10 particle-layer-1 bg-transparent mix-blend-difference ">
          <div className="particle  particle-speed-4 particlev2"></div>
          <div className="particle  particle-speed-2 particlev3"></div>
          <div className="particle  particle-speed-3 particlev2"></div>
          <div className="particle  particle-speed-1 particlev1"></div>
          <div className="particle  particle-speed-4 particlev3"></div>
          <div className="particle  particle-speed-3 particlev2"></div>
          <div className="particle  particle-speed-4 particlev1"></div>
          <div className="particle  particle-speed-2 particlev3"></div>
          <div className="particle  particle-speed-1 particlev2"></div>
          <div className="particle  particle-speed-4 particlev2"></div>
        </div>
        <div className="flex justify-evenly particle-layer-2 mix-blend-difference">
          <div className="particle  layer-2-particle-speed-2  particlev2"></div>
          <div className="particle  layer-2-particle-speed-1 particlev1"></div>
          <div className="particle  layer-2-particle-speed-2 size-1"></div>
          <div className="particle  layer-2-particle-speed-1 particlev2"></div>
          <div className="particle  layer-2-particle-speed-1 particlev2"></div>
        </div>
      </div>

      <div className="h-[200vh] bg-black">
        <div className="h-screen top-0 flex justify-center items-center text-6xl mx-auto text-center w-3/5 sticky z-20 about-text font-semibold tracking-wider font-interTight">
          Im Naveen, 19, Second Year Student, pursuing my CSE Degree in VIT
        </div>
      </div>
    </div>
  );
}
