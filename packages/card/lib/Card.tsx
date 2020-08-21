import React from "react";
import styled from "styled-components";

type BgProps = {
  bg: string;
};

const BgColor = styled.button<BgProps>`
  background-color: ${(props) => props.bg};
`;

export interface CardProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional Background-color
   */
  backgroundColor?: string;
}

export const LSCard: React.FC<CardProps> = ({
  onClick,
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <BgColor bg={backgroundColor} onClick={onClick}>
      {children}
    </BgColor>
  );
};
