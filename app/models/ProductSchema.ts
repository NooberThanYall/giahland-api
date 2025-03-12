import { Schema, model, models } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    descriptionn: String,
    image: String,
    category: String,
    pot_material: String,
    soil_type: String,
    weight: Number,
    dimentions: String,
    sun_exposure: String
})

export const Product = models.Product || model("Product", productSchema);

