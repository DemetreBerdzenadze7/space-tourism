"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 [view-transition-name:site-header] md:h-header md:p-0 md:pl-10 lg:top-10 lg:pl-16">
      <Link
        href="/home"
        transitionTypes={["nav-page"]}
        className="shrink-0"
        onClick={closeMenu}
      >
        <Image
          src="/shared/logo.svg"
          alt="Space tourism logo"
          width={48}
          height={48}
          className="size-10 md:size-12"
        />
      </Link>

      <span className="ml-16 hidden h-px flex-1 bg-white/25 lg:block" />

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
          <button type="button" aria-label="Close menu" onClick={closeMenu}>
            <Image src="/shared/icon-close.svg" alt="" width={20} height={21} />
          </button>
        </div>

        <NavLinks variant="mobile" onNavigate={closeMenu} />
      </nav>

      <nav className="hidden h-full shrink-0 bg-white/5 pr-10 backdrop-blur-2xl md:block md:w-160 lg:w-176 lg:pr-16">
        <NavLinks variant="tablet" />
      </nav>
    </header>
  );
};

export default Header;
