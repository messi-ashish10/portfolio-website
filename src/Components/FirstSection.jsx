import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-800 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          I am a passionate developer with experience in building interactive web applications using modern technologies.
        </p>
        <a href="#projects">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
            View My Work
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
