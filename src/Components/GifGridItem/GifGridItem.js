import React from "react";
import "./GifGridItem.css";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="img-box animate__animated animate__fadeIn">
      <div className="img-content">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};
