import React, { useRef } from 'react';
import video from '../assets/Home/Video.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Trial = () => {
  const containerRef = useRef(null);
  const pointRefs = useRef([]);

  useGSAP(() => {
    const container = containerRef.current;
    const points = pointRefs.current;

    gsap.set(points, { x: -200, opacity: 0 });

    // Staggered points animation
    const scrollAnim = gsap.to(points, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }, '-=0.8');

    // Hover animations for points
    points.forEach((point, index) => {
      if (!point) return;
      
      const badge = point.querySelector('.number-badge');
      const content = point.querySelector('.content');

      // Create hover effect timeline
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(badge, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(content, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

      // Add hover listeners
      point.addEventListener('mouseenter', () => hoverTl.play());
      point.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex w-screen px-10 items-center pt-[8rem] pb-20 flex-wrap z-50">
        {/* Points on the left */}
        <div className="flex-1 space-y-4">
          {[ 
            {
              number: '01',
              title: 'Innovative Learning',
              text: 'Offers innovative learning experiences that blend creativity, technology, and real-world skills.',
              color: 'bg-blue-900'
            },
            {
              number: '02',
              title: 'Expert Teachers',
              text: 'Expert teachers who are passionate about their subjects and their students.',
              color: 'bg-orange-800'
            },
            {
              number: '03',
              title: 'Global Community',
              text: 'A global community of students, faculty, and alumni who are changing the world.',
              color: 'bg-green-900'
            }
          ].map((point, index) => (
            <div key={point.number} ref={el => pointRefs.current[index] = el}
              className="transform hover:cursor-pointer">
              <span className={`number-badge inline-block w-20 h-8 ${point.color} rounded-full text-white text-center pt-1 mb-2`}>
                {point.number}
              </span>
              <div className="content">
                <span className="text-xl font-bold text-black block">{point.title}</span>
                <span className="text-gray-400 block">{point.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Circular div on the right */}
        <div className="flex-1 flex justify-end mt-8 sm:mt-0">
          <div 
            className="w-[32rem] h-[18rem] bg-blue-400 rounded-full flex items-center justify-center text-white text-2xl overflow-hidden"
          >
            <video 
              src={video} 
              className="w-[38rem] h-[18rem] rounded-full object-cover" 
              autoPlay 
              loop 
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;