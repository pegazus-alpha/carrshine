import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logoCaar from "@/assets/logo-caar.png";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary shadow-lg backdrop-blur-sm" : "bg-secondary/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-caar flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoCaar} alt="CAAR Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm font-bold tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === link.to
                  ? "text-primary after:scale-x-100"
                  : "text-secondary-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/237657943097?text=Bonjour%20CAAR%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services%20de%20nettoyage."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <Phone className="w-4 h-4" />
            Devis Gratuit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-secondary-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-secondary border-t border-border/30 animate-fade-in">
          <nav className="container-caar py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-sm font-bold py-2 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-secondary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/237657943097?text=Bonjour%20CAAR%2C%20je%20souhaite%20des%20informations."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center mt-2"
            >
              <Phone className="w-4 h-4" />
              Devis Gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
