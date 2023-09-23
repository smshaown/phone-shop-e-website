import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Home
          </NavLink>
          ;
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Favorites
          </NavLink>
          ;
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Login
          </NavLink>
          ;
        </li>
      </ul>
    </div>
  );
};
