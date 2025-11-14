import Image from "next/image";
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
    <header className="sticky top-0 z-50">
      {/* Subtle Glass Effect Background */}
      <div className="absolute inset-0 border-b border-black/10 bg-white/80 backdrop-blur-md shadow-sm" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/LOGO CURIOSITY HD_Balloons_Deep Black.png"
            alt="Curiosity.Builders"
            width={120}
            height={40}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>
        <div className="hidden space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md font-medium text-black transition-all duration-200 hover:text-gray-700 hover:scale-105"
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
