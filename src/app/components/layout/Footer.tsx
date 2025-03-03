'use client';

import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDiscord, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// WhatsApp group link
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/KFEwbCxORx10GOFM55Vvzz';

const navigation = {
  main: [
    { name: 'About', href: WHATSAPP_GROUP_LINK, description: 'Learn about our mission and values' },
    { name: 'Programs', href: WHATSAPP_GROUP_LINK, description: 'Explore our development programs' },
    { name: 'Events', href: WHATSAPP_GROUP_LINK, description: 'Join our upcoming events' },
    { name: 'Gallery', href: WHATSAPP_GROUP_LINK, description: 'See our community in action' },
    { name: 'Contact', href: WHATSAPP_GROUP_LINK, description: 'Get in touch with us' },
  ],
  social: [
    {
      name: 'WhatsApp',
      href: WHATSAPP_GROUP_LINK,
      icon: FaWhatsapp,
      color: '#25D366',
    },
    {
      name: 'Twitter',
      href: WHATSAPP_GROUP_LINK,
      icon: FaTwitter,
      color: '#1DA1F2',
    },
    {
      name: 'LinkedIn',
      href: WHATSAPP_GROUP_LINK,
      icon: FaLinkedinIn,
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      href: WHATSAPP_GROUP_LINK,
      icon: FaGithub,
      color: '#333333',
    },
    {
      name: 'Instagram',
      href: WHATSAPP_GROUP_LINK,
      icon: FaInstagram,
      color: '#E4405F',
    },
    {
      name: 'Discord',
      href: WHATSAPP_GROUP_LINK,
      icon: FaDiscord,
      color: '#5865F2',
    },
    {
      name: 'YouTube',
      href: WHATSAPP_GROUP_LINK,
      icon: FaYoutube,
      color: '#FF0000',
    },
  ],
  resources: [
    { name: 'Documentation', href: WHATSAPP_GROUP_LINK },
    { name: 'Blog', href: WHATSAPP_GROUP_LINK },
    { name: 'Resources', href: WHATSAPP_GROUP_LINK },
    { name: 'Newsletter', href: WHATSAPP_GROUP_LINK },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-75 sm:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/10 via-[#00BFB3]/10 to-[#4BA87D]/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 translate-x-1/2 -translate-y-1/2 opacity-75 sm:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4BA87D]/10 via-[#00BFB3]/10 to-[#00A9E0]/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6 sm:space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-4">
              <Image
                src="https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png"
                alt="Women Techmakers Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">Women Techmakers</p>
                <p className="text-xs sm:text-sm text-gray-600">Zetech University Chapter</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">
              Empowering women in technology through visibility, community, and resources.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute -inset-1.5 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-200" />
                  <item.icon 
                    className="relative w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" 
                    style={{ color: item.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex items-center text-sm sm:text-base text-gray-600 hover:text-[#00A9E0] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00A9E0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Resources</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex items-center text-sm sm:text-base text-gray-600 hover:text-[#00A9E0] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00A9E0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Join our WhatsApp group</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Connect with our community and stay updated with our latest events, programs, and opportunities.
              </p>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                window.open(WHATSAPP_GROUP_LINK, '_blank');
              }}>
                <div className="relative rounded-xl overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-[#00A9E0]/20">
                  <input
                    type="email"
                    name="email"
                    id="footer-email"
                    required
                    className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#00A9E0]"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
                  >
                    Join Group
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <a 
                  href={WHATSAPP_GROUP_LINK}
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#128C7E] font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Join directly via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-center sm:text-left text-gray-500">
              &copy; {new Date().getFullYear()} Women Tech Makers Zetech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <a href={WHATSAPP_GROUP_LINK} className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href={WHATSAPP_GROUP_LINK} className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              <a href={WHATSAPP_GROUP_LINK} className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 