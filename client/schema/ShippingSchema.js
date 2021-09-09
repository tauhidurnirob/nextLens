import * as yup from "yup";

const shippingSchema = yup.object().shape({
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
  password: yup
    .string()
    .required()
    .label("Password")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Minimum 5 digits"),
  address: yup.string().required().label("Address"),
  location: yup.string().required().label("Location"),
  zipCode: yup.string().required().label("Zip Code"),
  country: yup.string().required().label("Country"),
});

export default shippingSchema;
