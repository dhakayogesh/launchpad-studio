import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div>
          <Link to="/" className="footer-brand">The Lake Kingdom</Link>
          <p>Udaipur, Rajasthan, India</p>
        </div>
        <div className="site-footer__links">
          <a href="#about">The hotel</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="site-footer__note">Phone, email and WhatsApp details to be added.</p>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} The Lake Kingdom</span>
        <span>Udaipur · Rajasthan</span>
      </div>
    </footer>
  );
}