import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, HardHat, Building2, Trash2, Home, Droplets, ClipboardCheck, Search, Ruler, AlertTriangle, FileText, Handshake, ShieldCheck } from "lucide-react";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceChantier from "@/assets/service-chantier.jpg";
import caarFacade from "@/assets/caar-facade.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceDesinfection from "@/assets/service-desinfection.jpg";
import facadeAvant from "@/assets/facade-avant.jpg";
import facadeApres from "@/assets/facade-apres.jpg";
import FadeIn from "@/components/FadeIn";

const servicesData = [
  {
    id: "industriel",
    icon: Factory,
    title: "Nettoyage Industriel",
    desc: "Nous intervenons dans les industries agroalimentaires, pharmaceutiques, pétrolières ainsi que dans le transport maritime pour le traitement des eaux usées. Grâce à notre matériel professionnel de pointe, nous garantissons un nettoyage en profondeur adapté aux environnements industriels les plus exigeants.",
    details: ["Industries agroalimentaires et pharmaceutiques", "Industrie pétrolière", "Transport maritime et traitement des eaux usées", "Dégraissage et nettoyage en profondeur"],
    clients: "Industries, usines, entrepôts",
    cta: "Devis nettoyage industriel",
    whatsapp: "Bonjour, je cherche un prestataire pour le nettoyage industriel.",
    image: serviceIndustrial,
  },
  {
    id: "apres-chantier",
    icon: HardHat,
    title: "Nettoyage Après Chantier",
    desc: "Après construction ou rénovation, votre espace mérite une finition impeccable. Nous assurons la remise en état complète : enlèvement de poussière et débris, nettoyage des sols, surfaces, vitres et menuiseries pour un résultat irréprochable.",
    details: ["Enlèvement poussière et débris de chantier", "Nettoyage sols et surfaces en profondeur", "Vitres et menuiseries", "Finitions soignées prêtes à l'emploi"],
    clients: "Constructeurs, rénovateurs, particuliers",
    cta: "Nettoyer après mes travaux",
    whatsapp: "Bonjour, j'ai besoin d'un nettoyage après travaux de rénovation.",
    image: serviceChantier,
  },
  {
    id: "facades",
    icon: Building2,
    title: "Nettoyage des Façades",
    desc: "Afin d'éviter la détérioration de vos bâtiments due aux intempéries, nous avons à nos services des cordistes professionnels certifiés IRATA International (Rope Access Technician). De plus, nos cordistes possèdent des compétences en techniques de surface et peinture pour un résultat complet.",
    details: ["Cordistes certifiés IRATA International", "Façades d'immeubles et bâtiments", "Compétences en peinture et techniques de surface", "Baies vitrées et verrières en hauteur"],
    clients: "Immeubles, commerces, bureaux",
    cta: "Des façades impeccables",
    whatsapp: "Bonjour, je voudrais un devis pour le nettoyage de façades.",
    image: caarFacade,
  },
  {
    id: "hygiene",
    icon: Trash2,
    title: "Hygiène & Salubrité",
    desc: "Ce service permet d'éviter l'accumulation des déchets sur la voie publique, souvent cause de maladies primaires, secondaires et de troubles respiratoires. Notre intervention vise à redonner une image sérieuse à notre environnement et à envisager un développement transparent et durable.",
    details: ["Ramassage régulier des déchets ménagers", "Gestion des déchets industriels", "Dépôt de poubelles et collecte planifiée", "Lutte contre les nuisances et maladies liées aux déchets"],
    clients: "Quartiers, communes, entreprises",
    cta: "Gérer mes déchets",
    whatsapp: "Bonjour, j'aimerais des informations sur vos services d'hygiène et salubrité.",
    image: serviceHygiene,
  },
  {
    id: "renovation",
    icon: Home,
    title: "Rénovation & Contre-Expertise",
    desc: "Nous proposons un service de rénovation et de contre-expertise lors de la construction d'infrastructures publiques et privées. Notre équipe qualifiée assure l'inspection, le contrôle qualité et la rénovation de vos bâtiments avec un rapport détaillé.",
    details: ["Contre-expertise de construction", "Rénovation de bâtiments publics et privés", "Déménagement et aménagement", "Inspection et rapport détaillé"],
    clients: "Promoteurs, institutions, particuliers",
    cta: "Demander une expertise",
    whatsapp: "Bonjour, j'ai besoin d'un service de rénovation et contre-expertise.",
    image: serviceRenovation,
  },
  {
    id: "desinfection",
    icon: Droplets,
    title: "Désinfection & Assainissement",
    desc: "Nous assurons la désinfection complète de vos locaux avec des produits certifiés, conformes aux normes d'hygiène les plus strictes. Notre protocole sanitaire rigoureux garantit un environnement sain et sécurisé pour tous les occupants.",
    details: ["Désinfection des surfaces et points de contact", "Traitement et purification de l'air", "Produits certifiés et écologiques", "Protocole sanitaire rigoureux"],
    clients: "Bureaux, commerces, écoles, hôpitaux",
    cta: "Désinfecter mes locaux",
    whatsapp: "Bonjour, j'ai besoin d'une désinfection complète de mes locaux.",
    image: serviceDesinfection,
  },
];

