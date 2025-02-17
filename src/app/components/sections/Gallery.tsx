'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Tech Leadership Summit',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
    category: 'Events',
    description: 'Celebrating excellence in tech leadership',
  },
  {
    id: 2,
    title: 'Coding Workshop',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    category: 'Workshops',
    description: 'Building the future through code',
  },
  {
    id: 3,
    title: 'Innovation Lab',
    image: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3',
    category: 'Education',
    description: 'Exploring cutting-edge technologies',
  },
  {
    id: 4,
    title: 'Community Meetup',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279',
    category: 'Community',
    description: 'Connecting and empowering each other',
  },
  {
    id: 5,
    title: 'Mentorship Program',
    image: 'https://images.unsplash.com/photo-1573164713619-22f9c11c8110',
    category: 'Education',
    description: 'Guiding the next generation',
  },
  {
    id: 6,
    title: 'Tech Talk Series',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40',
    category: 'Events',
    description: 'Sharing knowledge and experiences',
  },
  {
    id: 7,
    title: 'Hackathon Winners',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
    category: 'Events',
    description: 'Celebrating innovation and creativity',
  },
  {
    id: 8,
    title: 'Leadership Workshop',
    image: 'https://images.unsplash.com/photo-1573164574001-96b0d9e0c8d8',
    category: 'Workshops',
    description: "Developing tomorrow's leaders",
  },
];

const categories = ['All', 'Events', 'Workshops', 'Education', 'Community'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Moments of Impact
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Explore the inspiring moments and milestones of our community as we continue
            to make waves in the tech industry.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-blue-400 text-sm font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={galleryItems.find((item) => item.id === selectedImage)?.image || ''}
                  alt="Selected image"
                  fill
                  className="object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 