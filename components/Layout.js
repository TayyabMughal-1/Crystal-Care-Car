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
            aria-label="Crystal Car Wash homepage"
            onClick={closeMenu}
          >
            <span className="logo-mark">C</span>
            <span>Crystal Car Wash</span>
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

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo">
                <span className="logo-mark">C</span>
                <span>Crystal Car Wash</span>
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
              <p>Email: info@crystalcarwash.pk</p>
              <Link href="/contact" className="footer-book">
                Request a booking
              </Link>
            </div>
          </div>

          <div className="copy">
            © {new Date().getFullYear()} Crystal Car Wash. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="mobile-sticky-cta">
        <Link href="/contact">Book Now</Link>
        <Link href="/services">Services</Link>
      </div>
    </>
  );
}
