import React from "react";
import "./follow.scss";

const Follow = () => {
  return (
    <div className="follow">
      <h1>Follow us on our socials</h1>

      <span>
        Subscribe to our newsletter for exclusive promos, updates, and all
        things techie in the grocery world.{" "}
      </span>

      <div className="input">
        <input type="text" placeholder="name@email.com" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Follow;
