import React from "react";
import styled from "styled-components";

export interface ListImageProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

const BgColor = styled.button`
  background-color: yellow !important;
`;
/**
 * Primary UI component for user interaction
 */
export const ListImage: React.FC<ListImageProps> = ({
  backgroundColor,
  ...props
}) => {
  return (
      <div>ListImage</div>
  );
};
