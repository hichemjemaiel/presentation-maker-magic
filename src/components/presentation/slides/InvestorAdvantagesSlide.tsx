import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const advantages = [
  { icon: "📈", title: "Rendement attractif", desc: "7-12% vs 2-4% épargne classique" },
  { icon: "🎯", title: "Diversification", desc: "Nouvelle classe d'actifs pour son portefeuille" },
  { icon: "👁️", title: "Transparence", desc: "Choix des projets et visibilité totale" },
  { icon: "🚪", title: "Accessibilité", desc: "Dès 50 DT d'investissement minimum" },
  { icon: "🤝", title: "Impact local", desc: "Soutien direct à l'économie tunisienne" },
  { icon: "⏰", title: "Flexibilité", desc: "Choix des durées et montants" },
];

const comparison = [
  { label: "Livret épargne", value: 2, color: "from-blue-400 to-blue-600" },
  { label: "Obligations", value: 4, color: "from-emerald-400 to-emerald-600" },
  { label: "Crowdlending", value: 9, color: "from-purple-400 to-purple-600" },
  { label: "Actions", value: 12, color: "from-amber-400 to-amber-600" },
];

export const InvestorAdvantagesSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>💰 AVANTAGES POUR LES INVESTISSEURS</SlideTitle>
      <SlideSubtitle>Pourquoi investir en crowdlending ?</SlideSubtitle>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {advantages.map((adv, i) => (
          <div key={i} className="bg-card p-4 rounded-xl shadow hover:-translate-y-1 transition-transform">
            <div className="text-3xl mb-2">{adv.icon}</div>
            <h4 className="font-bold mb-1">{adv.title}</h4>
            <p className="text-sm text-muted-foreground">{adv.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-card p-6 rounded-xl shadow">
        <h4 className="font-bold mb-4">📊 Comparaison des Rendements Moyens (%)</h4>
        <div className="space-y-4">
          {comparison.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-32 text-sm font-medium">{item.label}</span>
              <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-end pr-3 transition-all duration-1000`}
                  style={{ width: `${(item.value / 15) * 100}%` }}
                >
                  <span className="text-white text-sm font-bold">{item.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
