import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { services } from "../data/services";

export default function Layout({ children }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredServices = services.slice(0, 6);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/areas", label: "Areas" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link
            href="/"
            className="logo"
            aria-label="Crystal Car Care homepage"
            onClick={closeMenu}
          >
            <span className="logo-mark">C</span>
            <span>Crystal Car Care</span>
          </Link>

          <button
            className={menuOpen ? "menu-button is-open" : "menu-button"}
            type="button"
            aria-label="Open mobile menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta" onClick={closeMenu}>
              Book Now
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/923000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20car%20wash%20service."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.529 5.845L.057 23.882l6.198-1.625A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.87 9.87 0 01-5.031-1.377l-.361-.214-3.741.981.998-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106S21.894 6.53 21.894 12 17.47 21.894 12 21.894z"/>
        </svg>
        <span>Chat with us</span>
      </a>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo">
                <span className="logo-mark">C</span>
                <span>Crystal Car Care</span>
              </Link>
              <p>
                Premium car wash, detailing, paint protection, mobile wash, and
                corporate fleet services for Islamabad and Rawalpindi.
              </p>
              <div className="footer-badges">
                <span>Mobile Service</span>
                <span>Detailing</span>
                <span>Packages</span>
              </div>
            </div>

            <div>
              <h4>Company</h4>
              <div className="footer-links">
                <Link href="/about">About</Link>
                <Link href="/areas">Service Areas</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h4>Top Services</h4>
              <div className="footer-links">
                {featuredServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4>Booking</h4>
              <p>Islamabad and Rawalpindi</p>
              <p>Phone: +92 300 0000000</p>
              <p>Email: info@crystalcarcare.pk</p>
              <Link href="/contact" className="footer-book">
                Request a booking
              </Link>
            </div>
          </div>

          <div className="copy">
            © {new Date().getFullYear()} Crystal Car Care. All rights reserved.
          </div>
        </div>
      </footer>

    </>
  );
}
