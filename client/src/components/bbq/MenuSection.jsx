const dishes = [
  ['Mixed Grill Platter', '$42', 'Kafta, tawook and lamb skewers over saffron rice.'],
  ['Lamb Shawarma Plate', '$24', 'Slow-roasted lamb with hummus and warm bread.'],
  ['Chicken Tawook Wrap', '$16', 'Charcoal chicken, toum, pickles, fries.'],
  ['Baklava Selection', '$11', 'Pistachio and walnut pastries with syrup.'],
];

export default function MenuSection() {
  return (
    <section id="menu" className="section section-dark">
      <div className="container">
        <p className="section-kicker">OUR MENU</p>
        <h2>Signature Menu</h2>
        <div className="grid">
          {dishes.map(([name, price, desc]) => (
            <article key={name} className="card hover-lift">
              <h3>{name}</h3>
              <p>{desc}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
