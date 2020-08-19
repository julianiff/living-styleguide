import React from "react";
import styled from "styled-components";

const BgColor = styled.button`
  background-color: green;
`;

export const LSCard = (props: { onClick: any; children: any }) => {
  return (
    <BgColor onClick={props.onClick}>new card with - {props.children}</BgColor>
  );
};
