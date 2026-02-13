import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Sparkles, Users, CheckCircle, Factory, Home, HardHat, Building2, Droplets, Trash2 } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import caarTeam from "@/assets/caar-team.jpg";
import FadeIn from "@/components/FadeIn";

const services = [
  { icon: Factory, title: "Nettoyage Industriel", desc: "Industries agroalimentaires, pharmaceutiques, pétrolières et transport maritime." },
  { icon: HardHat, title: "Nettoyage Après Chantier", desc: "Remise en état complète après construction ou rénovation." },
  { icon: Building2, title: "Nettoyage Façades", desc: "Techniciens cordistes certifiés pour vos façades et infrastructures." },
  { icon: Trash2, title: "Hygiène & Salubrité", desc: "Gestion des déchets ménagers et industriels pour un environnement sain." },
  { icon: Home, title: "Rénovation & Expertise", desc: "Contre-expertise lors de la construction d'infrastructures publiques et privées." },
  { icon: Droplets, title: "Désinfection", desc: "Assainissement complet conforme aux normes d'hygiène les plus strictes." },
];

const strengths = [
  { icon: Users, label: "Équipe formée" },
  { icon: Sparkles, label: "Produits écologiques" },
  { icon: Clock, label: "Disponible 7j/7" },
  { icon: Shield, label: "Tarifs transparents" },
];

const stats = [
  { value: "7j/7", label: "Disponibilité" },
  { value: "<24h", label: "Temps de réponse" },
  { value: "100%", label: "Satisfaction" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Nettoyage professionnel CAAR" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </div>
        <div className="container-caar relative z-10 py-20">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full mb-6">
                Nettoyage Professionnel au Cameroun
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary-foreground leading-tight mb-6">
                Redonner Vie à Vos <span className="text-primary">Infrastructures</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed max-w-xl">
                CAAR — La Propreté Professionnelle à Votre Service. Industries, façades, chantiers : nous rendons chaque espace impeccable au Cameroun.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary text-base">
                  Demander un devis gratuit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-outline border-secondary-foreground/50 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-base">
                  Nos Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <FadeIn>
        <section className="bg-primary/90 py-6">
          <div className="container-caar grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/80 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="section-title mb-3">Nos Services</h2>
              <p className="section-subtitle mx-auto">Des solutions de nettoyage adaptées à tous vos besoins, avec une qualité irréprochable.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="card-service group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-10">
              <Link to="/services" className="btn-primary">
                Tous nos services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-muted">
        <div className="container-caar">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="section-title mb-3">Pourquoi Choisir CAAR ?</h2>
              <p className="section-subtitle mx-auto">Votre satisfaction est notre priorité absolue.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-sm">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "Devis gratuit sous 24h après inspection",
                "Produits écologiques certifiés",
                "Équipe formée et équipée",
                "Tarifs transparents",
                "Satisfaction garantie",
                "Intervention rapide",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team photo */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <img src={caarTeam} alt="Équipe CAAR" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3] animate-float" loading="lazy" />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h2 className="section-title mb-4">Une Équipe Dévouée</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos agents formés et équipés interviennent avec professionnalisme et discrétion. Chaque membre de l'équipe CAAR partage la même vision : faire du Cameroun un pays propre.
                </p>
                <Link to="/a-propos" className="btn-outline text-sm">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="section-padding bg-secondary text-secondary-foreground text-center">
          <div className="container-caar">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Votre Espace Mérite le <span className="text-primary">Meilleur Nettoyage</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Obtenez une estimation gratuite sous 24h après inspection. Qualité et professionnalisme garantis.
            </p>
            <Link to="/contact" className="btn-primary text-lg">
              Obtenir mon devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Index;
