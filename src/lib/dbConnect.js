import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};
