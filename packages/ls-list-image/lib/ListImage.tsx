import React from "react";
import styled from "styled-components";
import {Grid, GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

const dogData = [
    {
        img: {src: '../../assets/Chadieja.jpg'},
        title: 'Chadieja Benredjem',
        author: 'TPA',
        cols: 2
    },
    {
        img: {src: '../../assets/Ueli.jpg'},
        title: 'Dr. med. vet. Ulrich Coradi',
        author: 'Arzt',
        cols: 2
    },
    {
        img: {src: '../../assets/portraitcscv.jpg'},
        title: 'Dr. med. vet. Corinne Schroeter',
        author: 'Praxisinhaberin',
        cols: 2
    },
    {
        img: {src: '../../assets/Rosy.jpg'},
        title: 'Rosy',
        author: 'Praxishund',
        cols: 3
    },
    {
        img: {src: '../../assets/Sam.jpg'},
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
                                                        classes = {gridList: "background-color: green;"},
                                                        tileData = dogData,
                                                        ...props
                                                    }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <GridList cellHeight={500} className={classes.gridList} cols={6}>
                    {tileData.map((tile: any) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} style={{objectFit: "cover"}}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={tile.author}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
        </Grid>
    );
};
