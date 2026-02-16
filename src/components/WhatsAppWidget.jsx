// WhatsAppWidget.jsx - Replace entire file with this
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/2349160214824?text=Hello%20OBATECH%20ARK!%20I%27d%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/10 hover:bg-[#128C7E] transition-colors"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      
      {/* Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </motion.a>
  );
}