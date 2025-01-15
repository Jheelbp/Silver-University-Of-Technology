import React, { useEffect, useRef } from 'react';
import { BookOpen, Users, Trophy, Globe, Rocket, GraduationCap, Building2, Library } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import infra from '../assets/Pages/infra.png';
import design from '../assets/Pages/design.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const headerRef = useRef(null);
  const headerContentRef = useRef(null);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useGSAP(() => {
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center",
        toggleActions: "play none none reset"
      }
    });

    // Header animations
    masterTimeline
      .from(headerRef.current.querySelector("img"), {
        x: -100,
        opacity: 0,
        duration: 1
      })
      .from(headerContentRef.current.children, {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

    const createScrollTrigger = (trigger) => ({
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reset play reset"
    });

    // Hero Section Animation
    gsap.from(".hero-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: createScrollTrigger(".hero-section")
    });

    // Split text effect
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      const text = heroText.textContent;
      heroText.textContent = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        heroText.appendChild(span);
      });

      gsap.from(".hero-text span", {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        scrollTrigger: createScrollTrigger(".hero-section")
      });
    }

    // Stats Section Animation - Counter effect
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 0.5,
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: createScrollTrigger(".stats-section")
    });

    // Stats boxes - 3D flip effect
    gsap.from(".stat-box", {
      rotationY: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: createScrollTrigger(".stats-section")
    });

    // Features Section - Staggered cards with bounce
    gsap.from(".feature-card", {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out",
      scrollTrigger: createScrollTrigger(".features-section")
    });

    // Vision & Mission Animation
    gsap.from(".vision-mission-box", {
      opacity: 0,
      x: function(index) { return index === 0 ? -50 : 50; },
      duration: 1,
      stagger: 0.3,
      scrollTrigger: createScrollTrigger(".vision-mission-section")
    });

    // Campus Life Animation
    gsap.from(".campus-title", {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: createScrollTrigger(".campus-section")
    });

    gsap.from(".campus-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: createScrollTrigger(".campus-section")
    });
  });

  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "50+", label: "Academic Programs" },
    { number: "25,000+", label: "Alumni Worldwide" },
    { number: "200+", label: "Faculty Members" }
  ];

  const features = [
    { icon: Users, title: "Expert Faculty", description: "Learn from industry experts and renowned academics" },
    { icon: GraduationCap, title: "Career Success", description: "95% placement rate with leading companies" },
    { icon: Globe, title: "Global Reach", description: "International partnerships with top universities" },
    { icon: Rocket, title: "Research Focus", description: "State-of-the-art research facilities" },
    { icon: Building2, title: "Modern Campus", description: "World-class infrastructure and facilities" },
    { icon: Library, title: "Learning Resources", description: "Extensive digital and physical library" }
  ];

  return (
    <div className=" min-h-screen overflow-x-hidden bg-cream">
      {/* Hero Section */}
      <div ref={headerRef} className="flex bg-blue-800 h-[25rem] mt-[4rem]"  >
        {/* Image Section */}
        <img src={design} className=" h-full w-1/2 object-cover" alt="Design" />

        {/* Text Section */}
        <div ref={headerContentRef} className="flex flex-col  w-1/2 p-4 text-white ml-4">
          <h1 className="text-3xl text-white font-bold ">
            ABOUT US
          </h1>
          <p className="text-lg text-white mt-[2rem]">
          
          At SU, we are dedicated to fostering a culture of academic excellence, innovation, and inclusivity. As a leading institution, we aim to empower students with knowledge, skills, and values to excel in their chosen fields. With state-of-the-art facilities, industry-aligned programs, and a vibrant campus life, SU stands as a hub of opportunities for shaping future leaders and changemakers.
          </p>
          <button className="mt-4 bg-transparent border-black border-b-2 hover:border-opacity-75 transition-colors h-[3rem] w-[8rem]">
            Explore
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg text-center stat-box transform-gpu">
            <h3 className="text-3xl font-bold text-blue-900 stat-number">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto features-section">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 features-title">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-rounded-lg feature-card">
              <CardContent className="p-6">
                <div className="feature-icon">
                  <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 px-4 max-w-6xl mx-auto vision-mission-section">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg vision-mission-box">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a globally recognized institution of academic excellence, fostering innovation, 
              research, and entrepreneurship.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg vision-mission-box">
            <Trophy className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality education through innovative teaching methodologies 
              and promote holistic development of students.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Life */}
      <div className="py-16 px-4 bg-gray-50 max-w-6xl mx-auto campus-section">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 campus-title">Campus Life</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{ title: "Modern Infrastructure" }, { title: "World-class Library" }, { title: "Sports Facilities" }].map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group campus-card">
              <img src={infra} className="w-full h-64 object-cover"/>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;