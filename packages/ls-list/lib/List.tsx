import React from "react";
import styled from "styled-components";
import {H2, LI, UL} from "../../ls-styles/LsStyles";
import {Container} from "./LsStyles";

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
        <Container>
            <H2>Liste: Links oder Leistungen</H2>
            <UL>
                <LI>Link1</LI>
                <LI>Link2</LI>
                <LI>Link3</LI>
                <LI>Link4</LI>
            </UL>
            <UL>
                <LI>Link5</LI>
                <LI>Link6</LI>
                <LI>Link7</LI>
                <LI>Link8</LI>
            </UL>
        </Container>
    );
};
