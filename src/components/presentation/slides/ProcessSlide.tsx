import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const steps = [
  { num: 1, title: "Inscription", desc: "Création compte emprunteur ou investisseur" },
  { num: 2, title: "Dépôt Projet", desc: "Soumission dossier complet par l'emprunteur" },
  { num: 3, title: "Analyse", desc: "Évaluation risque et scoring par la plateforme" },
  { num: 4, title: "Publication", desc: "Mise en ligne du projet validé" },
  { num: 5, title: "Collecte", desc: "Investisseurs contribuent au financement" },
  { num: 6, title: "Déblocage", desc: "Transfert des fonds à l'emprunteur" },
  { num: 7, title: "Remboursement", desc: "Mensualités capital + intérêts" },
  { num: 8, title: "Clôture", desc: "Fin du prêt, bilan pour tous" },
];

export const ProcessSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>⚙️ PROCESSUS DE FINANCEMENT</SlideTitle>
      <SlideSubtitle>Les 8 étapes du crowdlending</SlideSubtitle>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-card p-4 rounded-xl shadow text-center hover:-translate-y-2 transition-transform"
          >
            <div className="w-12 h-12 gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
              {step.num}
            </div>
            <h4 className="font-bold mb-1">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-muted p-4 rounded-xl mt-6">
        <h4 className="font-bold mb-2">⏱️ Délais Moyens</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-primary">48-72h</div>
            <div className="text-sm text-muted-foreground">Analyse projet</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">15-45 jours</div>
            <div className="text-sm text-muted-foreground">Collecte</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">12-48 mois</div>
            <div className="text-sm text-muted-foreground">Remboursement</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary">72h</div>
            <div className="text-sm text-muted-foreground">Déblocage fonds</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
