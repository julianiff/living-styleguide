import React from "react";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Theme,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import {
  H2,
  ImageAndOverlay,
  ImageDescription,
  ImageOverlay,
  ImageOverlayContainer,
} from "../../ls-styles/LsStyles";
import { makeStyles } from "@material-ui/core/styles";

const teamData = [
  {
    key: 1,
    img: { src: "https://vet-enge.julianiff.ch/assets/Chadieja.jpg" },
    title: "Chadieja Benredjem",
    description: "TPA",
  },
  {
    key: 2,
    img: { src: "https://vet-enge.julianiff.ch/assets/Ueli.jpg" },
    title: "Dr. med. vet. Ulrich Coradi",
    description: "Arzt",
  },
  {
    key: 3,
    img: { src: "https://vet-enge.julianiff.ch/assets/portraitcscv.jpg" },
    title: "Dr. med. vet. Corinne Schroeter",
    description: "Praxisinhaberin",
  },
  {
    key: 4,
    img: { src: "https://vet-enge.julianiff.ch/assets/Rosy.jpg" },
    title: "Rosy",
    description: "Praxishund",
  },
  {
    key: 5,
    img: { src: "https://vet-enge.julianiff.ch/assets/Sam.jpg" },
    title: "Sam",
    description: "Praxishund",
  },
];

const gridListClasses = makeStyles((theme: Theme) => ({
  imageTile: {
    maxHeight: 600,
    height: 600,
    maxWidth: 400,
    objectFit: "cover",
  },
}));

/**
 * The example data is structured as follows:
 * [etc...]
 *
 */
export interface ListImageProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  classes: any;
  tileData: any;
}

/**
 * Primary UI component for user interaction
 */
export const ListImage: React.FC<ListImageProps> = ({
  backgroundColor,
  tileData = teamData,
  ...props
}) => {
  const classes = gridListClasses();
  return (
    <Grid container>
      <Grid item xs={12}>
        <H2>Das Team</H2>
      </Grid>
      {tileData.map((tile: any) => (
        <Grid item xs={6} md={4} key={tile.key.toString()}>
          <ImageAndOverlay>
            <img
              src={tile.img.path}
              alt={tile.title}
              className={classes.imageTile}
            />
            <ImageDescription>
              <H2>
                {tile.title}: {tile.description}
              </H2>
            </ImageDescription>
          </ImageAndOverlay>
        </Grid>
      ))}
    </Grid>
  );
};
