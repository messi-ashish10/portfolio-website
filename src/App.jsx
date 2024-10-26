import React from 'react';
import Navbar from './Components/Nav';
import HeroSection from './Components/FirstSection';
import Projects from './Components/Project';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      {/* Other content goes here */}
    </div>
  );
}

export default App;
