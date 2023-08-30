import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./secondsection2.scss";
import image from "../../assets/Enscape_2023-06-07-13-40-22_Enscape View 1.png"

const cards = [
  {
    url: image,
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];




const SecondSection2 = () => {
  return (
    <div className="secondsection2">
      <div className="container">
        <span className="spancontainer">Scroll down</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="horizontalscrollcarousel">
        <span className="horizontalscrollcarouselspan">Scroll up</span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [-2, 1], ["-50%", "-95%"]);

  return (
    <section ref={targetRef} className="horizontalscrollcarousel">
      <div className="horizontalscrollcarouselcontainer">
        <motion.div style={{ x }} className="carditem">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="card">
      <div
        style={{
          background: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="cardimg"
      >

        <img src={card.url} alt="" />
      </div>
      <div className="cardcontainer">
        <p className="p">{card.title}</p>
      </div>
    </div>
  );
};

export default SecondSection2;
