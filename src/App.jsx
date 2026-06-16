import Navbar from "./components/utils/Navbar";
import Hero from "./components/utils/Hero";
import About from "./components/utils/About";
import Skills from "./components/utils/Skills";
import Projects from "./components/utils/Projects";
import Testimonials from "./components/utils/Testimonials";
import Contact from "./components/utils/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
