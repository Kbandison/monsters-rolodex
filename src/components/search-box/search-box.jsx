import React from "react";
import "./search-box.styles.css";

let SearchBox = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default SearchBox;
