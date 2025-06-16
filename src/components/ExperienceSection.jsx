import React from 'react';

const ExperienceSection = ({ experienceData, activeTab, setActiveTab }) => {
  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-3xl rounded-full"></div>
        <div className="relative">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-lg sm:text-xl">work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
            Transforming ideas into reality through innovative development and collaborative leadership
          </p>
        </div>
      </div>

      <div className="relative max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-600 rounded-full shadow-lg md:hidden sm:block"></div>

        <div className="absolute left-5 sm:left-7 md:left-1/2 transform md:-translate-x-1/2 top-16 sm:top-20">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse opacity-75"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse opacity-75" style={{ animationDelay: '1s' }}></div>
        </div>

        {experienceData.map((exp, i) => (
          <div key={i} className="relative mb-8 sm:mb-12 md:mb-16">
            <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white dark:border-slate-800 shadow-xl animate-float z-10">
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
            </div>

            <div className={`ml-12 sm:ml-16 md:ml-0 ${i % 2 === 0 ? 'md:mr-1/2 md:pr-8 lg:pr-16' : 'md:ml-1/2 md:pl-8 lg:pl-16'}`}>
              <div
                className={`group relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 dark:border-neutral-700/30 hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeTab === `experience-${i}` ? 'ring-2 ring-emerald-500 dark:ring-teal-400' : ''
                }`}
                onClick={() => setActiveTab(activeTab === `experience-${i}` ? null : `experience-${i}`)}
              >
                <div className="absolute inset-0 glass-morphism rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <span className="material-symbols-outlined text-white text-lg sm:text-xl lg:text-2xl">{exp.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 sm:mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-base sm:text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                            {exp.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-0">
                              <span className="material-symbols-outlined text-xs">schedule</span>
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <span className="material-symbols-outlined text-xs">location_on</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300"
                      aria-label={activeTab === `experience-${i}` ? 'Collapse details' : 'Expand details'}
                    >
                      <span
                        className={`material-symbols-outlined text-xl sm:text-2xl transform transition-transform duration-300 ${
                          activeTab === `experience-${i}` ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {Object.entries(exp.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-3 sm:p-4 bg-white/50 dark:bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-white/30 dark:border-neutral-700/30"
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                          {value}
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {exp.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium border border-emerald-200 dark:border-emerald-700/30 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeTab === `experience-${i}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-emerald-200/50 dark:border-emerald-700/30 pt-4 sm:pt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 flex items-center">
                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 mr-2 text-lg sm:text-xl">description</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="flex items-start space-x-2 sm:space-x-3 group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed group-hover/item:text-neutral-900 dark:group-hover/item:text-neutral-100 transition-colors duration-300">
                              {achievement.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-emerald-200/30 dark:border-emerald-700/20 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-sm sm:text-base">trending_up</span>
                      <span>Currently Active</span>
                    </div>
                    <button
                      className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
                      aria-label="View experience details"
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl border border-emerald-200/30 dark:border-emerald-700/30">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl sm:text-2xl lg:text-3xl">handshake</span>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Let's Work Together</h3>
        </div>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          Ready to bring your next project to life? I'm always excited to collaborate on innovative solutions and tackle new challenges.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <a
            href="mailto:sdhage1502@gmail.com"
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
            aria-label="Send email to Shreyash Dhage"
          >
            <span className="material-symbols-outlined text-xs sm:text-sm">mail</span>
            <span>Get In Touch</span>
          </a>
          <a
            href="/Shreyash_Dhage_Software_Developer_Resume.pdf"
            download
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold rounded-xl border border-emerald-200 dark:border-emerald-700/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
            aria-label="Download Shreyash Dhage's resume"
          >
            <span className="material-symbols-outlined text-xs sm:text-sm">download</span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;