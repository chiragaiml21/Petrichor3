"use client";

import React, { useState } from "react";
import {categoryTags} from "../../data/data";
import axios from "axios";

const Page = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productImage || !productCategory) {
      return;
    }

    console.log("Product details", {
      productName,
      productPrice,
      productImage,
      productCategory,
      selectedTags,
    });


    // formData.append('tempImage', productImage);

    // const url = await axios.post('/api/upload-image', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    // console.log("Image URL", url);
    // setImageUrl(url.data.secure_url);
    const formData = new FormData();

    formData.append("name", productName);
    formData.append("price", productPrice);
    // formData.append("image", imageUrl);
    formData.append("description", productDescription);
    formData.append("category", productCategory);
    selectedTags.forEach((tag) => formData.append("tags[]", tag));

    const product = await axios
      .post("/api/upload-product", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleTagToggle = (e, tag) => {
    e.preventDefault();
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="py-16 max-w-md mx-auto my-10 sm:w-full w-80">
      <h1 className="text-3xl font-bold mb-6 pb-2">Upload Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
          />
        </div>
        <div>
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
          />
        </div>
        <div>
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
          />
        </div>
        <div>
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
            rows="4"
          ></textarea>
        </div>
        <div className="pb-6">
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Product Category
          </label>
          <select
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-[#b29a76] focus:border-[#b29a76]"
          >
            <option value="">Select a category</option>
            {Object.keys(categoryTags).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {productCategory && (
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Tags
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {categoryTags[productCategory].map((tag) => (
                <button
                  key={tag}
                  onClick={(e) => handleTagToggle(e, tag)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedTags.includes(tag)
                      ? "bg-[#b29a76] text-white"
                      : "bg-gray-300 text-gray-700"
                  } transition duration-300`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-[#b29a76] text-white font-bold py-2 px-4 rounded hover:bg-[#b29a76]/90"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Page;
