import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Leaf, Shield } from "lucide-react";
import logoCaar from "@/assets/logo-caar.png";

const values = [
  { icon: Target, title: "Professionnalisme", desc: "Une équipe formée aux techniques modernes de nettoyage." },
  { icon: Heart, title: "Fiabilité", desc: "Ponctualité et régularité à chaque intervention." },
  { icon: Leaf, title: "Écologie", desc: "Produits respectueux de l'environnement et de votre santé." },
  { icon: Shield, title: "Sécurité", desc: "Assurance responsabilité civile et équipements certifiés." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <h1 className="section-title text-secondary-foreground mb-4">À Propos de CAAR</h1>
          <p className="section-subtitle mx-auto text-muted-foreground">
            La Propreté Professionnelle à Votre Service
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-caar max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <img src={logoCaar} alt="CAAR" className="w-40 mx-auto md:mx-0" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-bold mb-4">Notre Histoire</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CAAR est née de la conviction qu'un espace propre est essentiel au bien-être et à la productivité. Basée au Cameroun, notre entreprise s'engage à offrir des services de nettoyage de qualité supérieure aux particuliers, entreprises et institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre équipe formée utilise des produits écologiques et du matériel professionnel moderne pour garantir des résultats impeccables, dans le respect de votre santé et de l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-muted">
        <div className="container-caar text-center max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-4">Notre Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Offrir des espaces propres et sains pour votre bien-être. Chaque intervention est une promesse de qualité, de fiabilité et de satisfaction."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-caar">
          <h2 className="text-2xl font-heading font-bold mb-10 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-service text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl font-heading font-bold mb-4">Zone d'Intervention</h2>
          <p className="max-w-xl mx-auto opacity-90 mb-6">
            Nous intervenons à Douala, Yaoundé et dans les principales villes du Cameroun. Déplacements possibles selon les projets.
          </p>
          <Link to="/contact" className="btn-secondary">
            Nous contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
