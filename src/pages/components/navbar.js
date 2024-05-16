import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-purple-300 z-[999] p-5 mb-4 rounded-2xl sticky top-4 border-2 border-purple-500 bg-opacity-95 blurBorder">
      <div className="flex">
        <a href="/">
          <h1 className="navbarAnimation my-auto font-bold text-[22px] lg:text-3xl uppercase pr-2 mr-2 border-r-2 border-purple-500 lg:pr-5 lg:mr-5">
            Pugazhendhi
          </h1>
        </a>
        <span
          className="navbarAnimation my-auto mr-2 lg:hidden"
          onClick={() => setNav(!nav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </span>
        <div className="navbarAnimation my-auto">
          <ul className="hidden lg:flex uppercase font-bold">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                About
              </li>
            </NavLink>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Portfolio
              </li>
            </NavLink>
            <NavLink
              to="/feedback"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Feedback
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-5 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
        <a
          href="https://github.com/PugazhendhiDev/"
          className="navbarAnimation my-auto ml-auto flex text-white font-bold bg-red-400 p-1 rounded lg:rounded-xl lg:px-5 lg:py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1 className="hidden uppercase ml-2 lg:block">Hire</h1>
        </a>
      </div>
      {nav && (
        <div
          id="menu"
          className="mt-5 p-5 bg-white border-2 border-purple-500 rounded-2xl"
          onClick={() => setNav(!nav)}
        >
          <ul className="font-bold ">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">About</li>
            </NavLink>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Portfolio</li>
            </NavLink>
            <NavLink
              to="/feedback"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Feedback</li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="hover:text-purple-500">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
