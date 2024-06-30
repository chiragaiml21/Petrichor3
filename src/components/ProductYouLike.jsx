"use client";

import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useSearchParams } from "next/navigation";
import { ProductItems } from "../data/data";
import Products from "./Products";

const ProductYouLike = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const searchTags = (searchParams.get("tags") || "")
    .split(",")
    .filter((tag) => tag);
  console.log("TAGS", searchTags);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setLoading(true);
    setProducts(ProductItems.products);
    setLoading(false);
  }, [searchTags]);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      setProducts(ProductItems.products);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex justify-between items-center mx-5 pt-10">
          <h1 className="text-3xl font-bold">
            {searchTags.length ? "Search Results" : "News"}
          </h1>
          <div className="flex gap-2">
            <select
              className="transition-all delay-50 items-center border border-gray-500 p-2 rounded-md text-black shadow-none hover:shadow-lg hover:shadow-[#ffffff2d]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <select
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="transition-all delay-50 items-center border border-gray-500 p-2 rounded-md text-black shadow-none hover:shadow-lg hover:shadow-[#ffffff2d]"
            >
              <option value="">Sort By</option>
              <option value="date">Date</option>
            </select>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="transition-all delay-50 items-center border border-gray-500 p-2 rounded-md text-black shadow-none hover:shadow-lg hover:shadow-[#ffffff2d]"
            >
              <option value="">Filter</option>
              {searchTags.length && <option value="all">All</option>}
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>

          {loading ? (
            <button className="items-end">loading...</button>
          ) : (
            <button
              className=" transition-all delay-50 items-center border border-gray-500 p-2 rounded-md hover:shadow-lg hover:shadow-[#ffffff2d]"
              onClick={refresh}
            >
              Refresh
            </button>
          )}
        </div>
      </div>
      <Products
        products={products
          .filter((product) =>
            searchTags.length
              ? searchTags.some((tag) => product.tags.includes(tag))
              : true
          )
          .filter((product) =>
            categoryFilter ? product.category === categoryFilter : true
          )
          .sort((a, b) => {
            if (sortCriteria === "date") {
              return sortOrder === "asc"
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
            } else if (sortCriteria === "popularity") {
              return sortOrder === "asc"
                ? a.popularity - b.popularity
                : b.popularity - a.popularity;
            }
            return 0;
          })}
      />
    </>
  );
};

export default ProductYouLike;
