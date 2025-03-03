'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const eventTypes = [
  {
    id: 'biweekly',
    title: 'Weekly Tech Meetups',
    description: 'Regular gatherings featuring hands-on workshops, tech talks, and networking opportunities for our community members.',
    format: 'In-person',
    frequency: 'Every Thursday',
    duration: '2-3 hours',
    image: '/images/WhatsApp Image 2025-02-27 at 20.51.58.jpeg',
    features: [
      'Technical Workshops',
      'Industry Speaker Sessions',
      'Networking Sessions',
      'Project Showcases'
    ]
  },
  {
    id: 'conference',
    title: 'Annual WTM Conference',
    description: 'Our flagship yearly event bringing together women in tech for a day of inspiration, learning, and connection.',
    format: 'In-person & Streamed',
    frequency: 'Yearly',
    duration: '1 Full Day',
    image: '/images/WhatsApp Image 2025-02-27 at 20.51.59.jpeg',
    features: [
      'Keynote Speakers',
      'Panel Discussions',
      'Career Fair',
      'Awards Ceremony'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Events() {
  return (
    <section id="events" className="section-spacing bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#00A9E0] font-semibold text-lg mb-2 block">
            Join Our Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect, Learn, and Grow
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Be part of our vibrant community through regular meetups and our annual conference, designed to help you develop skills and build lasting connections.
          </p>
        </motion.div>

        {/* Event Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {eventTypes.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#00A9E0] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>{event.format}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#00A9E0] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{event.frequency}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#00A9E0] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{event.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Register Interest
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 