import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Minimum 5 digits"),
});

export default loginSchema;
