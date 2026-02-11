import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, HardHat, Building2, Trash2, Home, Droplets } from "lucide-react";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceChantier from "@/assets/service-chantier.jpg";
import caarFacade from "@/assets/caar-facade.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceDesinfection from "@/assets/service-desinfection.jpg";

const servicesData = [
  {
    id: "industriel",
    icon: Factory,
    title: "Nettoyage Industriel",
    desc: "Industries agroalimentaires, pharmaceutiques, pétrolières et transport maritime. Nous disposons du matériel professionnel adapté aux environnements industriels exigeants.",
    details: ["Industries agroalimentaires et pharmaceutiques", "Industrie pétrolière", "Transport maritime et eaux usées", "Dégraissage et nettoyage en profondeur"],
    clients: "Industries, usines, entrepôts",
    cta: "Devis nettoyage industriel",
    whatsapp: "Bonjour, je cherche un prestataire pour le nettoyage industriel.",
    image: serviceIndustrial,
  },
  {
    id: "apres-chantier",
    icon: HardHat,
    title: "Nettoyage Après Chantier",
    desc: "Remise en état complète après construction ou rénovation. Votre espace neuf mérite une finition impeccable.",
    details: ["Enlèvement poussière et débris", "Nettoyage sols et surfaces", "Vitres et menuiseries", "Finitions soignées"],
    clients: "Constructeurs, rénovateurs, particuliers",
    cta: "Nettoyer après mes travaux",
    whatsapp: "Bonjour, j'ai besoin d'un nettoyage après travaux de rénovation.",
    image: serviceChantier,
  },
  {
    id: "facades",
    icon: Building2,
    title: "Nettoyage des Façades",
    desc: "Techniciens cordistes certifiés (rope access) pour le nettoyage de vos façades, vitrages et infrastructures en hauteur.",
    details: ["Techniciens cordistes certifiés", "Façades d'immeubles et bâtiments", "Baies vitrées et verrières", "Équipement sécurisé en hauteur"],
    clients: "Immeubles, commerces, bureaux",
    cta: "Des façades impeccables",
    whatsapp: "Bonjour, je voudrais un devis pour le nettoyage de façades.",
    image: caarFacade,
  },
  {
    id: "hygiene",
    icon: Trash2,
    title: "Hygiène & Salubrité",
    desc: "Gestion des déchets ménagers et industriels. Déploiement d'agents pour le ramassage régulier afin d'assurer un environnement sain.",
    details: ["Ramassage des déchets ménagers", "Gestion des déchets industriels", "Dépôt de poubelles et collecte 2x/semaine", "Lutte contre l'accumulation des déchets"],
    clients: "Quartiers, communes, entreprises",
    cta: "Gérer mes déchets",
    whatsapp: "Bonjour, j'aimerais des informations sur vos services d'hygiène et salubrité.",
    image: serviceHygiene,
  },
  {
    id: "renovation",
    icon: Home,
    title: "Rénovation & Contre-Expertise",
    desc: "Service de rénovation et contre-expertise lors de la construction d'infrastructures publiques et privées.",
    details: ["Contre-expertise de construction", "Rénovation de bâtiments", "Déménagement et aménagement", "Inspection et rapport détaillé"],
    clients: "Promoteurs, institutions, particuliers",
    cta: "Demander une expertise",
    whatsapp: "Bonjour, j'ai besoin d'un service de rénovation et contre-expertise.",
    image: serviceRenovation,
  },
  {
    id: "desinfection",
    icon: Droplets,
    title: "Désinfection & Assainissement",
    desc: "Désinfection complète de vos locaux avec des produits certifiés, conformes aux normes d'hygiène les plus strictes.",
    details: ["Désinfection surfaces", "Traitement de l'air", "Produits certifiés", "Protocole sanitaire"],
    clients: "Bureaux, commerces, écoles, hôpitaux",
    cta: "Désinfecter mes locaux",
    whatsapp: "Bonjour, j'ai besoin d'une désinfection complète de mes locaux.",
    image: serviceDesinfection,
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <h1 className="section-title text-secondary-foreground mb-4">Nos Services</h1>
          <p className="section-subtitle mx-auto text-muted-foreground">
            Des solutions complètes pour tous vos besoins en propreté et maintenance. Qualité professionnelle garantie.
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
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
                <img
                  src={s.image}
                  alt={s.title}
                  className="rounded-xl w-full object-cover aspect-[4/3] shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/90 text-primary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl font-heading font-bold mb-4">Un Besoin Spécifique ?</h2>
          <p className="mb-8 max-w-lg mx-auto opacity-90">
            Contactez-nous pour un devis personnalisé adapté à votre situation.
          </p>
          <Link to="/contact" className="bg-secondary text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2">
            Demander un Devis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
