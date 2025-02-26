import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "./Header";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-10 text-white" />
        </SheetTrigger>
        <SheetContent side="right" className="px-6">
          <SheetHeader className="pt-10">
            <SheetTitle>
              <Image src="images/logo.svg" alt="logo" width={192} height={32} />
            </SheetTitle>
            <SheetDescription>
              <nav className="pt-[9.94rem]">
                <ul className="flex flex-col gap-y-6">
                  {navLinks.map((navLink) => (
                    <li key={navLink.name}>
                      <Link
                        href={navLink.link}
                        className="font-[Josefin_Sans] text-2xl leading-[1.5625rem] font-normal text-white"
                      >
                        {navLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
