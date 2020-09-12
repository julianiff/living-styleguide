import React from "react";
import {H2} from "../../ls-styles/LsStyles"
import {Grid} from "@material-ui/core";

export interface ContactProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Contact: React.FC<ContactProps> =
    ({
         backgroundColor,
         ...props
     }) => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    Titlestyled
                    Titlenormal
                </Grid>
                <Grid item xs={6}>
                    Contact Test
                </Grid>
            </Grid>);
    };
