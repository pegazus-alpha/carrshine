import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Mail, MessageCircle } from "lucide-react";
import logoCaar from "@/assets/logo-caar.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-caar section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - About */}
          <div>
            <img src={logoCaar} alt="CAAR" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-medium">
              CAAR, votre expert en nettoyage et maintenance au Cameroun. Redonner vie à vos infrastructures.
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
            <h4 className="font-heading font-bold text-sm mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li><Link to="/services#industriel" className="hover:text-primary transition-colors">Nettoyage Industriel</Link></li>
              <li><Link to="/services#apres-chantier" className="hover:text-primary transition-colors">Nettoyage Après Chantier</Link></li>
              <li><Link to="/services#facades" className="hover:text-primary transition-colors">Nettoyage des Façades</Link></li>
              <li><Link to="/services#hygiene" className="hover:text-primary transition-colors">Hygiène & Salubrité</Link></li>
              <li><Link to="/services#renovation" className="hover:text-primary transition-colors">Rénovation & Contre-Expertise</Link></li>
              <li><Link to="/services#desinfection" className="hover:text-primary transition-colors">Désinfection & Assainissement</Link></li>
            </ul>
          </div>

          {/* Col 3 - Liens */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-primary">Liens Utiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/tarifs" className="hover:text-primary transition-colors">Nos Tarifs</Link></li>
              <li><Link to="/realisations" className="hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+237657943097" className="hover:text-primary transition-colors">+237 6 57 94 30 97</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/237678169959" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+237 678 169 959</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@caar.com" className="hover:text-primary transition-colors">info@caar.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Douala, New-Town Aéroport
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Kribi · Yaoundé · Tout le Cameroun
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
        <p className="text-center text-xs text-muted-foreground font-medium">
          © 2026 CAAR - Services de Nettoyage Professionnel au Cameroun | Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
