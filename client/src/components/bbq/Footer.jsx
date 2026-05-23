export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>La Roche Restaurant</h3>
          <p>Lebanese charcoal grill and family dining in Sydney.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#location">Find Us</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>+61 2 9707 4320</p>
          <p>Greenacre, NSW</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} La Roche Restaurant</p>
    </footer>
  );
}
