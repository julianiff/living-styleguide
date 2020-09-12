import React from "react";
import styled from "styled-components";

export interface HeroProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<HeroProps> = ({
  backgroundColor,
  ...props
}) => {
  return (
      <div>Hero</div>
  );
};
