// todo make server
import * as mongoose from "mongoose";
import { Stock } from "./schema";

// admin because I don't know
await mongoose.connect(
  "mongodb://root:example@localhost:27017/stocksdata?authSource=admin",
);

async function getData(req: Request): Promise<Response> {
  const data = await Stock.find({});
  const res: Response = Response.json(data);
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Content-Type", "application/json");
  return res;
}

async function insertData(req: Request): Promise<Response> {
  const form = await req.formData();
  const stock = new Stock({
    symbol: form.get("symbol"),
    name: form.get("name"),
    price: form.get("price"),
    quantity: form.get("quantity"),
  });
  await stock.save();
  return new Response();
}

const server = Bun.serve({
  port: 3000,
  async fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/api/mongo") return await getData(req);
    if (url.pathname === "/api/upload") return await insertData(req);
    return new Response("404!");
  },
});

console.log(server.port); // 3000
console.log(server.url); // http://localhost:3000

// catch sigint for clean up
process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Ctrl-C was pressed");
  process.exit();
});
