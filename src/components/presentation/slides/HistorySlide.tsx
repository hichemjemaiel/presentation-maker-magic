import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const timelineItems = [
  { year: "2005", title: "Naissance aux États-Unis", desc: "Création des premières plateformes (Prosper, Lending Club)" },
  { year: "2010", title: "Expansion en Europe", desc: "Développement rapide au Royaume-Uni, France et Allemagne" },
  { year: "2014", title: "Cadrage réglementaire UE", desc: "Premières régulations européennes" },
  { year: "2018", title: "Début en Tunisie", desc: "Loi 2018-52 et lancement de FUNDLIO" },
  { year: "2020", title: "Accélération post-COVID", desc: "Croissance forte avec digitalisation" },
  { year: "2023", title: "Maturité des marchés", desc: "Consolidation et diversification" },
];

export const HistorySlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>📜 HISTORIQUE DU CROWDLENDING</SlideTitle>
      <SlideSubtitle>Évolution chronologique et facteurs clés</SlideSubtitle>
      
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-1 gradient-primary rounded-full" />
        
        <div className="space-y-4">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex items-start ml-4">
              <div className="relative">
                <span className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg" />
                <span className="ml-8 font-bold text-primary text-lg">{item.year}</span>
              </div>
              <div className="flex-1 ml-4 bg-card p-4 rounded-xl shadow border-l-4 border-primary">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-primary/10 p-4 rounded-xl">
          <h4 className="font-bold text-primary mb-2">📊 Chiffres Clés 2023</h4>
          <ul className="space-y-1 text-sm">
            <li><strong>Marché mondial</strong> : 120 milliards USD</li>
            <li><strong>Croissance annuelle</strong> : +25%</li>
            <li><strong>Europe</strong> : 15 milliards EUR</li>
            <li><strong>France (leader)</strong> : 6 milliards EUR</li>
          </ul>
        </div>
        <div className="bg-primary/10 p-4 rounded-xl">
          <h4 className="font-bold text-primary mb-2">🎯 Facteurs d'Émergence</h4>
          <ul className="space-y-1 text-sm">
            <li>• Crise financière 2008</li>
            <li>• Révolution numérique</li>
            <li>• Taux bas traditionnels</li>
            <li>• Besoin financement PME</li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};
