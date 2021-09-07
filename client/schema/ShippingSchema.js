import * as yup from "yup";

const shippingSchema = yup.object().shape({
  name: yup
    .string()
    .label("Name")
    .required()
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
  email: yup.string().required().email().label("Email"),
  address: yup.string().required().label("Address"),
  postalCode: yup.string().required().label("Postal Code"),
  country: yup.string().required().label("Country"),
  description: yup
    .string()
    .required()
    .label("Description")
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
});

export default shippingSchema;
