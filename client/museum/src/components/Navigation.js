import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import UserComponent from "./components/UserComponent";
// import MuseumComponent from "./components/MuseumComponent";
import Details from "./Details";
import Search from "./Search";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MuseumComponent from "./MuseumComponent";

const Navigation = ({ name }) => {
  return (
    <div>

    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation;
