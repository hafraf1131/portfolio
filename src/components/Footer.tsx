import React from 'react';
import { Heart, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Hafthap Ali M</h3>
            <p className="text-gray-300 leading-relaxed">
              Data Scientist passionate about leveraging AI and machine learning to solve real-world problems and drive innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://hafthapali.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hafthapali2003@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail size={16} />
                <span>hafthapali2003@gmail.com</span>
              </a>
              <a
                href="tel:+916383837514"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone size={16} />
                <span>+91 6383837514</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Hafthap Ali M. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of data</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;