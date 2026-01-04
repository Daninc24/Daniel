import React from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Redux/Context", level: 92, icon: "🔄" },
      { name: "JavaScript/ES6+", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "HTML5/CSS3", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 93, icon: "🟢" },
      { name: "Express.js", level: 92, icon: "🚂" },
      { name: "REST APIs", level: 95, icon: "🔗" },
      { name: "GraphQL", level: 80, icon: "📊" },
      { name: "JWT Auth", level: 90, icon: "🔒" },
      { name: "Socket.io", level: 85, icon: "⚡" }
    ]
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", level: 92, icon: "🍃" },
      { name: "Mongoose ODM", level: 90, icon: "🧬" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "Redis", level: 70, icon: "🔴" },
      { name: "AWS/Vercel", level: 85, icon: "☁️" },
      { name: "Docker", level: 75, icon: "🐳" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 95, icon: "📝" },
      { name: "Webpack/Vite", level: 85, icon: "📦" },
      { name: "Jest/Testing", level: 80, icon: "🧪" },
      { name: "Postman/API", level: 90, icon: "📮" },
      { name: "Figma/Design", level: 75, icon: "🎨" },
      { name: "Agile/Scrum", level: 85, icon: "🔄" }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
        <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Advanced proficiency in modern web technologies, refined through 2+ years of hands-on experience and 30+ successful projects.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-gradient-to-br from-cyan-50 to-red-50 rounded-2xl p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
              {category.category}
            </h3>
            <div className="space-y-3 md:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-cyan-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Highlights */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-6 text-white text-center">
          <div className="text-3xl font-bold mb-2">2+</div>
          <div className="text-cyan-100">Years of Experience</div>
          <div className="text-sm mt-2 opacity-90">Professional MERN Development</div>
        </div>
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white text-center">
          <div className="text-3xl font-bold mb-2">30+</div>
          <div className="text-red-100">Projects Delivered</div>
          <div className="text-sm mt-2 opacity-90">Full-Stack Applications</div>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white text-center">
          <div className="text-3xl font-bold mb-2">100%</div>
          <div className="text-gray-100">Client Satisfaction</div>
          <div className="text-sm mt-2 opacity-90">On-Time Delivery Record</div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <div className="bg-gradient-to-r from-cyan-600 to-red-600 rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning & Growth</h3>
          <p className="text-lg mb-6 opacity-90">
            Staying ahead of the curve with the latest MERN stack technologies, best practices, and industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Next.js</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">React Native</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Microservices</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">AI/ML Integration</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Web3</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;