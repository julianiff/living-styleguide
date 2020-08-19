import React from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>new Button with - {children}</button>;
};

export default Button;
