"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function SearchBar() {
  const route = useRouter();
  const [tags, setTags] = useState([]);
  const placeholders = [
    'new, sale, popular, limited',
    'vintage, modern, classic',
    'fiction, non-fiction, educational',
    'men, women, children',
  ];

  const handleChange = (e) => {
    setTags(e.target.value.split(",").map(tag => tag.trim()));
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    route.push(`/products?tags=${tags.join(",")}`);
    console.log("submitted");
  };

  return (
    <div className="py-24 flex flex-col justify-center items-center px-4">
      <h1 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-black">
        Search for Product
      </h1>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
