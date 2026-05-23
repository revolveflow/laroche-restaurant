import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">ABOUT US</p>
        <h2>About La Roche</h2>
        <p>
          Inspired by classic Lebanese hospitality, La Roche serves smoky charcoal meats,
          handmade wraps, fresh salads and warm mezze in a relaxed family setting.
        </p>
      </motion.div>
    </section>
  );
}
