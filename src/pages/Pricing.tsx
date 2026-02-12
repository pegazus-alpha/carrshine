import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ClipboardCheck, Search, Ruler, AlertTriangle, FileText, Handshake, ShieldCheck, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Nettoyage Industriel",
    desc: "Industries agroalimentaires, pharmaceutiques, pétrolières et transport maritime.",
    includes: ["Dégraissage en profondeur", "Traitement des eaux usées", "Matériel professionnel adapté", "Protocole sécurisé"],
  },
  {
    title: "Nettoyage Après Chantier",
    desc: "Remise en état complète après construction ou rénovation.",
    includes: ["Enlèvement poussière et débris", "Nettoyage sols et surfaces", "Vitres et menuiseries", "Finitions impeccables"],
  },
  {
    title: "Nettoyage des Façades",
    desc: "Cordistes certifiés IRATA International pour vos façades et infrastructures.",
    includes: ["Techniciens certifiés IRATA", "Peinture et techniques de surface", "Baies vitrées en hauteur", "Équipement sécurisé"],
  },
  {
    title: "Hygiène & Salubrité",
    desc: "Gestion des déchets ménagers et industriels.",
    includes: ["Ramassage régulier", "Collecte planifiée", "Tri des déchets", "Lutte contre les nuisances"],
  },
  {
    title: "Rénovation & Contre-Expertise",
    desc: "Contre-expertise et rénovation d'infrastructures publiques et privées.",
    includes: ["Inspection détaillée", "Rapport de contre-expertise", "Rénovation de bâtiments", "Conseil post-intervention"],
  },
  {
    title: "Désinfection & Assainissement",
    desc: "Désinfection complète avec produits certifiés.",
    includes: ["Surfaces et points de contact", "Traitement de l'air", "Produits écologiques", "Protocole sanitaire"],
  },
];

const projectSteps = [
  { icon: ClipboardCheck, title: "Validation de l'offre", desc: "Acceptation de notre proposition commerciale" },
  { icon: Search, title: "Dépêchement d'un agent", desc: "Envoi d'un technicien spécialisé sur site" },
  { icon: Ruler, title: "Analyse & dimensions", desc: "Évaluation des tâches, mesure des surfaces" },
  { icon: AlertTriangle, title: "Évaluation des risques", desc: "Mise en place des mesures de sécurité" },
  { icon: FileText, title: "Facturation / Devis", desc: "Établissement du devis détaillé" },
  { icon: Handshake, title: "Mise en service", desc: "Démarrage des travaux dans un bref délai" },
  { icon: ShieldCheck, title: "Vérification & conseil", desc: "Contrôle qualité après prestation" },
];

const Pricing = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <FadeIn>
            <h1 className="section-title text-secondary-foreground mb-4">Nos Tarifs</h1>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Tous nos tarifs sont établis uniquement sur devis, après inspection et évaluation de vos locaux sous 24h.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-3 text-center">Comment Obtenir Votre Devis ?</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Chez CAAR, nous estimons chaque projet individuellement. Nos prix ne peuvent être donnés de manière basique car nous observons et évaluons les lieux avant de proposer un tarif juste et adapté.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contactez-nous", desc: "Par WhatsApp, téléphone ou formulaire en ligne." },
              { step: "2", title: "Inspection sur site", desc: "Notre agent se déplace pour évaluer vos besoins." },
              { step: "3", title: "Devis sous 24h", desc: "Vous recevez un devis détaillé et personnalisé." },
              { step: "4", title: "Intervention", desc: "Après validation, nous intervenons dans un bref délai." },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="card-service text-center h-full group hover:border-primary/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="font-heading font-bold text-primary text-lg">{s.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services & what's included */}
      <section className="section-padding bg-muted">
        <div className="container-caar">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-3 text-center">Nos Prestations</h2>
            <p className="text-center text-muted-foreground mb-10">Chaque service inclut produits et équipements professionnels.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-6 border border-border h-full flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-lg group">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <p className="font-heading font-bold text-primary text-lg mb-4">Sur devis</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.includes.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-outline w-full justify-center text-sm">
                    Demander un devis
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-3 text-center">Étapes de Réalisation</h2>
            <p className="text-center text-muted-foreground mb-10">Notre processus de travail rigoureux garantit un résultat impeccable.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {projectSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.06}>
                <div className="card-service text-center h-full group hover:border-primary/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-heading font-bold text-primary block mb-1">Étape {i + 1}</span>
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
          <div className="container-caar max-w-2xl">
            <h2 className="text-3xl font-heading font-bold mb-4">Obtenez Votre Devis Gratuit</h2>
            <p className="opacity-90 mb-8">
              Estimation personnalisée sous 24h après inspection. Devis gratuit et sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-secondary text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2">
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/237657943097?text=Bonjour%2C%20je%20voudrais%20conna%C3%AEtre%20vos%20tarifs."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/80 text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Pricing;