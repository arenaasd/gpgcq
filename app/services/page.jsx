'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Wrench, 
  Zap, 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

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

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Technical Training",
      subtitle: "Programming & Development",
      description: "Comprehensive coding bootcamps and technical skill development programs designed for the modern workforce.",
      features: ["Web Development", "Mobile Apps", "Database Management", "Cloud Computing"],
      duration: "3-6 months",
      level: "Beginner to Advanced",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      icon: Wrench,
      title: "Vocational Skills",
      subtitle: "Hands-on Trade Training",
      description: "Practical vocational training programs that prepare students for immediate employment in skilled trades.",
      features: ["Electrical Work", "Plumbing", "Carpentry", "Automotive Repair"],
      duration: "2-4 months",
      level: "Entry to Professional",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 3,
      icon: Users,
      title: "Business Skills",
      subtitle: "Leadership & Management",
      description: "Essential business and entrepreneurship skills for career advancement and business development.",
      features: ["Project Management", "Digital Marketing", "Finance", "Leadership"],
      duration: "1-3 months",
      level: "Intermediate to Advanced",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Digital Literacy",
      subtitle: "Computer & Internet Skills",
      description: "Foundation digital skills for the modern workplace, from basic computer use to advanced applications.",
      features: ["Microsoft Office", "Internet Safety", "Email & Communication", "Basic Programming"],
      duration: "1-2 months",
      level: "Beginner to Intermediate",
      color: "from-green-500 to-green-700"
    },
    {
      id: 5,
      icon: Zap,
      title: "Advanced Certifications",
      subtitle: "Industry-Recognized Credentials",
      description: "Specialized certification programs that validate expertise and enhance career prospects.",
      features: ["IT Certifications", "Trade Licenses", "Professional Credentials", "Continuing Education"],
      duration: "Variable",
      level: "Professional",
      color: "from-red-500 to-red-700"
    },
    {
      id: 6,
      icon: Target,
      title: "Career Placement",
      subtitle: "Job Readiness & Support",
      description: "Comprehensive career services including job placement assistance and interview preparation.",
      features: ["Resume Building", "Interview Coaching", "Job Matching", "Career Counseling"],
      duration: "Ongoing",
      level: "All Levels",
      color: "from-teal-500 to-teal-700"
    }
  ];

  const stats = [
    { icon: Users, number: "15,000+", label: "Students Trained", color: "text-blue-600" },
    { icon: Award, number: "85%", label: "Job Placement Rate", color: "text-green-600" },
    { icon: BookOpen, number: "50+", label: "Training Programs", color: "text-purple-600" },
    { icon: Clock, number: "10+", label: "Years of Excellence", color: "text-orange-600" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Industry-Standard Training",
      description: "All our programs meet current industry standards and requirements."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with real-world expertise."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Focus",
      description: "Programs designed to accelerate your career progression."
    },
    {
      icon: CheckCircle,
      title: "Flexible Learning",
      description: "Multiple learning formats to fit your schedule and lifestyle."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
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
              <span className="text-white drop-shadow-lg">OUR SERVICES</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="text-xl text-white/90 text-center max-w-3xl px-6 leading-relaxed"
          >
            Empowering individuals with cutting-edge skills and knowledge for a successful career in today's competitive market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 px-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Training Programs & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of training programs designed to meet industry demands and career aspirations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-700">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-semibold text-gray-700">{service.level}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose GPGCQ SARIAB?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing world-class training that prepares you for real-world success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#01411C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gradient-to-br from-green-500 to-[#01411C] py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Join thousands of successful graduates who have advanced their careers through our comprehensive training programs.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Enroll Now</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}