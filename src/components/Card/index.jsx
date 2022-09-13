import React from "react";
import "./Card.styles.css";

const Card = ({ character }) => {
  return (
    <div className="card">
      <img className="cardImage" src={character.image} alt="character photo" />
      <div>Name:{character.name}</div>
      <div>Gender:{character.gender}</div>
    </div>
  );
};

export default Card;
