import { useState } from 'react';
import { motion } from 'framer-motion';

const MENU_1 = 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80';
const MENU_2 = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80';

const tabs = [
  { id: 'grills', label: 'Grills & Platters', image: MENU_1 },
  { id: 'wraps', label: 'Wraps & Shawarma', image: MENU_2 },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('grills');
  const activeMenu = tabs.find((t) => t.id === activeTab);

  return (
    <section id="menu" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">OUR MENU</p>
          <h2>What’s Cooking</h2>
        </motion.div>

        <div className="tab-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="menu-image-wrap"
        >
          <img src={activeMenu.image} alt={activeMenu.label} className="menu-image" />
        </motion.div>
      </div>
    </section>
  );
}
