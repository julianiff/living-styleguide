import React from "react";
import styled from "styled-components";
import {Grid} from "@material-ui/core";
import {H2} from "../../ls-styles/LsStyles";

export interface HeroProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  herosrc: string;
}

/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<HeroProps> = ({
  backgroundColor,
    herosrc = "https://vet-enge.julianiff.ch/assets/Rosy.jpg",
  ...props
}) => {
  return (
      <Grid container>
        <Grid item xs={12}>
          <img src={herosrc} style={{height: "100vh"}}/>
          <H2>Unsere Super Praxis</H2>
        </Grid>
      </Grid>
  );
};
