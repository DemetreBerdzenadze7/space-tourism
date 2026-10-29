"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { destinations } from "../data/destination";

const links = [
  { number: "00", label: "Home", href: "/home" },
  {
    number: "01",
    label: "Destination",
    href: `/destination/${destinations[0].name.toLowerCase()}`,
  },
  { number: "02", label: "Crew", href: "/crew" },
  { number: "03", label: "Technology", href: "/technology" },
];

// "/destination/moon" → "/destination"
const section = (path: string) => `/${path.split("/")[1]}`;

type Props = {
  variant: "mobile" | "tablet";
  onNavigate?: () => void;
};

const NavList = ({
  variant,
  onNavigate,
  pathname,
}: Props & { pathname: string | null }) => {
  if (variant === "mobile") {
    return (
      <ul className="mt-11 flex flex-col gap-7 pl-8">
        {links.map((link) => {
          const active =
            pathname !== null && section(pathname) === section(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                transitionTypes={["nav-page"]}
                className="relative block font-nav text-nav leading-normal tracking-nav text-white uppercase"
                onClick={onNavigate}
              >
                <span className="mr-3 font-bold">{link.number}</span>
                {link.label}
                {active && (
                  <span className="absolute inset-y-0 right-0 w-1 bg-white" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex h-full gap-12">
      {links.map((link) => {
        const active =
          pathname !== null && section(pathname) === section(link.href);

        return (
          <li key={link.href} className="h-full">
            <Link
              href={link.href}
              transitionTypes={["nav-page"]}
              className={`relative flex h-full items-center font-nav text-nav tracking-nav text-white uppercase ${
                active ? "" : "nav-hover-line"
              }`}
              onClick={onNavigate}
            >
              {link.number !== "00" && (
                <span className="mr-3 font-bold">{link.number}</span>
              )}
              {link.label}
              {active && (
                <ViewTransition
                  name="nav-indicator"
                  share="indicator"
                  default="none"
                >
                  <span className="absolute inset-x-0 bottom-0 h-0.75 bg-white" />
                </ViewTransition>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const ActiveNavList = (props: Props) => {
  const pathname = usePathname();
  return <NavList {...props} pathname={pathname} />;
};

const NavLinks = (props: Props) => {
  return (
    <Suspense fallback={<NavList {...props} pathname={null} />}>
      <ActiveNavList {...props} />
    </Suspense>
  );
};

export default NavLinks;
