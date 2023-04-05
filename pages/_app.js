import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
function MyApp() {
  return (
    <>
      <Navigation />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default MyApp;
