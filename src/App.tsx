import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <Portfolio />
      <Education />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
