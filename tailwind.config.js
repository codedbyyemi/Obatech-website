import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Test with different formats
  const phoneNumber = '+2349160214824'; // Keep + for display
  const cleanNumber = phoneNumber.replace('+', ''); // Remove + for URL
  
  const defaultMessage = encodeURIComponent("Hello OBATECH ARK, I'd like to inquire about your services.");
  
  // Test multiple URL formats
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;
  const whatsappAltUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;

  // Debug: Log the URLs
  useEffect(() => {
    console.log('WhatsApp Debug Info:');
    console.log('1. Phone number:', phoneNumber);
    console.log('2. Clean number:', cleanNumber);
    console.log('3. wa.me URL:', whatsappUrl);
    console.log('4. api.whatsapp URL:', whatsappAltUrl);
  }, []);

  const services = [
    { label: 'SME Website Inquiry', message: 'Hello, I am interested in SME Website Packages.' },
    { label: 'Church Website Inquiry', message: 'Hello, I am interested in Church & Ministry Website Packages.' },
    { label: 'Real Estate Website', message: 'Hello, I am interested in Real Estate Website Packages.' },
    { label: 'General Inquiry', message: 'Hello, I have a general inquiry about your services.' },
    { label: 'Pricing Inquiry', message: 'Hello, I would like to know more about your pricing.' },
  ];

  const openWhatsApp = (message = defaultMessage) => {
    // Test with different URL formats
    const url1 = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    const url2 = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    console.log('Opening WhatsApp with URL:', url1);
    console.log('Alternative URL:', url2);
    
    // Try both formats
    window.open(url1, '_blank');
    // If first doesn't work, try second after a delay
    setTimeout(() => {
      // Check if window opened successfully
      const newWindow = window.open('', '_blank');
      if (newWindow && newWindow.location.href === 'about:blank') {
        newWindow.location.href = url2;
      }
    }, 100);
    
    setIsOpen(false);
  };

  // Add a test button to debug
  const testWhatsApp = () => {
    const testUrl = `https://wa.me/2349160214824?text=Test`;
    console.log('Test URL:', testUrl);
    window.open(testUrl, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Debug Button (temporary) */}
      <button
        onClick={testWhatsApp}
        className="fixed bottom-24 right-6 z-50 px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
      >
        Test Direct Link
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Chat with us</h3>
                    <p className="text-green-100 text-sm">Typically replies within minutes</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Hello! How can we help you today? Choose an option below or send a custom message.
              </p>

              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openWhatsApp(service.message)}
                    className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{service.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Or send a custom message:
                </p>
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Start Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;