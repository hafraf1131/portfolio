import React from 'react';
import { Heart, ExternalLink, Mail, Phone, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hafthap Ali M
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Data Scientist passionate about leveraging AI and machine learning to solve real-world problems and drive innovation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://hafthapali.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-purple-300 flex items-center">
              <Sparkles size={20} className="mr-2" />
              Quick Links
            </h4>
            <nav className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-purple-400 transition-all duration-200 hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-purple-300 flex items-center">
              <Sparkles size={20} className="mr-2" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hafthapali2003@gmail.com"
                className="group flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-all duration-200"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">hafthapali2003@gmail.com</span>
              </a>
              <a
                href="tel:+916383837514"
                className="group flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-all duration-200"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">+91 6383837514</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>© 2025 Hafthap Ali M. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of data</span>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Powered by React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;