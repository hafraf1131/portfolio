import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Activity, Database, Zap, Sparkles, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Diabetes Detection Using Machine Learning",
      description: "A comprehensive machine learning application that predicts diabetes risk by analyzing medical data including blood glucose levels, age, BMI, and insulin levels.",
      features: [
        "Advanced data preprocessing and feature engineering",
        "Multiple ML algorithm implementation and comparison",
        "Model performance optimization with hyperparameter tuning",
        "Risk prediction with confidence scores and interpretability"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: <Brain size={32} />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      githubUrl: "https://github.com/hafraf1131/diabetesDetection-Using-Machine-Learning-",
      demoUrl: null
    },
    {
      title: "Cattle Monitoring System",
      description: "An innovative IoT-based system for real-time cattle health monitoring using GPS tracking, disease detection sensors, and cloud storage for comprehensive livestock management.",
      features: [
        "Real-time GPS location tracking with geofencing",
        "Multi-sensor health monitoring (temperature, humidity, SpO2)",
        "AI-powered disease detection and early warning alerts",
        "Cloud-based data storage with analytics dashboard"
      ],
      technologies: ["IoT Sensors", "GPS", "WiFi Module", "Cloud Storage", "Data Analytics", "Python"],
      icon: <Activity size={32} />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      githubUrl: null,
      demoUrl: null
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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-purple-600" size={20} />
            <span className="text-purple-800 font-semibold">Featured Projects</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Innovation in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge solutions combining machine learning, IoT, and data science to solve real-world challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-purple-200">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                          <ArrowRight size={16} className="text-purple-500 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${project.bgGradient} text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:shadow-md transition-shadow`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="group/btn flex items-center space-x-2 bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed opacity-60"
                      >
                        <Github size={18} />
                        <span>Private Repo</span>
                      </button>
                    )}
                    
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                      >
                        <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="group/btn flex items-center space-x-2 border-2 border-gray-300 text-gray-400 px-6 py-3 rounded-xl font-semibold cursor-not-allowed opacity-60"
                      >
                        <ExternalLink size={18} />
                        <span>Demo Coming Soon</span>
                      </button>
                    )}
                  </div>
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
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: <Database size={32} />, number: "2+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
            { icon: <Brain size={32} />, number: "5+", label: "ML Models Built", color: "from-purple-500 to-pink-500" },
            { icon: <Zap size={32} />, number: "10+", label: "Technologies Used", color: "from-green-500 to-emerald-500" },
            { icon: <Activity size={32} />, number: "100%", label: "Success Rate", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;