// Library Import
import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
  buyer: yup
    .string()
    .trim()
    .required("Please write out your name")
    .min(2, "name must be at least 2 characters"),
  pizzaSize: yup
    .string()
    .oneOf(["small", "medium", "large"], "Please choose a size"),
  sauce: yup
    .string()
    .oneOf(
      ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"],
      "Please pick a sauce"
    ),
  // Toppings (checkboxes)
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicker: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
  // Crust Substitute (checkbox)
  glutenFreeCrust: yup.boolean(),
  // Special Instructions
  specialInstructions: yup.string().trim(),
});

export default pizzaFormSchema;
