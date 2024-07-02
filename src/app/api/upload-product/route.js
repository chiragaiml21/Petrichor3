// import { dbConnect } from "../../../lib/dbConnect";
// import Products from "../../../model/Product";

// export const POST = async (req) => {
//   try {
//     await dbConnect();
//     const dataForm = await req.formData();

//     const title = dataForm.get("name");
//     const price = dataForm.get("price");
//     const description = dataForm.get("description");
//     const category = dataForm.get("category");
//     const tags = dataForm.getAll("tags[]");
//     // const image = dataForm.get("image");

//     console.log("API LOG: ", {
//       title,
//       price,
//       description,
//       category,
//       tags,
//       user,
//     });

//     const newProduct = new Products({
//       title,
//       price,
//       description,
//       category,
//       tags,
//     });
//     await newProduct.save();

//     return NextResponse.json({ msg: "Product Created",Product }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ msg: error.message }, { status: 500 });
//   }
// };
