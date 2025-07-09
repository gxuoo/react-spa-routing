import NEWS_CATEGORYLIST from "../../../type/category";
import NavLink from "./NavLink";

const NavContainer = () => {
  return (
    <nav className="mt-2">
      <ul
        className="
          flex flex-col items-start gap-4
          overflow-y-auto max-h-[9.5rem]
          md:flex-row md:items-center md:space-x-4 md:gap-0 md:overflow-y-visible md:max-h-none"
      >
        {Object.entries(NEWS_CATEGORYLIST).map(([key, label]) => (
          <li key={key}>
            <NavLink href={`/${label}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavContainer;
