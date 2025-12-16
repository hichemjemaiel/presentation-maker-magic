import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const risks = [
  {
    title: "Risque de défaut",
    desc: "Non-remboursement partiel ou total par l'emprunteur",
    probability: "3-8%",
    color: "border-destructive",
    mitigation: "Diversification sur 10+ projets",
  },
  {
    title: "Risque de liquidité",
    desc: "Impossibilité de récupérer son capital avant échéance",
    probability: "Moyen",
    color: "border-warning",
    mitigation: "Investir des fonds non essentiels",
  },
  {
    title: "Risque plateforme",
    desc: "Faillite ou défaillance de la plateforme",
    probability: "Faible",
    color: "border-muted-foreground",
    mitigation: "Choisir plateformes régulées",
  },
  {
    title: "Risque opérationnel",
    desc: "Problèmes techniques ou de gestion",
    probability: "Faible",
    color: "border-primary",
    mitigation: "Vérifier l'historique plateforme",
  },
];

export const RisksSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>⚠️ RISQUES ET MITIGATION</SlideTitle>
      <SlideSubtitle>Comprendre et gérer les risques</SlideSubtitle>
      
      <div className="grid md:grid-cols-2 gap-4">
        {risks.map((risk, i) => (
          <div key={i} className={`bg-card p-4 rounded-xl shadow border-t-4 ${risk.color}`}>
            <h4 className="font-bold mb-2">{risk.title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{risk.desc}</p>
            <div className="flex justify-between items-center">
              <span className="bg-muted px-3 py-1 rounded-full text-xs font-semibold">
                Probabilité: {risk.probability}
              </span>
            </div>
            <div className="mt-3 p-2 bg-accent/10 rounded-lg">
              <p className="text-xs"><strong>✅ Mitigation :</strong> {risk.mitigation}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-destructive/10 p-4 rounded-xl mt-6 border-l-4 border-destructive">
        <h4 className="font-bold text-destructive mb-2">🚨 Règle d'Or</h4>
        <p className="text-sm">
          <strong>N'investissez jamais plus que ce que vous pouvez vous permettre de perdre.</strong> 
          Le crowdlending doit représenter une portion limitée (5-15%) de votre portefeuille global.
        </p>
      </div>
    </SlideContainer>
  );
};
