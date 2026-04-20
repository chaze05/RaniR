import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiNodejs, DiHtml5, DiCss3, DiPhp, DiLaravel, DiWordpress, DiMysql, DiGit } from 'react-icons/di';
interface ResumeBlock{
  show:boolean
}
const Resume : React.FC<ResumeBlock> = (show) => {

  return (
   <div className={`${show.show ? '' : 'hidden'} min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-auto`}>
      <div className="max-w-6xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/461828641_1059171819327244_256866152850531010_n.jpg"
              alt="Rani Rubillos"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Rani Rubillos</h1>
              <h2 className="text-xl md:text-2xl text-slate-300 mb-4">Full Stack Developer</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-slate-400" />
                  <span>+63 123 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-slate-400" />
                  <span>rani@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-slate-400" />
                  <span>Philippines</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <FaGlobe className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Summary */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Summary</h3>
                <p className="text-slate-300 leading-relaxed">
                  Passionate Full Stack Developer with expertise in JavaScript, React, Node.js, and PHP.
                  Experienced in creating responsive web applications and managing databases.
                  Committed to delivering high-quality code and exceptional user experiences.
                </p>
              </div>

              {/* Skills */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-300 font-medium mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">HTML5</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">CSS3</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">PHP</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">Laravel</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">Git</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">WordPress</span>
                      <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">VS Code</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3 border-b border-slate-600 pb-2">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">English</span>
                    <span className="text-slate-400">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Filipino</span>
                    <span className="text-slate-400">Native</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Experience */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-600 pb-2">Experience</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">Freelance Developer</h4>
                        <p className="text-slate-400 text-sm mb-2">August 2024 - Present</p>
                        <p className="text-slate-300 leading-relaxed">
                          Full-stack development focusing on web applications, database management, and client satisfaction.
                          Specialized in creating responsive websites and optimizing performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">Web Developer</h4>
                        <p className="text-slate-400 text-sm mb-2">2021 - 2024</p>
                        <p className="text-slate-300 leading-relaxed">
                          Developed and maintained WordPress themes and plugins. Worked with PHP, MySQL, and front-end technologies
                          to deliver custom solutions for various clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-600 pb-2">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-600/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">POS System</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Point of Sale system for businesses with inventory management and reporting features.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">PHP</span>
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">MySQL</span>
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">JavaScript</span>
                    </div>
                  </div>
                  <div className="bg-slate-600/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Portfolio Website</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Personal portfolio showcasing projects and skills with modern design.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">Next.js</span>
                      <span className="bg-slate-500 text-white px-2 py-1 rounded text-xs">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-600 pb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor of Science in Computer Science</h4>
                    <p className="text-slate-400 text-sm">University Name • 2017 - 2021</p>
                    <p className="text-slate-300 mt-2">
                      Graduated with honors, focusing on software development and web technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;