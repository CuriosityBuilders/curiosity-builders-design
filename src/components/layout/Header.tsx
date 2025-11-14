import Link from "next/link";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Méthode", href: "/methode" },
  { name: "Services", href: "/services" },
  { name: "Signals", href: "/signals" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-heading font-bold text-black">
          Curiosity.Builders
        </Link>
        <div className="hidden space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black transition-colors hover:text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu button - à implémenter si nécessaire */}
        <div className="md:hidden">
          <button type="button" className="text-black" aria-label="Menu">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
