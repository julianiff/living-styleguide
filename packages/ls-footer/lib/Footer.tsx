import React from "react";
import styled from "styled-components";

export interface FooterProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Footer: React.FC<FooterProps> = ({
  backgroundColor,
}) => {
  return (
      <div>Footer</div>
  );
};
