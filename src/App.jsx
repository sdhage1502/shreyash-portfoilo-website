import React, { useEffect, useState } from 'react';

// Inline ThemeToggle component
const ThemeToggle = () => {
  // State to manage dark mode. Initialize from localStorage or default to false.
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    // If a preference exists and is 'dark', set darkMode to true. Otherwise, check system preference.
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no preference, check if the system prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // useEffect to apply the 'dark' class to the document element based on darkMode state
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save preference to localStorage
    }
  }, [darkMode]); // Re-run effect when darkMode state changes

  // Function to toggle the dark mode state
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Toggle theme"
    >
      {/* Icon for dark mode (moon) or light mode (sun) */}
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.292 8.618a1 1 0 01.292.707c0 .553-.447 1-.999 1h-1.586a1 1 0 01-.707-.292l-.707-.707a1 1 0 01-.292-.707c0-.553.447-1 .999-1h1.586a1 1 0 01.707.292zM15.414 15.414a1 1 0 011.414 0l.707.707a1 1 0 010 1.414 1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414zM4.586 4.586a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0 1 1 0 010-1.414l.707-.707a1 1 0 011.414 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zM10 4a1 1 0 00-1 1v1a1 1 0 102 0V5a1 1 0 00-1-1zm0 10a1 1 0 001-1v-1a1 1 0 10-2 0v1a1 1 0 001 1zm5.657-6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414 1 1 0 001.414 0l.707-.707zM4.343 4.343a1 1 0 00-1.414 0 1 1 0 000 1.414l.707.707a1 1 0 001.414 0 1 1 0 000-1.414l-.707-.707zM16.343 14.343a1 1 0 000 1.414 1 1 0 001.414 0l.707-.707a1 1 0 000-1.414 1 1 0 00-1.414 0l-.707.707zM3.657 16.343a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414 1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414z" />
        </svg>
      )}
    </button>
  );
};


