import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingPlans, maintenancePlans } from '../constants/pricing';
import { Check, Shield, Clock, Headphones } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-dark opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Transparent <span className="gradient-text-light dark:gradient-text-dark">Pricing</span>
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Clear, upfront pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Website Packages</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive solutions for different business sizes and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maintenance & Support</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Keep your website running smoothly with our comprehensive support plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold gradient-text-light dark:gradient-text-dark mb-6">
                    {plan.price}
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/2349160214824?text=${encodeURIComponent(`Hello, I'm interested in the ${plan.name} maintenance plan.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 btn-gradient-light dark:btn-gradient-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Pricing?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in value, not just price
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'No Hidden Costs',
                description: 'Complete transparency in pricing'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Flexible Terms',
                description: 'Payment plans available'
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: 'Dedicated Support',
                description: 'Priority assistance included'
              },
              {
                icon: <Check className="w-8 h-8" />,
                title: 'Quality Guarantee',
                description: '100% satisfaction guarantee'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-20 bg-gradient-light dark:bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Need a Custom Quote?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Every business is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/2349160214824?text=${encodeURIComponent("Hello OBATECH ARK, I need a custom quote for a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;