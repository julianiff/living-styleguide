import React from "react";
import styled from "styled-components";

export interface ContactProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Contact: React.FC<ContactProps> = ({
  backgroundColor,
  ...props
}) => {
  return (<div>Contact Test</div>);
};
