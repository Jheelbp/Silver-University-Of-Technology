import React, { useEffect, useRef } from 'react';
import bg from '../assets/Home/pattern.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Announcements = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const leftItemsRef = useRef([]);
  const rightItemsRef = useRef([]);
  const headingsRef = useRef([]);

  useGSAP(() => {
    const container = containerRef.current;
    const background = bgRef.current;
    const leftItems = leftItemsRef.current;
    const rightItems = rightItemsRef.current;
    const headings = headingsRef.current;

    // Initial states
    gsap.set(background, { scale: 2, opacity: 0 });
    gsap.set([...leftItems, ...rightItems], { x: -50, opacity: 0 });
    gsap.set(headings, { y: -30, opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
    // Animation sequence
    tl.to(background, {
      scale: 1,
      opacity: 0.3,
      duration: 1,
      ease: 'power2.out'
    })
    .to(headings, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    })
    .to(leftItems, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.2')
    .to(rightItems, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3');

    // Hover animations for list items
    [...leftItems, ...rightItems].forEach(item => {
      const arrow = item.querySelector('.arrow');
      const text = item.querySelector('.text');

      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(arrow, {
          x: 5,
          duration: 0.2,
          ease: 'power2.out'
        })
        .to(text, {
          x: 5,
          color: '#2563eb',
          duration: 0.2,
          ease: 'power2.out'
        }, 0);

      item.addEventListener('mouseenter', () => hoverTl.play());
      item.addEventListener('mouseleave', () => hoverTl.reverse());
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Background Image */}
      <img ref={bgRef} src={bg} alt="Background" className="w-screen h-[450px] absolute top-0 left-0"/>
      {/* Content Overlay */}
      <div className="relative z-10 pt-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2  ref={el => headingsRef.current[0] = el} className="font-bold text-2xl mb-5 text-gray-800">
              Events Ministry Of Education
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {[
                'Partition Horrors Remembrance Day',
                'International Yoga Day',
                'National Education Day Programme and National Education Policy (NEP)',
                'Swachhata Pakhwada - Special Campaign 3',
                'Constitution Day',
                'Ek Bharat Shreshtha Bharat'
              ].map((item, index) => (
                <li key={index} ref={el => leftItemsRef.current[index] = el} className="flex items-center cursor-pointer">
                  <span className="arrow mr-2">➔</span>
                  <span className="text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Section */}
          <div>
            <h2 ref={el => headingsRef.current[1] = el} className="font-bold text-2xl mb-5 text-gray-800">
              Government Updates
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {[
                'National Institutional Ranking Framework (NIRF)',
                'Cybercrimes Security',
                'Atal Ranking of Institutions on Innovation Achievements'
              ].map((item, index) => (
                <li key={index} ref={el => rightItemsRef.current[index] = el} className="flex items-center cursor-pointer">
                  <span className="arrow mr-2">➔</span>
                  <span className="text">{item}</span>
                </li>
              ))}
            </ul>
            <button ref={el => rightItemsRef.current[3] = el}className="mt-5 text-blue-600 font-medium hover:underline flex items-center">
              More <span className="arrow ml-1">➔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;