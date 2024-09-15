import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/msc">MSC </Link>
        </li>
        <li>
          <Link to="/costa">Costa </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
