import { useState } from "react";
import { projects } from "../../data/data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          My <span className="text-outline">Projects</span>
        </h2>
        <p className="text-gray-500 text-center mb-12">
          A collection of projects that showcase my skills in React, JavaScript,
          frontend development, API integration, and responsive web design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-teal-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors"
                >
                  Live Demo
                </a>

                <a
                  href={project.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            {showAll ? "Show Less ↑" : "View All Projects →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
