// Library Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const PizzaForm = (props) => {
  // State Management

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const newInputValue = type === "checkbox" ? checked : value;
  };
  // Returning Pizza Form
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
            onChange={handleChange}
          />
        </label>
        {/* Pizza Size Input */}
        <div className="pizzaChoiceLabel">
          <h3>Choice of Size</h3>
          <p>Required.</p>
        </div>
        <label>
          <select id="size-dropdown" name="pizzaSize" onChange={handleChange}>
            <option value="unSelected">--Select Pizza Sizing--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        {/* Pizza Sauce Input */}
        <div className="pizzaChoiceLabel">
          <h3>Choice of Sauce</h3>
          <p>Required.</p>
        </div>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            onChange={handleChange}
          />
          Original Red
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Garlic Ranch"
            onChange={handleChange}
          />
          Garlic Ranch
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce"
            onChange={handleChange}
          />
          BBQ Sauce
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo"
            onChange={handleChange}
          />
          Spinach Alfredo
        </label>
        {/* Pizza Topping Inputs */}
        <div className="pizzaChoiceLabel">
          <h3>Add Toppings</h3>
          <p>Choose up to 10.</p>
        </div>
        <label>
          <input type="checkbox" name="pepperoni" onChange={handleChange} />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" onChange={handleChange} />
          Saucage
        </label>
        <label>
          <input type="checkbox" name="canadianBacon" onChange={handleChange} />
          Canadian Bacon
        </label>
        <label>
          <input
            type="checkbox"
            name="spicyItalianSausage"
            onChange={handleChange}
          />
          Spicy Italian Sausage
        </label>
        <label>
          <input
            type="checkbox"
            name="grilledChicker"
            onChange={handleChange}
          />
          Grilled Chicker
        </label>
        <label>
          <input type="checkbox" name="onions" onChange={handleChange} />
          Onions
        </label>
        <label>
          <input type="checkbox" name="greenPepper" onChange={handleChange} />
          Green Pepper
        </label>
        <label>
          <input type="checkbox" name="dicedTomatos" onChange={handleChange} />
          Diced Tomatos
        </label>
        <label>
          <input type="checkbox" name="blackOlives" onChange={handleChange} />
          Black Olives
        </label>
        <label>
          <input type="checkbox" name="roastedGarlic" onChange={handleChange} />
          Roasted Garlic
        </label>
        <label>
          <input
            type="checkbox"
            name="artichokeHearts"
            onChange={handleChange}
          />
          Artichoke Hearts
        </label>
        <label>
          <input type="checkbox" name="threeCheese" onChange={handleChange} />
          Three Cheese
        </label>
        <label>
          <input type="checkbox" name="pineapple" onChange={handleChange} />
          Pineapple
        </label>
        <label>
          <input type="checkbox" name="extraCheese" onChange={handleChange} />
          Extra Cheese
        </label>
        {/* Crust Substitute Input */}
        <div className="pizzaChoiceLabel">
          <h3>Choice of Substitute</h3>
          <p>Choose up to 1.</p>
        </div>
        <label>
          <input
            type="checkbox"
            name="glutenFreeCrust"
            onChange={handleChange}
          />
          Gluten Free Crust
        </label>
        {/* Special Instructions Input */}
        <div className="pizzaChoiceLabel">
          <h3>Special Instructions</h3>
        </div>
        <input
          id="special-text"
          type="text"
          name="specialInstructions"
          placeholder="Anything else you would like to add?"
          onChange={handleChange}
        />
        {/* Submit Order Button */}
        <button id="submit-order">Place Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
