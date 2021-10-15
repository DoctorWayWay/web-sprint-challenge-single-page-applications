// Library Import
import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
  buyer: yup
    .string()
    .trim()
    .required("Please write out your name")
    .min(2, "Name cannot be less that 2 characters"),
});
