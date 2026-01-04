import React from "react";

const Testimonials = () => {
  const achievements = [
    {
      id: 1,
      title: "MERN Stack Expertise",
      description: "Proficient in building full-stack applications using MongoDB, Express.js, React.js, and Node.js with modern development practices.",
      icon: "⚡",
      category: "Technical Skills"
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive web applications that work seamlessly across all devices and screen sizes.",
      icon: "📱",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Database Design",
      description: "Designing efficient MongoDB schemas and implementing optimized queries for better performance and scalability.",
      icon: "🗄️",
      category: "Backend"
    },
    {
      id: 4,
      title: "API Development",
      description: "Building RESTful APIs with Express.js, implementing authentication, and ensuring secure data handling.",
      icon: "🔗",
      category: "Backend"
    },
    {
      id: 5,
      title: "State Management",
      description: "Implementing Redux and Context API for efficient state management in React applications.",
      icon: "🔄",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Version Control",
      description: "Proficient with Git and GitHub for collaborative development and project version control.",
      icon: "📝",
      category: "Development"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      technologies: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Middleware"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "Mongoose", "Database Design", "Data Modeling", "Query Optimization"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Achievements</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what I bring to the table as a MERN stack developer. My expertise spans the entire development stack, from database design to user interface implementation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {achievement.description}
              </p>
              <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                {achievement.category}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-br from-cyan-50 to-red-50 rounded-2xl p-6 md:p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-red-600 rounded-2xl p-6 md:p-8 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-cyan-100">Years Experience</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-cyan-100">Projects Completed</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Client Satisfaction</div>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-cyan-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with the MERN stack. I'm here to help you build scalable, modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="Get in touch to start your project"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="View my projects"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 