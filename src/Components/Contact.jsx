import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Mail, MapPin, Phone,Clock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import design from "../assets/Pages/design.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

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
      toggleActions: "play reset play reset",
    });

    gsap.from(".header-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: createScrollTrigger(".header-section"),
    });

    gsap.from("loc-map", {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: "circ.out",
    });

    gsap.from(".contact-form-box", {
      opacity: 0,
      x: function (index) {
        return index === 0 ? -50 : 50;
      },
      duration: 1,
      scrollTrigger: createScrollTrigger(".contact-form-box"),
    });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zu8culw", "template_mb91dtm", form.current, {
        publicKey: "QEcszGELVHYb5dMGR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            title: "Succes!",
            text: "Mail sent successfully",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screenn bg-cream">
      <div ref={headerRef} className="flex bg-wine h-[25rem] mt-[4rem]" >
        {/* Image Section */}
        <img src={design} className="h-full w-1/2 object-cover" alt="Design" />

        {/* Text Section */}
        <div ref={headerContentRef} className="flex flex-col  w-1/2 p-4 text-white ml-4 ]">
          <h1 className="text-3xl text-white font-bold">CONTACT US</h1>
          <p className="text-lg text-white mt-8">
            At SU, connecting with us is simple and seamless, as we prioritize
            accessibility and responsiveness to meet your needs. Whether you
            have inquiries about admissions, academic programs, or campus
            facilities, our dedicated support team is here to assist you every
            step of the way. With multiple channels of communication, including
            phone, email, and in-person visits, we ensure your questions are
            addressed promptly and effectively
          </p>
          <button className="mt-4 bg-transparent border-black border-b-2 hover:border-opacity-75 transition-colors h-[3rem] w-[8rem]">
            Explore
          </button>
        </div>
      </div>
      <div className="w-4/5  mx-auto my-10 max-w-screen-lg loc-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.646048931109!2d72.8361154!3d19.123177599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1736173414381!5m2!1sen!2sin"
          className="border-0 w-full h-96"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Contact Info & Form Section */}
      <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 p-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl">
            <div className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-transform">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">Address</h5>
                <p className="text-gray-600">
                Silver University of Technology, Knowledge Valley, Sector 12, Eastern Tech Park, Mumbai, Maharashtra, 400001, India.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-transform">
              <Phone className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">Contact</h5>
                <p className="text-gray-600">Ruhiya Mehta(Help Desk) : +91 9167430103 <br/> College Office : 2657483927 </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-transform">
              <Mail className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">Email</h5>
                <p className="text-gray-600">sohamaparekh@gmail.com <br/> silverUni@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-transform">
            <Clock className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">Office Hours</h5>
                <p className="text-gray-600">9 A.M to 6 P.M (Monday to Friday)<br/> 9 A.M to 3 P.M (Saturday)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-8 rounded-lg shadow-lg contact-form-box">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/90"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/90"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/90"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;