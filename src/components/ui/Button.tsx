import { Link } from "@/i18n/routing";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted" | "secondary-inverted";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-colors";
  const variantClasses = {
    primary:
      "bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
    secondary:
      "border border-black/90 bg-white text-black hover:border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
    inverted:
      "bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
    "secondary-inverted":
      "border border-white/90 bg-transparent text-white hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    // Use standard <a> for external links (mailto:, http://, https://)
    const isExternalLink =
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isExternalLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    // Use Link component for internal routes
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
