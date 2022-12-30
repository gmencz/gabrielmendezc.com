import { NavLink } from "@remix-run/react";

const activeClassName = "text-slate-50 font-semibold text-lg";
const inactiveClassName =
  "text-slate-400 font-semibold hover:text-slate-200 text-lg";

export function Nav() {
  return (
    <nav className="mb-16 flex items-center">
      <ul className="flex gap-8 mr-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Contact
        </NavLink>
      </ul>

      <a href="https://github.com/gmencz">
        <span className="sr-only">Visit my GitHub</span>
        <img src="/images/github.png" alt="GitHub" className="ml-4 w-12" />
      </a>
    </nav>
  );
}
