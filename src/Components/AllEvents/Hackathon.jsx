import React, { useEffect, useRef } from "react";
import aurorapattern from "../../assets/Pages/aurorapattern.png";
import rocket from "../../assets/Pages/rocket.png";
import event from "../../assets/Pages/Hackathon.mp4";
import techtalks from "../../assets/Pages/techtalks.jpg";
import spoorthi from "../../assets/Pages/spoorthi.jpeg";
import aurora from "../../assets/Pages/aurora.jpg";
import design from "../../assets/Pages/design.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hackathon = () => {
  const navigate = useNavigate();

  const header1Ref = useRef(null);
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const headerTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const videoTitleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useRef(null);
  const headerContentRef = useRef(null);

  useGSAP(() => {
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center",
        toggleActions: "play none none reset",
      },
    });

    // Header animations
    masterTimeline
      .from(headerRef.current.querySelector("img"), {
        x: -100,
        opacity: 0,
        duration: 1,
      })
      .from(headerContentRef.current.children, {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

    gsap.from(header1Ref.current.children, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: header1Ref.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(headerTextRef.current.children, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    gsap.from(aboutRef.current.children, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
    });

    gsap.from(aboutTextRef.current.children, {
      scrollTrigger: {
        trigger: aboutTextRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.from(videoTitleRef.current, {
      scrollTrigger: {
        trigger: videoTitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      scale: 0.5,
      opacity: 0,
      ease: "back.out(1.7)",
    });

    const boxesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: box1Ref.current,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

    [box1Ref, box2Ref, box3Ref].forEach((boxRef, index) => {
      boxesTimeline.from(
        boxRef.current,
        {
          duration: 0.8,
          y: 100,
          opacity: 0,
          ease: "back.out(1.7)",
          clearProps: "all",
        },
        index * 0.2
      );

      const boxContent = boxRef.current.querySelector(".box-content");
      boxesTimeline.from(
        boxContent.children,
        {
          duration: 0.6,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
        },
        `-=0.4`
      );
    });
  }, []);

  return (
    <div className="bg-[#1A1A1A] mt-[4rem]">
      {/* Header Section */}
      <div ref={headerRef} className="flex bg-[#1A1A1A] h-[25rem]">
        <img src={design} className="h-full w-1/2 object-cover" alt="Design" />
        <div
          ref={headerContentRef}
          className="flex flex-col w-1/2 p-4 text-black"
        >
          <h1 className="text-3xl text-white font-bold">Events</h1>
          <p className="text-lg text-white mt-2">
            At SU, we are committed to creating an environment where academic
            achievement, innovation, and inclusivity thrive. As a
            forward-thinking institution, we strive to equip our students with
            the knowledge, expertise, and values needed to succeed in their
            chosen careers. Our world-class facilities, industry-focused
            curricula, and dynamic campus life make SU a cornerstone for
            fostering the next generation of leaders and innovators. With a
            strong emphasis on hands-on learning and real-world experience, we
            aim to inspire our students to contribute meaningfully to society
            and become agents of positive change in the world.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full flex justify-center items-center my-8">
        <div className="w-screen h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      <div
        ref={header1Ref}
        className="bg-[#1A1A1A] w-full h-auto py-8 flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={aurorapattern}
            className="h-[18rem] md:h-[20rem] w-auto"
            alt="Design"
          />
          <h1
            ref={headerTextRef}
            className="text-white text-2xl md:text-4xl font-bold max-w-full md:max-w-lg text-center md:text-left leading-tight"
          >
            HACKATHONS <br />
            Experience the brilliance of creativity and innovation at our
            festival.
          </h1>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full flex justify-center items-center my-8">
        <div className="w-screen h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      <div
        ref={aboutRef}
        className="bg-[#1A1A1A] w-full h-auto py-12 flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto space-x-6">
          <div
            ref={aboutTextRef}
            className="flex flex-col max-w-lg space-y-4 text-center md:text-left"
          >
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              About Our Hackathons
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Our hackathons bring together the brightest minds in technology to
              solve real-world challenges. With mentorship from industry experts
              and amazing prizes, these 24-hour coding marathons are where
              innovation comes to life.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Whether you're a seasoned developer or just starting out, our
              inclusive environment welcomes all skill levels. Form teams, build
              projects, and showcase your creativity!
            </p>
          </div>

          <img
            src={rocket}
            className="h-[15em] md:h-[15rem] object-cover rounded-lg shadow-lg"
            alt="Design"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-8">
        <div className="w-screen h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      <h1
        ref={videoTitleRef}
        className="text-white text-2xl md:text-4xl font-bold text-center mb-8"
      >
        Previous Year's Hacks
      </h1>

      <div
        ref={videoRef}
        className="w-full h-auto bg-[#1A1A1A] flex items-center justify-center"
      >
        <div className=" h-[30rem] w-11/12 md:w-[80%] flex items-center justify-center">
          <video
            src={event}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-8">
        <div className="w-screen h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      {/* 3 Boxes Section */}
      <div className="w-full flex flex-wrap justify-around items-center py-12 space-x-4 space-y-4">
        {/* Box 1 */}
        <div
          ref={box1Ref}
          className="relative bg-[#333333] text-white w-[90%] md:w-[30%] h-[20rem] rounded-lg shadow-lg hover:bg-[#444444] transition duration-300"
        >
          <img
            src={techtalks}
            alt="Creative Workshops background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
          />
          <div className="box-content relative z-10 p-6 flex flex-col items-center justify-between">
            <h2 className="text-xl font-semibold mb-4">Tech Talks</h2>
            <p className="text-base text-gray-300 mb-4">
              Engage in inspiring talks and discussions with industry leaders
              about the future of technology and innovation.
            </p>
            <div className="w-full flex flex-wrap justify-around items-center py-12 space-x-4 space-y-4">
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105"
                onClick={() => navigate("/tech-talks")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div
          ref={box2Ref}
          className="relative bg-[#333333] text-white w-[90%] md:w-[30%] h-[20rem] rounded-lg shadow-lg hover:bg-[#444444] transition duration-300"
        >
          <img
            src={spoorthi}
            alt="Tech Talks background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
          />
          <div className="box-content relative z-10 p-6 flex flex-col items-center justify-between">
            <h2 className="text-xl font-semibold mb-4">Sports Fest</h2>
            <p className="text-base text-gray-300 mb-4">
              Balance tech with athletics at our annual sports festival
              featuring various competitions.
            </p>
            <div className="w-full flex flex-wrap justify-around items-center py-12 space-x-4 space-y-4">
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105"
                onClick={() => navigate("/sports-fest")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div
          ref={box3Ref}
          className="relative bg-[#333333] text-white w-[90%] md:w-[30%] h-[20rem] rounded-lg shadow-lg hover:bg-[#444444] transition duration-300"
        >
          <img
            src={aurora}
            alt="Networking Events background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg"
          />
          <div className="box-content relative z-10 p-6 flex flex-col items-center justify-between">
            <h2 className="text-xl font-semibold mb-4">Cultural Fest</h2>
            <p className="text-base text-gray-300 mb-4">
              Experience our signature events combining technology, innovation,
              and entertainment.
            </p>
            <div className="w-full flex flex-wrap justify-around items-center py-12 space-x-4 space-y-4">
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105"
                onClick={() => navigate("/aurora")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
