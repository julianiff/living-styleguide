import React from "react";
import styled from "styled-components";
import {Grid, Theme} from "@material-ui/core";
import {H2, HeroOverlay, ImageAndOverlay, ImageOverlay, ImageOverlayContainer} from "../../ls-styles/LsStyles";
import {makeStyles} from "@material-ui/core/styles";
//import hero from "../../assets/FI7A3331.jpg";

export interface HeroProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    herosrc: string;
}

const styleClasses = makeStyles((theme: Theme) => ({
    overlayContainer: {
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "100px",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    overlayContent: {
        margin: "20px",
        color: "rgb(255,255,255)"
    },
    container: {
        position: "relative",
        height: "100vh",
        width: "100%"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}));
/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<HeroProps> = ({
                                              backgroundColor,
                                              herosrc = "hero",
                                              ...props
                                          }) => {
    const classes = styleClasses();
    return (
        <Grid container>
            <Grid item xs={12}>
                <HeroOverlay>
                    <img src={herosrc} className={classes.image}/>
                    <ImageOverlayContainer>
                        <ImageOverlay>
                            <H2>Unsere Super Praxis</H2>
                        </ImageOverlay>
                    </ImageOverlayContainer>
                </HeroOverlay>
            </Grid>
        </Grid>
    );
};
