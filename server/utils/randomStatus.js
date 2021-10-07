export default function getRandomStatus() {
  const status = ["Failed", "Processing", "Pending", "Delivered"];

  return status[Math.floor(Math.random() * status.length)];
}
