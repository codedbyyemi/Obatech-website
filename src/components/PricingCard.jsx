import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ plan, index }) => {
  const whatsappUrl = `https://wa.me/2349160214824?text=${encodeURIComponent(plan.whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        plan.popular ? 'ring-2 ring-brand-purple dark:ring-blue-400' : ''
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center space-x-1 px-4 py-1 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full text-sm font-medium"
          >
            <Star className="w-4 h-4" fill="currentColor" />
            <span>Most Popular</span>
          </motion.div>
        </div>
      )}

      {/* Category */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
          {plan.category}
        </span>
      </div>

      {/* Plan Name & Price */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold gradient-text-light dark:gradient-text-dark">
            {plan.price}
          </span>
          {plan.price.includes('/') ? '' : <span className="text-gray-600 dark:text-gray-400 ml-2">one-time</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
          plan.popular
            ? 'btn-gradient-light dark:btn-gradient-dark text-white hover:opacity-90'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
};

export default PricingCard;