import React, { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import CE1 from "../assets/Pages/CE1.png";
import CE2 from "../assets/Pages/CE2.png";
import CE3 from "../assets/Pages/CE3.png";
import ME1 from "../assets/Pages/ME1.png";
import ME2 from "../assets/Pages/ME2.png";
import ME3 from "../assets/Pages/ME3.png";
import EE1 from "../assets/Pages/EE1.png";
import EE2 from "../assets/Pages/EE2.png";
import EE3 from "../assets/Pages/EE3.png";
import {
  BookOpen,
  Users,
  Trophy,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import design from "../assets/Pages/design.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const DepartmentsPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [showFacultyPopup, setShowFacultyPopup] = useState(false);
  const [showResearchPopup, setShowResearchPopup] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  const departmentRefs = useRef([]);

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
  });

  const handleTabChange = (event, newTabIndex) => {
    setSelectedTabIndex(newTabIndex);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departments = [
    {
      name: "Computer Science & Engineering",
      description:
        "Cutting-edge curriculum in software development, artificial intelligence, and computer systems.",
      highlights: [
        "Specializations in AI/ML, Cybersecurity, and Cloud Computing",
        "State-of-the-art computer labs and research facilities",
        "Industry partnerships with leading tech companies",
      ],
      stats: {
        students: 450,
        faculty: 5,
        placements: "95%",
        research: 6,
      },
      faculty: [
        { name: "Dr. Sarah Johnson", designation: "Professor & HOD" },
        { name: "Dr. Michael Smith", designation: "Associate Professor" },
        { name: "Dr. Emily Wong", designation: "Assistant Professor" },
        { name: "Dr. Robert Chen", designation: "Associate Professor" },
        { name: "Dr. Lisa Martinez", designation: "Assistant Professor" },
      ],
      research: [
        "Machine Learning Applications in Healthcare",
        "Blockchain Security Protocols",
        "Advanced Cloud Computing Architecture",
        "IoT Networks and Security",
        "Quantum Computing Algorithms",
        "AI in Education Systems",
      ],
      hod: "Dr. Sarah Johnson",
      courses: ["B.Tech in CSE", "M.Tech in CSE", "PhD Programs"],
      images: [CE1, CE2, CE3],
    },
    {
      name: "Mechanical Engineering",
      description:
        "Comprehensive program covering design, manufacturing, and thermal systems.",
      highlights: [
        "Advanced CAD/CAM laboratories",
        "Robotics and automation research center",
        "Industry-sponsored projects",
      ],
      stats: {
        students: 380,
        faculty: 22,
        placements: "92%",
        research: 15,
      },
      faculty: [
        { name: "Dr. Sarah Johnson", designation: "Professor & HOD" },
        { name: "Dr. Michael Smith", designation: "Associate Professor" },
        { name: "Dr. Emily Wong", designation: "Assistant Professor" },
        { name: "Dr. Robert Chen", designation: "Associate Professor" },
        { name: "Dr. Lisa Martinez", designation: "Assistant Professor" },
      ],
      research: [
        "Machine Learning Applications in Healthcare",
        "Blockchain Security Protocols",
        "Advanced Cloud Computing Architecture",
        "IoT Networks and Security",
        "Quantum Computing Algorithms",
        "AI in Education Systems",
      ],
      hod: "Dr. Michael Chen",
      courses: ["B.Tech in Mechanical", "M.Tech in Mechanical", "PhD Programs"],
      images: [ME1, ME2, ME3],
    },
    {
      name: "Electrical Engineering",
      description:
        "Advanced curriculum in power systems, electronics, and control systems.",
      highlights: [
        "Power Systems and High Voltage Laboratory",
        "Embedded Systems Research Center",
        "Smart Grid Technology Lab",
      ],
      stats: {
        students: 400,
        faculty: 24,
        placements: "93%",
        research: 20,
      },
      faculty: [
        { name: "Dr. Sarah Johnson", designation: "Professor & HOD" },
        { name: "Dr. Michael Smith", designation: "Associate Professor" },
        { name: "Dr. Emily Wong", designation: "Assistant Professor" },
        { name: "Dr. Robert Chen", designation: "Associate Professor" },
        { name: "Dr. Lisa Martinez", designation: "Assistant Professor" },
      ],
      research: [
        "Machine Learning Applications in Healthcare",
        "Blockchain Security Protocols",
        "Advanced Cloud Computing Architecture",
        "IoT Networks and Security",
        "Quantum Computing Algorithms",
        "AI in Education Systems",
      ],
      hod: "Dr. Emily Rodriguez",
      courses: [
        "B.Tech in Electrical",
        "M.Tech in Power Systems",
        "PhD Programs",
      ],
      images: [EE1, EE2, EE3],
    },
  ];

  const ImageSlideshow = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, [images.length]);

    useEffect(() => {
      gsap.to(slideRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        from: { opacity: 0, scale: 0.95 },
      });
    }, [currentImage]);

    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
      <div
        ref={slideRef}
        className="relative w-full  h-65 overflow-hidden rounded-lg group"
      >
        <img
          src={images[currentImage]}
          alt={`Department image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    );
  };

  const PopupModal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef(null);

    if (!isOpen) return null;

    return (
      <div
        ref={modalRef}
        className="w-screen fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative transform transition-all duration-300 scale-100 opacity-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="max-h-96 overflow-y-auto">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cream  mx-auto">
      {/* Hero Section */}
      <div ref={headerRef} className="flex bg-green-800 h-[25rem] mt-[4rem]">
        {/* Image Section */}
        <img src={design} className="h-full w-1/2 object-cover" alt="Design" />

        {/* Text Section */}
        <div
          ref={headerContentRef}
          className="flex flex-col  w-1/2 p-4 text-white ml-4"
        >
          <h1 className="text-3xl text-white font-bold">Departments</h1>
          <p className="text-lg text-white mt-8">
            At SU, our departments are the backbone of our academic excellence,
            each offering specialized programs designed to nurture expertise and
            innovation. From cutting-edge engineering and technology disciplines
            to dynamic management and liberal arts studies, our diverse
            departments cater to a wide range of interests and career
            aspirations. With highly qualified faculty, modern laboratories, and
            a commitment to interdisciplinary learning, every department fosters
            an environment of discovery and collaboration.
          </p>
          <button className="mt-4 bg-transparent border-black border-b-2 hover:border-opacity-75 transition-colors h-[3rem] w-[8rem]">
            Explore
          </button>
        </div>
      </div>
      <div className="space-y-24 p-8">
        {departments.map((dept, index) => (
          <div
            ref={(el) => (departmentRefs.current[index] = el)}
            className={`flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                {dept.name}
              </h2>
              <p className="text-gray-600">{dept.description}</p>
              <Card className="shadow-lg bg-white rounded-lg">
                <CardContent className="w-full p-6">
                  <Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    className="flex justify-center mb-8"
                  >
                    <Tabs
                      value={selectedTabIndex}
                      onChange={handleTabChange}
                      aria-label="department information tabs"
                      sx={{
                        "& .MuiTab-root": {
                          textTransform: "none",
                          minWidth: "unset",
                          padding: "8px 16px",
                          fontWeight: 500,
                          color: "text.secondary",
                          "&.Mui-selected": {
                            color: "primary.main",
                          },
                        },
                      }}
                    >
                      <Tab label="Key Highlights" />
                      <Tab label="Courses" />
                      <Tab label="Statistics" />
                    </Tabs>
                  </Box>

                  <TabPanel value={selectedTabIndex} index={0}>
                    <ul className="space-y-2">
                      {dept.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Trophy className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel value={selectedTabIndex} index={1}>
                    <ul className="space-y-3">
                      {dept.courses.map((course, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          <span className="text-gray-600">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel value={selectedTabIndex} index={2}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(dept.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {key === "students" || key === "faculty" ? (
                                <Users className="h-5 w-5 text-blue-500" />
                              ) : key === "placements" ? (
                                <Trophy className="h-5 w-5 text-blue-500" />
                              ) : (
                                <BookOpen className="h-5 w-5 text-blue-500" />
                              )}
                              <span className="font-semibold capitalize">
                                {key}
                              </span>
                            </div>
                            <p className="text-2xl font-bold text-blue-900">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => {
                            setSelectedDept(dept);
                            setShowFacultyPopup(true);
                          }}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Faculty
                        </button>
                        <button
                          onClick={() => {
                            setSelectedDept(dept);
                            setShowResearchPopup(true);
                          }}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Research
                        </button>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Research Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.research.map((area, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </CardContent>
              </Card>
            </div>
            <div className="md:w-1/2">
              <ImageSlideshow images={dept.images} />
            </div>
          </div>
        ))}
      </div>
      <PopupModal
        isOpen={showFacultyPopup}
        onClose={() => setShowFacultyPopup(false)}
        title={`${selectedDept?.name} Faculty Members`}
      >
        <ul className="space-y-4">
          {selectedDept?.faculty.map((member, index) => (
            <li key={index} className="border-b pb-2">
              <p className="font-semibold text-blue-900">{member.name}</p>
              <p className="text-gray-600">{member.designation}</p>
            </li>
          ))}
        </ul>
      </PopupModal>

      <PopupModal
        isOpen={showResearchPopup}
        onClose={() => setShowResearchPopup(false)}
        title={`${selectedDept?.name} Research Papers`}
      >
        <ul className="space-y-4">
          {selectedDept?.research.map((paper, index) => (
            <li key={index} className="border-b pb-2">
              <p className="text-gray-800">{paper}</p>
            </li>
          ))}
        </ul>
      </PopupModal>
    </div>
  );
};

export default DepartmentsPage;
