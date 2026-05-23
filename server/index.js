const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const business = {
  name: 'La Roche Restaurant',
  tagline: 'Lebanese charcoal grill & family dining in Sydney',
  location: '355 Waterloo Rd, Greenacre NSW 2190, Australia',
  phone: '+61 2 9707 4320',
  hours: [
    'Mon–Thu: 11:30 AM – 10:00 PM',
    'Fri–Sat: 11:30 AM – 11:00 PM',
    'Sun: 12:00 PM – 10:00 PM',
  ],
};

const menu = [
  { id: 1, name: 'Mixed Grill Platter', category: 'Grill', price: 42, desc: 'Lamb kafta, shish tawook, and lamb skewers over saffron rice.' },
  { id: 2, name: 'Chicken Tawook Wrap', category: 'Wraps', price: 16, desc: 'Charcoal chicken, garlic toum, pickles, and fries.' },
  { id: 3, name: 'Fattoush Salad', category: 'Salads', price: 14, desc: 'Crisp greens, toasted pita, sumac dressing.' },
  { id: 4, name: 'Lamb Shawarma Plate', category: 'Shawarma', price: 24, desc: 'Slow-roasted lamb shawarma with hummus and flatbread.' },
  { id: 5, name: 'Baklava Selection', category: 'Dessert', price: 11, desc: 'Pistachio and walnut baklava with orange blossom syrup.' },
  { id: 6, name: 'Mint Lemonade', category: 'Drinks', price: 8, desc: 'Fresh lemon, mint, and crushed ice.' },
];

app.get('/api/health', (_, res) => res.json({ ok: true }));
app.get('/api/business', (_, res) => res.json(business));
app.get('/api/menu', (_, res) => res.json(menu));

app.post('/api/reservations', (req, res) => {
  const { name, email, guests, date, notes } = req.body;
  if (!name || !email || !guests || !date) {
    return res.status(400).json({ message: 'name, email, guests, and date are required' });
  }

  res.status(201).json({
    message: 'Reservation request received. We will contact you shortly.',
    data: { name, email, guests, date, notes: notes || '' },
  });
});

app.listen(PORT, () => {
  console.log(`La Roche API running at http://localhost:${PORT}`);
});
