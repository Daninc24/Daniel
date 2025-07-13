import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main className="bg-white text-gray-900">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
