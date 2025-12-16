import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const tocSummary = [
  {
    range: "Modules 3–6",
    title: "Fondements du crowdlending",
    description: "Contexte tunisien, acteurs clés et processus de financement"
  },
  {
    range: "Modules 7–10",
    title: "Offres et bénéfices",
    description: "Types de crowdlending, plateformes et avantages"
  },
  {
    range: "Modules 11–14",
    title: "Sécurité et cadre légal",
    description: "Risques, mitigation, réglementation et cas pratiques"
  },
  {
    range: "Modules 15–18",
    title: "Vision globale",
    description: "Comparaison internationale et perspectives d’avenir"
  },
  {
    range: "Modules 19–20",
    title: "Clôture",
    description: "Conclusion, questions et remerciements"
  }
];

export const TableOfContentsSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>📋 PLAN DU COURS</SlideTitle>
      <SlideSubtitle>
        Synthèse des modules 3 à 20 – Crowdlending en Tunisie
      </SlideSubtitle>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {tocSummary.map((item, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg p-4 border-l-4 border-primary hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                {item.range}
              </span>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};
