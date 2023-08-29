import React from "react";
import "./carouselcard.scss";

const CarouselCard = ({ item }) => {
  return (
    <div className="carouselcard">
      <div className="container">
        <img src={item.img} alt="" />
      </div>
    </div>
  );
};

export default CarouselCard;
