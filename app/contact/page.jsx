'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, Users, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen mb-24 bg-gray-50">
      {/* Hero Section with SVG Wave */}
      <div className="relative min-h-[400px]">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              fill="#01411C"
              d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <div className="relative z-0 pt-16 pb-24 bg-gradient-to-b from-green-400 to-[#01411C] flex flex-col items-center justify-center">
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white shadow-md relative mt-[60px] mb-6 text-center"
          >
            <span className="relative inline-block px-8 py-4">
              <span className="absolute left-0 top-1/2 w-16 h-0.5 bg-white -translate-y-1/2 -translate-x-full hidden md:block"></span>
              <span className="absolute right-0 top-1/2 w-16 h-0.5 bg-white translate-y-1/2 translate-x-full hidden md:block"></span>
              <span className="text-white drop-shadow-lg">CONTACT US</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="text-xl text-white/90 text-center max-w-2xl px-6 leading-relaxed"
          >
            Get in touch with us. We're here to help and answer any questions you might have.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Phone, text: "Call Us" },
              { icon: Mail, text: "Email Us" },
              { icon: MapPin, text: "Visit Us" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              >
                <item.icon size={18} />
                <span className="text-sm font-median">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={cardVariants} className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                Send us a Message
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-8"
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </motion.p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="What is this regarding?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-[#01411C] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
                              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={cardVariants} className="order-1 lg:order-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 mb-8"
              >
                Get in Touch
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri 9am-6pm"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@navttc.com",
                    subtitle: "We'll respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Training Center St",
                    subtitle: "Islamabad, Pakistan"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday",
                    subtitle: "9:00 AM - 6:00 PM"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-[#01411C] rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                      <p className="text-gray-600 font-medium">{item.content}</p>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-green-500 to-[#01411C] rounded-2xl shadow-xl p-8 text-white"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6"
              >
                Why Choose Us?
              </motion.h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, number: "10K+", label: "Students Trained" },
                  { icon: Globe, number: "50+", label: "Programs Offered" },
                  { icon: MessageSquare, number: "24/7", label: "Support Available" },
                  { icon: Clock, number: "15+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon size={20} />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}