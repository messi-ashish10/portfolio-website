// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Library Management System',
    description: 'A cloud-based application to manage library resources, deployed with AWS and Docker.',
    githubLink: 'https://github.com/yourusername/library-management-system',
    demoLink: 'https://yourappdemo.com/library'
  },
  {
    title: 'Vegetable Image Classification',
    description: 'An ML model that classifies vegetable images using CNNs, improving accuracy in sorting.',
    githubLink: 'https://github.com/yourusername/vegetable-classification',
    demoLink: 'https://yourappdemo.com/vegetable-classification'
  },
  {
    title: 'Automatic Image Description Generator',
    description: 'An accessibility tool that generates image descriptions automatically for visually impaired users.',
    githubLink: 'https://github.com/yourusername/image-description-generator',
    demoLink: 'https://yourappdemo.com/image-description'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
