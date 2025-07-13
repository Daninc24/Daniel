import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    title: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Daniel is a highly skilled developer who consistently delivers high-quality work. His attention to detail and problem-solving abilities are outstanding. He is a valuable asset to any team!",
  },
  {
    name: "John Smith",
    title: "Lead Engineer, InnovateX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Working with Daniel was a pleasure. He communicates clearly, meets deadlines, and always goes the extra mile to ensure project success.",
  },
  {
    name: "Emily Chen",
    title: "Product Manager, Webify",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Daniel's technical expertise and creative approach helped us launch our product ahead of schedule. I highly recommend him for any web development project.",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          What clients and colleagues say about working with me.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100 shadow"
            />
            <blockquote className="text-gray-700 italic mb-4">“{t.quote}”</blockquote>
            <div className="font-semibold text-blue-700">{t.name}</div>
            <div className="text-sm text-gray-500">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 