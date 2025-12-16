import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const trends = [
  { title: "Institutionnalisation", desc: "Banques investissent via plateformes" },
  { title: "Spécialisation", desc: "Plateformes niche (green, social, tech)" },
  { title: "Technologie", desc: "AI pour scoring, blockchain pour contrats" },
  { title: "Internationalisation", desc: "Cross-border lending et harmonisation" },
];

const innovations = [
  { icon: "🧠", title: "Scoring alternatif", desc: "Données non-financières" },
  { icon: "🪙", title: "Tokenisation", desc: "Prêts sous forme tokens" },
  { icon: "🤖", title: "Automatisation", desc: "Smart contracts" },
  { icon: "🌱", title: "Impact investing", desc: "Mesure impact social/environnemental" },
];

export const FuturePerspectivesSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🔮 PERSPECTIVES D'AVENIR</SlideTitle>
      <SlideSubtitle>Tendances mondiales et scénarios pour la Tunisie</SlideSubtitle>
      
      <div className="bg-card p-4 rounded-xl shadow mb-4">
        <h4 className="font-bold mb-3">🌍 Tendances Mondiales 2024-2030</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {trends.map((trend, i) => (
            <div key={i} className="bg-primary/10 p-3 rounded-lg">
              <h5 className="font-bold text-primary text-sm">{trend.title}</h5>
              <p className="text-xs text-muted-foreground">{trend.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-card p-4 rounded-xl shadow border-t-4 border-accent">
          <h4 className="font-bold text-accent mb-3">🚀 Scénario Optimiste 2030</h4>
          <ul className="space-y-1 text-sm">
            <li>✓ <strong>Volume</strong> : 500 millions DT</li>
            <li>✓ <strong>Plateformes</strong> : 15-20 actives</li>
            <li>✓ <strong>Pénétration</strong> : 5% des PME financées</li>
            <li>✓ <strong>Positionnement</strong> : Hub régional Afrique</li>
          </ul>
        </div>
        
        <div className="bg-card p-4 rounded-xl shadow border-t-4 border-primary">
          <h4 className="font-bold text-primary mb-3">📈 Scénario Réaliste 2027</h4>
          <ul className="space-y-1 text-sm">
            <li>✓ <strong>Volume</strong> : 200-300 millions DT</li>
            <li>✓ <strong>Croissance</strong> : +20-30%/an</li>
            <li>✓ <strong>Challenges</strong> : Éducation, confiance</li>
            <li>✓ <strong>Stabilisation</strong> : Marché mature</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-secondary/10 p-4 rounded-xl border-l-4 border-secondary">
        <h4 className="font-bold text-secondary mb-2">💡 Innovations Attendues en Tunisie</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {innovations.map((inn, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{inn.icon}</div>
              <div className="font-semibold text-sm">{inn.title}</div>
              <div className="text-xs text-muted-foreground">{inn.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
