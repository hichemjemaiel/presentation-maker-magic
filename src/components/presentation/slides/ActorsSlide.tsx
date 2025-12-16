import { SlideContainer, SlideTitle, SlideSubtitle } from "../SlideContainer";

export const ActorsSlide = () => {
  return (
    <SlideContainer>
      <SlideTitle>👥 LES ACTEURS DE L'ÉCOSYSTÈME</SlideTitle>
      <SlideSubtitle>Prêteurs, emprunteurs et plateformes</SlideSubtitle>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl shadow overflow-hidden">
          <div className="gradient-primary text-primary-foreground p-4">
            <div className="text-3xl mb-2">👤</div>
            <h3 className="font-bold text-lg">Les Prêteurs</h3>
            <p className="text-sm opacity-90">Investisseurs particuliers</p>
          </div>
          <div className="p-4">
            <h4 className="font-semibold mb-2 text-sm">Profil type :</h4>
            <ul className="space-y-1 text-sm">
              <li>• Âge : 25-55 ans</li>
              <li>• Revenus : moyens à élevés</li>
              <li>• Objectif : diversification</li>
              <li>• Montant : 1 000-5 000 DT</li>
            </ul>
            <h4 className="font-semibold mt-3 mb-2 text-sm">Motivations :</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>📈 Rendement supérieur</li>
              <li>🤝 Soutien économie locale</li>
              <li>👁️ Transparence</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="font-bold text-lg">Les Emprunteurs</h3>
            <p className="text-sm opacity-90">Entreprises et particuliers</p>
          </div>
          <div className="p-4">
            <h4 className="font-semibold mb-2 text-sm">Profils :</h4>
            <ul className="space-y-1 text-sm">
              <li>• TPE/PME (70%)</li>
              <li>• Auto-entrepreneurs (20%)</li>
              <li>• Startups (10%)</li>
            </ul>
            <h4 className="font-semibold mt-3 mb-2 text-sm">Besoins :</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>💵 Trésorerie</li>
              <li>🔧 Équipement</li>
              <li>📈 Développement</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow overflow-hidden">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-4">
            <div className="text-3xl mb-2">🖥️</div>
            <h3 className="font-bold text-lg">Les Plateformes</h3>
            <p className="text-sm opacity-90">Intermédiaires numériques</p>
          </div>
          <div className="p-4">
            <h4 className="font-semibold mb-2 text-sm">Rôles :</h4>
            <ul className="space-y-1 text-sm">
              <li>• Mise en relation</li>
              <li>• Analyse de risque</li>
              <li>• Sécurisation paiements</li>
              <li>• Suivi des prêts</li>
            </ul>
            <h4 className="font-semibold mt-3 mb-2 text-sm">Revenus :</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>💳 Commissions (2-5%)</li>
              <li>📋 Frais de dossier</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
