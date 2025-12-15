"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Empêcher le scroll du body quand la modale est ouverte
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Overlay - Button pour l'accessibilité */}
      <button
        type="button"
        className="absolute inset-0 bg-black/50 ring-1 backdrop-blur-xl border-0 cursor-pointer"
        onClick={onClose}
        aria-label="Fermer la modale"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-xl rounded-lg">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-black/10 bg-white px-6 py-4 rounded-lg">
          {title && (
            <h2
              id="modal-title"
              className="font-heading text-3xl font-bold text-black mt-2"
            >
              {title}
            </h2>
          )}
          <button
            type="button"
            onClick={onClose}
            className={`rounded-full p-2 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors ${
              title ? "" : "ml-auto"
            }`}
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