const App = () => {
  useEffect(() => {
    document.title = "Shreyash Dhage - Portfolio";
  }, []);

  const projects = [
    {
      title: "Decentralized Crowdfunding Platform",
      date: "(Dec 2024 - Present)",
      links: { live: "https://live-weather-dash-board.vercel.app/", github: "https://github.com/sdhage1502/decentralized-crowdfunding" }, // Placeholder links
      description: [
        "Built responsive interfaces with Next.js/React, crafting campaign forms/dashboards using Tailwind CSS.",
        "Integrated blockchain features like MetaMask wallet connectivity and live transaction tracking via Ethers.js/Web3Modal.",
        "Leveraged Firebase Firestore for real-time campaign data storage/updates, ensuring instant sync across all users.",
        "Improved performance by 40% through code splitting, lazy loading, and optimized Firebase data fetching."
      ]
    },
    {
      title: "Smart Weather Forecast App with AI Assistant",
      date: "(May 2024 - Apr 2025)",
      links: { live: "https://live-weather-dash-board.vercel.app/", github: "https://github.com/sdhage1502/Live-WeatherDashBoard" }, // Placeholder links
      description: [
        "Developed a responsive, AI-powered weather forecasting web app using React.js, Vite, and Tailwind CSS, integrating OpenWeatherMap APIs and Meta LLAMA 3.3 via OpenRouter.",
        "Engineered dynamic city autosuggestion with debounced search using OpenWeather Geocoding API, caching recent searches in localStorage.",
        "Implemented real-time weather and 5-day forecast displays with Axios, utilizing React Toastify for seamless user feedback and React Context API.",
        "Leveraged prompt-engineered JSON inputs with Meta LLAMA 3.3 to generate human-readable weather summaries and personalized, seasonal Q&A."
      ]
    },
    {
      title: "Spring AI Chatbot",
      date: "(Sep 2024 - Oct 2024)",
      links: { github: "https://github.com/sdhage1502/Spring-AI" }, // Placeholder link, no live link mentioned
      description: [
        "Built an AI chatbot using Spring AI and Ollama (local LLM), automating customer support and reducing query resolution time by 30%.",
        "Created a responsive interface with HTML/CSS/JavaScript, ensuring <1s response times and 99% browser compatibility.",
        "Designed user-friendly workflows, boosting engagement by 25% via mobile-first UX and accessibility compliance.",
        "Integrated Ollama's NLP model to handle 500+ daily queries at 95% accuracy with Spring Boot."
      ]
    },
    {
      title: "Spring Boot Login and Registration System",
      date: "(Jan 2024 - Sep 2024)",
      links: { github: "https://github.com/sdhage1502/Spring-SignEase" }, // Placeholder link, no live link mentioned
      description: [
        "Developed a secure Spring Boot application with JWT authentication using Spring Security, reducing security risks by 40% through encrypted tokens and role-based access.",
        "Built scalable backend systems with Spring MVC, Data JPA, and MySQL, achieving 99% data accuracy and <200ms query response times.",
        "Designed a responsive, 99% cross-device-compatible frontend using Thymeleaf, Bootstrap, HTML, and CSS, boosting user engagement by 30%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-200 transition-colors duration-500 font-inter">
      {/* Font Import: Inter from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Site Under Development Banner */}
      <div className="fixed top-0 left-0 w-full bg-amber-500 text-white text-center py-2 z-50 text-sm">
        <p>✨ This site is currently under active development. Please check back for updates! ✨</p>
      </div>

      {/* NAVBAR - Adjusted top padding to account for the new banner */}
      <nav className="fixed top-10 w-full bg-white/80 dark:bg-slate-800/70 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-slate-700 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">Shreyash Dhage</h1>
          <div className="flex items-center space-x-5 text-sm font-medium">
            <a href="#hero" className="hover:text-emerald-500 transition">Home</a>
            <a href="#education" className="hover:text-emerald-500 transition">Education</a>
            <a href="#skills" className="hover:text-emerald-500 transition">Skills</a>
            <a href="#experience" className="hover:text-emerald-500 transition">Experience</a>
            <a href="#projects" className="hover:text-emerald-500 transition">Projects</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT - Adjusted top padding to account for navbar and new banner */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-10 space-y-16">
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          <div className="md:w-3/4 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 mb-4">
              Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Shreyash Dhage</span>.
            </h2>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              Motivated MCA student and Software Developer Intern proficient in building
              responsive web applications with <span className="font-semibold">React, Next.js, and Tailwind CSS</span>.
              Experienced in <span className="font-semibold">RESTful APIs, CI/CD, and collaborative development</span>.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://linkedin.com/in/shreyashdhage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-emerald-600 hover:text-emerald-500 transition-transform transform hover:scale-110">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path fillRule="evenodd" d="M12.44 10.457c-.125-.136-.298-.242-.489-.317a1.455 1.455 0 00-.773-.207c-.432 0-.825.138-1.127.41-.302.273-.453.642-.453 1.107 0 .477.159.855.477 1.134.318.28.72.42 1.206.42.186 0 .363-.03.528-.088a1.644 1.644 0 00.472-.257c.18-.112.33-.25.438-.415.109-.166.164-.356.164-.571a1.233 1.233 0 00-.333-.902zM12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12C24 5.372 18.628 0 12 0zm-5.75 19.344H4.51V8.656h1.74v10.688zM5.385 7.886c-.958 0-1.74-.775-1.74-1.733 0-.958.782-1.733 1.74-1.733.958 0 1.74.775 1.74 1.733 0 .958-.782 1.733-1.74 1.733zm11.75 11.458h-2.583v-5.28c0-1.258-.337-2.115-1.026-2.571-.689-.456-1.57-.684-2.64-.684-.716 0-1.378.138-1.986.415-.607.277-1.066.678-1.378 1.204-.312.527-.468 1.157-.468 1.892v5.224h-2.583V8.656h2.583v1.372c.41-.66 1.01-1.192 1.8-1.597.79-.405 1.69-.607 2.698-.607 2.05 0 3.655.7 4.814 2.102 1.159 1.402 1.738 3.327 1.738 5.774v6.082z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/sdhage1502" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="text-emerald-600 hover:text-emerald-500 transition-transform transform hover:scale-110">
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path fillRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.308 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.756-1.332-1.756-1.09-.744.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.805 1.3 3.49.993.109-.773.42-1.3.762-1.59-2.665-.3-5.46-1.332-5.46-5.93 0-1.31.465-2.385 1.235-3.22-.125-.3-.538-1.52.12-3.178 0 0 1.008-.323 3.303 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.295-1.553 3.303-1.23 3.303-1.23.658 1.658.245 2.878.12 3.178.77.835 1.235 1.91 1.235 3.22 0 4.61-2.798 5.625-5.474 5.922.43.37.817 1.102.817 2.222 0 1.61-.015 2.903-.015 3.298 0 .318.21.69.825.576C20.563 21.8 24 17.308 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">Education</h2>
          <div className="space-y-6">
            {[
              { title: "Master of Computer Applications (MCA)", duration: "2023 - 2025", school: "JSPM's Jayawant Institute Of Management Studies, Pune" },
              { title: "Bachelor of Computer Applications (BCA)", duration: "2020 - 2023", school: "Vidhya Bharati Mahavidyalaya, Amravati" },
              { title: "Senior Secondary (XII) in Science", duration: "2019 - 2020", school: "Y.C Junior College, Mangrulpir" },
              { title: "Secondary School (X)", duration: "2017 - 2018", school: "Y.C English High School, Mangrulpir" },
            ].map((edu, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{edu.title}</h3>
                <p className="text-emerald-500 text-sm mb-1">{edu.duration}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Programming Languages", "Java, JavaScript, TypeScript"],
              ["Frontend", "React, Next.js, Tailwind CSS, Gatsby, Bootstrap, Markdown"],
              ["Backend/APIs", "Spring Boot, REST API, GraphQL"],
              ["Databases", "MySQL, Firebase Firestore"],
              ["Deployment", "CI/CD, Git, GitHub"],
              ["Tools", "VS Code, Postman, MySQL Workbench, Figma, AWS S3, Docker, DevOps"],
              ["Coursework", "Data Structures & Algorithms, Operating Systems, Object-Oriented Programming, Database Management Systems, REST API, Software Development Life Cycle, Agile"],
              ["Soft Skills", "Curious, Sharp-Eyed, Collaborative, Problem-Solving"],
            ].map(([title, items], i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">Experience</h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Software Developer Intern</h3>
            <p className="text-emerald-500 text-sm mb-2">Hexadecimal Software Pvt. Ltd. (Remote) – Oct 2024 to Apr 2025</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Developed responsive web apps using Next.js, React, Tailwind, and REST APIs, achieving 20% performance boost & 100% cross-device compatibility.</li>
              <li>Built a Gatsby blog using React, JavaScript, MDX, and GraphQL, crafting dynamic components and optimizing SEO to boost organic traffic by 45% & reduce bounce rates by 25%.</li>
              <li>Led 6 interns to publish 50+ blogs through streamlined GitHub pull request workflows, slashing content delivery time by 90% & reviewing 50+ posts for quality and SEO alignment.</li>
              <li>Leveraged GitHub for collaborative version control and Figma for UI design, accelerating team productivity by 40% through robust CI/CD practices and design-system integration.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{proj.title}</h3>
                  <p className="text-emerald-500 text-sm mb-3">{proj.date}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    {proj.description.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
                <div className="mt-4 flex space-x-4">
                  {proj.links.live && (
                    <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-md hover:bg-emerald-600 transition-colors duration-200">
                      Live Demo
                    </a>
                  )}
                  {proj.links.github && (
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-200 text-sm font-medium rounded-md hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-200">
                      {/* GitHub Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-2">
                        <path fillRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.308 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.756-1.332-1.756-1.09-.744.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.805 1.3 3.49.993.109-.773.42-1.3.762-1.59-2.665-.3-5.46-1.332-5.46-5.93 0-1.31.465-2.385 1.235-3.22-.125-.3-.538-1.52.12-3.178 0 0 1.008-.323 3.303 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.295-1.553 3.303-1.23 3.303-1.23.658 1.658.245 2.878.12 3.178.77.835 1.235 1.91 1.235 3.22 0 4.61-2.798 5.625-5.474 5.922.43.37.817 1.102.817 2.222 0 1.61-.015 2.903-.015 3.298 0 .318.21.69.825.576C20.563 21.8 24 17.308 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd" />
                      </svg> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-md border-t border-gray-300 dark:border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">Contact: sdhage1502@gmail.com | +91 8999760729</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/shreyashdhage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-emerald-600 hover:text-emerald-500 transition-transform transform hover:scale-110">
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M12.44 10.457c-.125-.136-.298-.242-.489-.317a1.455 1.455 0 00-.773-.207c-.432 0-.825.138-1.127.41-.302.273-.453.642-.453 1.107 0 .477.159.855.477 1.134.318.28.72.42 1.206.42.186 0 .363-.03.528-.088a1.644 1.644 0 00.472-.257c.18-.112.33-.25.438-.415.109-.166.164-.356.164-.571a1.233 1.233 0 00-.333-.902zM12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12C24 5.372 18.628 0 12 0zm-5.75 19.344H4.51V8.656h1.74v10.688zM5.385 7.886c-.958 0-1.74-.775-1.74-1.733 0-.958.782-1.733 1.74-1.733.958 0 1.74.775 1.74 1.733 0 .958-.782 1.733-1.74 1.733zm11.75 11.458h-2.583v-5.28c0-1.258-.337-2.115-1.026-2.571-.689-.456-1.57-.684-2.64-.684-.716 0-1.378.138-1.986.415-.607.277-1.066.678-1.378 1.204-.312.527-.468 1.157-.468 1.892v5.224h-2.583V8.656h2.583v1.372c.41-.66 1.01-1.192 1.8-1.597.79-.405 1.69-.607 2.698-.607 2.05 0 3.655.7 4.814 2.102 1.159 1.402 1.738 3.327 1.738 5.774v6.082z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/shreyashdhage" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-emerald-600 hover:text-emerald-500 transition-transform transform hover:scale-110">
              {/* GitHub Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.308 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.388-1.332-1.756-1.332-1.756-1.09-.744.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.805 1.3 3.49.993.109-.773.42-1.3.762-1.59-2.665-.3-5.46-1.332-5.46-5.93 0-1.31.465-2.385 1.235-3.22-.125-.3-.538-1.52.12-3.178 0 0 1.008-.323 3.303 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.295-1.553 3.303-1.23 3.303-1.23.658 1.658.245 2.878.12 3.178.77.835 1.235 1.91 1.235 3.22 0 4.61-2.798 5.625-5.474 5.922.43.37.817 1.102.817 2.222 0 1.61-.015 2.903-.015 3.298 0 .318.21.69.825.576C20.563 21.8 24 17.308 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
