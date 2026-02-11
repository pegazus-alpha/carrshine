import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Sparkles, Users, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const services = [
  { icon: "🏢", title: "Bureaux & Commerces", desc: "Entretien quotidien, hebdomadaire ou mensuel de vos locaux professionnels." },
  { icon: "🏠", title: "Nettoyage Résidentiel", desc: "Maisons, appartements et villas impeccables à chaque passage." },
  { icon: "🔨", title: "Après Travaux", desc: "Remise en état complète après construction ou rénovation." },
  { icon: "🏭", title: "Nettoyage Industriel", desc: "Entrepôts, usines et grandes surfaces avec matériel adapté." },
  { icon: "🪟", title: "Vitres & Façades", desc: "Des surfaces vitrées qui brillent, en toute sécurité." },
  { icon: "🦠", title: "Désinfection", desc: "Assainissement complet conforme aux normes d'hygiène." },
];

const strengths = [
  { icon: Users, label: "Équipe formée" },
  { icon: Sparkles, label: "Produits écologiques" },
  { icon: Clock, label: "Disponible 7j/7" },
  { icon: Shield, label: "Tarifs transparents" },
];

const testimonials = [
  {
    name: "Mme Sandrine K.",
    role: "Directrice PME, Douala",
    text: "CAAR assure le nettoyage de nos bureaux depuis 3 mois. Équipe ponctuelle, travail soigné. Je recommande vivement !",
  },
  {
    name: "M. Patrick N.",
    role: "Particulier, Yaoundé",
    text: "Service impeccable ! Ma maison brille après chaque passage. Personnel professionnel et discret.",
  },
  {
    name: "Société XYZ",
    role: "Commerce, Douala",
    text: "Après nos rénovations, CAAR a rendu nos locaux impeccables en un temps record. Excellent rapport qualité-prix.",
  },
];

const stats = [
  { value: "100+", label: "Clients satisfaits" },
  { value: "7j/7", label: "Disponibilité" },
  { value: "<2h", label: "Temps de réponse" },
  { value: "100%", label: "Satisfaction" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Nettoyage professionnel CAAR" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-caar-dark/90 via-caar-dark/70 to-caar-dark/40" />
        </div>
        <div className="container-caar relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full mb-6">
              🎉 -20% sur votre première intervention
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary-foreground leading-tight mb-6">
              Quand la Propreté Devient un <span className="text-primary">Art</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed max-w-xl">
              CAAR — La Propreté Professionnelle à Votre Service. Bureaux, résidences, chantiers : nous rendons chaque espace impeccable au Cameroun.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-base">
                Nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-6">
        <div className="container-caar grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground">{s.value}</p>
              <p className="text-sm text-primary-foreground/80 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Nos Services</h2>
            <p className="section-subtitle mx-auto">Des solutions de nettoyage adaptées à tous vos besoins, avec une qualité irréprochable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-service group">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-muted">
        <div className="container-caar">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Pourquoi Choisir CAAR ?</h2>
            <p className="section-subtitle mx-auto">Votre satisfaction est notre priorité absolue.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-heading font-semibold text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Devis gratuit sous 2h",
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Ce Que Disent Nos Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-service">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Votre Espace Mérite le <span className="text-primary">Meilleur Nettoyage</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Obtenez une estimation gratuite en 2 minutes et bénéficiez de -20% sur votre première intervention.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Obtenir mon devis gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
