import React from "react";
import styled, { withTheme } from "styled-components";

type BgProps = {
  width: number;
};

type DividerProps = {
  height: number;
};

type FontProps = {
  fontSize: number;
  lineHeight: number;
};

type bgColor = {
  bg: string;
};

const Container = styled.div<BgProps>`
  width: ${(props) => props.width}px;
`;

const ImageContainer = styled.div<bgColor>`
  height: 150px;
  background-color: ${(props) => props.bg};
`;

const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height}px;
`;

const TextBlock = styled.p<FontProps>`
  font-size: ${(props) => props.fontSize}rem;
  line-height: ${(props) => props.lineHeight}em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const FullWidthButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  text-align: left;

  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;

  background: black;
`;

const ShortBorder = styled.div`
  width: 25px;
  background-color: #6a5f58;
  height: 1.5px;
`;

export interface CardProps {
  /**
   * Optional Background-color
   */
  backgroundColor?: string;

  width?: number;
  imageTextHeight?: number;
  buttonLabel?: number;
  fontSize?: number;
  lineHeight?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  backgroundColor = "black",
  width = 150,
  imageTextHeight = 10,
  buttonLabel = "this is Button",
  fontSize = 1,
  lineHeight = 1.15,
  ...props
}) => {
  return (
    <Container width={width}>
      <ImageContainer bg={backgroundColor}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#0F62FE"
            d="M56.9,-55.9C70.5,-43.3,75.9,-21.7,74.2,-1.8C72.4,18.2,63.4,36.3,49.9,52.8C36.3,69.3,18.2,84.1,1.3,82.8C-15.6,81.5,-31.1,64.1,-41.7,47.6C-52.2,31.1,-57.8,15.6,-58.7,-0.9C-59.6,-17.3,-55.8,-34.7,-45.2,-47.2C-34.7,-59.7,-17.3,-67.5,2.2,-69.7C21.7,-71.8,43.3,-68.4,56.9,-55.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </ImageContainer>
      <Divider height={imageTextHeight}></Divider>
      <Divider height={imageTextHeight}></Divider>
      <ShortBorder></ShortBorder>
      <TextBlock fontSize={fontSize} lineHeight={lineHeight}>
        {children}
      </TextBlock>
      <ShortBorder></ShortBorder>
      <Divider height={imageTextHeight}></Divider>
      <FullWidthButton>
        <TextBlock fontSize={fontSize} lineHeight={lineHeight}>
          {buttonLabel}
        </TextBlock>
      </FullWidthButton>
    </Container>
  );
};
