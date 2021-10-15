// Library Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// Initial Data Import
import { initialFormValues, initialErrorValues } from "./../data/initialData";
// Schema Import
import pizzaFormSchema from "../schemas/pizzaFormSchema";

const PizzaForm = () => {
  // State Management
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrorValues);
  const [disabled, setDisabled] = useState(true);
  const [orders, setOrders] = useState([]);

  const postOrder = (pizzaOrder) => {
    axios
      .post("https://reqres.in/api/orders", pizzaOrder)
      .then(() => {
        // Update orders state
        setOrders([...orders, pizzaOrder]);
        // Clearning Form Inputs
        setFormValues(initialFormValues);
      })
      .catch((error) => {
        console.error(error);
        // Clearing Form Inputs
        setFormValues(initialFormValues);
      });
  };

  // Handlers
  const validate = (name, value) => {
    yup
      .reach(pizzaFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const newInputValue = type === "checkbox" ? checked : value;
    //
    validate(name, newInputValue);
    setFormValues({ ...formValues, [name]: newInputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pizzaOrder = {
      buyer: formValues.buyer.trim(),
      pizzaSize: formValues.pizzaSize,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadianBacon: formValues.canadianBacon,
      spicyItalianSausage: formValues.spicyItalianSausage,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      dicedTomatoes: formValues.dicedTomatoes,
      blackOlives: formValues.blackOlives,
      roastedGarlic: formValues.roastedGarlic,
      artichokeHearts: formValues.artichokeHearts,
      threeCheese: formValues.threeCheese,
      pineapple: formValues.pineapple,
      extraCheese: formValues.extraCheese,
      glutenFreeCrust: formValues.glutenFreeCrust,
      specialInstructions: formValues.specialInstructions,
    };
    postOrder(pizzaOrder);
  };

  // Get orders on mount
  useEffect(() => {
    axios
      .get("https://reqres.in/api/orders")
      .then((response) => {
        setOrders(response.data.data);
        console.log("got order list", response.data.data);
      })
      .catch((error) => {
        console.error("couldn't get orders", error);
      });
  }, []);

  // Disable/Enable button if form is valid
  useEffect(() => {
    pizzaFormSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
      <form id="pizza-form" onSubmit={handleSubmit}>
        {/* Buyers Name Input */}
        <p>{formErrors.buyer}</p>
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
          Size:
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
        <button id="submit-order" disabled={disabled}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PizzaForm;
