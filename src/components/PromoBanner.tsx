import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-heading font-medium flex items-center justify-center gap-2">
      <span>🎉 OFFRE DE LANCEMENT : -20% sur votre première intervention</span>
      <Link to="/contact" className="underline font-bold hover:no-underline hidden sm:inline">
        Profiter maintenant
      </Link>
      <button onClick={() => setVisible(false)} className="absolute right-3 hover:opacity-70">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PromoBanner;
