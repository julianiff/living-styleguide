import React from "react";
import styled from "styled-components";

type sizeProps = {
  size: number;
};

const FontSize = styled.p<sizeProps>`
  font-size: ${(props) => props.size}rem;
`;

export interface TitleProps {
  /**
   * Label for the title
   */
  label: string;
  /**
   * Optional FontSize
   */
  fontSize?: number;
}

export const Title: React.FC<TitleProps> = ({
  children,
  label,
  fontSize = 2.4,
  ...props
}) => {
  return <FontSize size={fontSize}></FontSize>;
};
