import asyncHandler from "express-async-handler";

import easyinvoice from "easyinvoice";
import fs from "fs";
import path from "path";

// @Description contact
// @routes POST/api/contact
// @access public
const imagePath = path.resolve("img", "invoice.png");

const base64_encode = (img) => {
  const png = fs.readFileSync(img);
  return new Buffer.from(png).toString("base64");
};

export const createCashOnDelivery = asyncHandler(async (req, res) => {
  const data = {
    currency: "USD",
    taxNotation: "vat",
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: base64_encode(imagePath),
    sender: {
      company: "Buy Me A Gradient",
      address: "Corso Italia 13",
      zip: "1234 AB",
      city: "Milan",
      country: "IT",
    },
    client: {
      company: "Client Corp",
      address: "Clientstreet 456",
      zip: "4567 CD",
      city: "Clientcity",
      country: "Clientcountry",
    },
    invoiceNumber: "2020.0001",
    invoiceDate: "05-01-2020",
    products: [
      {
        quantity: "2",
        description: "Test1",
        tax: 6,
        price: 33.87,
      },
      {
        quantity: "4",
        description: "Test2",
        tax: 21,
        price: 10.45,
      },
    ],
    bottomNotice: "Kindly pay your invoice within 15 days.",
  };

  const result = await easyinvoice.createInvoice(data);
  if (result) {
    res.send({ message: "Successfully invoice generated" });
    fs.writeFileSync(
      `./invoice/invoice${Date.now()}.pdf`,
      result.pdf,
      "base64"
    );
  } else {
    res.sendStatus(500);
    throw new Error("Something went wrong");
  }
});
