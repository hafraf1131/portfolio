import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
      current: true
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
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Hands-on experience in data science, machine learning, and Python development through impactful internships
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-primary-600 font-semibold">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                        {exp.current && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                      <div className="flex items-center space-x-2 text-dark-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-dark-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-dark-800 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-dark-700 leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
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
          className="mt-16 bg-primary-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">Technologies & Tools Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn', 
              'BeautifulSoup', 'Selenium', 'Machine Learning', 'Data Visualization', 
              'Web Scraping', 'Data Preprocessing', 'Model Evaluation'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;