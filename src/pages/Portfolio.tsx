import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, HardHat, Building2, Trash2, Droplets } from "lucide-react";
import caarFacade from "@/assets/caar-facade.jpg";
import caarCleaning from "@/assets/caar-cleaning.jpg";
import caarTeam from "@/assets/caar-team.jpg";
import caarVitres from "@/assets/caar-vitres.jpg";
import caarEnvironment from "@/assets/caar-environment.jpg";
import caarTeam2 from "@/assets/caar-team2.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceChantier from "@/assets/service-chantier.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceDesinfection from "@/assets/service-desinfection.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceResidential from "@/assets/service-residential.jpg";

const categories = ["Tous", "Industriel", "Façades", "Après Chantier", "Hygiène"];

const projects = [
  { id: 1, cat: "Façades", title: "Façade immeuble Douala", desc: "Nettoyage façade par techniciens cordistes", image: caarFacade },
  { id: 2, cat: "Industriel", title: "Entretien bureaux", desc: "Nettoyage professionnel de bureaux", image: caarCleaning },
  { id: 3, cat: "Après Chantier", title: "Immeuble rénové Douala", desc: "Remise en état après rénovation complète", image: serviceChantier },
  { id: 4, cat: "Façades", title: "Vitres commerciales", desc: "Nettoyage vitrine et baies vitrées", image: caarVitres },
  { id: 5, cat: "Hygiène", title: "Gestion déchets urbains", desc: "Ramassage et tri des déchets ménagers", image: caarEnvironment },
  { id: 6, cat: "Industriel", title: "Nettoyage entrepôt", desc: "Nettoyage en profondeur 500m²", image: serviceIndustrial },
  { id: 7, cat: "Après Chantier", title: "Boutique Bonapriso", desc: "Finitions après aménagement", image: serviceRenovation },
  { id: 8, cat: "Hygiène", title: "Désinfection locaux", desc: "Désinfection complète bureaux", image: serviceDesinfection },
  { id: 9, cat: "Industriel", title: "Nettoyage résidentiel", desc: "Entretien complet résidence", image: serviceResidential },
  { id: 10, cat: "Façades", title: "Équipe en action", desc: "Nos techniciens sur le terrain", image: caarTeam },
  { id: 11, cat: "Hygiène", title: "Collecte déchets", desc: "Service de collecte régulier", image: serviceHygiene },
  { id: 12, cat: "Après Chantier", title: "Équipe CAAR", desc: "Intervention post-chantier", image: caarTeam2 },
];

const catIcons: Record<string, typeof Factory> = {
  "Industriel": Factory,
  "Façades": Building2,
  "Après Chantier": HardHat,
  "Hygiène": Trash2,
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
            {filtered.map((p) => {
              const Icon = catIcons[p.cat] || Droplets;
              return (
                <div key={p.id} className="card-service group cursor-pointer overflow-hidden p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-heading font-medium text-primary">{p.cat}</span>
                    </div>
                    <h3 className="font-heading font-bold text-sm mt-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
              );
            })}
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
