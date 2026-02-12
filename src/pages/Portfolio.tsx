import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import facadeAvant from "@/assets/facade-avant.jpg";
import facadeApres from "@/assets/facade-apres.jpg";
import FadeIn from "@/components/FadeIn";

const Portfolio = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <FadeIn>
            <h1 className="section-title text-secondary-foreground mb-4">Nos Réalisations</h1>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Découvrez la transformation de nos interventions sur les façades.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Avant/Après Façades */}
      <section className="section-padding bg-background">
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
