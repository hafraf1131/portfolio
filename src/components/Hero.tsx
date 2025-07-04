import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-dark-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-primary-600">Hafthap Ali M</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-primary-600 font-semibold mt-4"
              >
                Data Scientist & ML Engineer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-dark-600 leading-relaxed max-w-2xl"
            >
              Passionate about AI and data science, with experience in data analysis, machine learning, and Python programming. Looking for a dynamic role to contribute to company growth through innovative technology strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:hafthapali2003@gmail.com"
                className="flex items-center space-x-2 text-dark-600 hover:text-primary-600 transition-colors"
              >
                <Mail size={20} />
                <span>hafthapali2003@gmail.com</span>
              </a>
              <a
                href="tel:+916383837514"
                className="flex items-center space-x-2 text-dark-600 hover:text-primary-600 transition-colors"
              >
                <Phone size={20} />
                <span>+91 6383837514</span>
              </a>
              <div className="flex items-center space-x-2 text-dark-600">
                <MapPin size={20} />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex space-x-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
              >
                Get In Touch
              </button>
              <a
                href="https://hafthapali.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 font-semibold flex items-center space-x-2"
              >
                <span>View Portfolio</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold text-primary-600">HA</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🐍</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <div className="text-xl">📊</div>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <div className="text-lg">🤖</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;