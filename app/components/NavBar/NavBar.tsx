"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

type link = {
  linkText: string;
  href: string;
};

const baseLinks: link[] = [
  { linkText: "Jobs", href: "/jobs" },
  { linkText: "Companies", href: "/companies" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-gray-200 bg-[#e6e6e6] dark:bg-[#222]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center max-w-max">
          <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
            GO-SK
          </span>
        </Link>
        <HamburgerButton />
        <div className="hidden w-full md:block md:w-auto" id="menu">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-[#222] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-[#e6e6e6] md:p-0 md:dark:bg-[#222]">
            {baseLinks.map((link) => (
              <li key={link.href} className="flex text-lg font-semibold">
                <Link
                  href={link.href}
                  passHref
                  className={
                    pathname === link.href
                      ? " text-[#3758f9]"
                      : "text-gray-900 dark:text-gray-100"
                  }
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
