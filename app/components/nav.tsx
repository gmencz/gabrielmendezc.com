import { Link, NavLink } from "@remix-run/react";
import {
  FolderOpenIcon,
  BookOpenIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  FolderOpenIcon as FolderOpenIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  HomeIcon as HomeIconSolid,
} from "@heroicons/react/24/solid";
import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import clsx from "clsx";
import type { SVGProps } from "react";

const navigation = [
  {
    name: "Blog",
    to: "/blog",
    inactiveIcon: (props: SVGProps<SVGSVGElement>) => (
      <BookOpenIcon className="h-6 w-6" {...props} />
    ),
    activeIcon: (props: SVGProps<SVGSVGElement>) => (
      <BookOpenIconSolid className="h-6 w-6" {...props} />
    ),
  },
  {
    name: "Projects",
    to: "/projects",
    inactiveIcon: (props: SVGProps<SVGSVGElement>) => (
      <FolderOpenIcon className="h-6 w-6" {...props} />
    ),
    activeIcon: (props: SVGProps<SVGSVGElement>) => (
      <FolderOpenIconSolid className="h-6 w-6" {...props} />
    ),
  },
];

const mobileNavigation = [
  {
    name: "Home",
    to: "/",
    inactiveIcon: (props: SVGProps<SVGSVGElement>) => (
      <HomeIcon className="h-6 w-6" {...props} />
    ),
    activeIcon: (props: SVGProps<SVGSVGElement>) => (
      <HomeIconSolid className="h-6 w-6" {...props} />
    ),
  },
  ...navigation,
];

export function Nav() {
  return (
    <header className="bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-xl sticky inset-x-0 top-0 px-6 py-4 border-b dark:border-b-neutral-700 border-b-neutral-300">
      <nav className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl hover:underline hover:underline-offset-2 hover:decoration-1 dark:hover:text-neutral-300 hover:text-neutral-700"
        >
          Gabriel Mendez
        </Link>

        <ul className="flex items-center gap-4">
          {navigation.map((item) => (
            <li className="hidden md:flex" key={item.name}>
              <NavLink
                to={item.to}
                className="flex items-center gap-2 group p-2 rounded-xl"
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <item.activeIcon /> : <item.inactiveIcon />}
                    <span className="font-semibold group-hover:underline group-hover:underline-offset-2 group-hover:decoration-1 dark:group-hover:text-neutral-300 group-hover:text-neutral-700">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2">
          <li>
            <a
              href="https://github.com/gmencz"
              className="flex items-center dark:hover:text-neutral-300 hover:text-neutral-700 hover:ring-1 dark:ring-neutral-700 ring-neutral-300 p-2 rounded-xl"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">My Github</span>
            </a>
          </li>

          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function MobileNav() {
  return (
    <div className="px-6 block md:hidden backdrop-blur-xl pt-2 pb-1 fixed inset-x-0 bottom-0 border-t dark:border-t-neutral-700 border-t-neutral-300 bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100">
      <nav className="w-full max-w-xs mx-auto flex items-center justify-center">
        <ul className="w-full flex items-center justify-between">
          {mobileNavigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "flex flex-col items-center gap-1 group p-2 rounded-xl dark:hover:text-neutral-300 hover:text-neutral-700",
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-600 dark:text-neutral-400"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <item.activeIcon /> : <item.inactiveIcon />}
                    <span className="text-sm font-semibold">{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
