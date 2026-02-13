import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import facadeAvant from "@/assets/facade-avant.jpg";
import facadeApres from "@/assets/facade-apres.jpg";
import FadeIn from "@/components/FadeIn";

type Category = "all" | "facades";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "facades", label: "Façades" },
];

const realisations = [
  {
    id: 1,
    category: "facades" as Category,
    title: "Nettoyage façade immeuble",
    avant: facadeAvant,
    apres: facadeApres,
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? realisations : realisations.filter((r) => r.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <FadeIn>
            <h1 className="section-title text-secondary-foreground mb-4">Nos Réalisations</h1>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Découvrez la transformation de nos interventions à travers nos réalisations avant / après.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background pt-10 pb-4">
        <div className="container-caar flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-bold transition-colors duration-200 ${
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Réalisations */}
      <section className="section-padding bg-background">
        <div className="container-caar space-y-16">
          {filtered.map((r) => (
            <FadeIn key={r.id}>
              <h2 className="section-title text-center mb-3">{r.title} — Avant / Après</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <img src={r.avant} alt="Avant" className="rounded-xl w-full object-cover aspect-[4/3] shadow-md animate-float" loading="lazy" />
                  <p className="font-heading font-bold mt-4 text-destructive">Avant</p>
                </div>
                <div className="text-center">
                  <img src={r.apres} alt="Après" className="rounded-xl w-full object-cover aspect-[4/3] shadow-md animate-float" loading="lazy" />
                  <p className="font-heading font-bold mt-4 text-primary">Après</p>
                </div>
              </div>
            </FadeIn>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucune réalisation dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
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
      </FadeIn>
    </>
  );
};

export default Portfolio;
