import Stripe from "stripe";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

const stripe = new Stripe(process.env.PUBLISH_KEY);
