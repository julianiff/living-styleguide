import React from "react";

export const LSCard = (props: { onClick: any; children: any }) => {
  return (
    <button onClick={props.onClick}>new card with - {props.children}</button>
  );
};



