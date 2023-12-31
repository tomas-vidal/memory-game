import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import cards from "../cards";
import "../styles/ContainerCards.css";

function ContainerCards() {
  return (
    <>
      example
      <div className="wrapper">
        {cards.map((card, key) => {
          return <Card name={card.name} image={card.image} key={key} />;
        })}
      </div>
    </>
  );
}

export default ContainerCards;
