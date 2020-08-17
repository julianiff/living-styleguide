import React from "react";

const Button = ({ onClick, children }) => {
 return <button onClick={onClick}>im a card test but test is called a button{children}</button>;
};

export default Button;