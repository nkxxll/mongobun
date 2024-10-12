import * as mongoose from "mongoose";
import { Stock } from "../schema";
// connect to database
await mongoose.connect(
  "mongodb://root:example@localhost:27017/stocksdata?authSource=admin",
);

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
    price: 2935.72,
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

console.log("before save");

await stocks[0].save();
await stocks[1].save();
await stocks[2].save();
await stocks[3].save();
await stocks[4].save();

console.log("after save");

// disconnect
await mongoose.disconnect();
