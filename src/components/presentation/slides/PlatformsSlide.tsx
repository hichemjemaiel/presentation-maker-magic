import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

const platforms = [
  { name: "FUNDLIO", type: "P2B", sector: "Multi-secteur", status: "active", rate: "8-12%" },
  { name: "CoFund", type: "P2P/P2B", sector: "PME", status: "active", rate: "7-10%" },
  { name: "Afrikwity", type: "Equity/Lending", sector: "Startups", status: "active", rate: "Variable" },
  { name: "Beehive TN", type: "P2B", sector: "Commerce", status: "active", rate: "9-13%" },
  { name: "Tawasol", type: "P2P", sector: "Social", status: "inactive", rate: "6-8%" },
];

export const PlatformsSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>🖥️ PLATEFORMES EN TUNISIE</SlideTitle>
      <SlideSubtitle>Panorama des acteurs du marché</SlideSubtitle>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-card rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="gradient-primary text-primary-foreground">
              <th className="p-3 text-left">Plateforme</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Secteur</th>
              <th className="p-3 text-left">Taux</th>
              <th className="p-3 text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((p, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                <td className="p-3 font-semibold">{p.name}</td>
                <td className="p-3">{p.type}</td>
                <td className="p-3">{p.sector}</td>
                <td className="p-3">{p.rate}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    p.status === "active" 
                      ? "bg-emerald-100 text-emerald-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {p.status === "active" ? "Actif" : "Inactif"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-accent/10 p-4 rounded-xl border-l-4 border-accent">
          <h4 className="font-bold text-accent mb-2">✅ Critères de Choix</h4>
          <ul className="text-sm space-y-1">
            <li>• Agrément BCT valide</li>
            <li>• Transparence des frais</li>
            <li>• Historique de performance</li>
            <li>• Interface utilisateur intuitive</li>
          </ul>
        </div>
        <div className="bg-warning/10 p-4 rounded-xl border-l-4 border-warning">
          <h4 className="font-bold text-warning mb-2">⚠️ Points de Vigilance</h4>
          <ul className="text-sm space-y-1">
            <li>• Vérifier la régulation</li>
            <li>• Lire les conditions générales</li>
            <li>• Évaluer le support client</li>
            <li>• Diversifier les plateformes</li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};
