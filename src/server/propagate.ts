import * as mongoose from "mongoose";
import { Stock } from "./schema";

// connect to database
await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-app");

const stocks = [
  new Stock({
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.23,
    quantity: 1000,
  }),
  new Stock({
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2835.72,
    quantity: 500,
  }),
  new Stock({
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3301.12,
    quantity: 750,
  }),
  new Stock({
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 752.29,
    quantity: 2000,
  }),
  new Stock({
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 299.35,
    quantity: 1200,
  }),
];

stocks.forEach(async (element) => {
  await element.save();
}); // saves to the database

// disconnect
await mongoose.disconnect();
