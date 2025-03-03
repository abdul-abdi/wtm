'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Tech Leadership Summit',
    image: '/images/IMG_9656 (1).jpg',
    category: 'Events',
    description: 'Celebrating excellence in tech leadership',
  },
  {
    id: 2,
    title: 'Coding Workshop',
    image: '/images/IMG_9653 (1).jpg',
    category: 'Workshops',
    description: 'Building the future through code',
  },
  {
    id: 3,
    title: 'Innovation Lab',
    image: '/images/IMG_9652 (1).jpg',
    category: 'Education',
    description: 'Exploring cutting-edge technologies',
  },
  {
    id: 4,
    title: 'Community Meetup',
    image: '/images/IMG_9650 (1).jpg',
    category: 'Community',
    description: 'Connecting and empowering each other',
  },
  {
    id: 5,
    title: 'Mentorship Program',
    image: '/images/IMG_9639 (1).jpg',
    category: 'Education',
    description: 'Guiding the next generation',
  },
  {
    id: 6,
    title: 'Tech Talk Series',
    image: '/images/IMG_9637 (1).jpg',
    category: 'Events',
    description: 'Sharing knowledge and experiences',
  },
  {
    id: 7,
    title: 'Hackathon Winners',
    image: '/images/IMG_9625.jpg',
    category: 'Events',
    description: 'Celebrating innovation and creativity',
  },
  {
    id: 8,
    title: 'Leadership Workshop',
    image: '/images/IMG_9622 (1).jpg',
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
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  // Reset image loaded state when category changes
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    // Reset the imagesLoaded state to ensure images are properly tracked
    setImagesLoaded({});
  }, []);

  // Filter images based on selected category
  const filteredImages = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  // Handle image load completion
  const handleImageLoad = useCallback((id: number) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  }, []);

  // Check if all visible images are loaded
  useEffect(() => {
    if (filteredImages.length > 0) {
      // We can track if all images are loaded if needed for future functionality
      // const allLoaded = filteredImages.every(item => imagesLoaded[item.id]);
      // But we don't need to set a loading state since we use CSS transitions
    }
  }, [filteredImages, imagesLoaded]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedImage(galleryItems[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedImage(galleryItems[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
          <span className="text-[#00A9E0] font-semibold text-lg mb-2 block">
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
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#00A9E0] text-white shadow-lg shadow-[#00A9E0]/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Only show when there are filtered images */}
        {filteredImages.length > 0 ? (
          <motion.div
            key={selectedCategory} // Add key to force re-render when category changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  {/* Loading skeleton */}
                  <div className={`absolute inset-0 bg-gray-200 animate-pulse ${imagesLoaded[item.id] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={item.id <= 4} // Prioritize loading the first 4 images
                    quality={80}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={() => handleImageLoad(item.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[#00A9E0] text-sm font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600">No images found in this category.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="mt-4 px-6 py-3 rounded-full bg-[#00A9E0] text-white shadow-lg shadow-[#00A9E0]/30 hover:bg-[#0098c7] transition-colors"
            >
              View all images
            </button>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gray-800 animate-pulse z-0"></div>
                <Image
                  src={galleryItems.find((item) => item.id === selectedImage)?.image || ''}
                  alt={galleryItems.find((item) => item.id === selectedImage)?.title || 'Selected image'}
                  fill
                  sizes="100vw"
                  quality={90}
                  priority
                  className="object-contain z-10"
                />
                
                {/* Navigation controls */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 z-20">
                  <h3 id="lightbox-title" className="text-white text-xl font-bold">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <button
                    className="text-white hover:text-gray-300 transition-colors p-2"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close lightbox"
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
                </div>
                
                {/* Left/Right navigation buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center z-20">
                  <button
                    className="bg-black/50 text-white p-2 m-4 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                      setSelectedImage(galleryItems[prevIndex].id);
                    }}
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center z-20">
                  <button
                    className="bg-black/50 text-white p-2 m-4 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                      const nextIndex = (currentIndex + 1) % galleryItems.length;
                      setSelectedImage(galleryItems[nextIndex].id);
                    }}
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
              
              {/* Instructions for keyboard navigation */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                Use arrow keys to navigate, ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 