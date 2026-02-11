import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Leaf, Shield } from "lucide-react";
import logoCaar from "@/assets/logo-caar.png";
import caarTeam from "@/assets/caar-team.jpg";
import caarTeam2 from "@/assets/caar-team2.jpg";

const values = [
  { icon: Target, title: "Professionnalisme", desc: "Une équipe formée aux techniques modernes de nettoyage et maintenance." },
  { icon: Heart, title: "Fiabilité", desc: "Ponctualité et régularité à chaque intervention." },
  { icon: Leaf, title: "Écologie", desc: "Produits respectueux de l'environnement et de votre santé." },
  { icon: Shield, title: "Sécurité", desc: "Équipements certifiés et techniciens cordistes qualifiés." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <h1 className="section-title text-secondary-foreground mb-4">À Propos de CAAR</h1>
          <p className="section-subtitle mx-auto text-muted-foreground">
            Redonner Vie à Vos Infrastructures
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-caar max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <img src={caarTeam} alt="Équipe CAAR" className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-bold mb-4">Notre Histoire</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CAAR est née de la vision de notre fondateur, <strong>Gilbert DIMO</strong>, après plusieurs années d'observation des défis environnementaux au Cameroun. Sa conviction : faire du Cameroun et de plusieurs pays d'Afrique des environnements plus sains et plus propres.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dès 2020, l'idée germe : créer une compagnie capable de déployer des agents pour le ramassage des déchets ménagers, afin d'éviter leur accumulation dans les carrefours et les quartiers — source de nuisances et de maladies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gilbert constate également que nos grandes villes, face aux intempéries — pluies et vents poussiéreux — voient leurs infrastructures se salir et se détériorer, donnant une image de sous-développement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                C'est ainsi qu'en <strong>juin 2025</strong>, il lance officiellement la compagnie <strong>CAAR</strong>, avec la vision ambitieuse de rendre le Cameroun pays propre.
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
            "Redonner vie à vos infrastructures. Chaque intervention est une promesse de qualité, de fiabilité et d'un Cameroun plus propre."
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="section-padding bg-background">
        <div className="container-caar max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-bold mb-4">Notre Équipe</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notre équipe formée et équipée intervient avec professionnalisme et discrétion sur tous types de chantiers : nettoyage industriel, façades en hauteur avec des techniciens cordistes certifiés, gestion des déchets et rénovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque membre de CAAR partage la même passion : offrir des espaces propres et sains pour le bien-être de tous.
              </p>
            </div>
            <div className="flex-1">
              <img src={caarTeam2} alt="Équipe CAAR en action" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
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
      <section className="section-padding bg-primary/90 text-primary-foreground text-center">
        <div className="container-caar">
          <h2 className="text-3xl font-heading font-bold mb-4">Zone d'Intervention</h2>
          <p className="max-w-xl mx-auto opacity-90 mb-6">
            Nous intervenons à Douala, Kribi, Yaoundé et dans les principales villes du Cameroun. Déplacements possibles selon les projets.
          </p>
          <Link to="/contact" className="bg-secondary text-secondary-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2">
            Nous contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
