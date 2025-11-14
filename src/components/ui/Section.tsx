import type { CSSProperties, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  spacing?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function Section({
  children,
  spacing = "md",
  className = "",
  id,
  style,
}: SectionProps) {
  const spacingClasses = {
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
  };

  return (
    <section id={id} className={`${spacingClasses[spacing]} ${className}`} style={style}>
      {children}
    </section>
  );
}
