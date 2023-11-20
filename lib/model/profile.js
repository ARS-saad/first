import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  age: String,
  password: String,
});

export const Profile =
  mongoose.models.Profiles || mongoose.model("Profiles", productModel);
