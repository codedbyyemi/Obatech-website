import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hello OBATECH ARK, I'd like to inquire about your services.");
  const whatsappUrl = `https://wa.me/2349160214824?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
              <span className="text-xl font-bold gradient-text-light dark:gradient-text-dark">
                OBATECH ARK
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Empowering businesses, churches, and real estate companies with cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-light dark:hover:bg-gradient-dark hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Pricing', 'CEO Profile', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {['SME Websites', 'Church & Ministry', 'Real Estate', 'E-commerce', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+234 916 021 4824</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Friday: 9am - 6pm
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Saturday: 10am - 4pm
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} OBATECH ARK Technologies Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;