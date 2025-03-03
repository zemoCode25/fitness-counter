import { NavLink } from "react-router";
export function Header() {
  return (
    <header className="py-5">
      <nav>
        <ul className="flex gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            Steps
          </NavLink>
          <span className="block w-0.5 h-5 bg-black"></span>
          <NavLink
            to="/records"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            Records
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
