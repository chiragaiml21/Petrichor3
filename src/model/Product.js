import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    favourite: { type: String, enum: ['yes', 'no'] }, 
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
    tags: [{ type: String }],
    category: { type: String, required: true },
}, { timestamps: true });

const ProductModel = (mongoose.models.Products) || mongoose.model("Products", ProductSchema);

export default ProductModel;