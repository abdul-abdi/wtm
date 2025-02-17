import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Events from './components/sections/Events';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Events />
      <Gallery />
      <Contact />
      <CTA />
    </main>
  );
}
