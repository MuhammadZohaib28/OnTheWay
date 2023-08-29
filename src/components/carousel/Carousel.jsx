import React, { useEffect, useState } from "react";
import "./carousel.scss";
import Slider from "infinite-react-carousel";
import line from "../../assets/line.png";
import data from "../slider/Data";
import CarouselCard from "./carouselCard/carouselCard";

const Carousel = () => {
  const [active, setActive] = useState(false);
  const [marginLeft, setMarginLeft] = useState(80);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    // Calculate margin-left based on scroll position
    const newMarginLeft = window.scrollY > 1300 ? window.scrollY - 1300 : 0;
    setMarginLeft(newMarginLeft);

    // Update active state based on scroll position
    setActive(window.scrollY > 1300);
    setActive2(window.scrollY > 1300);
  };
  const handleResize = () => {
    // Update screen width on window resize
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesToShow = screenWidth <= 430 ? 1 : 3;
  return (
    <div className="carousel">
      <img
        src={line}
        className={active ? "img active" : "img"}
        style={{ marginLeft: `-${marginLeft}px` }}
      />
      <div className="carouselcontainer">
        <Slider slidesToShow={slidesToShow}>
          {data.map((image) => {
            return <CarouselCard item={image} key={image.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
