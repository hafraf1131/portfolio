import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, MessageSquare, Clock, Target, BarChart, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      skills: ["Python", "R Programming", "SQL"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Technical Skills",
      icon: <Brain size={28} />,
      skills: ["Machine Learning", "Data Analytics", "Data Science", "Web Development"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Frameworks & Tools",
      icon: <Database size={28} />,
      skills: ["Django", "VS Code", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Seaborn"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare size={28} />,
      skills: ["Communication", "Problem Solving", "Storytelling with Data", "Time Management"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
            <span className="text-purple-300 font-semibold">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit for data science, machine learning, and innovative software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default border border-white/30 hover:border-white/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12">
            Core Competencies
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              icon: <BarChart size={40} />, 
              title: "Data Analysis", 
              desc: "Expert in analyzing complex datasets and extracting meaningful insights",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              icon: <Brain size={40} />, 
              title: "ML Models", 
              desc: "Building and optimizing machine learning algorithms for real-world applications",
              color: "from-purple-500 to-pink-500"
            },
            { 
              icon: <Target size={40} />, 
              title: "Problem Solving", 
              desc: "Creative solutions to complex challenges using data-driven approaches",
              color: "from-green-500 to-emerald-500"
            },
            { 
              icon: <Clock size={40} />, 
              title: "Automation", 
              desc: "Streamlining processes with Python scripts and automated workflows",
              color: "from-orange-500 to-red-500"
            }
          ].map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 text-center">
                <div className={`inline-flex p-4 bg-gradient-to-r ${strength.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {strength.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{strength.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{strength.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Python", level: 90, color: "from-blue-500 to-cyan-500" },
              { skill: "Machine Learning", level: 85, color: "from-purple-500 to-pink-500" },
              { skill: "Data Analysis", level: 88, color: "from-green-500 to-emerald-500" },
              { skill: "SQL", level: 80, color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-semibold">{item.skill}</span>
                  <span className="text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`h-3 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;