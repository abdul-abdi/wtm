'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const mission = {
  title: 'Our Mission',
  description: 'To empower and inspire women in technology through education, mentorship, and community building at Zetech University.',
  vision: 'Creating an inclusive tech ecosystem where every woman has the opportunity to thrive and lead in technology.',
  goals: [
    'Foster innovation and leadership in technology',
    'Build a supportive community of women technologists',
    'Provide resources and opportunities for growth',
    'Create pathways to tech careers and leadership',
  ]
};

const values = [
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge technology and creative solutions',
    icon: '💡',
    gradient: 'from-[#00A9E0] to-[#00BFB3]',
  },
  {
    title: 'Inclusion',
    description: 'Creating a welcoming space for all women in technology',
    icon: '🤝',
    gradient: 'from-[#00BFB3] to-[#4BA87D]',
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do',
    icon: '⭐',
    gradient: 'from-[#4BA87D] to-[#00A9E0]',
  },
  {
    title: 'Empowerment',
    description: 'Enabling women to reach their full potential in tech',
    icon: '🚀',
    gradient: 'from-[#00A9E0] to-[#4BA87D]',
  },
];

const impactNumbers = [
  { number: '500+', label: 'Members', gradient: 'from-[#00A9E0] to-[#00BFB3]' },
  { number: '50+', label: 'Events Hosted', gradient: 'from-[#00BFB3] to-[#4BA87D]' },
  { number: '100+', label: 'Success Stories', gradient: 'from-[#4BA87D] to-[#00A9E0]' },
  { number: '30+', label: 'Industry Partners', gradient: 'from-[#00A9E0] to-[#4BA87D]' },
];

const teamCategories = [
  {
    title: 'Our Team',
    description: 'Meet the passionate students driving our mission forward',
    members: [
      {
        name: 'Sarah Kinuthia',
        title: 'Chapter Lead',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
        bio: 'Computer Science student passionate about empowering women in tech.',
      },
      {
        name: 'Jane Muthoni',
        title: 'Technical Lead',
        image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&q=80',
        bio: 'Software Engineering student focused on web development and mentorship.',
      },
      {
        name: 'Grace Wanjiku',
        title: 'Community Lead',
        image: 'https://images.unsplash.com/photo-1573164713619-22f9c11c8110?auto=format&fit=crop&q=80',
        bio: 'Information Technology student dedicated to building an inclusive tech community.',
      }
    ]
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

export default function About() {
  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="container-width">
        {/* Mission Section with Creative Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-32"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/5 via-transparent to-[#4BA87D]/5 rounded-3xl" />
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00A9E0] to-[#00BFB3] p-5 mb-6 shadow-lg"
              >
                <Image
                  src="https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png"
                  alt="WTM Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{mission.title}</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{mission.description}</p>
                <p className="text-lg font-medium text-gray-700 italic">{mission.vision}</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mission.goals.map((goal) => (
                <motion.div
                  key={goal}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/10 to-[#00BFB3]/10 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                    <div className="relative h-full glass rounded-xl p-6 border border-white/20">
                      <div className="flex items-start space-x-4">
                        <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] flex items-center justify-center text-white font-bold">
                          {goal}
                        </span>
                        <p className="text-gray-700 font-medium pt-2">{goal}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((item) => (
              <motion.div
                key={item.number}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/10 to-[#00BFB3]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative glass rounded-2xl p-6 border border-white/20">
                    <h3 className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                      {item.number}
                    </h3>
                    <p className="text-gray-600 font-medium">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section with 3D Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group perspective"
              >
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/10 to-[#00BFB3]/10 rounded-xl transform rotate-6 group-hover:rotate-9 transition-transform duration-300" />
                  <div className="relative glass rounded-xl p-8 border border-white/20">
                    <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} text-transparent bg-clip-text`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Meet the passionate students driving our mission to empower women in technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamCategories[0].members.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group"
              >
                <div className="relative glass rounded-xl p-6 border border-white/20">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-xl overflow-hidden transform transition-all duration-300 group-hover:scale-105 shadow-xl group-hover:shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 192px"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#00A9E0] font-semibold mb-4">{member.title}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <a
              href="#join"
              className="relative inline-flex items-center px-8 py-4 rounded-xl text-white bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Join Our Community
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
        </motion.div>
      </div>
    </section>
  );
} 