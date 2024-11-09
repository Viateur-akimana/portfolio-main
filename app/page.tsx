import About from '@/components/About';
import Navbar from '../components/Navbar';
import Projects from "../components/Projects";
import Skills from '../components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#000000] from-10% to-[#434343] min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}
