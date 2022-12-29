import React from "react";
import "./card-list.styles.css";

class CardList extends React.Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${this.props.id}?set=set2`}
          alt={this.props.name}
        />
        <h2>Name: {this.props.name}</h2>
        <p>E-Mail: {this.props.email}</p>
      </div>
    );
  }
}

export default CardList;
