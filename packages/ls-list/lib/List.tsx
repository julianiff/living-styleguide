import React from "react";
import styled from "styled-components";
import {H2, UL} from "../../ls-styles/LsStyles";
import {Grid} from "@material-ui/core";

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
        <Grid container>
            <Grid item xs={12}>
                <H2>Liste: Links oder Leistungen</H2>
            </Grid>
            <Grid item xs={12} md={6}>
                <UL>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </UL>
            </Grid>
            <Grid item xs={12} md={6}>
                <UL>
                    <li>Link5</li>
                    <li>Link6</li>
                    <li>Link7</li>
                    <li>Link8</li>
                </UL>
            </Grid>
        </Grid>
    );
};
