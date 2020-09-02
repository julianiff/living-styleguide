import React from "react";
import styled from "styled-components";

type headerTypes = {
  backgroundColor: string;
};

const BackgroundColor = styled.div<headerTypes>`
  background-color: ${(props) => props.backgroundColor};
  height: 150px;
  width: 100vw;
`;

export interface HeaderProps {
  /**
   * Optional FontSize
   */
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  backgroundColor = "green",
  ...props
}) => {
  return (
    <BackgroundColor backgroundColor={backgroundColor}>
      {children}
    </BackgroundColor>
  );
};
