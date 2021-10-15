// Library Imports
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div>
        <div>
          <h1>Lambda Eats</h1>
        </div>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/pizza/"}>Order Pizza</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
