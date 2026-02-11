import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const servicesData = [
  {
    id: "bureaux",
    icon: "🏢",
    title: "Nettoyage Bureaux & Locaux Professionnels",
    desc: "Entretien quotidien, hebdomadaire ou mensuel de vos espaces de travail pour un environnement sain et productif.",
    details: ["Sols, surfaces et mobilier", "Sanitaires et espaces communs", "Cuisine et salle de pause", "Poubelles et recyclage"],
    clients: "PME, grandes entreprises, cabinets",
    cta: "Demander un devis bureau",
    whatsapp: "Bonjour, j'aimerais un devis pour le nettoyage de bureaux/locaux professionnels.",
  },
  {
    id: "residentiel",
    icon: "🏠",
    title: "Nettoyage Résidentiel",
    desc: "Maisons, appartements et villas impeccables. Profitez de votre chez-vous sans vous soucier du ménage.",
    details: ["Nettoyage complet toutes pièces", "Cuisine et salle de bain en profondeur", "Vitres intérieures", "Repassage en option"],
    clients: "Particuliers, expatriés, propriétaires",
    cta: "Réserver mon nettoyage",
    whatsapp: "Bonjour, je souhaite faire nettoyer ma maison/appartement.",
  },
  {
    id: "apres-travaux",
    icon: "🔨",
    title: "Nettoyage Après Travaux",
    desc: "Remise en état complète après construction ou rénovation. Votre espace neuf mérite une finition impeccable.",
    details: ["Enlèvement poussière et débris", "Nettoyage sols et surfaces", "Vitres et menuiseries", "Finitions soignées"],
    clients: "Constructeurs, rénovateurs, particuliers",
    cta: "Nettoyer après mes travaux",
    whatsapp: "Bonjour, j'ai besoin d'un nettoyage après travaux de rénovation.",
  },
  {
    id: "industriel",
    icon: "🏭",
    title: "Nettoyage Industriel",
    desc: "Entrepôts, usines et grandes surfaces. Nous disposons du matériel professionnel adapté aux grandes surfaces.",
    details: ["Nettoyage en profondeur", "Dégraissage industriel", "Sols techniques", "Zones de production"],
    clients: "Industries, entrepôts, grandes surfaces",
    cta: "Devis nettoyage industriel",
    whatsapp: "Bonjour, je cherche un prestataire pour le nettoyage industriel.",
  },
  {
    id: "vitres",
    icon: "🪟",
    title: "Nettoyage Vitres & Façades",
    desc: "Des surfaces vitrées cristallines pour une image professionnelle irréprochable.",
    details: ["Vitres intérieures et extérieures", "Baies vitrées et verrières", "Façades extérieures", "Équipement sécurisé"],
    clients: "Commerces, bureaux, résidences",
    cta: "Des vitres impeccables",
    whatsapp: "Bonjour, je voudrais un devis pour le nettoyage de vitres.",
  },
  {
    id: "desinfection",
    icon: "🦠",
    title: "Désinfection & Assainissement",
    desc: "Désinfection complète de vos locaux avec des produits certifiés, conformes aux normes d'hygiène les plus strictes.",
    details: ["Désinfection surfaces", "Traitement de l'air", "Produits certifiés", "Protocole COVID-19"],
    clients: "Bureaux, commerces, écoles, hôpitaux",
    cta: "Désinfecter mes locaux",
    whatsapp: "Bonjour, j'ai besoin d'une désinfection complète de mes locaux.",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <h1 className="section-title text-secondary-foreground mb-4">Nos Services de Nettoyage</h1>
          <p className="section-subtitle mx-auto text-muted-foreground">
            Des solutions complètes pour tous vos besoins en propreté. Qualité professionnelle garantie.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-background">
        <div className="container-caar space-y-16">
          {servicesData.map((s, i) => (
            <div
              key={s.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
            >
              <div className="flex-1">
                <span className="text-5xl mb-4 block">{s.icon}</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">{s.title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mb-4">Clients : {s.clients}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary text-sm">
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/237657943097?text=${encodeURIComponent(s.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center">
                  <span className="text-8xl">{s.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl font-heading font-bold mb-4">Un Besoin Spécifique ?</h2>
          <p className="mb-8 max-w-lg mx-auto opacity-90">
            Contactez-nous pour un devis personnalisé adapté à votre situation.
          </p>
          <Link to="/contact" className="btn-secondary">
            Demander un Devis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
