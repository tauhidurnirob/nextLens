import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/[A-Za-z]+$/gi, "Must be only letters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Minimum 5 digits"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default registerSchema;
