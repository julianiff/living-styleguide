import React from "react";
import styled from "styled-components";

type headerTypes = {
  backgroundColor: string;
};

const BackgroundColor = styled.div<headerTypes>`
  position: relative;
  background-color: ${(props) => props.backgroundColor};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(242, 242, 242);
  }
`;

type listVerticalProps = {
  listItemColor: string;
};
const ListVertical = styled.ul<listVerticalProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.listItemColor};
  direction: rtl;
`;

type listItemProps = {
  listItemHoverColor: string;
};

const ListItem = styled.li<listItemProps>`
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 2.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  text-decoration: none;
  transition: all 250ms ease-in;

  &:hover {
    cursor: pointer;
    color: green;
    transform: scale(1.2);
    color: ${(props) => props.listItemHoverColor};
  }
`;

const NavZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const IconZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  transform: scale(1);
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

export interface HeaderProps {
  /**
   * Optional BackgroundColor
   */
  backgroundColor?: string;
  /**
   * Optional Mode
   */
  mode?: string;
  /**
   * Navigation Items
   */
  navigationItems: string[];
  /**
   * Color of the List Items
   */
  listItemColor?: string;
  /**
   * Color of the List Items
   */
  listItemHoverColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  backgroundColor = "white",
  navigationItems = [],
  listItemColor = "white",
  listItemHoverColor = "#39C7CE",
  ...props
}) => {
  return (
    <BackgroundColor backgroundColor={backgroundColor}>
      <NavigationContainer>
        <div>Icon</div>
        <ListVertical listItemColor={listItemColor}>
          {navigationItems.map((item: string) => (
            <ListItem listItemHoverColor={listItemHoverColor} key={item}>
              <UnstyledLink href={"#" + item}>{item}</UnstyledLink>
            </ListItem>
          ))}
        </ListVertical>
      </NavigationContainer>
    </BackgroundColor>
  );
};
