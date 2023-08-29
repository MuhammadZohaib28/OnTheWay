import React, { useEffect, useState } from "react";
import "./secondsection.scss";
import logo from "../../assets/logo.png";
import border from "../../assets/wave-haikei.svg";

const SecondSection = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // const isActive = () => {
  //   window.scrollY > 330 ? setActive(true) : setActive(false);
  //   window.scrollY > 650 ? setActive2(true) : setActive2(false);
  //   window.scrollY > 850 ? setActive3(true) : setActive3(false);
  //   window.scrollY > 1000 ? setActive4(true) : setActive4(false);
  // };

  const isActive = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      // Scrolling down
      if (currentScrollY > 330) setActive(true);
      if (currentScrollY > 650) setActive2(true);
      if (currentScrollY > 850) setActive3(true);
      if (currentScrollY > 1000) setActive4(true);
    } else {
      // Scrolling up
      if (currentScrollY <= 1000) setActive4(false);
      if (currentScrollY <= 850) setActive3(false);
      if (currentScrollY <= 650) setActive2(false);
      if (currentScrollY <= 330) setActive(false);
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
    <div className="secondsection">
      {/* <img src={border} alt="" className="border"/> */}
      <div className="image">
        <img src={logo} alt="" className="img" />
      </div>
      <div className="list">
        <li className={active ? "active" : ""}>Scan your <span className="phone"> phone</span></li>

        <li className={active2 ? "active2" : ""}> <span className="walk">walk</span> into the store</li>

        <li className={active3 ? "active3" : ""}>grab<span className="whatever"> whatever </span>you want</li>

        <li className={active4 ? "active4" : ""}> <span className="walk">walk</span> <span className="out">out</span> the store</li>
      </div>
    </div>
  );
};

export default SecondSection;

// {listdata.map((item) => {
//   return (
//     <div className={active ? "listitem active" : "listitem"} key={item.id=0}>
//       <img src={item.checkimage} alt="" />
//       <span>{item.text}</span>
//     </div>
//   );
// })}
