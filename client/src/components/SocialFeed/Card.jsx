import React from "react";
import Data from "./data";
import "./card.css";

const Card = () => {
  return (
    <div className="mainContainer">
      {Data.map(({ id, image, likecount }) => (
        <div key={id} className="cardContainer">
          <div className="card">
            <img src={image} alt="profile" />
          </div>
          <div className="like">
            <h1>{likecount}</h1>
          </div>
          <button className="btn">Like</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
