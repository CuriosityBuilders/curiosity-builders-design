import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-black">
              Curiosity.Builders
            </h2>
            <p className="mt-2 text-sm text-black">
              Plateforme d'accélération de vos projets de lieux.
              <br />
              Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
            </p>
          </div>

          {/* Links */}
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

          {/* Legal & Social */}
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
        </div>

        <div className="mt-8 border-t border-black/10 pt-8">
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
