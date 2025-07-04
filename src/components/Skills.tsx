import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe, MessageSquare, Clock, Target, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "R Programming", "SQL"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Technical Skills",
      icon: <Brain size={24} />,
      skills: ["Machine Learning", "Data Analytics", "Data Science", "Web Development"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Frameworks & Tools",
      icon: <Database size={24} />,
      skills: ["Django", "VS Code", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Seaborn"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare size={24} />,
      skills: ["Communication", "Problem Solving", "Storytelling with Data", "Time Management"],
      color: "bg-orange-100 text-orange-600"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 text-dark-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
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
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <BarChart size={32} />, title: "Data Analysis", desc: "Expert in analyzing complex datasets" },
              { icon: <Brain size={32} />, title: "ML Models", desc: "Building and optimizing ML algorithms" },
              { icon: <Target size={32} />, title: "Problem Solving", desc: "Creative solutions to complex challenges" },
              { icon: <Clock size={32} />, title: "Automation", desc: "Streamlining processes with Python scripts" }
            ].map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3 flex justify-center">{strength.icon}</div>
                <h4 className="font-semibold text-dark-900 mb-2">{strength.title}</h4>
                <p className="text-dark-600 text-sm">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;