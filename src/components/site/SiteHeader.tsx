import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "The hotel", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="The Lake Kingdom home">
          <span className="brand-mark__symbol" aria-hidden="true">LK</span>
          <span className="brand-mark__text">
            <span>The Lake Kingdom</span>
            <span>Udaipur, Rajasthan</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <Button asChild className="header-enquiry">
          <a href="#enquiry">Enquire <ArrowUpRight aria-hidden="true" /></a>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#enquiry" onClick={() => setMenuOpen(false)}>Booking enquiry</a>
        </nav>
      ) : null}
    </header>
  );
}