import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

export const DefinitionSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>💡 QU'EST-CE QUE LE CROWDLENDING ?</SlideTitle>
      <SlideSubtitle>Définition et concepts fondamentaux</SlideSubtitle>
      
      <div className="gradient-primary text-primary-foreground p-6 rounded-xl mb-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3">📖 Définition Académique</h3>
        <p className="text-lg leading-relaxed">
          Le <span className="bg-white/20 px-2 py-1 rounded font-bold">crowdlending (prêt participatif)</span> est une 
          activité de financement qui met en relation directe, via une plateforme numérique, des porteurs de projets 
          recherchant des fonds et des investisseurs souhaitant prêter de l'argent en contrepartie d'
          <span className="bg-white/20 px-2 py-1 rounded font-bold">intérêts</span>.
        </p>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Différences Clés</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-card rounded-xl overflow-hidden shadow-lg text-sm">
          <thead>
            <tr className="gradient-primary text-primary-foreground">
              <th className="p-3 text-left">Caractéristique</th>
              <th className="p-3 text-left">Crowdfunding</th>
              <th className="p-3 text-left">Crowdlending</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Nature", "Dons / Récompenses", "Prêt avec intérêts"],
              ["Retour financier", "Aucun", "Intérêts fixes"],
              ["Exemples", "Kickstarter, Ulule", "FUNDLIO, Lendosphere"],
              ["Objectif principal", "Soutien / Récompense", "Rendement financier"],
              ["Risque", "Perte totale possible", "Risque de défaut"],
            ].map(([label, crowd, lend], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                <td className="p-3 font-semibold">{label}</td>
                <td className="p-3">{crowd}</td>
                <td className="p-3">{lend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-primary/10 p-4 rounded-xl mt-6 border-l-4 border-primary">
        <h4 className="font-bold text-primary mb-1">💡 À retenir</h4>
        <p className="text-foreground">
          Le crowdlending n'est pas un don mais un <strong>prêt rémunéré</strong> avec des intérêts qui compensent 
          le risque pris par l'investisseur.
        </p>
      </div>
    </SlideContainer>
  );
};
