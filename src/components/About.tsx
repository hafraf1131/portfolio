import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - ECE",
      institution: "VRS College of Engineering and Technology",
      year: "2020-2024",
      grade: "7.5 CGPA"
    },
    {
      degree: "Higher Secondary School",
      institution: "GOVT Boys Hr Sec School",
      year: "2019-2020",
      grade: "68%"
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Fathima Matric Hr Sec School",
      year: "2018",
      grade: "72.6%"
    }
  ];

  const certifications = [
    {
      title: "Certified Python Programmer",
      issuer: "LOGIN@360",
      description: "Proficiency in core Python concepts, including object-oriented programming, libraries, and frameworks."
    },
    {
      title: "Deep Learning & OpenCV Certification",
      issuer: "INFOSYS",
      description: "Practical experience with training models, optimizing performance, and implementing AI-based solutions."
    },
    {
      title: "Python for Artificial Intelligence",
      issuer: "NEXTGEN SOLUTIONS",
      description: "Practical experience in creating AI projects using Python and popular libraries like NumPy, Pandas, and Scikit-learn."
    }
  ];

  const languages = ["English", "Tamil", "Hindi"];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
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
            <span className="text-purple-800 font-semibold">About Me</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Passionate Data Scientist
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A dedicated data scientist with a strong foundation in machine learning, data analysis, and Python programming. 
            I transform complex data into actionable insights and drive innovation through cutting-edge AI solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 group-hover:border-purple-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-slate-800 mb-1">{edu.degree}</h4>
                    <p className="text-purple-600 font-semibold text-sm">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                      <span className="bg-white px-3 py-1 rounded-full">{edu.year}</span>
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold">{edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100 group-hover:border-cyan-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-slate-800 mb-1">{cert.title}</h4>
                    <p className="text-cyan-600 font-semibold text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="group space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group-hover:border-green-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <Languages size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Languages</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow"
                  >
                    <span className="font-semibold text-slate-800">{language}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 rounded-2xl"
            >
              <div className="bg-white rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Let's Connect!
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to embark on a journey towards mutual success through innovative technology strategies and data-driven solutions.
                </p>
                <a
                  href="mailto:Hafthapali2003@gmail.com"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;