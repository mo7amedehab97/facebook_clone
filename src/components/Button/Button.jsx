import React from "react";
import "./index.css";
const Button = (props) => {
  return <button {...props}>{props.name}</button>;
};

export default Button;
