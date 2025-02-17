'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'About', href: '#about', description: 'Learn about our mission and values' },
    { name: 'Programs', href: '#programs', description: 'Explore our development programs' },
    { name: 'Events', href: '#events', description: 'Join our upcoming events' },
    { name: 'Gallery', href: '#gallery', description: 'See our community in action' },
    { name: 'Contact', href: '#contact', description: 'Get in touch with us' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
      color: '#1DA1F2',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedinIn,
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      href: '#',
      icon: FaGithub,
      color: '#333333',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
      color: '#E4405F',
    },
    {
      name: 'Discord',
      href: '#',
      icon: FaDiscord,
      color: '#5865F2',
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FaYoutube,
      color: '#FF0000',
    },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Newsletter', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/10 via-[#00BFB3]/10 to-[#4BA87D]/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4BA87D]/10 via-[#00BFB3]/10 to-[#00A9E0]/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-4">
              <Image
                src="https://developers.google.com/static/womentechmakers/images/wtm-logo_96.png"
                alt="Women Techmakers Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">Women Techmakers</p>
                <p className="text-sm text-gray-600">Zetech University Chapter</p>
              </div>
            </div>
            <p className="text-base text-gray-600 max-w-xs">
              Empowering women in technology through visibility, community, and resources.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative"
                >
                  <span className="absolute -inset-1.5 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-200" />
                  <item.icon 
                    className="relative w-5 h-5 transition-colors duration-200" 
                    style={{ color: item.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-base text-gray-600 hover:text-[#00A9E0] transition-colors duration-200"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00A9E0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-base text-gray-600 hover:text-[#00A9E0] transition-colors duration-200"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00A9E0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Subscribe to our newsletter</h3>
              <p className="text-base text-gray-600 mb-4">
                Stay updated with our latest events, programs, and opportunities.
              </p>
              <form className="space-y-4">
                <div className="relative rounded-xl overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-[#00A9E0]/20">
                  <input
                    type="email"
                    name="email"
                    id="footer-email"
                    required
                    className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-[#00A9E0]"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-[#00A9E0] to-[#00BFB3] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A9E0]"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} Women Tech Makers Zetech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 