import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ skillsData, className = '' }) => {
  return (
    <section id="skills" className={`space-y-12 ${className}`}>
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a63e3e]/20 via-[#57574f]/20 to-[#a63e3e]/20 blur-3xl rounded-full"></div>
        <div className="relative">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#a63e3e] to-[#57574f] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-xl">psychology</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient">
              Skills
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#a63e3e] via-[#57574f] to-[#a63e3e] mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skill, i) => (
          <motion.div
            key={i}
            className="group relative bg-white/70 dark:bg-neutral-900/60 rounded-3xl p-6 shadow-xl border border-white/20 dark:border-neutral-700/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="absolute inset-0 glass-morphism rounded-3xl opacity-0 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center space-x-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <span className="material-symbols-outlined text-white text-2xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#a63e3e] dark:group-hover:text-[#a63e3e] transition-colors duration-300">
                {skill.title}
              </h3>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-base">
              {skill.items}
            </p>
            {/* <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
              <div className={`h-2.5 rounded-full`} style={{ width: `${skill.level}%`, background: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[2]})` }}></div>
            </div> 
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 block text-right">{skill.level}% Proficient</span>*/}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
