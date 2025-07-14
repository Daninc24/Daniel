import React from "react";
import Daniel from '../assets/Daniel.JPG'

const Home = () => {
  const scrollToSection = (sectionId) => {
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('Scroll initiated successfully');
    } else {
      console.log('Element not found, trying alternative approach');
      // Fallback: try to scroll to the section using querySelector
      const section = document.querySelector(`[id="${sectionId}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        console.log('Scroll initiated with querySelector');
      } else {
        console.log('Section not found with querySelector either');
        // Final fallback: scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-cyan-200 transition-colors duration-300">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-cyan-600 bg-gradient-to-r from-cyan-600 to-red-600 bg-clip-text text-transparent">Daniel Mailu</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              MERN Stack Developer passionate about creating innovative web applications with MongoDB, Express, React, and Node.js.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-cyan-600 text-white px-8 py-4 rounded-full hover:bg-cyan-700 transition-all duration-300 inline-flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="View my projects"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View My Work
              </a>
              <a
                href="#contact"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="Get in touch"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </a>
            </div>
            
            {/* MERN Stack badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors duration-300">
                MongoDB
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition-colors duration-300">
                Express
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-200 transition-colors duration-300">
                React
              </span>
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                Node.js
              </span>
            </div>
            
            {/* Quick stats */}
            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold text-cyan-600">1+</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold text-red-600">10+</div>
                <div className="text-xs md:text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center hover:transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-bold text-black">4</div>
                <div className="text-xs md:text-sm text-gray-600">MERN Stack</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-cyan-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <img src={Daniel} alt="Daniel Mailu" className="w-full h-full object-cover rounded-full" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-red-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 md:-right-8 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 