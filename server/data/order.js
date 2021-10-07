import generateName from "../utils/randomTitle.js";
import getRandomPaymentMethod from "../utils/randomPaymentMethod.js";
import getRandomStatus from "../utils/randomStatus.js";

const order = [
  {
    order_id: `${Math.floor(1000 + Math.random() * 9000)}`,
    address: `${Math.floor(
      10 + Math.random() * 90
    )} ${generateName()}, ${generateName()}, ${Math.floor(
      1000 + Math.random() * 9000
    )}`,
    paymentMethod: `${getRandomPaymentMethod()}`,
    status: `${getRandomStatus()}`,
    customer: `${Math.floor(10000000 + Math.random() * 9000000)}`,
    contact: `${Math.floor(100 + Math.random() * 900)}-${Math.floor(
      100 + Math.random() * 900
    )}-${Math.floor(10000 + Math.random() * 90000)}`,
    price: `${Math.floor(100 + Math.random() * 900)}`,
  },
];

export default order;
