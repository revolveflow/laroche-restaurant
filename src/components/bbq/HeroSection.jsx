import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="embers" aria-hidden="true">
        {[...Array(8)].map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.4}s` }} />)}
      </div>
      <motion.div
        className="container hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="kicker">Authentic Lebanese charcoal flavours</p>
        <h1>
          LA ROCHE <span>RESTAURANT</span>
        </h1>
        <p>Family dining, fresh grills, shawarma and mezze — crafted for Sydney nights.</p>
        <div className="hero-cta-row">
          <a className="order-btn" href="#menu">VIEW MENU</a>
          <a className="ghost-btn" href="#location">FIND US</a>
        </div>
      </motion.div>
    </section>
  );
}
