import * as yup from "yup";

// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

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
  // image: yup.mixed().nullable().required(),
  // image: yup
  //   .mixed()
  //   .required()
  //   .label("Image")
  //   .test(
  //     "fileSize",
  //     "File too large",
  //     (value) => value && value.size <= FILE_SIZE
  //   )
  //   .test(
  //     "fileFormat",
  //     "Unsupported Format",
  //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
  //   ),
  frameMaterial: yup.string().required().label("Frame Material"),
  lensFunction: yup.string().required().label("Lense Function"),
  frameAttribution: yup.string().required().label("Frame Attribution"),
  frameLensMaterial: yup.string().required().label("Frame Lense Material"),
  usage: yup.string().required().label("Usage"),
  modelNumber: yup.string().required().label("Model Number"),
  size: yup.string().required().label("Size"),
  availability: yup.string().required().label("Availability"),
  type: yup.string().required().label("Type"),
  category: yup.string().required().label("Category"),
  frameShape: yup.string().required().label("Frame Shape"),
  frameStyles: yup.string().required().label("Frame Styles"),
  shopCollection: yup.string().required().label("Shop Collection"),
});

export default productSchema;
