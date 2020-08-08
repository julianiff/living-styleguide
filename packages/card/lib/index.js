import React from "react";

const Button = ({ onClick, children }) => {
 return <button onClick={onClick}>im a card but also a button{children}</button>;
};

export default Button;