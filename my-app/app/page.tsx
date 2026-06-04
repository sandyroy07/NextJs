import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
