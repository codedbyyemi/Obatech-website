import { motion } from 'framer-motion';
import { Award, Target, Users, BookOpen, MessageSquare, Linkedin } from 'lucide-react';
import ceoImage from '../assets/ceo.jpeg';

const CEOProfile = () => {
  const whatsappUrl = `https://wa.me/2349160214824?text=${encodeURIComponent("Hello Obanijesu John, I'd like to learn more about OBATECH ARK.")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-dark opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text-light dark:gradient-text-dark">Obanijesu John</span>
                </h1>
                <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
                  Founder & CEO, OBATECH ARK Technologies Limited
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Visionary leader dedicated to transforming businesses through innovative 
                  digital solutions and strategic technology implementation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 btn-gradient-light dark:btn-gradient-dark text-white rounded-lg font-semibold"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Connect Directly
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="w-full max-w-md mx-auto">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-light dark:bg-gradient-dark rounded-3xl opacity-20 blur-xl" />
                    <img
                      src={ceoImage}
                      alt="Obanijesu John - Founder & CEO of OBATECH ARK Technologies"
                      className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
                      style={{ objectPosition: 'center top' }}
                      onError={(e) => {
                        console.error('CEO image failed to load');
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Professional Biography</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Obanijesu John, known professionally as OBATECH, is a visionary entrepreneur 
                and technology expert with over 8 years of experience in digital solutions 
                development. His journey began with a passion for solving complex business 
                challenges through technology.
              </p>
              <p>
                Under his leadership, OBATECH ARK Technologies Limited has grown from a 
                small startup to a recognized leader in providing digital solutions for 
                SMEs, churches, and real estate companies across Nigeria.
              </p>
              <p>
                His unique approach combines technical expertise with deep industry 
                understanding, allowing him to create solutions that not only meet 
                technical requirements but also drive real business results.
              </p>
              <p>
                As CEO, Obanijesu is directly involved in every major project, ensuring 
                that each client receives the highest level of attention and quality 
                that has become synonymous with the OBATECH ARK brand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Leadership Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Lead by Example',
                    description: 'Direct involvement in projects ensures quality and sets standards'
                  },
                  {
                    title: 'Client-First Approach',
                    description: 'Success is measured by client satisfaction and business impact'
                  },
                  {
                    title: 'Continuous Learning',
                    description: 'Staying ahead of technology trends to provide cutting-edge solutions'
                  },
                  {
                    title: 'Team Empowerment',
                    description: 'Building a culture of excellence through mentorship and development'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision for Company */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-light dark:bg-gradient-dark flex items-center justify-center text-white mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Vision for the Company</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  "At OBATECH ARK, we envision a future where every Nigerian organization, 
                  regardless of size or sector, has access to world-class digital solutions 
                  that empower them to compete globally."
                </p>
                <p>
                  Our goal is to become the go-to digital transformation partner for 
                  organizations seeking to leverage technology for growth. We aim to:
                </p>
                <ul className="space-y-3 pl-6 list-disc">
                  <li>Democratize access to premium digital solutions</li>
                  <li>Bridge the digital divide for traditional sectors</li>
                  <li>Create sustainable value for our clients and community</li>
                  <li>Pioneer innovative approaches to digital transformation</li>
                  <li>Build lasting partnerships based on trust and results</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct Message */}
      <section className="py-20 bg-gradient-light dark:bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Connect Directly with Our CEO
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Obanijesu believes in direct communication and is always available to discuss 
              how OBATECH ARK can help transform your digital presence.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Send Direct WhatsApp Message
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CEOProfile;