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
        <div className="pizzaChoiceLabel">
          <h3>Choice of Size</h3>
          <p>Required.</p>
        </div>
        <label>
          <select id="size-dropdown" name="pizzaSize">
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
          <input type="radio" name="sauce" value="Original Red" />
          Original Red
        </label>
        <label>
          <input type="radio" name="sauce" value="Garlic Ranch" />
          Garlic Ranch
        </label>
        <label>
          <input type="radio" name="sauce" value="BBQ Sauce" />
          BBQ Sauce
        </label>
        <label>
          <input type="radio" name="sauce" value="Spinach Alfredo" />
          Spinach Alfredo
        </label>
        {/* Pizza Topping Inputs */}
        <div className="pizzaChoiceLabel">
          <h3>Add Toppings</h3>
          <p>Choose up to 10.</p>
        </div>
        <label>
          <input type="checkbox" name="pepperoni" />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" />
          Saucage
        </label>
        <label>
          <input type="checkbox" name="canadianBacon" />
          Canadian Bacon
        </label>
        <label>
          <input type="checkbox" name="spicyItalianSausage" />
          Spicy Italian Sausage
        </label>
        <label>
          <input type="checkbox" name="grilledChicker" />
          Grilled Chicker
        </label>
        <label>
          <input type="checkbox" name="onions" />
          Onions
        </label>
        <label>
          <input type="checkbox" name="greenPepper" />
          Green Pepper
        </label>
        <label>
          <input type="checkbox" name="dicedTomatos" />
          Diced Tomatos
        </label>
        <label>
          <input type="checkbox" name="blackOlives" />
          Black Olives
        </label>
        <label>
          <input type="checkbox" name="roastedGarlic" />
          Roasted Garlic
        </label>
        <label>
          <input type="checkbox" name="artichokeHearts" />
          Artichoke Hearts
        </label>
        <label>
          <input type="checkbox" name="threeCheese" />
          Three Cheese
        </label>
        <label>
          <input type="checkbox" name="pineapple" />
          Pineapple
        </label>
        <label>
          <input type="checkbox" name="extraCheese" />
          Extra Cheese
        </label>
        {/* Crust Substitute Input */}
        <div className="pizzaChoiceLabel">
          <h3>Choice of Substitute</h3>
          <p>Choose up to 1.</p>
        </div>
        <label>
          <input type="checkbox" name="glutenFreeCrust" />
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
        />
        <button id="submit-order">Place Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
