import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const regulations = [
  {
    year: "2018",
    title: "Loi 2018-52",
    desc: "Première loi sur le financement participatif en Tunisie",
  },
  {
    year: "2019",
    title: "Décret d'application",
    desc: "Modalités pratiques et conditions d'agrément",
  },
  {
    year: "2020",
    title: "Circulaire BCT",
    desc: "Règles prudentielles et plafonds d'investissement",
  },
  {
    year: "2022",
    title: "Mise à jour",
    desc: "Assouplissement et simplification des procédures",
  },
];

const keyPoints = [
  "Agrément obligatoire BCT",
  "Plafond 100K DT/projet/investisseur",
  "Protection des données personnelles",
  "Obligations de transparence",
  "Ségrégation des fonds",
  "Reporting régulier au régulateur",
];

export const RegulationSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>⚖️ CADRE RÉGLEMENTAIRE</SlideTitle>
      <SlideSubtitle>La législation tunisienne du crowdlending</SlideSubtitle>
      
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {regulations.map((reg, i) => (
          <div key={i} className="bg-card p-4 rounded-xl shadow text-center">
            <div className="w-16 h-16 gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
              {reg.year}
            </div>
            <h4 className="font-bold text-sm mb-1">{reg.title}</h4>
            <p className="text-xs text-muted-foreground">{reg.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-card p-6 rounded-xl shadow">
        <h4 className="font-bold mb-4">📜 Points Clés de la Réglementation</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {keyPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2 bg-muted p-3 rounded-lg">
              <span className="text-primary">✓</span>
              <span className="text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-primary/10 p-4 rounded-xl mt-6 border-l-4 border-primary">
        <h4 className="font-bold text-primary mb-1">💡 Évolution Attendue</h4>
        <p className="text-sm">
          Le cadre réglementaire tunisien continue d'évoluer pour s'aligner sur les standards 
          européens (ECSP) tout en préservant la protection des investisseurs locaux.
        </p>
      </div>
    </SlideContainer>
  );
};
