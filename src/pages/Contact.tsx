import { useState, FormEvent } from "react";
import { Phone, MapPin, Clock, Facebook, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const serviceOptions = [
  "Nettoyage industriel",
  "Nettoyage après chantier",
  "Nettoyage des façades (cordiste)",
  "Hygiène et salubrité / Gestion des déchets",
  "Rénovation et contre-expertise",
  "Désinfection et assainissement",
  "Autre",
];

const frequencyOptions = [
  "Intervention unique (ponctuelle)",
  "Hebdomadaire (1 fois/semaine)",
  "Bi-hebdomadaire (2 fois/semaine)",
  "Quotidien (du lundi au vendredi)",
  "Contrat mensuel personnalisé",
];

const budgetOptions = [
  "Moins de 20 000 FCFA",
  "20 000 - 50 000 FCFA",
  "50 000 - 100 000 FCFA",
  "100 000 - 200 000 FCFA",
  "Plus de 200 000 FCFA",
  "Forfait mensuel (à discuter)",
  "À définir selon devis",
];

const urgencyOptions = [
  "Urgent (dans les 24-48h)",
  "Cette semaine",
  "Semaine prochaine",
  "Dans le mois",
  "Planification long terme",
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    surface: "",
    typeBien: "",
    pieces: "",
    localisation: "",
    frequency: "",
    budget: "",
    urgency: "",
    nom: "",
    telephone: "",
    whatsapp: "",
    email: "",
    adresse: "",
    description: "",
  });

  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  const totalSteps = 4;

  const canNext = () => {
    if (step === 1) return !!form.service;
    if (step === 2) return !!form.frequency;
    if (step === 3) return !!form.budget;
    if (step === 4) return !!form.nom && !!form.telephone;
    return false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.budget === "Moins de 20 000 FCFA") {
      toast.info("Pour les petites prestations, contactez-nous directement sur WhatsApp : +237 6 57 94 30 97");
      return;
    }

    setSubmitted(true);
    toast.success("Devis en préparation ! Vous serez contacté dans les 24 heures après inspection.");
  };

  if (submitted) {
    return (
      <>
        <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
          <div className="container-caar text-center">
            <h1 className="section-title text-secondary-foreground">Merci !</h1>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-caar max-w-lg text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">Demande envoyée avec succès !</h2>
            <p className="text-muted-foreground mb-6">
              ✅ Devis en préparation ! Vous serez contacté dans les 24 heures après inspection. Merci de faire confiance à CAAR.
            </p>
            {form.urgency === "Urgent (dans les 24-48h)" && (
              <p className="text-sm text-primary font-semibold mb-4">
                ⚡ Intervention rapide — Nous vous rappelons dans l'heure
              </p>
            )}
            <a
              href="https://wa.me/237657943097?text=Bonjour%2C%20je%20viens%20de%20soumettre%20une%20demande%20de%20devis."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Confirmer sur WhatsApp
            </a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pt-28 md:pt-32">
        <div className="container-caar text-center">
          <FadeIn>
            <h1 className="section-title text-secondary-foreground mb-4">Demander un Devis</h1>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Réponse sous 24h après inspection. Devis gratuit et sans engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-caar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <FadeIn className="lg:col-span-2">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-heading font-bold ${
                        step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 4 && <div className={`flex-1 h-1 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Service + Details */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="font-heading font-bold text-lg">Type de service</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((s) => (
                        <label
                          key={s}
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                            form.service === s ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={s}
                            checked={form.service === s}
                            onChange={(e) => update("service", e.target.value)}
                            className="accent-caar-yellow"
                          />
                          <span className="text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Surface (m²)</label>
                        <input
                          type="number"
                          placeholder="ex: 80"
                          value={form.surface}
                          onChange={(e) => update("surface", e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Localisation</label>
                        <select
                          value={form.localisation}
                          onChange={(e) => update("localisation", e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Sélectionner</option>
                          <option>Douala</option>
                          <option>Kribi</option>
                          <option>Yaoundé</option>
                          <option>Autre ville du Cameroun</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Frequency */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="font-heading font-bold text-lg">Fréquence souhaitée</h3>
                    <div className="space-y-3">
                      {frequencyOptions.map((f) => (
                        <label
                          key={f}
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                            form.frequency === f ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="frequency"
                            value={f}
                            checked={form.frequency === f}
                            onChange={(e) => update("frequency", e.target.value)}
                            className="accent-caar-yellow"
                          />
                          <span className="text-sm">{f}</span>
                        </label>
                      ))}
                    </div>
                    {(form.frequency.includes("Quotidien") || form.frequency.includes("Contrat")) && (
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-primary font-medium">
                        🏆 Contrat professionnel — Tarif préférentiel disponible
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Budget + Urgency */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Budget estimé</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetOptions.map((b) => (
                          <label
                            key={b}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                              form.budget === b ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="budget"
                              value={b}
                              checked={form.budget === b}
                              onChange={(e) => update("budget", e.target.value)}
                              className="accent-caar-yellow"
                            />
                            <span className="text-sm">{b}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Urgence</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {urgencyOptions.map((u) => (
                          <label
                            key={u}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                              form.urgency === u ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={u}
                              checked={form.urgency === u}
                              onChange={(e) => update("urgency", e.target.value)}
                              className="accent-caar-yellow"
                            />
                            <span className="text-sm">{u}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact info */}
                {step === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="font-heading font-bold text-lg">Vos Coordonnées</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Nom complet *</label>
                        <input
                          type="text"
                          required
                          value={form.nom}
                          onChange={(e) => update("nom", e.target.value)}
                          placeholder="Votre nom"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Téléphone *</label>
                        <input
                          type="tel"
                          required
                          value={form.telephone}
                          onChange={(e) => update("telephone", e.target.value)}
                          placeholder="+237 6XX XXX XXX"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email (optionnel)</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="email@exemple.com"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Adresse d'intervention</label>
                        <input
                          type="text"
                          value={form.adresse}
                          onChange={(e) => update("adresse", e.target.value)}
                          placeholder="Quartier, ville"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Besoins spécifiques</label>
                      <textarea
                        value={form.description}
                        onChange={(e) => update("description", e.target.value)}
                        rows={3}
                        placeholder="Décrivez vos besoins (zones à nettoyer, contraintes, horaires préférés...)"
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="btn-outline text-sm">
                      <ArrowLeft className="w-4 h-4" /> Précédent
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={() => canNext() && setStep(step + 1)}
                      disabled={!canNext()}
                      className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Suivant <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canNext()}
                      className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Envoyer ma demande <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.2} className="space-y-6">
              <div className="card-service">
                <h3 className="font-heading font-bold mb-4">Coordonnées</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">WhatsApp / Téléphone</p>
                      <a href="tel:+237657943097" className="text-primary hover:underline">+237 6 57 94 30 97</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <a href="https://web.facebook.com/profile.php?id=61586427881144" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Page CAAR</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-muted-foreground">Douala, New-Town Aéroport</p>
                      <p className="text-muted-foreground">Kribi · Yaoundé · Tout le Cameroun</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-muted-foreground">7j/7 de 7h à 20h</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-service bg-primary/5 border-primary/20">
                <h3 className="font-heading font-bold mb-3 text-sm">Garanties CAAR</h3>
                <ul className="space-y-2">
                  {[
                    "Devis gratuit sous 24h",
                    "Produits écologiques",
                    "Équipe formée",
                    "Tarifs transparents",
                    "Satisfaction garantie",
                  ].map((g) => (
                    <li key={g} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
