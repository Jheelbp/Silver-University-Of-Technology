import React from "react";
import cap from "../assets/Home/canva1.png";
import college from "../assets/Home/College.png";
import cafeteria from "../assets/Home/Cafeteria.png";
import humans from "../assets/Home/Humans.png";
import Class from "../assets/Home/Class.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    // GSAP animation for the header image
    gsap.fromTo(
      ".header-image",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animations for the cards
    const cards = gsap.utils.toArray(".animated-card");
    gsap.from(cards, {
      opacity: 0,
      scale: 0.7,
      stagger: 0.3,
      y: 50,
      duration: 1,
      ease: "power3.out",
      // scrollTrigger: {
      //   start: "top 80%",
      //   trigger: ".animated-card",
      //   toggleActions: "play reverse play reverse",
      //   onLeave: () =>
      //     gsap.to(cards, {
      //       opacity: 0,
      //       scale: 0.8,
      //       duration: 0.5,
      //       ease: "power1.in",
      //     }),
      // },
    });

    // Animation for the right-side card
    gsap.fromTo(
      ".cultural-card",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          start: "top 80%",
          trigger: ".animated-card",
          toggleActions: "play reverse play reverse",
          onLeave: () =>
            gsap.to(".cultural-card", {
              opacity: 0,
              x: 100,
              duration: 0.5,
              ease: "power1.in",
            }),
        },
      }
    );

    // Animations for text elements
    gsap.fromTo(
      ".animated-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          start: "top 70%",
          trigger: ".animated-card",
          toggleActions: "play reset play reset",
          onLeave: () =>
            gsap.to(".animated-text", {
              opacity: 0,
              y: -20,
              duration: 0.5,
              ease: "power1.in",
            }),
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="w-screen h-200 bg-violet-300">
        <img src={cap} className="h-400 w-screen object-cover header-image" />
      </div>

      {/* Two divs below the image */}
      <div className="flex w-screen flex-wrap relative top-[-4rem] z-10">
        <div className="flex-[3] bg-blue-300 h-[29rem] transform skew-y-[5deg] w-full md:w-3/4">
          <div className="flex flex-row h-full">
            <div className="relative flex-1 bg-green-900 animated-card">
              <img
                src={college}
                alt="College background"
                className="opacity-[30%] w-full h-full object-cover"
              />
              <div className="absolute top-[8rem] left-[2rem] m-4 text-white  -skew-y-[5deg]">
                <p className="text-4xl md:text-3xl sm:text-2xl font-bold animated-text">
                  Departments
                </p>
                <p className="text-md mt-2 animated-text">
                  SU College offers excellent academics with diverse programs,
                  experienced faculty, and strong research opportunities.
                </p>
                <Link to="/departments">
                  <button className="text-black text-md mt-9 animated-text">
                    Explore
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative flex-1 bg-red-800 animated-card">
              <img
                src={cafeteria}
                className="opacity-[30%] w-full h-full object-cover"
              />
              <div className="absolute top-[6.5rem] left-[2rem] m-4 text-white  -skew-y-[5deg]">
                <p className="text-4xl md:text-3xl sm:text-2xl font-bold animated-text">
                  Placements
                </p>
                <p className="text-md mt-2 max-w-xs animated-text">
                  Discover exceptional placement opportunities at SU College,
                  with top recruiting companies .
                </p>
                <Link to="/placements">
                  <button className="text-black text-md mt-9 animated-text">
                    Explore
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative flex-1 bg-blue-900 animated-card">
              <img
                src={humans}
                className="opacity-[30%] w-full h-full object-cover"
              />
              <div className="absolute top-[5rem] left-[2rem] m-4 text-white  -skew-y-[5deg]">
                <p className="text-4xl md:text-3xl sm:text-2xl font-bold animated-text">
                  About Us
                </p>
                <p className="text-md mt-2 max-w-xs animated-text">
                  Discover our mission, upcoming events.For location details and
                  inquires, visit our full About Us page.
                </p>
                <Link to="/about">
                  <button className="text-black text-md mt-9 animated-text">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] bg-red-300 h-[29rem] transform -skew-y-[15deg] w-full md:w-1/4 cultural-card">
          <div className="flex flex-row h-full">
            <div className="relative flex-1 bg-yellow-700">
              <img
                src={Class}
                className="opacity-[30%] w-full h-full object-cover"
              />
              <div className="absolute top-[7rem] left-[3rem] m-4 text-white  skew-y-[15deg]">
                <p className="text-4xl md:text-3xl sm:text-2xl font-bold animated-text">
                  Cultural Fest
                </p>

                <p className="text-md mt-2 animated-text">
                  AURORA
                  <br />
                  Experience electrifying dance, fashion shows, and robotic
                  warfare at SU College Fest!
                </p>
                <Link to="/aurora">
                  <button className="text-black text-md mt-9 animated-text">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[193%] h-20 w-screen bg-cream z-10 hidden xl:block"></div>
    </div>
  );
};

export default HeroSection;
