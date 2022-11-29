import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import AuthNav from "./auth-nav";

const Navigation = ({ name }) => {
  return (
    <div>
      <div>Welcome to Navigation, {name}!</div>
      <nav className="nav">
        <Link to="/" className="site-title">
          INTERNET MUSEUM DATABASE
        </Link>
        <ul>
          <CustomLink to="/search">Search</CustomLink>
          <CustomLink to="/details">Details</CustomLink>
        </ul>
        <AuthNav />
      </nav>
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
