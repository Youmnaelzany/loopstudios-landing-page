import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./mobile-menu";

export const navLinks = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Careers",
    link: "/",
  },
  {
    name: "Events",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
  },
  {
    name: "Support",
    link: "/",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-10 lg:px-[10.31rem] lg:py-16">
      <Image src="images/logo.svg" alt="logo" width={192} height={32} />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              className="relative transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-[0.125rem] hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
            >
              <Link
                href={navLink.link}
                className="font-[Alata] text-[0.9375rem] leading-[1.5625rem] font-normal text-white"
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
