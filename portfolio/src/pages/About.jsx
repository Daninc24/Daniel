import React from "react";
import Dan from '../assets/DAN.JPG'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js) with a drive to create impactful digital solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-br from-cyan-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Journey
              </h3>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated full-stack developer with over 1 years of experience crafting innovative web applications using the MERN stack. 
                  My passion lies in solving complex problems and creating user-centric solutions that deliver real value.
                </p>
                <p className="text-lg leading-relaxed">
                  From concept to deployment, I enjoy every aspect of the development process. Whether it's building 
                  responsive React interfaces, designing robust Express APIs, or optimizing MongoDB database performance, I strive for 
                  excellence in every line of code.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in continuous learning and staying 
                  ahead of industry trends in the JavaScript ecosystem.
                </p>
              </div>
            </div>
            
            {/* Expertise areas */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">React Development</h4>
                </div>
                <p className="text-gray-600">
                  Creating responsive, accessible, and performant user interfaces with React, Redux, and modern frontend best practices.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Node.js & Express</h4>
                </div>
                <p className="text-gray-600">
                  Building scalable REST APIs, server-side logic, and backend services with security and performance in mind.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">MongoDB</h4>
                </div>
                <p className="text-gray-600">
                  Designing and optimizing NoSQL database schemas, implementing data models, and ensuring data integrity.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Full-Stack Integration</h4>
                </div>
                <p className="text-gray-600">
                  Seamlessly connecting frontend and backend, implementing authentication, and deploying complete MERN applications.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="bg-gradient-to-br from-cyan-600 to-red-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src={Dan} alt="Daniel Mailu" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h4 className="text-lg md:text-xl font-semibold">Daniel Mailu Ngila</h4>
                <p className="text-cyan-100">MERN Stack Developer</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                  </svg>
                  <span className="text-sm">1+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Available for Hire</span>
                </div>
              </div>
            </div>
            
            {/* Download resume */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Get My Resume</h4>
              <p className="text-gray-600 text-sm mb-4">
                Download my detailed resume with complete work history and MERN stack skills.
              </p>
              <a
                href="/Daniel_Mailu_CV.pdf"
                download="Daniel_Mailu_CV.pdf"
                className="inline-flex items-center bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="Download resume"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
            
            {/* Quick facts */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Languages</span>
                  <span className="font-medium">English, Swahili</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Education</span>
                  <span className="font-medium">Software Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stack</span>
                  <span className="font-medium">MERN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interests</span>
                  <span className="font-medium">AI/ML, Web3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 