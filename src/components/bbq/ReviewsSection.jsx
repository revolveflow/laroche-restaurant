import { motion } from 'framer-motion';

const reviews = [
  ['Amina', 'Best charcoal chicken and garlic sauce in the area.'],
  ['Rami', 'Great family portions and quick service.'],
  ['Sofia', 'Loved the mixed grill and fresh fattoush.'],
];

export default function ReviewsSection() {
  return (
    <section className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">REVIEWS</p>
        <h2>What Guests Say</h2>
      </motion.div>
      <div className="grid">
        {reviews.map(([name, quote], i) => (
          <motion.article
            key={name}
            className="card hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <p>“{quote}”</p>
            <strong>- {name}</strong>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
