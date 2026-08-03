import { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgLight text-textPrimary antialiased overflow-x-hidden">
      {/* Scroll progress bar at top */}
      <ScrollProgress />

      {/* Navigation menu */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footnote */}
      <Footer />

      {/* Back to top scroll button */}
      <BackToTop />
    </div>
  );
}

export default App;
