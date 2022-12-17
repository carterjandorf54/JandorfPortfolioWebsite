import React from "react";
import { useState } from "react";
import { pictures } from "./picturearray";

const LoadPictures = () => {
  const [picArray, setPictures] = useState([
    ...pictures.filter((v) => v.type === "track"),
  ]);

  function handleFilter(value) {
    let result = [];
    if (value === "me") {
      result = pictures.filter((v) => v.type === "me");
    }
    if (value === "track") {
      result = pictures.filter((v) => v.type === "track");
    }
    if (value === "computer") {
      result = pictures.filter((v) => v.type === "computer");
    }

    setPictures([...result]);
  }

  return (
    <div>
      <div className="section-header">Pictures</div>
      <div className="Filter">
        <h1 className="filter-text">Filter By:</h1>
        <button className="search-button" onClick={() => handleFilter("me")}>
          Me
        </button>
        <button
          className="search-button"
          onClick={() => handleFilter("computer")}
        >
          Computer
        </button>
        <button className="search-button" onClick={() => handleFilter("track")}>
          Track
        </button>
      </div>
      <div className="pic-container">
        {picArray.map((item) => (
          <img key={item.value} src={item.img} className="image" />
        ))}
      </div>
    </div>
  );
};

export default LoadPictures;
