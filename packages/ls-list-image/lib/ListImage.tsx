import React from "react";
import {Grid, GridList, GridListTile, GridListTileBar, IconButton, Theme} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import {H2} from "../../ls-styles/LsStyles";
import ThemeKnob from "../../../src/themes/ThemeKnob";

const teamData = [
    {
        key: 1,
        img: {src: 'https://vet-enge.julianiff.ch/assets/Chadieja.jpg'},
        title: 'Chadieja Benredjem',
        author: 'TPA',
        cols: 2
    },
    {
        key: 2,
        img: {src: 'https://vet-enge.julianiff.ch/assets/Ueli.jpg'},
        title: 'Dr. med. vet. Ulrich Coradi',
        author: 'Arzt',
        cols: 2
    },
    {
        key: 3,
        img: {src: 'https://vet-enge.julianiff.ch/assets/portraitcscv.jpg'},
        title: 'Dr. med. vet. Corinne Schroeter',
        author: 'Praxisinhaberin',
        cols: 2
    },
    {
        key: 4,
        img: {src: 'https://vet-enge.julianiff.ch/assets/Rosy.jpg'},
        title: 'Rosy',
        author: 'Praxishund',
        cols: 3
    },
    {
        key: 5,
        img: {src: 'https://vet-enge.julianiff.ch/assets/Sam.jpg'},
        title: 'Sam',
        author: 'Praxishund',
        cols: 3
    },
];

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

    return (
        <ThemeKnob>

        <Grid container>
            <Grid item xs={12}>
                <H2>Das Team</H2>
            </Grid>
            <Grid item xs={12}>
                <GridList cellHeight={500} cols={6}>
                    {tileData.map((tile: any) => (
                        <GridListTile key={tile.key} cols={tile.cols || 1}>
                            <img src={tile.img.src} alt={tile.title} style={{objectFit: "cover"}}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={tile.author}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`}>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
        </Grid>
        </ThemeKnob>
    );
};
