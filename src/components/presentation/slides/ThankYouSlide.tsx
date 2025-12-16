import { SlideContainer } from "../SlideContainer";

const nextSteps = [
  { icon: "📥", title: "Télécharger", desc: "Le guide complet" },
  { icon: "📅", title: "Prochaines sessions", desc: "Formations avancées" },
  { icon: "❓", title: "Questions", desc: "Session individuelle" },
];

export const ThankYouSlide = () => {
  return (
    <SlideContainer variant="cover" className="flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22none%22/><path d=%22M0,0 L100,0 L100,100 Z%22 fill=%22white%22 opacity=%220.1%22/><path d=%22M0,0 L0,100 L100,100 Z%22 fill=%22white%22 opacity=%220.1%22/></svg>')]" />
      </div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-float">
          🎓 MERCI !
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 max-w-2xl mx-auto">
          Merci d'avoir suivi ce cours complet sur le crowdlending en Tunisie
        </p>
        
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 max-w-3xl mx-auto mb-6">
          <h3 className="text-xl font-semibold mb-4">ℹ️ Pour aller plus loin</h3>
          <div className="grid grid-cols-3 gap-4">
            {nextSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="font-semibold">{step.title}</div>
                <div className="text-sm opacity-80">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-lg italic opacity-90 max-w-2xl mx-auto mb-8">
          "Le crowdlending en Tunisie : Une opportunité à saisir pour une finance plus inclusive et transparente"
        </p>
        
        <p className="text-sm opacity-70">
          Présentation terminée • Cours élaboré par l'équipe pédagogique
        </p>
      </div>
    </SlideContainer>
  );
};
