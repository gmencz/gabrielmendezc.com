import { Link, NavLink } from "@remix-run/react";
import { FolderOpenIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { GithubIcon } from "./github-icon";
import { ThemeSwitch } from "./theme-switch";

const navigation = [
  {
    name: "Blog",
    to: "/blog",
    icon: () => <BookOpenIcon className="h-5 w-5" />,
  },
  {
    name: "Projects",
    to: "/projects",
    icon: () => <FolderOpenIcon className="h-5 w-5" />,
  },
  {
    name: "KG",
    to: "/kg",
    icon: () => <span className="h-4 w-4 flex items-center mr-1">🤖</span>,
  },
];

export function Nav() {
  return (
    <header className="px-10 py-4 border-b dark:border-b-neutral-700 border-b-neutral-300">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl hover:underline hover:underline-offset-2 hover:decoration-1 dark:hover:text-neutral-300 hover:text-neutral-700"
        >
          Gabriel Mendez
        </Link>

        <ul className="flex items-center gap-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className="flex items-center gap-2 group p-2 rounded-xl"
              >
                <item.icon />
                <span className="font-semibold group-hover:underline group-hover:underline-offset-2 group-hover:decoration-1 dark:group-hover:text-neutral-300 group-hover:text-neutral-700">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}

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
      </div>
    </header>
  );
}
