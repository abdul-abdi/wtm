'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] via-[#00BFB3] to-[#4BA87D] rounded-xl blur-2xl opacity-30" />
            <div className="relative glass rounded-xl p-8 md:p-12 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community of women in tech and take the first step towards your future in technology.
              </p>
              <Link
                href="#join"
                className="inline-flex items-center px-8 py-4 rounded-xl text-white bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 