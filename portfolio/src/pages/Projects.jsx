import React from "react";
import ecomImage from '../assets/ecom.png';
import trashtracker from '../assets/trashtracker.png';
import chatapp from '../assets/chatapp.png';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with React frontend, Node.js backend, Express API, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose"],
    image: ecomImage,
    link: "https://myshop-git-main-daniel-mailus-projects.vercel.app/",
    github: "https://github.com/Daninc24/myshop.git",
    status: "Live",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Trash Tracking App",
    description: "A High level environmental reporting system. Its used to report dirty environment to solve the green ecomomy",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    image: trashtracker,
    link: "https://trash-tracker-lime.vercel.app/",
    github: "https://github.com/Daninc24/TrashTracker.git",
    status: "Live",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Chat App",
    description: "Used Socket io for live chat and communication. This was one of my school project",
    technologies: ["React", "Node.js", "Express"],
    image: chatapp,
    link: "https://chatapp-hsmq.vercel.app/",
    github: "https://github.com/Daninc24/chatapp.git",
    status: "Live",
    category: "Frontend"
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are some of my recent projects built with the MERN stack, showcasing my full-stack development skills.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    console.log('Image failed to load:', project.title);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {!project.image && (
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-red-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-lg font-semibold">{project.title}</div>
                  </div>
                </div>
              )}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md text-xs font-medium border border-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cyan-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-sm font-medium text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
          <p className="text-gray-600 mb-6">
            I have more MERN projects on my GitHub. Check out my profile for the complete collection of my work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Daninc24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View All Projects
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Discuss
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 