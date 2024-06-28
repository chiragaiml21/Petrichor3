import { dbConnect } from "../../../../lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "../../../../model/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  await dbConnect();

  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        message: "Please fill all fields",
      }, { status: 400 });
    }

    const existingUser = await User.findOne({
      $or: [{ email }],
    });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Username already exists",
      }, { status: 400 });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verifyCode,
      verfiyCodeExpiry: expiryDate,
    });

    await user.save();

    return NextResponse.json({
      data: user,
      success: true,
      message: "User created successfully",
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating user", error);
    return NextResponse.json({
      success: false,
      message: "Error creating user",
    }, { status: 500 });
  }
};
