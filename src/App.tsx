import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <div className="pb-16 sm:pb-0">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
