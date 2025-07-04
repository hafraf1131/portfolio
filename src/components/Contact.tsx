import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink, Linkedin, Github, Sparkles, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hafthapali2003@gmail.com",
      link: "mailto:hafthapali2003@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 6383837514",
      link: "tel:+916383837514",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: null,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
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
            <span className="text-purple-800 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to collaborate on exciting data science projects? Let's connect and explore opportunities together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-slate-800">Let's Start a Conversation</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest trends in data science and machine learning. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${info.gradient} text-white rounded-xl group-hover:scale-110 transition-transform shadow-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-600 font-medium">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h4 className="font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://hafthapali.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;