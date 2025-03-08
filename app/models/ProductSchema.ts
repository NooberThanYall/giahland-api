import { Schema, model, models } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    descriptionn: String,
    image: String
})

export const Product = models.Product || model("Product", productSchema);

