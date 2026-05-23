import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Find Us', href: '#location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="container nav-row">
        <a href="#home" className="brand">La Roche</a>
        <div className="desktop-links">
          {navLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          <a className="order-btn" href="#reserve">Reserve</a>
        </div>
        <button className="mobile-btn" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="mobile-links container">
          {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a className="order-btn" href="#reserve" onClick={() => setOpen(false)}>Reserve</a>
        </div>
      )}
    </nav>
  );
}
