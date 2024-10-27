import React from 'react';
import Navbar from './Components/Nav';
import HeroSection from './Components/FirstSection';
import Projects from './Components/Project';
import About from './Components/About';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      {/* Other content goes here */}
    </div>
  );
}

export default App;
