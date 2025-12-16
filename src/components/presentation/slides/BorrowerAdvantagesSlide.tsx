import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const advantages = [
  { icon: "⚡", title: "Rapidité", desc: "Décision en 48-72h vs semaines en banque" },
  { icon: "📋", title: "Simplification", desc: "Dossier allégé, processus digitalisé" },
  { icon: "🔓", title: "Accessibilité", desc: "Moins d'exigences de garanties" },
  { icon: "🎯", title: "Flexibilité", desc: "Montants et durées sur mesure" },
  { icon: "💼", title: "Complémentarité", desc: "S'ajoute aux financements existants" },
  { icon: "📢", title: "Visibilité", desc: "Communication autour du projet" },
];

const criteria = [
  { label: "Ancienneté", value: "> 2 ans" },
  { label: "CA minimum", value: "100K DT" },
  { label: "Rentabilité", value: "Positive" },
  { label: "Scoring", value: "B+ minimum" },
];

export const BorrowerAdvantagesSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🏢 AVANTAGES POUR LES EMPRUNTEURS</SlideTitle>
      <SlideSubtitle>Pourquoi choisir le crowdlending ?</SlideSubtitle>
      
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
        <h4 className="font-bold mb-4">📋 Critères d'Éligibilité Typiques</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {criteria.map((item, i) => (
            <div key={i} className="bg-muted p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
          <p className="text-sm">
            <strong>💡 À noter :</strong> Les critères varient selon les plateformes. 
            Certaines acceptent des profils plus jeunes ou des startups innovantes.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
