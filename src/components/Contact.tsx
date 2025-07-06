import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "Hafthapali2003@gmail.com",
      link: "mailto:Hafthapali2003@gmail.com",
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <MessageCircle className="text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-slate-800">Let's Start a Conversation</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest trends in data science and machine learning. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200 text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${info.gradient} text-white rounded-xl group-hover:scale-110 transition-transform shadow-lg mb-4`}>
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-3">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-lg"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 font-medium text-lg">{info.value}</span>
                    )}
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 text-center"
            >
              <h4 className="font-bold text-slate-800 mb-6 text-xl">
                Connect with me on social media
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/hafraf1131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafthap-hafthap-ali-b6453829a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 rounded-2xl"
            >
              <div className="bg-white rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Ready to Work Together?
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Let's discuss how we can collaborate on innovative data science projects and create impactful solutions together.
                </p>
                <a
                  href="mailto:Hafthapali2003@gmail.com"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;