import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    window.open('https://github.com/hafraf1131/portfolio/raw/main/Hafthap%20ali%20.M.pdf', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-lg font-semibold">
                  👋 Hello, I'm
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight mt-4"
              >
                Hafthap Ali M
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6"
              >
                <span className="text-2xl lg:text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  Data Scientist & ML Engineer
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Passionate about AI and data science, transforming complex data into actionable insights. 
              Specialized in machine learning, Python programming, and innovative technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-6 text-gray-300"
            >
              <a
                href="mailto:hafthapali2003@gmail.com"
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span>hafthapali2003@gmail.com</span>
              </a>
              <a
                href="tel:+916383837514"
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors group"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <span>+91 6383837514</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button 
                onClick={handleResumeDownload}
                className="group relative px-8 py-4 border-2 border-gray-500 text-gray-300 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white hover:border-white"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                  <span>Resume</span>
                </span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/hafraf1131"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full p-2">
                    <img
                      src="https://github.com/hafraf1131/portfolio/raw/main/public/hafthaf.jpg"
                      alt="Hafthap Ali M - Data Scientist"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute inset-0">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  🐍
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  📊
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                  🤖
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  📈
                </div>
              </div>

              {/* Stats floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
              >
                <div className="text-2xl font-bold text-cyan-400">2+</div>
                <div className="text-sm">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
              >
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-sm">ML Models</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;