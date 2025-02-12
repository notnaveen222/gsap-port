"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projects.css";
import Image from "next/image";
import LaptopImage from "@/images/laptop-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    gsap.to(".projectsBG", {
      /* This isnt Doing Anyting, check and remove */ backgroundColor: "#FFF",
      duration: 1,
      scrollTrigger: {
        trigger: ".projectsBG",
        start: "top 200px" /*top of elem meets center of vp*/,
        end: "top 100px",
        scrub: 1.5,
      },
    });
    gsap.to(".bar", {
      /* This one also no Functionality */ backgroundColor: "#FFF",
      duration: 1,
      scrollTrigger: {
        trigger: ".bar",
        start: "top 200px" /*top of elem meets center of vp*/,
        end: "top 100px",
        scrub: 1.5,
      },
    });
    gsap.fromTo(
      ".laptop-image",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".laptop-image",
          start: "top bottom" /*top of elem meets center of vp*/,
          end: "top top",
          scrub: true,
        },
      }
    );
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
    gsap.fromTo(
      ".container",
      {
        backgroundColor: "#FFF",
      },
      {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: ".container",
          start: "bottom center",
          end: "bottom top-=50px",
          scrub: true,
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
        <div className="projectsBG h-screen grid grid-cols-2 z-0 px-10 bg-white">
          <div>
            <div className="text-black text-6xl mb-5">My Projects</div>
            <div className="text-black text-lg">
              A glimpse into my coding journey and designs.
            </div>
          </div>
          <div className="">
            <Image
              className="rotate-6 laptop-image"
              src={LaptopImage}
              alt="laptop image"
            ></Image>
            <div className="text-5xl text-black">Code Drop</div>
          </div>
        </div>
      </div>
    </div>
  );
}
