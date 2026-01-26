import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We believe in doing business with honesty and transparency.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we deliver.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Reliability',
      description: 'Consistent delivery and dependable support.'
    }
  ];

  const whatsappUrl = `https://wa.me/2349160214824?text=${encodeURIComponent("Hello OBATECH ARK, I'd like to learn more about your company.")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-dark opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text-light dark:gradient-text-dark">OBATECH ARK</span>
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A leader in digital solutions for forward-thinking organizations across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  OBATECH ARK Technologies Limited is a premier digital solutions provider specializing 
                  in creating transformative online experiences for SMEs, Churches & Ministries, and 
                  Real Estate companies.
                </p>
                <p>
                  Founded with a vision to bridge the digital divide, we combine technical expertise 
                  with strategic insight to help organizations establish a powerful online presence 
                  that drives growth and engagement.
                </p>
                <p>
                  Our approach is rooted in understanding each client's unique needs and delivering 
                  tailored solutions that not only meet but exceed expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be Africa's leading digital transformation partner, empowering organizations 
                of all sizes to thrive in the digital economy through innovative, reliable, 
                and accessible technology solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver exceptional digital solutions that enhance operational efficiency, 
                improve customer engagement, and drive sustainable growth for our clients, 
                while maintaining the highest standards of quality and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Unique advantages that set us apart in the digital solutions space
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'Industry-Specific Expertise',
                  description: 'Deep understanding of SMEs, Churches, and Real Estate sectors'
                },
                {
                  title: 'CEO-Led Projects',
                  description: 'Direct involvement from leadership ensuring top-tier quality'
                },
                {
                  title: 'Transparent Pricing',
                  description: 'Clear, upfront pricing with no hidden costs'
                },
                {
                  title: 'Post-Launch Support',
                  description: 'Comprehensive maintenance and support packages'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl"
                >
                  <Award className="w-6 h-6 text-brand-purple dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create a digital solution that drives your organization forward.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 btn-gradient-light dark:btn-gradient-dark text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;