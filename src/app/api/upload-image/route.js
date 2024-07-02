import cloudinary from "../../../lib/cloudinary";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  console.log("Route HIT");

  const formData = await req.formData();
  const image = formData.get("tempImage");
  console.log("Image: ", image);
  const buffer = await image.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: "productImages",
        },
        async (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      )
      .end(bytes);
  });

//   console.log("Result: ", result);

//   return NextResponse.json(result, { status: 200 });
  
};
