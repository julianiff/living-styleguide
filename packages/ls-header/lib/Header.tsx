import React from "react";
import styled from "styled-components";

type headerTypes = {
  backgroundColor: string;
};

const BackgroundColor = styled.div<headerTypes>`
  background-color: ${(props) => props.backgroundColor};
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
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.listItemHoverColor};
    cursor: pointer;
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
  backgroundColor = "green",
  navigationItems = [],
  listItemColor = "black",
  listItemHoverColor = "grey",
  ...props
}) => {
  return (
    <BackgroundColor backgroundColor={backgroundColor}>
      <NavigationContainer>
        <div>Icon</div>
        <ListVertical listItemColor={listItemColor}>
          {navigationItems.map((item: string) => (
            <ListItem key={item} listItemHoverColor={listItemHoverColor}>
              <UnstyledLink href={"#" + item}>{item}</UnstyledLink>
            </ListItem>
          ))}
        </ListVertical>
      </NavigationContainer>
    </BackgroundColor>
  );
};
