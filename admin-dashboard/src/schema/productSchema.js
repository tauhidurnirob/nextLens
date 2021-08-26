import * as yup from "yup";

const productSchema = yup.object().shape({
  title: yup.string().required().label("Title"),
  description: yup.string().required().label("Description"),
  price: yup
    .string()
    .required()
    .label("Price")
    .matches(/^[0-9]+$/, "Must be only digits"),
  salesPrice: yup
    .string()
    .required()
    .label("Sales Price")
    .matches(/^[0-9]+$/, "Must be only digits"),
  discount: yup
    .string()
    .required()
    .label("Discount")
    .matches(/^[0-9]+$/, "Must be only digits"),
  countInStock: yup
    .string()
    .required()
    .label("Count in stock")
    .matches(/^[0-9]+$/, "Must be only digits"),
  image: yup.mixed().required().label("Image"),
  frameMaterial: yup.string().required().label("Frame Material"),
  lensFunction: yup.string().required().label("Lense Function"),
  frameAttribution: yup.string().required().label("Frame Attribution"),
  frameLensMaterial: yup.string().required().label("Frame Lense Material"),
  usage: yup.string().required().label("Usage"),
  modelNumber: yup.string().required().label("Model Number"),
  size: yup.string().required().label("Size"),
});

export default productSchema;
