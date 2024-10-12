import * as mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    symbol: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    methods: {
      displayInfo() {
        console.log(
          `Stock: ${this.symbol} - ${this.name}, Price: $${this.price}, Available: ${this.quantity}`,
        );
      },
    },
  },
);

export type Stock = mongoose.InferSchemaType<typeof stockSchema>;
export const Stock = mongoose.model("Stock", stockSchema);
