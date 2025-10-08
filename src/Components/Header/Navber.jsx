import { Link, NavLink } from "react-router";
import logo from "./../../assets/logo.png";
import github from "./../../assets/fi_2111432.png";
import "./Navber.css";
const Navber = () => {
  const link = (
    <>
      <NavLink className={`{}`} to={"/"}>
        {" "}
        Home
      </NavLink>
      <NavLink className={"ml-2"} to={"/apps"}>
        {" "}
        Apps
      </NavLink>
      <NavLink className={"ml-2"} to={"/installation"}>
        {" "}
        Installation
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-[80px]">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="btn btn-ghost text-xl">
              <img className="w-10 h-10" src={logo} alt="" /> HERO.IO
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"https://github.com/souravhalder-dev"}>
            <div className="btn font-semibold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
              <img className="w-5 h-5  " src={github} alt="" /> Contribute
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
