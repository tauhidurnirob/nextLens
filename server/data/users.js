import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Muktadir",
    email: "muktadir@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Kaniz",
    email: "kaniz@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Niloy",
    email: "niloy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Rahim",
    email: "rahim@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Asif",
    email: "asif@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Roton",
    email: "roton@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ridom",
    email: "ridom@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shakib",
    email: "shakib@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
