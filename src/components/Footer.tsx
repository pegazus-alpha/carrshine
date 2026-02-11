import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logoCaar from "@/assets/logo-caar.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-caar section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - About */}
          <div>
            <img src={logoCaar} alt="CAAR" className="h-10 mb-4 invert" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              CAAR, votre expert en nettoyage professionnel au Cameroun. Propreté garantie, satisfaction assurée.
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61586427881144"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/237657943097"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Nettoyage Bureaux</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Nettoyage Résidentiel</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Nettoyage Après Travaux</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Vitres & Façades</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Désinfection</Link></li>
            </ul>
          </div>

          {/* Col 3 - Liens */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Liens Utiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/tarifs" className="hover:text-primary transition-colors">Nos Tarifs</Link></li>
              <li><Link to="/realisations" className="hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+237657943097" className="hover:text-primary transition-colors">+237 6 57 94 30 97</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Cameroun (Douala, Yaoundé)
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                7j/7 de 7h à 20h
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/20 py-5">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 CAAR - Services de Nettoyage Professionnel au Cameroun | Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
