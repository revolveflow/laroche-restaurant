import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">FIND US</p>
        <h2>Visit La Roche</h2>
        <p><MapPin size={16} className="inline-icon" />355 Waterloo Rd, Greenacre NSW 2190, Australia</p>
        <p><Clock size={16} className="inline-icon" />Mon–Thu: 11:30 AM – 10:00 PM | Fri–Sat: 11:30 AM – 11:00 PM | Sun: 12:00 PM – 10:00 PM</p>
        <p><Phone size={16} className="inline-icon" />+61 2 9707 4320</p>
        <div id="reserve" className="reserve-box">
          <h3>Ready to dine?</h3>
          <p>Call us or walk in. Online booking integration can be added next.</p>
        </div>
      </motion.div>
    </section>
  );
}
