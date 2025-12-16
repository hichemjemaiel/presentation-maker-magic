import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const cases = [
  {
    icon: "🌾",
    title: "Agriculture Bio",
    location: "Sousse",
    desc: "Extension exploitation oléicole bio",
    amount: "75 000 DT",
    rate: "10%",
    duration: "36 mois",
    investors: "85",
    result: "+40% production, création 3 emplois",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: "💻",
    title: "Startup Tech",
    location: "Tunis",
    desc: "Application de livraison",
    amount: "120 000 DT",
    rate: "11%",
    duration: "48 mois",
    investors: "150",
    result: "Lancement réussi, levée série A en cours",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "🍽️",
    title: "Restaurant Touristique",
    location: "Hammamet",
    desc: "Rénovation terrasse",
    amount: "40 000 DT",
    rate: "9.5%",
    duration: "18 mois",
    investors: "25 jours",
    result: "Ouverture à temps, capacité +50 places",
    color: "from-amber-500 to-amber-700",
  },
];

export const CaseStudiesSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>📋 ÉTUDES DE CAS</SlideTitle>
      <SlideSubtitle>Exemples concrets de succès</SlideSubtitle>
      
      <div className="grid md:grid-cols-3 gap-4">
        {cases.map((c, i) => (
          <div key={i} className="bg-card rounded-xl shadow overflow-hidden">
            <div className={`bg-gradient-to-br ${c.color} text-white p-4`}>
              <div className="text-2xl mb-1">{c.icon}</div>
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm opacity-90">{c.location} - {c.desc}</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="font-bold text-primary text-sm">{c.amount}</div>
                  <div className="text-xs text-muted-foreground">Montant</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="font-bold text-primary text-sm">{c.rate}</div>
                  <div className="text-xs text-muted-foreground">Taux</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="font-bold text-primary text-sm">{c.duration}</div>
                  <div className="text-xs text-muted-foreground">Durée</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="font-bold text-primary text-sm">{c.investors}</div>
                  <div className="text-xs text-muted-foreground">Investisseurs</div>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded">
                <p className="text-xs"><strong>✅ Résultat :</strong> {c.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-accent/10 p-4 rounded-xl mt-4 border-l-4 border-accent">
        <h4 className="font-bold text-accent mb-2">🔑 Facteurs de Succès Communs</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
          {["Business plan solide", "Porteur expérimenté", "Communication transparente", "Montant adapté", "Taux équilibré"].map((f, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="text-accent">✓</span> {f}
            </span>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
