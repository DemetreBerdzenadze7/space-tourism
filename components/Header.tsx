"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { number: "00", label: "Home", href: "/home", active: true },
  { number: "01", label: "Destination", href: "/destination", active: false },
  { number: "02", label: "Crew", href: "/crew", active: false },
  { number: "03", label: "Technology", href: "/technology", active: false },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 md:h-header md:p-0 md:pl-10">
      <Link href="/home" className="shrink-0">
        <Image
          src="/shared/logo.svg"
          alt="Space tourism logo"
          width={48}
          height={48}
          className="size-10 md:size-12"
        />
      </Link>

      <button
        type="button"
        aria-label="Open menu"
        className="md:hidden"
        onClick={() => setToggleMenu(true)}
      >
        <Image src="/shared/icon-hamburger.svg" alt="" width={24} height={21} />
      </button>

      <nav
        className={`fixed inset-y-0 right-0 z-20 w-64 bg-white/5 backdrop-blur-2xl md:hidden ${
          toggleMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex h-22 items-center justify-end px-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setToggleMenu(false)}
          >
            <Image src="/shared/icon-close.svg" alt="" width={20} height={21} />
          </button>
        </div>

        <ul className="mt-11 flex flex-col gap-7 pl-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-r-4 font-nav text-nav leading-normal tracking-nav text-white uppercase ${
                  link.active ? "border-white" : "border-transparent"
                }`}
              >
                <span className="mr-3 font-bold">{link.number}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="hidden h-full bg-white/5 pr-10 pl-30 backdrop-blur-2xl md:block">
        <ul className="flex h-full gap-12">
          {links.map((link) => (
            <li key={link.href} className="h-full">
              <Link
                href={link.href}
                className={`flex h-full items-center border-b-[3px] font-nav text-nav tracking-nav text-white uppercase ${
                  link.active ? "border-white" : "border-transparent"
                }`}
              >
                {link.number !== "00" && (
                  <span className="mr-3 font-bold">{link.number}</span>
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
