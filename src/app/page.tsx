import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Why from '@/components/Why';
import Program from '@/components/Program';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Program />
      <Team />
      <Gallery />
      <Register />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
