const reviews = [
  ['Amina', 'Best charcoal chicken and garlic sauce in the area.'],
  ['Rami', 'Great family portions and quick service.'],
  ['Sofia', 'Loved the mixed grill and fresh fattoush.'],
];

export default function ReviewsSection() {
  return (
    <section className="section container">
      <h2>What Guests Say</h2>
      <div className="grid">
        {reviews.map(([name, quote]) => (
          <article key={name} className="card">
            <p>“{quote}”</p>
            <strong>- {name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
