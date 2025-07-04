import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Python & AI Intern",
      company: "NEXTGEN SOLUTIONS",
      period: "JAN 2025 - FEB 2025",
      location: "Remote",
      responsibilities: [
        "Preprocessed and analyzed large datasets using Pandas and NumPy to prepare data for machine learning models",
        "Built and evaluated machine learning models, tuning hyperparameters to improve accuracy and performance",
        "Created Python scripts to automate data collection, model training, and result reporting, reducing manual workload"
      ],
      current: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Science Intern",
      company: "LOGIN360",
      period: "AUG 2024 - DEC 2024",
      location: "Remote",
      responsibilities: [
        "Used Python libraries like pandas, NumPy, and Matplotlib to analyze, process, and visualize data",
        "Implemented machine learning models using libraries such as scikit-learn and seaborn",
        "Created Python scripts to automate repetitive tasks such as web scraping using BeautifulSoup or Selenium, data entry, and file management"
      ],
      current: false,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-purple-300 font-semibold">Professional Journey</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Experience & Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hands-on experience in data science, machine learning, and Python development through impactful internships
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden md:block rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-slate-900 shadow-lg hidden md:block group-hover:scale-125 transition-transform`}></div>
                
                <div className="md:ml-20">
                  <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-3 text-purple-300 font-semibold mb-2">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                          {exp.current && (
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar size={16} />
                          <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <MapPin size={16} />
                          <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-purple-300 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-colors"
                          >
                            <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills gained section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Technologies & Tools Mastered
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn', 
                'BeautifulSoup', 'Selenium', 'Machine Learning', 'Data Visualization', 
                'Web Scraping', 'Data Preprocessing', 'Model Evaluation', 'Hyperparameter Tuning'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:border-white/50 hover:bg-white/30 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;