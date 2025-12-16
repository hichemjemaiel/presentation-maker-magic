import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const stats = [
  { icon: "📅", value: "2018", label: "Année de démarrage" },
  { icon: "💻", value: "5-7", label: "Plateformes actives" },
  { icon: "💰", value: "20-30M DT", label: "Volume annuel estimé" },
  { icon: "👥", value: "60% < 30 ans", label: "Jeunesse population" },
];

const opportunities = [
  { title: "Jeunesse", desc: "60% de la population a moins de 30 ans" },
  { title: "Bancarisation", desc: "50% (marge de progression)" },
  { title: "Entrepreneuriat", desc: "10 000 créations/an" },
  { title: "Diaspora", desc: "2 millions (investisseurs potentiels)" },
  { title: "Digitalisation", desc: "70% pénétration mobile" },
];

const challenges = [
  "Culture financière limitée",
  "Méfiance envers les systèmes financiers",
  "Concurrence du secteur informel",
  "Infrastructures numériques à améliorer",
];

export const TunisianContextSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🇹🇳 CONTEXTE TUNISIEN</SlideTitle>
      <SlideSubtitle>État des lieux, opportunités et défis</SlideSubtitle>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card p-4 rounded-xl shadow text-center hover:-translate-y-1 transition-transform">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-xl shadow border-l-4 border-accent">
          <h3 className="font-bold text-accent mb-3">✅ Opportunités Tunisiennes</h3>
          <div className="space-y-2">
            {opportunities.map((opp, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span><strong>{opp.title}</strong> : {opp.desc}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-xl shadow border-l-4 border-warning">
          <h3 className="font-bold text-warning mb-3">⚠️ Défis à Relever</h3>
          <div className="space-y-2">
            {challenges.map((challenge, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-warning">!</span>
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
