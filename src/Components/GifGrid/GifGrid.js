import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../GifGridItem/GifGridItem";
import "./GifGrid.css";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return data.length > 0 ? (
    <div className="gif-container">
      {
        <h3 className="animate__animated animate__fadeIn">
          {category}
        </h3>
      }

      {loading && <p>Loading...</p>}

      <div className="imgs-container">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  ) : (
    <p>Sorry I can't find "{category}"</p>
  );
};
