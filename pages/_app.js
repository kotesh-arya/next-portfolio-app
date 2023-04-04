import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
function MyApp() {
  return (
    <>
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
