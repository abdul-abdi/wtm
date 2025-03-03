'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const programs = [
  {
    id: 'leadership',
    title: 'Leadership Development',
    description:
      'Comprehensive leadership training program designed to empower women in technology with the skills and confidence to lead in the tech industry.',
    image: '/images/IMG_9656 (1).jpg',
    features: [
      'Executive Mentorship Program',
      'Leadership Skills Workshops',
      'Public Speaking Training',
      'Project Management Skills'
    ],
    gradient: 'from-[#00A9E0] to-[#00BFB3]',
    benefits: [
      'One-on-one mentoring with industry leaders',
      'Practical leadership experience',
      'Network building opportunities',
      'Career advancement strategies'
    ],
    icon: '👑'
  },
  {
    id: 'code',
    title: 'Code & Create',
    description:
      'Hands-on technical training program focusing on practical coding skills and real-world project development.',
    image: '/images/IMG_9650 (1).jpg',
    features: [
      'Full-Stack Development',
      'Mobile App Development',
      'Cloud Computing',
      'UI/UX Design'
    ],
    gradient: 'from-[#00BFB3] to-[#4BA87D]',
    benefits: [
      'Project-based learning',
      'Industry-standard tools',
      'Portfolio development',
      'Technical mentorship'
    ],
    icon: '💻'
  },
  {
    id: 'mentorship',
    title: 'Mentorship Program',
    description:
      'Structured mentorship program connecting aspiring women technologists with experienced professionals in their field of interest.',
    image: '/images/IMG_9639 (1).jpg',
    features: [
      'Career Guidance',
      'Technical Skill Development',
      'Professional Networking',
      'Personal Growth'
    ],
    gradient: 'from-[#4BA87D] to-[#00A9E0]',
    benefits: [
      'Personalized guidance',
      'Industry insights',
      'Skill enhancement',
      'Career opportunities'
    ],
    icon: '🤝'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// WhatsApp group link
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/KFEwbCxORx10GOFM55Vvzz';

export default function Programs() {
  return (
    <section id="programs" className="section-spacing bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#00A9E0] font-semibold text-lg mb-2 block">
            Transform Your Future
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Discover our transformative programs designed to elevate and accelerate
            women&apos;s careers in technology through practical skills, mentorship, and leadership development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 via-transparent to-[#4BA87D]/5 rounded-3xl" />
              
              <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Section */}
                  <div className={`${program.id === 'code' ? 'order-1' : 'order-2'}`}>
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] flex items-center justify-center text-4xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={90}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} mix-blend-overlay opacity-40`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`${program.id === 'code' ? 'order-2' : 'order-1'}`}>
                    <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${program.gradient} text-transparent bg-clip-text`}>
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="space-y-8">
                      {/* Features */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 to-[#00BFB3]/5 rounded-xl transform rotate-1" />
                        <div className="relative glass rounded-xl p-6 border border-white/20">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            Program Features
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {program.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center space-x-3 group"
                              >
                                <span className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-r ${program.gradient} flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                  <svg
                                    className="h-4 w-4 text-white"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFB3]/5 to-[#4BA87D]/5 rounded-xl transform -rotate-1" />
                        <div className="relative glass rounded-xl p-6 border border-white/20">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            What You&apos;ll Gain
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {program.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-center space-x-3 group"
                              >
                                <span className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-r ${program.gradient} flex items-center justify-center opacity-75 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                                  <svg
                                    className="h-4 w-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                </span>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <a
                          href={WHATSAPP_GROUP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative inline-flex items-center px-8 py-4 rounded-xl text-white bg-gradient-to-r ${program.gradient} hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                        >
                          Join Program
                          <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 