import React from "react";
import "./index.css";
const Input = (props) => {
  return <input {...props}>{props.name}</input>;
};

export default Input;
