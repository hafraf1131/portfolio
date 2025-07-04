import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-4">About Me</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            A passionate data scientist with a strong foundation in machine learning, data analysis, and Python programming. 
            I'm dedicated to leveraging data-driven insights to solve complex problems and drive innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg">
                <GraduationCap className="text-primary-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dark-900">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-dark-600 mt-2">
                    <span>{edu.year}</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dark-900">{cert.title}</h4>
                  <p className="text-primary-600 font-medium text-sm">{cert.issuer}</p>
                  <p className="text-dark-600 text-sm mt-2">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Languages className="text-primary-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900">Languages</h3>
            </div>
            
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="font-medium text-dark-900">{language}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="font-semibold text-dark-900 mb-3">Let's Connect!</h4>
              <p className="text-dark-600 text-sm">
                Ready to embark on a journey towards mutual success through innovative technology strategies and data-driven solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;