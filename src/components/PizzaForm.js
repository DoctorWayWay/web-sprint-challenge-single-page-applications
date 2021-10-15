// Library Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

const PizzaForm = (props) => {
  return (
    <div>
      {/* Intro to form */}
      <div>
        <h2>Build Your Own Pizza</h2>
      </div>
      <div>
        <img
          src="/assets/Pizza.jpg"
          alt="A delicious cheese pizza with some spinach on it."
        />
      </div>
      {/* FORM */}
      <form id="pizza-form">
        {/* Buyers Name Input */}
        <label>
          Name:
          <input
            id="name-input"
            type="text"
            name="buyer"
            placeholder="First Name"
          />
        </label>
        {/* Pizza Size Input */}
        <label>
          Pizza Size:
          <select id="size-dropdown" name="pizzaSize">
            <option value="unSelected">--Choose Pizza Sizing--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default PizzaForm;
