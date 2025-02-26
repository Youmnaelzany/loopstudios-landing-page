import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import { navLinks } from "./Header";

export default function Footer() {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center gap-y-12 bg-black px-6 py-14 lg:flex-row lg:justify-between lg:px-40 lg:py-12">
      {/* Logo & Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-y-8 lg:items-start lg:justify-start">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={192}
            height={32}
            priority
          />
        </Link>
        <nav aria-label="Main navigation" className="">
          <ul className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-8">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link
                  href={navLink.link}
                  className="relative font-[Alata] text-[0.9375rem] leading-[1.5625rem] font-normal text-white transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Social Media Links & Copyrights */}
      <div className="flex flex-col items-center justify-center gap-y-4 lg:items-end lg:justify-end lg:gap-y-10">
        {/* Social Media Links */}
        <div className="flex w-36 items-center justify-center gap-x-4">
          <Link
            href="/"
            className="relative transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
          >
            <FaFacebookF className="size-5 text-white" />
          </Link>
          <Link
            href="/"
            className="relative transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
          >
            <FaTwitter className="size-5 text-white" />
          </Link>
          <Link
            href="/"
            className="relative transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
          >
            <FaInstagram className="size-5 text-white" />
          </Link>
          <Link
            href="/"
            className="relative transition-all duration-300 ease-in-out hover:after:absolute hover:after:right-0 hover:after:-bottom-2 hover:after:left-0 hover:after:mx-auto hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-white hover:after:content-['']"
          >
            <FaTelegramPlane className="size-5 text-white" />
          </Link>
        </div>
        <h3 className="font-[Alata] text-[0.9375rem] leading-[1.5625rem] font-normal text-white/50">
          © 2021 Loopstudios. All rights reserved.
        </h3>
      </div>
    </footer>
  );
}
