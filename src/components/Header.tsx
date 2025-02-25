import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
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
  return (
    <header className="flex items-center justify-between px-6 py-10 lg:px-[10.31rem] lg:py-16">
      <Image src="images/logo.svg" alt="logo" width={192} height={32} />
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link href={navLink.link} className="text-[0.9375rem] text-white leading-[1.5625rem] font-normal font-[Alata]">{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}