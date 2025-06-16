import React from 'react';

const ProjectsSection = ({ projectsData, activeTab, setActiveTab }) => {
  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-emerald-400/20 blur-3xl rounded-full"></div>
        <div className="relative">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-lg sm:text-xl">code</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </h3>
          </div>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
            A showcase of my recent work, highlighting technical skills and problem-solving abilities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className={`group relative bg-white/60 dark:bg-neutral-800/60 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 dark:border-neutral-700/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
              activeTab === `project-${i}` ? 'ring-2 ring-cyan-500 dark:ring-teal-400' : ''
            }`}
            onClick={() => setActiveTab(activeTab === `project-${i}` ? null : `project-${i}`)}
          >
            <div className="absolute inset-0 glass-morphism rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <span className="material-symbols-outlined text-white text-lg sm:text-xl lg:text-2xl">{project.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{project.date}</p>
                  </div>
                </div>
                <button
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300"
                  aria-label={activeTab === `project-${i}` ? 'Collapse details' : 'Expand details'}
                >
                  <span
                    className={`material-symbols-outlined text-xl sm:text-2xl transform transition-transform duration-300 ${
                      activeTab === `project-${i}` ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
              </div>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs sm:text-sm font-medium border border-cyan-200 dark:border-cyan-700/30 hover:scale-105 transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`text-neutral-700 dark:text-neutral-300 leading-relaxed transition-all duration-500 overflow-hidden ${
                  activeTab === `project-${i}` ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {project.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 mt-4 sm:mt-6 border-t border-cyan-200/30 dark:border-cyan-700/20 pt-4 sm:pt-6">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
                  >
                    <span className="material-symbols-outlined text-xs sm:text-sm">visibility</span>
                    <span>Live Demo</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-1.5 sm:py-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium rounded-xl border border-cyan-200 dark:border-cyan-700/30 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
                  >
                    <i className="fab fa-github text-xs sm:text-sm"></i>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;