const projectSteps = [
  { icon: ClipboardCheck, title: "Validation de l'offre", desc: "Après acceptation de notre proposition commerciale" },
  { icon: Search, title: "Dépêchement d'un agent", desc: "Envoi d'un technicien de surface ou spécialiste selon la demande" },
  { icon: Ruler, title: "Analyse des tâches", desc: "Évaluation détaillée des travaux à réaliser" },
  { icon: Ruler, title: "Prise de dimensions", desc: "Mesure des surfaces et calcul du nombre de zones à traiter" },
  { icon: AlertTriangle, title: "Évaluation des risques", desc: "Identification des risques et mise en place des mesures de sécurité" },
  { icon: FileText, title: "Facturation / Devis", desc: "Établissement des factures et devis détaillés" },
  { icon: Handshake, title: "Mise en service", desc: "Conclusion et démarrage des travaux dans un bref délai" },
  { icon: ShieldCheck, title: "Vérification & conseil", desc: "Contrôle qualité et conseils après prestation de service" },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <FadeIn>
            <h1 className="section-title text-secondary-foreground mb-4">Nos Services</h1>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Des solutions complètes pour tous vos besoins en propreté et maintenance. Qualité professionnelle garantie.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-background">
        <div className="container-caar space-y-16">
          {servicesData.map((s, i) => (
            <FadeIn key={s.id}>
              <div
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
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
                    className="rounded-xl w-full object-cover aspect-[4/3] shadow-md animate-float hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Avant/Après Façades */}
      <section className="section-padding bg-muted">
        <div className="container-caar">
          <FadeIn>
            <h2 className="section-title text-center mb-3">Réalisation Façades — Avant / Après</h2>
            <p className="section-subtitle mx-auto text-center mb-10">Découvrez la transformation de nos interventions sur les façades.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <img src={facadeAvant} alt="Façade avant nettoyage" className="rounded-xl w-full object-cover aspect-[4/3] shadow-md animate-float" loading="lazy" />
                <p className="font-heading font-bold mt-4 text-destructive">Avant</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="text-center">
                <img src={facadeApres} alt="Façade après nettoyage" className="rounded-xl w-full object-cover aspect-[4/3] shadow-md animate-float" loading="lazy" />
                <p className="font-heading font-bold mt-4 text-primary">Après</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Étapes de réalisation */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <FadeIn>
            <h2 className="section-title text-center mb-3">Comment Nous Travaillons</h2>
            <p className="section-subtitle mx-auto text-center mb-12">Les étapes de réalisation d'un projet chez CAAR.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.06}>
                <div className="card-service text-center h-full group hover:border-primary/50">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-heading font-bold text-primary mb-2 block">Étape {i + 1}</span>
                  <h3 className="font-heading font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="section-padding bg-primary/90 text-primary-foreground text-center">
          <div className="container-caar">
            <h2 className="text-3xl font-heading font-bold mb-4">Un Besoin Spécifique ?</h2>
            <p className="mb-8 max-w-lg mx-auto opacity-90">
              Contactez-nous pour un devis personnalisé adapté à votre situation. Estimation sous 24h après inspection.
            </p>
            <Link to="/contact" className="bg-secondary text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2">
              Demander un Devis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Services;
