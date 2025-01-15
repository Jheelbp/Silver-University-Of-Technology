import React, { useRef, useEffect, useState } from 'react';
import next_icon from '../assets/Home/next-icon.png';
import back_icon from '../assets/Home/back-icon.png';
import user_1 from '../assets/Home/user1.jpeg';
import user_2 from '../assets/Home/user2.jpeg';
import user_3 from '../assets/Home/user3.jpeg';
import user_4 from '../assets/Home/user4.jpeg';

const testimonials = [
  {
    id: 1,
    name: "Bron",
    company: "TCS, Bengaluru",
    image: user_1,
    feedback: "Choosing to pursue my degree at SU was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    id: 2,
    name: "Crystal",
    company: "Infosys, Bengaluru",
    image: user_2,
    feedback: "Opting to pursue my education at SU Institute turned out to be an exceptional decision in my academic path. The supportive community, top-notch facilities have genuinely surpassed my expectations."
  },
  {
    id: 3,
    name: "Rose",
    company: "Vipro, Pune",
    image: user_3,
    feedback: "The inclusive community, cutting-edge facilities, and unwavering commitment to academic excellence have exceeded my expectations. This institution has provided a solid foundation for personal growth and development."
  },
  {
    id: 4,
    name: "Hermes",
    company: "Tech Mahindra, Hyderabad",
    image: user_4,
    feedback: "SU College has been a transformative move for my career. The strong support, advanced resources, and exceptional placement opportunities have surpassed my expectations, making it a strategic choice for a successful future."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => 
        (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getVisibleTestimonials = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[nextIndex]];
  };

  return (
    <div className="px-5 sm:px-10 md:px-20">
      {/* Heading Section */}
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-bold text-blue-900 pt-16 ">
          Testimonials
        </h1>
        <p className="text-center text-gray-600 mt-5 px-5 sm:px-10 md:px-20">
          Our students are our biggest supporters. Read what they have to say about their experiences at SU Institute.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials relative my-10 md:my-20">
        {/* Navigation Buttons */}
        <img
          src={next_icon}
          alt="Next"
          className="next-btn absolute top-1/2 right-2 md:right-[2.5rem] transform -translate-y-1/2 p-3 md:p-4 w-10 md:w-12 rounded-full cursor-pointer bg-blue-900 z-10 hover:bg-blue-800 transition-colors"
          onClick={handleNext}
        />
        <img
          src={back_icon}
          alt="Back"
          className="back-btn absolute top-1/2 left-2 md:left-0 transform -translate-y-1/2 p-3 md:p-4 w-10 md:w-12 rounded-full cursor-pointer bg-blue-900 z-10 hover:bg-blue-800 transition-colors"
          onClick={handlePrev}
        />

        {/* Slider */}
        <div className="overflow-hidden">
          <div className={`flex gap-6 transition-transform duration-500 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={testimonial.id} className="w-full md:w-1/2 p-5 flex-shrink-0">
                <div className="slide shadow-xl p-5 md:p-10 rounded-xl text-gray-600 leading-6 h-full transform hover:scale-105 transition-transform duration-300">
                  <div className="user-info flex items-center mb-5 text-sm">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 border-2 md:border-4 border-blue-900 object-cover"
                    />
                    <div>
                      <h3 className="text-blue-900 text-lg md:text-xl">{testimonial.name}</h3>
                      <span className="text-sm md:text-base">{testimonial.company}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
