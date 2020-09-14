import React from "react";
import styled from "styled-components";

type sizeProps = {
  size: number;
};

const FontSize = styled.h1<sizeProps>`
  font-size: ${(props) => props.size}rem;
`;

export interface TitleProps {
  /**
   * Optional FontSize
   */
  fontSize?: number;

  title: string;
}

export const Title: React.FC<TitleProps> = ({
  title,
  fontSize = 2.4,
  ...props
}) => {
  return <FontSize size={fontSize}>{title}</FontSize>;
};
