import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    gsap.to(".projectsBG", {
      backgroundColor: "#FFF",
      duration: 1,
      scrollTrigger: {
        trigger: ".projectsBG",
        start: "top 200px" /*top of elem meets center of vp*/,
        end: "top 100px",
        scrub: 1.5,
      },
    });
    gsap.to(".bar", {
      backgroundColor: "#FFF",
      duration: 1,
      scrollTrigger: {
        trigger: ".bar",
        start: "top 200px" /*top of elem meets center of vp*/,
        end: "top 100px",
        scrub: 1.5,
      },
    });
    gsap.fromTo(
      ".bar2",
      {
        y: 0,
      },
      {
        y: -150,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".bar3",
      {
        y: 0,
      },
      {
        y: -500,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".bar4",
      {
        y: 0,
      },
      {
        y: -400,
        scrollTrigger: {
          trigger: ".bar",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
        stagger: 0.2,
      }
    );
  });

  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-0 flex -z-10 h-screen ">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar2"></div>
        </div>
        <div className="projectsBG h-screen z-10 bg-white">Projects</div>
      </div>
    </div>
  );
}
