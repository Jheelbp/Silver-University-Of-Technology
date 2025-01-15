import React, { useEffect, useRef } from "react";
import {
  Clock,
  Users,
  DollarSign,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react";
import recruiters from "../assets/Pages/recruiters_image.jpg";
import CTCTrendsAndTable from "./AllPlacements/CTCTrendsAndTable";
import Pies from "./AllPlacements/Pies";
import Bars from "./AllPlacements/Bars";
import PlacementTestimonials from "./AllPlacements/PlacementTestimonials";
import design from "../assets/Pages/design.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const recentAchievements = [
  { title: "Google Summer of Code", value: "27+ Selections" },
  { title: "GRE Score", value: "22+ Selections with 320+ Score" },
  { title: "ETHGlobal", value: "3+ Selections" },
  { title: "Data Ranger Hackathon", value: "Winner" },
];

// Components
const Section = ({ title, children }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-white p-6 rounded-lg shadow-md overflow-x-auto mb-8">
      <h3 className="text-xl font-bold mb-4 text-blue-800">{title}</h3>
      {children}
    </div>
  );
};

const KeyStatsCard = ({ icon: Icon, label, value, index }) => {
  const cardRef = useRef(null);

  useGSAP(() => {

    // Hover scale effect
    cardRef.current.addEventListener("mouseenter", () => {
      gsap.to(cardRef.current, {
        scale: 1.1,
        duration: 0.3
      });
    });

    cardRef.current.addEventListener("mouseleave", () => {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3
      });
    });
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer "
    >
      <Icon className="h-6 w-6 text-blue-600" />
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const MainContent = () => {
  const headerRef = useRef(null);
  const headerContentRef = useRef(null);
  const statsGridRef = useRef(null);
  
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
      })
      // Stats grid animation - starts after header content
      .from(statsGridRef.current.children, {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "random",
        },
        ease: "bounce.out",
      }, "+=0.3"); // Slight pause before stats animation
  }, []);

  return (
    <>
      <div ref={headerRef} className="flex bg-teal-200 h-[25rem] mt-[4rem]">
        <img src={design} className="h-full w-1/2 object-cover" alt="Design" />
        <div ref={headerContentRef} className="flex flex-col w-1/2 p-4 text-black">
          <h1 className="text-3xl text-black font-bold">
            Placements
          </h1>
          <p className="text-lg text-black mt-2">
            Discover the outstanding placement records, showcasing their
            dedication and our commitment to excellence in preparing them for a
            successful career. These achievements
            reflect not only their hard work but also our institution's holistic
            approach to fostering professional growth, innovation, and
            real-world readiness.
          </p>
          <button className="mt-4 bg-transparent border-black border-b-2 hover:border-opacity-75 transition-colors h-[3rem] w-[8rem]">
            Explore
          </button>
        </div>
      </div>

      <div ref={statsGridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <KeyStatsCard
          icon={DollarSign}
          label="Average Package"
          value="13 LPA"
        />
        <KeyStatsCard 
          icon={Award} 
          label="Highest Package" 
          value="57 LPA" 
        />
        <KeyStatsCard
          icon={Briefcase}
          label="Recruitment Sectors"
          value="20+"
        />
        <KeyStatsCard 
          icon={Users} 
          label="Placement Offers" 
          value="600+" 
        />
        <KeyStatsCard
          icon={DollarSign}
          label="Highest Internship"
          value="5.9L"
        />
        <KeyStatsCard 
          icon={BookOpen} 
          label="Internship Offers" 
          value="400+" 
        />
      </div>
    </>
  );
};

const PlacementPage = () => {

  const achievementsRef = useRef(null);
  const timelineRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
    // Animate header content
    gsap.from(".header-content", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
      // Animate Recent Achievements
      gsap.from(achievementsRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.4,
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
  
      // Animate Placement Preparation Timeline
      gsap.from(timelineRef.current.children, {
        opacity: 0,
        x: -50,
        duration: 1.5,
        stagger: 0.4,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
  }, []);

  return (
    <div className="p-8 bg-teal-200  max-w-7xl mx-auto space-y-8">
      <MainContent/>
      <Section title="Summary of Placement Statistics">
        <p>
          The placement statistics reflect a strong performance, showcasing the
          institution's success in securing opportunities for its students. A
          significant percentage of students were placed across diverse
          industries, with top recruiters from IT, consulting, finance, and core
          engineering sectors. The average package offered saw an upward trend,
          indicating growing demand for skilled graduates, while the highest
          package highlighted the competitive edge of top performers.
          Internships also witnessed a rise in participation, enhancing hands-on
          experience. These statistics underscore the institution's commitment
          to academic excellence and industry readiness.
        </p>
        <p>
          SU College demonstrated exceptional performance in this year’s
          placements, with a remarkable percentage of students securing offers
          from leading companies. Renowned recruiters from industries like IT,
          finance, consulting, and engineering were impressed by the talent
          pool, offering competitive packages that reflected the students'
          caliber. The college also saw an increase in internship opportunities,
          providing valuable industry exposure. With a consistent rise in both
          average and highest salaries, SU College has reinforced its reputation
          as a hub for academic and professional excellence.
        </p>
      </Section>
      <Section>
        <CTCTrendsAndTable />
      </Section>
      <Section>
        <Pies />
      </Section>
      <Section>
      <Bars />
      </Section>
      <Section>
      <div className="flex flex-col md:flex-row gap-6">
  <div ref={achievementsRef} className="bg-white p-6 rounded-lg shadow-md flex-1">
    <h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recentAchievements.map((achievement) => (
        <div
          key={achievement.title}
          className="flex items-center space-x-3"
        >
          <Award className="h-6 w-6 text-blue-600" />
          <div>
            <p className="font-semibold">{achievement.title}</p>
            <p className="text-gray-600">{achievement.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div ref={timelineRef} className="bg-white p-6 rounded-lg shadow-md flex-1">
    <h3 className="text-xl font-bold mb-4">Placement Preparation Timeline</h3>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Clock className="h-6 w-6 text-blue-600" />
        <div>
          <p className="font-semibold">Industry Sessions</p>
          <p className="text-gray-600">
            Expert talks and industry interaction
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Clock className="h-6 w-6 text-blue-600" />
        <div>
          <p className="font-semibold">DSA and Hackathons</p>
          <p className="text-gray-600">
            Technical preparation and competitions
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Clock className="h-6 w-6 text-blue-600" />
        <div>
          <p className="font-semibold">Mock Interviews</p>
          <p className="text-gray-600">
            Practice interviews with industry experts
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Clock className="h-6 w-6 text-blue-600" />
        <div>
          <p className="font-semibold">Workshops and Sessions</p>
          <p className="text-gray-600">
            Skill development and career guidance
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</Section>

      <Section title="Top Recruiters">
        <div className="flex justify-center">
          <img
            src={recruiters}
            alt="Top Recruiters"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </Section>
      <Section>
      <PlacementTestimonials />
      </Section>
    </div>
  );
};

export default PlacementPage;