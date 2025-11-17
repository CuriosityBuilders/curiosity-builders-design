import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Méthode", href: "/methode" },
  { name: "Services", href: "/services" },
  { name: "Signals", href: "/signals" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between border border-white/10 bg-white/30 px-20 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-150">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/LOGO CURIOSITY HD_Balloons_Deep Black.png"
            alt="Curiosity.Builders"
            width={120}
            height={40}
            className="h-12 w-auto sm:h-16"
            priority
          />
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-black transition-colors duration-200 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Log In & Sign Up */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button
              href="/contact"
              variant="primary"
              className="rounded-lg px-5 py-2.5 text-sm font-medium"
            >
              Contact
            </Button>
          </div>
          {/* Mobile menu button */}
          <Button
            type="button"
            variant="secondary"
            className="text-black md:hidden"
            aria-label="Menu"
          >
            ☰
          </Button>
        </div>
      </nav>
    </header>
  );
}
