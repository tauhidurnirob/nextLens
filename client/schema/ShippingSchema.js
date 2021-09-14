import * as yup from "yup";

const ShippingSchema = yup.object().shape({
  name: yup
    .string()
    .label("Name")
    .required()
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
  email: yup.string().required().email().label("Email"),
  phone: yup
    .string()
    .required()
    .label("Phone")
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(11, "Phone should be 11 digits"),
  withAccount: yup.boolean(),
  password: yup.string().when("withAccount", {
    is: true,
    then: yup
      .string()
      .required()
      .label("Password")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Minimum 5 digits"),
  }),

  address: yup.string().required().label("Address"),
  state: yup.string().required().label("State"),

  postalCode: yup
    .string()
    .required()
    .label("Postal Code")
    .min(5)
    .max(5, "Postal code should be 5 digits"),
  country: yup.string().required().label("Country"),
});

export default ShippingSchema;
