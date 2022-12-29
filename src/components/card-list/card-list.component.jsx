import React from "react";
import "./card-list.styles.css";

let CardList = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set2`} alt={props.name} />
      <h2>Name: {props.name}</h2>
      <p>E-Mail: {props.email}</p>
    </div>
  );
};

export default CardList;
