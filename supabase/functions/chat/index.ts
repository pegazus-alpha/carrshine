import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de CAAR (Cameroun Assainissement et Rénovation), une entreprise spécialisée dans le nettoyage industriel, l'entretien de façades, le nettoyage après chantier, la gestion hygiène & déchets, la rénovation de surfaces et la désinfection professionnelle, basée au Cameroun.

Tu dois :
- Répondre de manière professionnelle, chaleureuse et concise en français.
- Aider les visiteurs à comprendre les services de CAAR.
- Orienter vers le formulaire de contact (/contact) ou les tarifs (/tarifs) quand c'est pertinent.
- Donner le numéro WhatsApp (+237 657 943 097) si le client veut parler à un humain.
- Si on te pose une question hors sujet (non liée au nettoyage/entretien/CAAR), tu peux répondre brièvement mais ramène la conversation vers les services de CAAR.

Services de CAAR :
1. Nettoyage industriel : Entretien d'usines, entrepôts, locaux commerciaux
2. Nettoyage après chantier : Remise en état post-travaux
3. Nettoyage de façades : Ravalement, nettoyage haute pression
4. Hygiène & gestion des déchets : Collecte, tri, désinfection
5. Rénovation de surfaces : Sols, murs, remise à neuf
6. Désinfection professionnelle : Traitement anti-nuisibles, désinfection sanitaire

Zone d'intervention : Tout le Cameroun, principalement Douala et Yaoundé.
Site web : carrshine.lovable.app
Contact WhatsApp : +237 657 943 097`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, veuillez réessayer dans quelques instants." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
