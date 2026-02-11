import { useState, useEffect } from "react";
import { X, ArrowRight, User, Bot, Zap } from "lucide-react";

type Step = "welcome" | "q1" | "q2" | "q3" | "result";

interface ChatState {
  service: string;
  frequency: string;
  urgency: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [state, setState] = useState<ChatState>({ service: "", frequency: "", urgency: "" });
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 3000);
    return () => clearInterval(interval);
  }, []);

  const reset = () => {
    setStep("welcome");
    setState({ service: "", frequency: "", urgency: "" });
  };

  const getResult = () => {
    if (state.urgency === "urgent" && state.frequency !== "once") {
      return {
        text: "Votre demande est prioritaire ! Remplissez notre formulaire pour une réponse rapide.",
        cta: { label: "Devis express", href: "/contact" },
      };
    }
    if (state.frequency !== "once") {
      return {
        text: "Excellent ! Remplissez notre formulaire détaillé pour une proposition personnalisée sous 24h.",
        cta: { label: "Demander un devis", href: "/contact" },
      };
    }
    return {
      text: "Pour une intervention ponctuelle, consultez nos tarifs ou contactez-nous directement.",
      cta: { label: "Voir les tarifs", href: "/tarifs" },
    };
  };

  const BotMsg = ({ children }: { children: React.ReactNode }) => (
    <div className="flex gap-2.5 items-start">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shrink-0 shadow-sm">
        <Bot className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="bg-muted rounded-xl rounded-tl-sm p-3 text-sm max-w-[85%] leading-relaxed">{children}</div>
    </div>
  );

  const Btn = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="text-xs font-medium px-3 py-2 rounded-lg border border-border text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all text-left"
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Toggle button - robotic design */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 group"
          aria-label="Ouvrir le chat"
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className={`absolute inset-0 rounded-2xl bg-primary/30 transition-all duration-1000 ${pulse ? "scale-125 opacity-0" : "scale-100 opacity-40"}`} />
            {/* Main button */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/80 border border-border/50 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
              {/* Robot face */}
              <div className="relative">
                <Bot className="w-6 h-6 text-primary" />
                {/* Status LED */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-400 border border-secondary shadow-sm">
                  <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[10px] font-heading font-semibold px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              Assistant CAAR
            </div>
          </div>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 max-h-[28rem] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header - robotic */}
          <div className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-heading font-semibold flex items-center gap-1.5">
                  CAAR Bot
                  <Zap className="w-3 h-3 text-primary" />
                </p>
                <p className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  En ligne
                </p>
              </div>
            </div>
            <button onClick={() => { setIsOpen(false); reset(); }} className="text-muted-foreground hover:text-secondary-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {step === "welcome" && (
              <>
                <BotMsg>
                  Bonjour ! Je suis l'assistant CAAR. En 3 questions rapides, je vous oriente vers le service parfait. On commence ?
                </BotMsg>
                <div className="flex gap-2 ml-10">
                  <Btn onClick={() => setStep("q1")}>Oui, c'est parti !</Btn>
                  <Btn onClick={() => setIsOpen(false)}>Non merci</Btn>
                </div>
              </>
            )}

            {step === "q1" && (
              <>
                <BotMsg>Quel type de service recherchez-vous ?</BotMsg>
                <div className="flex flex-wrap gap-2 ml-10">
                  {["Nettoyage industriel", "Après chantier", "Façades", "Hygiène & déchets", "Rénovation", "Désinfection"].map((s) => (
                    <Btn key={s} onClick={() => { setState({ ...state, service: s }); setStep("q2"); }}>{s}</Btn>
                  ))}
                </div>
              </>
            )}

            {step === "q2" && (
              <>
                <BotMsg>C'est pour quelle fréquence ?</BotMsg>
                <div className="flex flex-wrap gap-2 ml-10">
                  {[
                    { label: "Une seule fois", value: "once" },
                    { label: "Chaque semaine", value: "weekly" },
                    { label: "Plusieurs fois/semaine", value: "multi" },
                    { label: "Contrat mensuel", value: "monthly" },
                  ].map((f) => (
                    <Btn key={f.value} onClick={() => { setState({ ...state, frequency: f.value }); setStep("q3"); }}>{f.label}</Btn>
                  ))}
                </div>
              </>
            )}

            {step === "q3" && (
              <>
                <BotMsg>Quand souhaitez-vous démarrer ?</BotMsg>
                <div className="flex flex-wrap gap-2 ml-10">
                  {[
                    { label: "Urgent (24-48h)", value: "urgent" },
                    { label: "Cette semaine", value: "week" },
                    { label: "Semaine prochaine", value: "next" },
                    { label: "Juste un devis", value: "quote" },
                  ].map((u) => (
                    <Btn key={u.value} onClick={() => { setState({ ...state, urgency: u.value }); setStep("result"); }}>{u.label}</Btn>
                  ))}
                </div>
              </>
            )}

            {step === "result" && (() => {
              const r = getResult();
              return (
                <>
                  <BotMsg>{r.text}</BotMsg>
                  <div className="flex flex-col gap-2 ml-10">
                    <a href={r.cta.href} className="btn-primary text-xs justify-center">{r.cta.label} <ArrowRight className="w-3 h-3" /></a>
                    <a
                      href="https://wa.me/237657943097?text=Bonjour%2C%20je%20pr%C3%A9f%C3%A8re%20discuter%20directement."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs justify-center"
                    >
                      <User className="w-3 h-3" /> Parler à un humain
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
