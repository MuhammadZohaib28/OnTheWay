import React, { useEffect, useState } from "react";
import "./thirdsection.scss";
// import video from "https://www.youtube.com/watch?v=Lvmj9LRSnZI";
// import video from "../../assets/Cloudpick.mp4";
import Carousel from "../carousel/Carousel";

const ThirdSection = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 680 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className="thirdsection">
      {/* <img src={border} alt="" className="border"/> */}
      <div className="top">
        <div className="left">
          {/* <video src={"https://youtu.be/Lvmj9LRSnZI"} autoPlay loop controls></video> */}
          <iframe
            src="https://www.youtube.com/embed/Lvmj9LRSnZI"
            title="Cloudpick"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="right">
          <h1 className={active ? "h1 active" : "h1"}>
            How On The Way <span className="works">Works</span>?
          </h1>
          <span></span>
        </div>
      </div>

      <div className="bottom">
        {/* <Slider /> */}
        <Carousel />

        {/* <Slide /> */}
      </div>
    </div>
  );
};

export default ThirdSection;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
<rect x="0" y="0" width="1" height="200" fill="green" />

<rect x="10" y="0" width="2" height="200" fill="transparent" />

<rect x="20" y="0" width="3" height="200" fill="yellow" />

<rect x="30" y="0" width="4" height="200" fill="yellow" />

<rect x="40" y="0" width="5" height="200" fill="transparent" />

<rect x="50" y="0" width="6" height="200" fill="yellow" />

<rect x="60" y="0" width="7" height="200" fill="yellow" />

<rect x="70" y="0" width="8" height="200" fill="transparent" />

<rect x="80" y="0" width="9" height="200" fill="yellow" />

<rect x="90" y="0" width="10" height="200" fill="yellow" />

<rect x="100" y="0" width="11" height="200" fill="transparent" />




</svg> */
}
