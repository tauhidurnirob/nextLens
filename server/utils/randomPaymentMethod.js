export default function getRandomPaymentMethod() {
  const payment = ["PayPal", "Stripe", "Cash On Delivery"];

  return payment[Math.floor(Math.random() * payment.length)];
}
