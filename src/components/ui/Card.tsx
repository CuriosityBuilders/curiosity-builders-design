import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const baseClasses =
    "rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-all";
  const hoverClasses = hover ? "hover:border-black/20 hover:shadow-md" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
