import styles from './styles/global.module.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    navbar.style.backgroundColor =
      window.scrollY > window.innerHeight - 80 ? '#000000' : 'transparent';
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
