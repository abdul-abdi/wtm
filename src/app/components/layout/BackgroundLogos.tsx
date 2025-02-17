'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiGoogle, SiAmazon, SiMeta, SiApple, SiNetflix, SiUber, SiAirbnb,
         SiOracle, SiSalesforce, SiIntel, SiAdobe, SiTesla, SiSpotify,
         SiLinkedin, SiNvidia, SiSamsung } from 'react-icons/si';
import { FaMicrosoft, FaTwitter } from 'react-icons/fa';

const companyIcons = [
  { Icon: SiGoogle, color: '#4285F4', size: 48, position: { x: 15, y: 15 } },
  { Icon: SiAmazon, color: '#FF9900', size: 52, position: { x: 85, y: 15 } },
  { Icon: SiMeta, color: '#0668E1', size: 44, position: { x: 50, y: 25 } },
  { Icon: FaMicrosoft, color: '#00A4EF', size: 50, position: { x: 25, y: 35 } },
  { Icon: SiApple, color: '#A2AAAD', size: 46, position: { x: 75, y: 35 } },
  { Icon: SiNetflix, color: '#E50914', size: 48, position: { x: 15, y: 45 } },
  { Icon: FaTwitter, color: '#1DA1F2', size: 42, position: { x: 85, y: 45 } },
  { Icon: SiLinkedin, color: '#0A66C2', size: 44, position: { x: 35, y: 55 } },
  { Icon: SiUber, color: '#000000', size: 40, position: { x: 65, y: 55 } },
  { Icon: SiAirbnb, color: '#FF5A5F', size: 46, position: { x: 15, y: 65 } },
  { Icon: SiOracle, color: '#C74634', size: 50, position: { x: 85, y: 65 } },
  { Icon: SiSalesforce, color: '#00A1E0', size: 46, position: { x: 25, y: 75 } },
  { Icon: SiIntel, color: '#0071C5', size: 44, position: { x: 75, y: 75 } },
  { Icon: SiAdobe, color: '#FF0000', size: 48, position: { x: 50, y: 85 } },
  { Icon: SiTesla, color: '#CC0000', size: 42, position: { x: 35, y: 25 } },
  { Icon: SiSpotify, color: '#1DB954', size: 46, position: { x: 65, y: 25 } },
  { Icon: SiNvidia, color: '#76B900', size: 50, position: { x: 25, y: 55 } },
  { Icon: SiSamsung, color: '#1428A0', size: 48, position: { x: 75, y: 55 } }
];

export default function BackgroundLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-white via-white to-white">
      {companyIcons.map((company, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.15]"
          initial={{ 
            opacity: 0,
            scale: 0.5,
            left: `${company.position.x}%`,
            top: `${company.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            opacity: 0.15,
            scale: [0.9, 1.1, 0.9],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3
          }}
        >
          <company.Icon size={company.size} color={company.color} />
        </motion.div>
      ))}
    </div>
  );
} 