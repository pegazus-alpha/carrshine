import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const residentialPrices = [
  { type: "Studio / F1", price: "15 000 FCFA", note: "à partir de" },
  { type: "F2 / F3", price: "25 000 FCFA", note: "à partir de" },
  { type: "F4 / F5", price: "40 000 FCFA", note: "à partir de" },
  { type: "Villa", price: "Sur devis", note: "selon surface" },
];

const plans = [
  {
    name: "Basic",
    freq: "1x / semaine",
    price: "À partir de 60 000 FCFA/mois",
    features: ["Nettoyage complet hebdomadaire", "Sols et surfaces", "Sanitaires", "Poubelles"],
    popular: false,
  },
  {
    name: "Premium",
    freq: "2x / semaine",
    price: "À partir de 100 000 FCFA/mois",
    features: ["Tout le forfait Basic", "Vitres intérieures", "Désinfection sanitaires", "Rapport d'intervention"],
    popular: true,
  },
  {
    name: "Excellence",
    freq: "Quotidien",
    price: "Sur devis personnalisé",
    features: ["Tout le forfait Premium", "Intervention quotidienne", "Gestionnaire dédié", "Fournitures incluses"],
    popular: false,
  },
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
              Des tarifs transparents et compétitifs. Tous nos prix incluent produits et équipements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Residential prices */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Nettoyage Résidentiel — Tarifs Indicatifs</h2>
            <div className="max-w-2xl mx-auto overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th className="text-left px-6 py-3 font-heading font-semibold">Type de logement</th>
                    <th className="text-right px-6 py-3 font-heading font-semibold">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  {residentialPrices.map((r) => (
                    <tr key={r.type} className="border-t border-border">
                      <td className="px-6 py-4">{r.type}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-heading font-bold text-primary">{r.price}</span>
                        <span className="block text-xs text-muted-foreground">{r.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="section-padding bg-muted">
        <div className="container-caar">
          <FadeIn>
            <h2 className="text-2xl font-heading font-bold mb-3 text-center">Forfaits Mensuels</h2>
            <p className="text-center text-muted-foreground mb-10">Idéal pour les entreprises et professionnels.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div
                  className={`bg-card rounded-xl p-6 border-2 transition-all hover:-translate-y-1 h-full flex flex-col ${
                    p.popular ? "border-primary shadow-lg relative" : "border-border"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
                      Populaire
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-xl mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{p.freq}</p>
                  <p className="font-heading font-bold text-lg text-primary mb-6">{p.price}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={p.popular ? "btn-primary w-full justify-center text-sm" : "btn-outline w-full justify-center text-sm"}
                  >
                    Choisir ce forfait
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <FadeIn>
        <section className="section-padding bg-background text-center">
          <div className="container-caar max-w-2xl">
            <p className="text-muted-foreground mb-6">
              Tous nos tarifs incluent les produits et équipements. Devis personnalisé gratuit et sans engagement.
            </p>
            <Link to="/contact" className="btn-primary">
              Obtenir mon devis personnalisé <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Pricing;
