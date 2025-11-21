import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden border-t">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-gray-400/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-gray-400/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex w-full flex-col gap-12 py-16">
        <div className="flex flex-col gap-20 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <Link href="/" className="mb-4">
              <h2 className="font-heading text-2xl font-bold text-black">
                Curiosity.Builders
              </h2>
            </Link>
            <p className="mt-2 text-sm text-black">
              Plateforme d'accélération de vos projets de lieux.
              <br />
              Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
            </p>
          </div>
          <nav className="flex flex-col gap-20 md:flex-row">
            <div>
              <h3 className="font-heading text-sm font-semibold text-black">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/methode"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Méthode
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signals"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Signals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-black">
                Liens
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-confidentialite"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black transition-colors hover:text-gray-700"
                  >
                    Substack
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="w-full relative z-10 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-black">
            © 2025 Curiosity.Builders
            <br />
            Built with curiosity — for places with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
