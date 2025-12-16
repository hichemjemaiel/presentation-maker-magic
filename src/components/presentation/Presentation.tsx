import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { CoverSlide } from "./slides/CoverSlide";
import { TableOfContentsSlide } from "./slides/TableOfContentsSlide";
import { DefinitionSlide } from "./slides/DefinitionSlide";
import { HistorySlide } from "./slides/HistorySlide";
import { TunisianContextSlide } from "./slides/TunisianContextSlide";
import { ActorsSlide } from "./slides/ActorsSlide";
import { ProcessSlide } from "./slides/ProcessSlide";
import { TypesSlide } from "./slides/TypesSlide";
import { PlatformsSlide } from "./slides/PlatformsSlide";
import { InvestorAdvantagesSlide } from "./slides/InvestorAdvantagesSlide";
import { BorrowerAdvantagesSlide } from "./slides/BorrowerAdvantagesSlide";
import { RisksSlide } from "./slides/RisksSlide";
import { RegulationSlide } from "./slides/RegulationSlide";
import { CaseStudiesSlide } from "./slides/CaseStudiesSlide";
import { InternationalComparisonSlide } from "./slides/InternationalComparisonSlide";
import { FuturePerspectivesSlide } from "./slides/FuturePerspectivesSlide";
import { ConclusionSlide } from "./slides/ConclusionSlide";

import { ThankYouSlide } from "./slides/ThankYouSlide";

const slides = [
  { id: 1, component: CoverSlide, title: "Couverture" },
  { id: 2, component: TableOfContentsSlide, title: "Plan du cours" },
  { id: 3, component: DefinitionSlide, title: "Définition" },
  { id: 4, component: HistorySlide, title: "Historique" },
  { id: 5, component: TunisianContextSlide, title: "Contexte tunisien" },
  { id: 6, component: ActorsSlide, title: "Acteurs" },
  { id: 7, component: ProcessSlide, title: "Processus" },
  { id: 8, component: TypesSlide, title: "Types" },
  { id: 9, component: PlatformsSlide, title: "Plateformes" },
  { id: 10, component: InvestorAdvantagesSlide, title: "Avantages investisseurs" },
  { id: 11, component: BorrowerAdvantagesSlide, title: "Avantages emprunteurs" },
  { id: 12, component: RisksSlide, title: "Risques" },
  { id: 13, component: RegulationSlide, title: "Réglementation" },
  { id: 14, component: CaseStudiesSlide, title: "Études de cas" },
  { id: 15, component: InternationalComparisonSlide, title: "Comparaison internationale" },
  { id: 16, component: FuturePerspectivesSlide, title: "Perspectives" },
  { id: 17, component: ConclusionSlide, title: "Conclusion" },

  { id: 20, component: ThankYouSlide, title: "Merci" },
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= slides.length) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen gradient-bg p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-card rounded-xl shadow-lg p-4 mb-4 flex justify-between items-center border-l-4 border-primary">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              💰
            </div>
            <div>
              <h1 className="text-lg font-bold">Le Crowdlending en Tunisie</h1>
              <p className="text-sm text-muted-foreground">Cours Complet</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-muted-foreground">Slide {currentSlide + 1} / {slides.length}</p>
              <p className="font-semibold">{slides[currentSlide].title}</p>
            </div>
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              {currentSlide + 1}
            </div>
          </div>
        </header>

        {/* Slide Container */}
        <div className="relative min-h-[70vh] mb-4">
          <CurrentSlideComponent />
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-lg",
              "bg-card text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Précédent</span>
          </button>

          <div className="flex gap-2 flex-wrap justify-center max-w-md">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-3 rounded-full transition-all",
                  index === currentSlide 
                    ? "w-8 bg-primary" 
                    : "w-3 bg-muted-foreground/30 hover:bg-primary/50"
                )}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-lg",
              "gradient-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <span className="hidden sm:inline">
              {currentSlide === slides.length - 1 ? "Fin" : "Suivant"}
            </span>
            <ChevronRight size={20} />
          </button>
        </nav>

        {/* Footer */}
        
      </div>
    </div>
  );
};
