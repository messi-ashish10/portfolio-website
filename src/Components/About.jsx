// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <p className="text-lg mb-6">
              Hello! I’m a passionate developer with experience in full-stack web development, machine learning, and cloud computing. I enjoy building creative solutions and constantly learning new technologies to improve my skills. Currently, I’m focusing on creating scalable and efficient applications using modern frameworks and cloud services.
            </p>
            <p className="text-lg mb-6">
              My journey started with HTML, CSS, and JavaScript, and I have since expanded my expertise to include React, Tailwind CSS, Docker, and Kubernetes. I’ve also built projects in machine learning, utilizing frameworks like TensorFlow and PyTorch, and deployed applications on AWS and GCP.
            </p>
            <p className="text-lg">
              In my free time, I enjoy exploring new tools and working on personal projects that challenge me to grow as a developer. Check out some of my projects below, and feel free to connect if you’re interested in collaborating!
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>⚡ Full-Stack Development (React, Node.js)</li>
              <li>⚡ Styling with Tailwind CSS</li>
              <li>⚡ Machine Learning (TensorFlow, PyTorch)</li>
              <li>⚡ Cloud Deployment (AWS, GCP)</li>
              <li>⚡ Containerization (Docker, Kubernetes)</li>
              <li>⚡ Version Control (Git, GitHub)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
