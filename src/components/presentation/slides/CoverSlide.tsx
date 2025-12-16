import { SlideContainer } from "../SlideContainer";

export const CoverSlide = () => {
  const teamMembers = [
    "Gaied Ahmed Haifa",
    "Matteli Amira", 
    "Jemmali Hichem",
    "Ben Lamine Aziz",
    "Sayari Ahmed",
    "Amri Mohammed"
  ];

  return (
    <SlideContainer variant="cover" className="flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22none%22/><path d=%22M0,0 L100,0 L100,100 Z%22 fill=%22white%22 opacity=%220.1%22/><path d=%22M0,0 L0,100 L100,100 Z%22 fill=%22white%22 opacity=%220.1%22/></svg>')]" />
      </div>
      
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in">
          💰 Le Crowdlending en Tunisie
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-90">
          Cours Complet : Financement Participatif
        </p>
        
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 max-w-3xl mx-auto mb-6">
          <h3 className="text-xl font-semibold mb-4">👥 Notre Équipe</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {teamMembers.map((member) => (
              <div key={member} className="bg-white/20 rounded-lg p-3 text-center">
                <span className="text-2xl mb-1 block">🎓</span>
                <span className="font-medium text-sm">{member}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-lg opacity-90">
          📅 Décembre 2025
        </p>
        
        <p className="mt-8 text-sm opacity-70">
          Utilisez les flèches ← → ou cliquez sur les points pour naviguer
        </p>
      </div>
    </SlideContainer>
  );
};
