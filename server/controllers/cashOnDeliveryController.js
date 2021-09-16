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
  const { shipping, address, cart } = req.body;
  const today = new Date();
  const data = {
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
      address: address,
      zip: `${shipping.postalCode} ${shipping.shortName}`,
      city: shipping.city,
      country: "",
    },
    invoiceNumber: `NEXT-${Math.floor(1000 + Math.random() * 9000)}`,
    invoiceDate: today.toLocaleDateString("en-US"),

    products: cart.map((item) => {
      return {
        quantity: item.quantity,
        price: item.price,
        description: item.title,
        tax: "",
      };
    }),
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
