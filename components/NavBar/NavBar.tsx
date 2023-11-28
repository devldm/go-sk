// export default function NavBar() {
//   return (
//     <div className="w-full bg-[#222]">
//       <div className="flex items-center justify-between m-auto flex-row md:w-[80%] w-[90%]">
//         <div className="min-w-max max-w-max my-6">
//           <Link href="/" className="">
//             <h2 className="text-3xl font-bold">GO-SK</h2>
//           </Link>
//         </div>
//         <div className="w-full lg:w-[60%] text-right flex justify-between items-center">
//           <Link href="/jobs" className="text-xl font-bold">
//             COMPANIES
//           </Link>
//           <Link
//             href="/english-speaking-companies"
//             className="text-xl font-bold"
//           >
//             JOBS
//           </Link>
//           <Link href="/jobUpload" className="hidden md:block ">
//             <Button buttonText="Upload a role" />
//           </Link>
//         </div>
//       </div>
//     </div>
// );
//}

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
    <nav className="border-gray-200 bg-white dark:bg-[#222]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center max-w-max">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            GO-SK
          </span>
        </Link>
        <HamburgerButton />
        <div className="hidden w-full md:block md:w-auto" id="menu">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-[#222] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-[#222]">
            {baseLinks.map((link) => (
              <li key={link.href} className="flex text-xl">
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
