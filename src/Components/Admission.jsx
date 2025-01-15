import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import design from "../assets/Pages/design.png";
import palace from "../assets/Pages/palace.png";
import world from "../assets/Pages/world.png";
import hat from "../assets/Pages/hat.png";
import envelope from "../assets/Pages/envelope.png";
import { School, Timeline, CompareArrows, Psychology, ArrowRight } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

const Admission = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const programsRef = useRef(null);
  const tableRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
      const createScrollTrigger = (trigger) => ({
        trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reset play reset"
      });
    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.5, 
        ease: "power4.out" 
      }
    );

    // Hero text animation with slight delay
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 60 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.7, 
        ease: "power3.out" 
      }
    );

    // Enhanced card animations
    gsap.utils.toArray(".program-card").forEach((card, index) => {
      // Create timeline for each card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Card entrance animation
      tl.fromTo(card,
        { 
          y: 100,
          opacity: 0,
          rotationX: 45
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.2)"
        }
      )
      
      // Image animation
      .fromTo(card.querySelector("img"),
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      )
      
      // Points animation
      .fromTo(card.querySelectorAll("li"),
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out"
        },
        "-=0.2"
      )
      
      // Stats cards animation
      .fromTo(card.querySelectorAll(".stat-card"),
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        },
        "-=0.2"
      );
    });

    // Table animation
    gsap.fromTo(
      tableRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: createScrollTrigger(tableRef.current)
      }
    );

    // Table rows stagger animation
    gsap.fromTo(
      "tbody tr",
      {
        opacity: 0,
        x: -20
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: createScrollTrigger("tbody")
      }
    );

  }, []);

  const btechPrograms = [
    {
      program: "Computer Science Engineering",
      general: 60,
      sc_st: 25,
      obc: 20,
      ews: 10,
      pwc: 5,
    },
    {
      program: "Electronics & Communication",
      general: 45,
      sc_st: 20,
      obc: 15,
      ews: 7,
      pwc: 3,
    },
    {
      program: "Mechanical Engineering",
      general: 30,
      sc_st: 15,
      obc: 10,
      ews: 3,
      pwc: 2,
    },
    {
      program: "Civil Engineering",
      general: 30,
      sc_st: 15,
      obc: 10,
      ews: 3,
      pwc: 2,
    },
    {
      program: "Electrical Engineering",
      general: 30,
      sc_st: 15,
      obc: 10,
      ews: 3,
      pwc: 2,
    },
    {
      program: "Chemical Engineering",
      general: 15,
      sc_st: 7,
      obc: 5,
      ews: 2,
      pwc: 1,
    },
  ];

  const programs = [
    {
      image: world,
      title: "B.Tech Program",
      icon: <School />,
      number1: "98%",
      number2: "100%",
      number3: "50+",
      description:
        "4-year undergraduate program in engineering with multiple specializations.",
      points: [
        "Admission through JEE Main entrance examination",
        "Minimum eligibility: 12th grade with PCM (Physics, Chemistry, Mathematics)",
        "Merit-based admission process",
        "Counseling and seat allocation based on rank",
      ],
    },
    {
      image: palace,
      title: "B.Tech + M.Tech (Dual Degree)",
      icon: <Timeline />,
      number1: "100%",
      number2: "100%",
      number3: "30+",
      description:
        "5-year integrated program leading to both B.Tech and M.Tech degrees.",
      points: [
        "Specialized research-oriented curriculum",
        "Advanced project work in final year",
        "Same admission process as B.Tech",
        "Option to specialize in emerging technologies",
      ],
    },
    {
      image: hat,
      title: "Direct Second Year (Lateral Entry)",
      icon: <CompareArrows />,
      number1: "90%",
      number2: "100%",
      number3: "40+",
      description: "Entry directly to second year B.Tech for diploma holders.",
      points: [
        "For Diploma holders or B.Sc graduates",
        "Separate entrance examination",
        "Limited seats (10% of total intake)",
        "Branch allocation based on merit",
      ],
    },
    {
      image: envelope,
      title: "PhD Program",
      icon: <Psychology />,
      number1: "80%",
      number2: "100%",
      number3: "50+",
      description:
        "Doctoral research program in various engineering disciplines.",
      points: [
        "Full-time and part-time options available",
        "Minimum qualification: M.Tech/ME in relevant field",
        "Admission through interview and research proposal",
        "Research scholarships available for eligible candidates",
      ],
    },
  ];

//   

return (
  <div className="w-full overflow-x-hidden bg-cream">
    {/* Hero Section - Full width background */}
    <div className="bg-red-900 w-full" ref={heroRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <img src={design} className="h-48 md:h-[29rem] object-cover mt-[4rem" alt="Design" />
          <div className="p-6 md:ml-10 md:mt-0 text-white mt-2" ref={heroTextRef}>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Admission Process</h1>
            <p className="text-base md:text-lg">
              Our admission process is straightforward and transparent, giving
              every applicant a fair opportunity to join our community. We aim
              to foster an inclusive environment that values academic
              excellence, personal growth, and leadership, selecting individuals
              committed to making a positive impact.
            </p>
            <button className="mt-4 bg-transparent border-white border-b-2 hover:border-opacity-75 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10" ref={programsRef}>
        {programs.map((program, index) => (
          <div
            key={index}
            className="p-4 md:p-6 border border-black hover:shadow-xl hover:shadow-red-800 transition-shadow duration-300 program-card"
          >
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-32 h-32 md:w-[12rem] md:h-[12rem] mb-4 sm:mb-0 sm:mr-4 object-cover"
              />
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center sm:text-left">
                {program.title}
              </h2>
            </div>
            <p className="text-red-800 mb-4">{program.description}</p>
            <ul className="list-none pl-0 space-y-2">
              {program.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <ArrowRight className="mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 text-white rounded-lg bg-green-800 text-center stat-card">
                <div className="text-2xl md:text-4xl font-bold">{program.number1}</div>
                <div className="text-sm md:text-lg">Placement Rate</div>
              </div>
              <div className="p-4 text-white rounded-lg bg-yellow-700 text-center stat-card">
                <div className="text-2xl md:text-4xl font-bold">{program.number2}</div>
                <div className="text-sm md:text-lg">Internship Offers</div>
              </div>
              <div className="p-4 text-white rounded-lg bg-blue-900 text-center stat-card">
                <div className="text-2xl md:text-4xl font-bold">{program.number3}</div>
                <div className="text-sm md:text-lg">Companies Visited</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Programs Table */}
      <div className="bg-white shadow-lg rounded-lg my-8 p-4 md:p-6 hover:shadow-lg hover:shadow-red-800 transition-shadow duration-300" ref={tableRef}>
        <h2 className="text-xl md:text-2xl font-semibold text-red-800 mb-4">
          Available B.Tech Programs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  Program
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  General
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  SC/ST
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  OBC
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  EWS
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  PWC
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {btechPrograms.map((program, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-800 whitespace-nowrap">
                    {program.program}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm text-red-800">
                    {program.general}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm text-red-800">
                    {program.sc_st}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm text-red-800">
                    {program.obc}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm text-red-800">
                    {program.ews}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm text-red-800">
                    {program.pwc}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm font-semibold text-gray-800">
                    {program.general + program.sc_st + program.obc + program.ews + program.pwc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
};

export default Admission;