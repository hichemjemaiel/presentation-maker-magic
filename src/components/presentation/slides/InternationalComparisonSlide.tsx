import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const countries = [
  {
    flag: "🇫🇷",
    name: "France",
    color: "from-blue-500 to-blue-700",
    stats: [
      { label: "Volume (2023)", value: "6 milliards €" },
      { label: "Plateformes", value: "30+ régulées" },
      { label: "Taux moyens", value: "4-8%" },
      { label: "Particularité", value: "Leader européen, PME focus" },
    ],
  },
  {
    flag: "🇬🇧",
    name: "Royaume-Uni",
    color: "from-red-500 to-red-700",
    stats: [
      { label: "Volume (2023)", value: "4 milliards £" },
      { label: "Plateformes", value: "P2P dominant" },
      { label: "Taux moyens", value: "5-9%" },
      { label: "Particularité", value: "IFISA (enveloppe fiscale)" },
    ],
  },
  {
    flag: "🇺🇸",
    name: "États-Unis",
    color: "from-emerald-500 to-emerald-700",
    stats: [
      { label: "Volume (2023)", value: "50 milliards $" },
      { label: "Plateformes", value: "Institutional lending" },
      { label: "Taux moyens", value: "6-12%" },
      { label: "Particularité", value: "Régulation SEC stricte" },
    ],
  },
];

const lessons = [
  { icon: "⚖️", title: "Régulation équilibrée", desc: "Protéger sans étouffer l'innovation" },
  { icon: "📚", title: "Éducation financière", desc: "Former investisseurs et emprunteurs" },
  { icon: "🤝", title: "Coopération internationale", desc: "Apprendre des best practices" },
];

export const InternationalComparisonSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🌍 COMPARAISON INTERNATIONALE</SlideTitle>
      <SlideSubtitle>Benchmark des principaux marchés</SlideSubtitle>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {countries.map((country, i) => (
          <div key={i} className="bg-card rounded-xl shadow overflow-hidden">
            <div className={`bg-gradient-to-br ${country.color} text-white p-3 flex items-center gap-2`}>
              <span className="text-2xl">{country.flag}</span>
              <span className="font-bold">{country.name}</span>
            </div>
            <div className="p-4 space-y-2">
              {country.stats.map((stat, j) => (
                <div key={j} className="border-b border-muted pb-2 last:border-0">
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                  <div className="font-semibold text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="font-bold mb-3">🎓 Enseignements pour la Tunisie</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {lessons.map((lesson, i) => (
          <div key={i} className="bg-primary/10 p-4 rounded-xl">
            <div className="text-2xl mb-2">{lesson.icon}</div>
            <h4 className="font-bold text-primary mb-1">{lesson.title}</h4>
            <p className="text-sm text-muted-foreground">{lesson.desc}</p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};
