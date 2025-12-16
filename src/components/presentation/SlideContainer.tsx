import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "cover" | "gradient";
}

export const SlideContainer = ({ children, className, variant = "default" }: SlideContainerProps) => {
  const variants = {
    default: "bg-card",
    cover: "gradient-primary text-primary-foreground",
    gradient: "gradient-accent text-primary-foreground",
  };

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-xl shadow-xl p-8 md:p-12 overflow-auto animate-fade-in",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

export const SlideTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2
    className={cn(
      "text-2xl md:text-4xl font-bold mb-4 relative pb-4",
      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:rounded-full after:gradient-primary",
      className
    )}
  >
    {children}
  </h2>
);

export const SlideSubtitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-lg md:text-xl text-muted-foreground mb-6 font-medium", className)}>
    {children}
  </p>
);
