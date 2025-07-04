import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Activity, Database, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Diabetes Detection Using Machine Learning",
      description: "A comprehensive machine learning application that predicts diabetes risk by analyzing medical data including blood glucose levels, age, BMI, and insulin levels.",
      features: [
        "Data preprocessing and feature engineering",
        "Multiple ML algorithm implementation",
        "Model performance optimization",
        "Risk prediction with confidence scores"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      icon: <Brain size={32} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Cattle Monitoring System",
      description: "An IoT-based system for real-time cattle health monitoring using GPS tracking, disease detection sensors, and cloud storage for comprehensive livestock management.",
      features: [
        "Real-time GPS location tracking",
        "Health monitoring with multiple sensors",
        "Disease detection and alerts",
        "Cloud-based data storage and analytics"
      ],
      technologies: ["IoT Sensors", "GPS", "WiFi Module", "Cloud Storage", "Data Analytics"],
      icon: <Activity size={32} />,
      color: "bg-green-100 text-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Innovative solutions combining machine learning, IoT, and data science to solve real-world problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${project.color}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900">{project.title}</h3>
                </div>

                <p className="text-dark-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    <Github size={16} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: <Database size={24} />, number: "2+", label: "Projects Completed" },
            { icon: <Brain size={24} />, number: "5+", label: "ML Models Built" },
            { icon: <Zap size={24} />, number: "10+", label: "Technologies Used" },
            { icon: <Activity size={24} />, number: "100%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="text-primary-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-dark-900 mb-1">{stat.number}</div>
              <div className="text-dark-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;