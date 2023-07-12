import React from "react";
import "../styles/Card.css";
import { useContext } from "react";
import { CounterContext } from "../Context";

function Card({
  name,
  image = "https://fifpro.org/media/50ukxy3p/world-cup-trophy.jpg?center=0.18066237927585291,0.50542495479204341&mode=crop&heightratio=0.64&width=1600&rnd=133129144183130000",
}) {
  const example = useContext(CounterContext);

  return (
    <div className="card_wrapper" onClick={() => example.addPlayer(name)}>
      <div
        className="card__img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {name}
    </div>
  );
}

export default Card;
