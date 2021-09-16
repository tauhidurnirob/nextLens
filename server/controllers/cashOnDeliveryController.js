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
  console.log(req.body);
  const today = new Date();
  const data = {
    documentTitle: "RECEIPT",
    currency: "USD",
    taxNotation: "vat",
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: base64_encode(imagePath),
    sender: {
      company: "NEXT-LENSE",
      address: "MIRPUR-1 DHAKA",
      zip: "1216",
      city: "SAVAR",
      country: "",
    },
    client: {
      company: "Shipping Address",
      address: "Clientstreet 456",
      zip: "4567 CD",
      city: "Clientcity",
      country: "Clientcountry",
    },
    invoiceNumber: `NEXT-${Math.floor(1000 + Math.random() * 9000)}`,
    invoiceDate: today.toLocaleDateString("en-US"),
    products: [
      {
        quantity: "2",
        description: "Test1",
        price: 33.87,
        tax: "",
      },
      {
        quantity: "4",
        description: "Test2",
        price: 10.45,
        tax: "",
      },
    ],
    bottomNotice: "Our Delivery boy will be there within 3 days. Thanks",
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
