import React from "react";
import styled from "styled-components";

export interface ListProps {
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
export const List: React.FC<ListProps> = ({
  backgroundColor,
  ...props
}) => {
  return (
      <div>List</div>
  );
};
