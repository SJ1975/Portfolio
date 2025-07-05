import React from "react";

const projects = [
  {
    title: "Sorting Visualizer",
    description:
      "A real-time sorting visualization web app using React and Spring Boot. Includes JWT auth, role-based access, and MongoDB Atlas integration.",
    link: "#",
  },
  {
    title: "Bug Tracker System",
    description:
      "A JavaFX + Spring Boot app for tracking bugs. Features secure RESTful APIs, authentication, and real-time MySQL storage.",
    link: "#",
  },
  {
    title: "Voice Assistant",
    description:
      "A Python-based desktop assistant with voice commands, facial login, emotion detection, and automation features.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-16 px-6" data-aos="fade-right">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
