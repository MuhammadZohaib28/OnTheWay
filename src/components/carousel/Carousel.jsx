// import React, { useEffect, useState, Component } from "react";
// import "./carousel.scss";
// // import Slider from "infinite-react-carousel";
// import Slider from "react-slick";
// import line from "../../assets/line.png";
// import data from "../slider/Data";
// import CarouselCard from "./carouselCard/carouselCard";

// const Carousel = () => {
//   const [active, setActive] = useState(false);
//   const [marginLeft, setMarginLeft] = useState(80);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   const handleScroll = () => {
//     // Calculate margin-left based on scroll position
//     const newMarginLeft = window.scrollY > 1300 ? window.scrollY - 1300 : 0;
//     setMarginLeft(newMarginLeft);

//     // Update active state based on scroll position
//     setActive(window.scrollY > 1300);
//     setActive2(window.scrollY > 1300);
//   };
//   const handleResize = () => {
//     // Update screen width on window resize
//     setScreenWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slidesToShow = screenWidth <= 430 ? 1 : 3;
//   return (
//     <div className="carousel">
//       <img
//         src={line}
//         className={active ? "img active" : "img"}
//         style={{ marginLeft: `-${marginLeft}px` }}
//       />
//       <div className="carouselcontainer">
//         <Slider slidesToShow={slidesToShow}>
//           {data.map((image) => {
//             return <CarouselCard item={image} key={image.id} />;
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useState } from "react";
import data from "../slider/Data";
import line from "../../assets/line.png";
import "./carousel.scss";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const Carousel = () => {
  const [active, setActive] = useState(false);
  const [marginLeft, setMarginLeft] = useState(80);
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate margin-left based on scroll position
    const newMarginLeft = window.scrollY > 1300 ? window.scrollY - 1300 : 0;
    setMarginLeft(newMarginLeft);

    //     // Update active state based on scroll position
    setActive(window.scrollY > 1300);
    setActive2(window.scrollY > 1300);
  };

  const goToPrevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="carousel">
        <img
          src={line}
          className={active ? "img active" : "img"}
          style={{ marginLeft: `-${marginLeft}px` }}
        />

        <div className="carouselcontainer">
          <img src={data[currSlide]} alt="" className="sliderimages" />
        </div>

        <div className="buttons">
          <button onClick={goToPrevSlide}>
            <HiArrowLongLeft />
          </button>
          <span />
          <button onClick={goToNextSlide}>
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

//   return (
//     <div className="slider">
//       <div className="container">
//         <img src={data[currSlide]} alt=""  className="sliderimages" />
//         <div className="buttons">
//           <button onClick={goToPrevSlide}>
//             <img src={backward} className="slidericon" />
//           </button>
//           <button onClick={handlePause}>
//             {isPaused ? (
//               <img src={pause} className="slidericon pause" />
//             ) : (
//               <img src={play} className="slidericon" />
//             )}
//           </button>
//           <button onClick={goToNextSlide}>
//             <img src={forward} className="slidericon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
