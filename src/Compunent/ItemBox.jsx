import React from "react";
import img from "../several-dishes-recognition.jpg";

const ItemBox = ({ elem }) => {
  return (
    <>
      <div className="box">
        <img src={elem.imgSrc} alt="img" />
        <div className="info">
          {elem.Name.length > 18 ? (
            <h3 className="p_name">{elem.Name.slice(0, 18) + "..."}</h3>
          ) : (
            <h3 className="p_name">{elem.Name}</h3>
          )}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
          <div className="price_row">
            <p className="price">Price: {elem.price}</p>
            <button>Buy Now</button>
          </div>
          <p className="type">{elem.type}</p>
        </div>
      </div>
    </>
  );
};

export default ItemBox;
