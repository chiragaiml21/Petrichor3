import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name must be at most 50 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    type: String,
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  verfiyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is required"],
  },
});

const UserModel = (mongoose.models.User) || mongoose.model("User", userSchema);

export default UserModel;
