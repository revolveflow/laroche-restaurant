import Navbar from '../components/bbq/Navbar';
import Footer from '../components/bbq/Footer';

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
