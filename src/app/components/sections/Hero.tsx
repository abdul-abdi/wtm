'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaReact, FaPython, FaJava, FaDatabase, FaCloud, FaCode, FaTwitter, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiJavascript, SiGoogle, SiAmazon, SiMeta, SiApple, SiNetflix, SiLinkedin, SiUber, SiAirbnb } from 'react-icons/si';

const mainTechIcons = [
  { Icon: FaReact, color: '#61DAFB', name: 'React' },
  { Icon: FaPython, color: '#3776AB', name: 'Python' },
  { Icon: SiTensorflow, color: '#FF6F00', name: 'TensorFlow' },
  { Icon: FaJava, color: '#007396', name: 'Java' },
  { Icon: SiKubernetes, color: '#326CE5', name: 'Kubernetes' },
];

const backgroundTechIcons = [
  { Icon: FaReact, color: '#61DAFB', size: 40 },
  { Icon: FaPython, color: '#3776AB', size: 48 },
  { Icon: SiTensorflow, color: '#FF6F00', size: 44 },
  { Icon: FaJava, color: '#007396', size: 42 },
  { Icon: FaDatabase, color: '#336791', size: 38 },
  { Icon: SiKubernetes, color: '#326CE5', size: 46 },
  { Icon: FaCloud, color: '#4285F4', size: 40 },
  { Icon: SiJavascript, color: '#F7DF1E', size: 42 },
  { Icon: FaCode, color: '#00BFB3', size: 44 },
];

const companyIcons = [
  { Icon: SiGoogle, color: '#4285F4', size: 48, opacity: 0.08 },
  { Icon: SiAmazon, color: '#FF9900', size: 52, opacity: 0.08 },
  { Icon: SiMeta, color: '#0668E1', size: 44, opacity: 0.08 },
  { Icon: FaMicrosoft, color: '#00A4EF', size: 50, opacity: 0.08 },
  { Icon: SiApple, color: '#A2AAAD', size: 46, opacity: 0.08 },
  { Icon: SiNetflix, color: '#E50914', size: 48, opacity: 0.08 },
  { Icon: FaTwitter, color: '#1DA1F2', size: 42, opacity: 0.08 },
  { Icon: SiLinkedin, color: '#0A66C2', size: 44, opacity: 0.08 },
  { Icon: SiUber, color: '#000000', size: 40, opacity: 0.08 },
  { Icon: SiAirbnb, color: '#FF5A5F', size: 46, opacity: 0.08 },
];

// WhatsApp group link
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/KFEwbCxORx10GOFM55Vvzz';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  const [iconPositions, setIconPositions] = useState<Array<{ x: number, y: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Generate random positions for icons
    const positions = backgroundTechIcons.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setIconPositions(positions);

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5FF] via-[#F0FFFD] to-white" />
      </div>

      {/* Background Icons Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Company Background Icons */}
        <div className="relative w-full h-full">
          {companyIcons.map((company, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: company.opacity,
                  scale: [0.8, 1.2, 0.8],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              >
                <company.Icon size={company.size} color={company.color} />
              </motion.div>
            );
          })}
        </div>

        {/* Floating Tech Icons */}
        {backgroundTechIcons.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: iconPositions[i]?.x || 0,
              y: iconPositions[i]?.y || 0,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              x: [
                iconPositions[i]?.x || 0,
                (iconPositions[i]?.x || 0) + 100,
                iconPositions[i]?.x || 0,
              ],
              y: [
                iconPositions[i]?.y || 0,
                (iconPositions[i]?.y || 0) + 100,
                iconPositions[i]?.y || 0,
              ],
              opacity: 0.1,
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <tech.Icon size={tech.size} color={tech.color} className="opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container-width px-4 sm:px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center h-full">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl pt-20 lg:pt-0"
            >
              {/* Logo and Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 sm:mb-6">
                  <Image
                    src="https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png"
                    alt="Women Techmakers Logo"
                    width={64}
                    height={64}
                    priority
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <div className="h-8 w-[2px] bg-gradient-to-b from-[#00A9E0] to-[#00BFB3]" />
                  <span className="text-base sm:text-lg font-medium text-gray-600">
                    Zetech University
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                  <span className="text-gray-900">Welcome to</span>
                  <span className="gradient-text block mt-2">
                    Women Techmakers
                  </span>
                  <span className="text-[#00BFB3] text-xl sm:text-2xl md:text-3xl block mt-4 font-medium">
                    Zetech University Chapter
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Empowering women in technology at Zetech University through visibility, community, and resources. Join us in building a more inclusive tech ecosystem.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-semibold text-white bg-[#00A9E0] hover:bg-[#0098CC] transition-colors shadow-lg shadow-[#00A9E0]/20 flex items-center justify-center"
                >
                  <span>Join Our Chapter</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-200 ease-out transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-colors shadow-sm flex items-center justify-center"
                >
                  Learn More
                  <svg 
                    className="w-5 h-5 ml-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Tech Icons Circle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden sm:flex items-center justify-center select-none"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
              >
                {mainTechIcons.map((tech, index) => {
                  const angle = (index * 360) / mainTechIcons.length;
                  const radius = Math.min(dimensions.width, dimensions.height) * 0.15; // Responsive radius
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        x,
                        y,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative group">
                        <tech.Icon 
                          size={Math.min(dimensions.width * 0.06, 80)} 
                          color={tech.color} 
                          className="transform-gpu transition-all duration-300 group-hover:scale-110" 
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-lg"
                        >
                          {tech.name}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-[#00A9E0] via-[#00BFB3] to-[#4BA87D] opacity-20 blur-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2 font-light tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-6 border-2 border-gray-200 rounded-full flex items-center justify-center"
          >
            <motion.div className="w-1 h-1 bg-gray-300 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 