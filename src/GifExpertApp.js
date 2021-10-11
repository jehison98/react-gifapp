import React from "react";
import { AddCategory } from "./Components/AddCategory/AddCategory";
import { GifGrid } from "./Components/GifGrid/GifGrid";

export const GifExpertApp = () => {
  const [category, setCategories] = React.useState("One Punch");

  return (
    <div>
      <h2 id="gif-title">Gif-Expert-App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <div>
        <GifGrid category={category} />
      </div>
    </div>
  );
};
