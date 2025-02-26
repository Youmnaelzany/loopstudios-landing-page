import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./mobile-menu";

export const navLinks = [
  { name: "About", link: "/" },
  { name: "Careers", link: "/" },
  { name: "Events", link: "/" },
  { name: "Products", link: "/" },
  { name: "Support", link: "/" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-10 lg:px-40 lg:py-16">
      <Link href="/" aria-label="Home">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={192}
          height={32}
          priority
        />
      </Link>

      <nav aria-label="Main navigation" className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                href={navLink.link}
                className="relative font-[Alata] text-base text-white hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
}
