import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const types = [
  {
    title: "P2P (Peer-to-Peer)",
    desc: "Prêts entre particuliers",
    color: "from-blue-500 to-blue-700",
    details: [
      { label: "Montant", value: "1K-50K DT" },
      { label: "Durée", value: "6-36 mois" },
    ],
  },
  {
    title: "P2B (Peer-to-Business)",
    desc: "Particuliers vers entreprises",
    color: "from-emerald-500 to-emerald-700",
    details: [
      { label: "Montant", value: "10K-500K DT" },
      { label: "Durée", value: "12-60 mois" },
    ],
  },
  {
    title: "Immobilier",
    desc: "Projets immobiliers",
    color: "from-amber-500 to-amber-700",
    details: [
      { label: "Montant", value: "50K-2M DT" },
      { label: "Durée", value: "12-36 mois" },
    ],
  },
  {
    title: "Invoice Trading",
    desc: "Factoring participatif",
    color: "from-purple-500 to-purple-700",
    details: [
      { label: "Montant", value: "5K-200K DT" },
      { label: "Durée", value: "30-120 jours" },
    ],
  },
];

export const TypesSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>📊 TYPES DE CROWDLENDING</SlideTitle>
      <SlideSubtitle>Les différentes formes de prêt participatif</SlideSubtitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {types.map((type, i) => (
          <div key={i} className="bg-card rounded-xl shadow overflow-hidden hover:-translate-y-2 transition-transform">
            <div className={`bg-gradient-to-br ${type.color} text-white p-4`}>
              <h3 className="font-bold text-lg">{type.title}</h3>
              <p className="text-sm opacity-90">{type.desc}</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {type.details.map((detail, j) => (
                  <div key={j} className="bg-muted p-2 rounded-lg text-center">
                    <div className="text-xs text-muted-foreground">{detail.label}</div>
                    <div className="font-bold text-sm">{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-primary/10 p-4 rounded-xl mt-6 border-l-4 border-primary">
        <h4 className="font-bold text-primary mb-2">📈 Tendance en Tunisie</h4>
        <p className="text-sm">
          Le P2B domine actuellement le marché tunisien (80%), suivi par le P2P personnel. 
          L'immobilier et le factoring sont encore émergents mais en forte croissance.
        </p>
      </div>
    </SlideContainer>
  );
};
