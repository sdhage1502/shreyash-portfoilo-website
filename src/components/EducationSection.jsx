import React from 'react';

const EducationSection = ({ educationData, activeTab, setActiveTab }) => {
  return (
    <section id="education" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
        <div className="relative">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-lg sm:text-xl">school</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
            My academic journey, shaping my foundational knowledge and skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className={`group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 dark:border-neutral-700/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
              activeTab === `education-${i}` ? 'ring-2 ring-blue-500 dark:ring-indigo-400' : ''
            }`}
            onClick={() => setActiveTab(activeTab === `education-${i}` ? null : `education-${i}`)}
          >
            <div className="absolute inset-0 glass-morphism rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined text-white text-xl sm:text-2xl lg:text-3xl">{edu.icon}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {edu.title}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                  {edu.school}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center space-x-1 mb-1 sm:mb-0">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-xs">grade</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>
                <div
                  className={`mt-3 sm:mt-4 text-neutral-700 dark:text-neutral-300 transition-all duration-500 overflow-hidden ${
                    activeTab === `education-${i}` ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base">
                    More details about this {edu.title} program could go here, e.g., key subjects, projects, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;