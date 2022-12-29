import React from "react";
import "./search-box.styles.css";

class SearchBox extends React.Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBox;
