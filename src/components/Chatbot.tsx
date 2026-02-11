import { useState } from "react";
import { X, MessageSquare, ArrowRight, User } from "lucide-react";

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

  const reset = () => {
    setStep("welcome");
    setState({ service: "", frequency: "", urgency: "" });
  };

  const getResult = () => {
    if (state.urgency === "urgent" && state.frequency !== "once") {
      return {
        icon: "⚡",
        text: "Votre demande est prioritaire ! Remplissez notre formulaire pour une réponse immédiate.",
        cta: { label: "Devis express", href: "/contact" },
      };
    }
    if (state.frequency !== "once") {
      return {
        icon: "📋",
        text: "Excellent ! Remplissez notre formulaire détaillé pour une proposition personnalisée sous 2h.",
        cta: { label: "Demander un devis", href: "/contact" },
      };
    }
    return {
      icon: "💡",
      text: "Pour une intervention ponctuelle, consultez nos tarifs ou contactez-nous directement.",
      cta: { label: "Voir les tarifs", href: "/tarifs" },
    };
  };

  const BotMsg = ({ children }: { children: React.ReactNode }) => (
    <div className="flex gap-2 items-start">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
        <span className="text-xs font-heading font-bold text-primary-foreground">C</span>
      </div>
      <div className="bg-muted rounded-lg rounded-tl-none p-3 text-sm max-w-[85%]">{children}</div>
    </div>
  );

  const Btn = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="text-xs font-medium px-3 py-2 rounded-lg border border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-left"
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Toggle */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Ouvrir le chat"
        >
          <MessageSquare className="w-6 h-6 text-primary-foreground" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 max-h-[28rem] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-secondary text-secondary-foreground px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-heading font-bold text-primary-foreground">C</span>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold">CAAR Assistant</p>
                <p className="text-xs text-muted-foreground">En ligne</p>
              </div>
            </div>
            <button onClick={() => { setIsOpen(false); reset(); }} className="text-muted-foreground hover:text-secondary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {step === "welcome" && (
              <>
                <BotMsg>
                  👋 Bonjour ! Je suis l'assistant CAAR. En 3 questions rapides, je vous aide à trouver le service parfait. On commence ?
                </BotMsg>
                <div className="flex gap-2 ml-10">
                  <Btn onClick={() => setStep("q1")}>Oui, c'est parti !</Btn>
                  <Btn onClick={() => setIsOpen(false)}>Non merci</Btn>
                </div>
              </>
            )}

            {step === "q1" && (
              <>
                <BotMsg>Quel type de nettoyage recherchez-vous ?</BotMsg>
                <div className="flex flex-wrap gap-2 ml-10">
                  {["Bureaux/Commerce", "Ma maison", "Après travaux", "Vitres/Façades", "Désinfection", "Autre"].map((s) => (
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
                  <BotMsg>{r.icon} {r.text}</BotMsg>
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
