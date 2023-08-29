import React, { useEffect, useState } from "react";
// import { images } from "../data";
import "./franchise.scss";
// import Slider from "../slider/Slider";
import line from "../../assets/line.png";
// import bg from "../../assets/check.png";
import SliderFranchise from "./SliderFranchise";

const Franchise = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [marginLeft, setMarginLeft] = useState(10);
  const [prevScrollY, setPrevScrollY] = useState(2);

  const isActive = () => {
    const currentScrollY = window.scrollY;
    const newMarginLeft = window.scrollY > 4100 ? window.scrollY - 4100 : 0;
    setMarginLeft(newMarginLeft);

    if (currentScrollY > prevScrollY) {
      // Scrolling down
      if (currentScrollY > 2500) setActive(true);
      if (currentScrollY > 3400) setActive2(true);
      if (currentScrollY > 3700) setActive3(true);
      if (currentScrollY > 1900) setActive4(true);
      if (currentScrollY > 4100) setActive5(true);
    } else {
      // Scrolling up
      // if (currentScrollY <= 1800) setActive4(false);
      if (currentScrollY <= 3700) setActive3(false);
      if (currentScrollY <= 3400) setActive2(false);
      if (currentScrollY <= 2500) setActive(false);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className="franchise">
      <div className="points">
        <h1 className={active4 ? "fw active" : "fw"}>
          Franchise with{" "}
          <span>
            On <span className="the">the</span> Way
          </span>
        </h1>

        <h1 className={active4 ? "sit active" : "sit"}>
          Step into the{" "}
          <span className="future">
            Future <span className="of">of</span>{" "}
            <span className="retail">Retail</span>
          </span>
        </h1>
        <p>
          Become a pivotal part of a transformative retail experience. With 'On
          the Way', you're not just starting a business; you're pioneering a
          groundbreaking approach to shopping in Saudi Arabia.
        </p>

        <h1>
          Why Partner with <span>'On the Way'</span>
        </h1>

        <div className="licontainer">
          <div className="listcontainer">
            <span className={active ? "active" : ""}>Futuristic Retail</span>
            <li className={active ? "active" : ""}>
              Offer customers an unmatched, AI-driven shopping experience that
              is redefining industry standards.
            </li>
          </div>

          <div className="listcontainer">
            <span className={active2 ? "active" : ""}>End-to-End Support</span>
            <li className={active2 ? "active" : ""}>
              From technology to training, receive holistic support to ensure
              your franchise's success.
            </li>
          </div>

          <div className="listcontainer">
            <span className={active3 ? "active" : ""}>Expansive Growth</span>
            <li className={active3 ? "active" : ""}>
              Position yourself at the forefront of an industry trend with vast
            </li>
          </div>
        </div>
      </div>

      {/* <img src={background} alt="" className="bg" /> */}
      {/* <img src={backgroundmobile} alt="" className="bgmobile" /> */}
      <h1>Book a franchise</h1>
      {/* <img src={border} alt="" className="border"/> */}

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLvdk2ODyKBW7m6BYAI6jWkmJM5eADR8T_yfzMAxdrNlAF2A/formResponse"
        className="form"
      >
        <div className="nameemail">
          <input type="text" placeholder="Name" name="entry.1108767202" />
          <input type="text" placeholder="Email" name="entry.1884782877" />
        </div>
        <textarea
          name="entry.1849509373"
          id=""
          cols="30"
          rows="8"
          placeholder="Message"
        />
        <button type="submit">Sign Up</button>
      </form>

      <div className="images">
        <img
          src={line}
          className={active5 ? "img active" : "img"}
          style={{ marginLeft: `${-marginLeft}px` }}
        />
        <SliderFranchise />
      </div>
    </div>
  );
};

export default Franchise;
