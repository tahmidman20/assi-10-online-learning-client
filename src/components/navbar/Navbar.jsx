import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully signed out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-bold text-md underline"
              : "text-blue-500 font-semibold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-bold text-md underline"
              : "text-blue-500 font-semibold"
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="font-semibold text-blue-500"
          >
            Dashboard
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-bold text-md underline"
                  : "text-blue-500 font-semibold"
              }
              to="/myEnrolledCourse"
            >
              <p> My enrolled course</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-bold text-md underline"
                  : "text-blue-500 font-semibold"
              }
              to="/add-course"
            >
              <p> Add course</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-bold text-md underline"
                  : "text-blue-500 font-semibold"
              }
              to="/my-added-course"
            >
              <p>My added course etc.</p>
            </NavLink>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap mx-10">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              Online
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              Learning
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
              Platform
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-blue-500">{links}</ul>
        </div>
        <div className="navbar-end mx-10">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-primary text-lg">
              Sign Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn  bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
