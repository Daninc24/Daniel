import React from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Redux", level: 90, icon: "🔄" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚂" },
      { name: "REST API", level: 90, icon: "🔗" },
      { name: "JWT Auth", level: 85, icon: "🔒" }
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "Mongoose", level: 85, icon: "🧬" },
      { name: "Git", level: 90, icon: "📝" }
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
          My core skills and tools for building robust MERN stack applications.
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
                <div key={skillIndex} className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
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
              <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-red-600 rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg mb-6 opacity-90">
            I’m always expanding my MERN stack knowledge and keeping up with the latest best practices.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 