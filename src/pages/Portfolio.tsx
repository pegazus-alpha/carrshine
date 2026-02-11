import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = ["Tous", "Résidentiel", "Bureaux", "Après Travaux", "Vitres"];

const projects = [
  { id: 1, cat: "Bureaux", title: "Bureaux PME Douala", desc: "Nettoyage complet bureaux 200m²" },
  { id: 2, cat: "Résidentiel", title: "Villa Bastos Yaoundé", desc: "Nettoyage en profondeur villa 5 pièces" },
  { id: 3, cat: "Après Travaux", title: "Immeuble rénové Douala", desc: "Remise en état après rénovation complète" },
  { id: 4, cat: "Vitres", title: "Commerce Akwa", desc: "Nettoyage vitrine et baies vitrées" },
  { id: 5, cat: "Bureaux", title: "Cabinet médical", desc: "Désinfection et nettoyage quotidien" },
  { id: 6, cat: "Résidentiel", title: "Appartement F4 Yaoundé", desc: "Nettoyage de printemps complet" },
  { id: 7, cat: "Après Travaux", title: "Boutique Bonapriso", desc: "Finitions après aménagement" },
  { id: 8, cat: "Vitres", title: "Immeuble de bureaux", desc: "Nettoyage façade vitrée 4 étages" },
  { id: 9, cat: "Résidentiel", title: "Maison Bonamoussadi", desc: "Entretien hebdomadaire résidence" },
  { id: 10, cat: "Bureaux", title: "Open space startup", desc: "Nettoyage et désinfection 150m²" },
  { id: 11, cat: "Après Travaux", title: "Restaurant rénové", desc: "Nettoyage complet avant ouverture" },
  { id: 12, cat: "Vitres", title: "Centre commercial", desc: "Entretien mensuel vitrines" },
];

const emojis: Record<string, string> = {
  "Résidentiel": "🏠",
  "Bureaux": "🏢",
  "Après Travaux": "🔨",
  "Vitres": "🪟",
};

const Portfolio = () => {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <h1 className="section-title text-secondary-foreground mb-4">Nos Réalisations</h1>
          <p className="section-subtitle mx-auto text-muted-foreground">
            Découvrez nos interventions. Chaque espace traité avec le plus grand soin.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <div key={p.id} className="card-service group cursor-pointer">
                <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center mb-4">
                  <span className="text-6xl opacity-60 group-hover:opacity-100 transition-opacity">
                    {emojis[p.cat] || "✨"}
                  </span>
                </div>
                <span className="text-xs font-heading font-medium text-primary">{p.cat}</span>
                <h3 className="font-heading font-bold text-sm mt-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Votre espace sera le prochain à <span className="text-primary">briller</span>
          </h2>
          <Link to="/contact" className="btn-primary mt-4">
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
