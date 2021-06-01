import React from "react";

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HomePage</NavLink> {" | "}
        <NavLink to="/pending">Pending </NavLink> {" | "}
        <NavLink to="/completed">Completed </NavLink>
      </nav>
    </div>
  );
};

export default Header;
