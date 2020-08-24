import React from "react";
import styled from "styled-components";

type sizeProps = {
  size: number;
};

const FontSize = styled.button<sizeProps>`
  font-size: ${(props) => props.size}rem;
`;

export interface TitleProps {
  /**
   * Optional FontSize
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
