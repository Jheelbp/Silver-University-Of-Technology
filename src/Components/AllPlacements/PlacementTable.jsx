import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const testimonials = [
  {
    recruiter: "Google",
    feedback:"Sardar Patel Institute of Technology produces some of the brightest minds. Their students excel in technical and problem-solving skills.",
  },
  {
    recruiter: "Microsoft",
    feedback:"A brilliant pool of talented graduates who have proven to be invaluable assets to our company. Their training is top-notch.",
  },
  {
    recruiter: "Amazon",
    feedback:"We are consistently impressed by the innovative thinking and dedication of the students from this institution.",
  },
  {
    recruiter: "Facebook",
    feedback:"We highly value the diversity of thought and creativity in the students from Sardar Patel Institute of Technology.",
  },
  {
    recruiter: "Apple",
    feedback:"The students we have hired from this institute show exceptional skill and dedication in every project.",
  },
];

const PlacementTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Navigate to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to get two testimonials to show at once
  const getVisibleTestimonials = () => {
    const nextTestimonialIndex = (currentTestimonial + 1) % testimonials.length;
    return [
      testimonials[currentTestimonial],
      testimonials[nextTestimonialIndex],
    ];
  };

  return (
    <div className="testimonials-container my-20 px-20">
      <h1 className="text-4xl text-center font-bold text-blue-900">Testimonials</h1>
      <p className="text-center text-gray-600 mt-5 px-20">Our recruiters are our lifeline. Here's what they have to say about us.</p>

      <div className="relative">
        {/* Testimonial content */}
        <div className="testimonial-box-wrapper flex mx-auto my-10 space-x-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index}
            className="testimonial-box border border-black p-10 rounded-xl text-gray-600 leading-6 w-1/2 flex-shrink-0">
              <p className="text-center text-xl font-semibold">{testimonial.feedback}</p>
              <div className="user-info flex items-center justify-center mt-5 text-sm">
                <h3 className="text-blue-900 text-center">{testimonial.recruiter}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button onClick={prevTestimonial}
          className=" left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 mr-4 rounded-full cursor-pointer">
          <ChevronLeft />
        </button>
        <button onClick={nextTestimonial}
          className=" right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full cursor-pointer">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PlacementTestimonials;