import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="shadow-md">
      <nav className="container flex justify-between items-center mx-auto py-6">
        <div>
          <h2 className="text-xl font-semibold">Phone Shop</h2>
        </div>
        <ul className="flex gap-5">
          <li className="text-lg font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 hover:text-teal-400 underline"
                  : "hover:text-teal-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400  underline"
                  : "hover:text-teal-400"
              }
            >
              Favorites
            </NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 hover:text-teal-400 underline"
                  : "hover:text-teal-400"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
