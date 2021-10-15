// Library Imports
import React from "react";
import { Link } from "react-router-dom";
// Component Imports
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div>
        {/* Image will be set to a background image on the div containing the image element */}
        <img
          src="/assets/Pizza.jpg"
          alt="A delicious cheese pizza with some spinach on it."
        />
        <h2>Your favorite food, delivered while coding</h2>
        <button>
          <Link id="order-pizza" to={"/pizza"}>
            Build a Pizza!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
