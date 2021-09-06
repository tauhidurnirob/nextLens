import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .label("Name")
    .required()
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
  email: yup.string().required().email().label("Email"),
  description: yup
    .string()
    .required()
    .label("Description")
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
});

export default contactSchema;
