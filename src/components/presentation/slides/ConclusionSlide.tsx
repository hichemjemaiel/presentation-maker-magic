import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const summary = [
  { title: "Alternative crédible", desc: "Au financement traditionnel" },
  { title: "Potentiel important", desc: "Mais sous-exploité en Tunisie" },
  { title: "Cadre réglementaire", desc: "Solide mais perfectible" },
  { title: "Impact économique", desc: "Réel pour PME et investisseurs" },
];

const recommendations = [
  {
    title: "Pour les Pouvoirs Publics",
    items: ["Simplifier réglementation", "Campagne éducation financière", "Incitations fiscales", "Intégration stratégie fintech"],
  },
  {
    title: "Pour les Plateformes",
    items: ["Transparence accrue", "Innovation produits", "Partnerships stratégiques", "Focus éducation clients"],
  },
  {
    title: "Pour les Investisseurs",
    items: ["Diversification (10+ projets)", "Éducation risques", "Plateformes régulées", "Patience (moyen/long terme)"],
  },
  {
    title: "Pour les Emprunteurs",
    items: ["Dossier complet/professionnel", "Réalisme montants/taux", "Transparence communication", "Respect échéancier"],
  },
];

export const ConclusionSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🎯 CONCLUSION ET RECOMMANDATIONS</SlideTitle>
      <SlideSubtitle>Synthèse du cours et pistes d'action</SlideSubtitle>
      
      <div className="gradient-primary text-primary-foreground p-4 rounded-xl mb-4">
        <h3 className="font-bold text-lg mb-3">📋 Bilan du Cours</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {summary.map((item, i) => (
            <div key={i} className="bg-white/20 p-3 rounded-lg">
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-xs opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="bg-card p-4 rounded-xl shadow">
            <h4 className="font-bold text-sm text-primary mb-2">{rec.title}</h4>
            <ul className="space-y-1">
              {rec.items.map((item, j) => (
                <li key={j} className="flex items-start gap-1 text-xs">
                  <span className="text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4 p-4 bg-muted rounded-xl">
        <h4 className="font-bold mb-1">Vision 2030</h4>
        <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
          "Le crowdlending pourrait représenter 10% du financement des PME tunisiennes, créant ainsi 
          un écosystème financier plus inclusif, transparent et efficient."
        </p>
      </div>
    </SlideContainer>
  );
};
