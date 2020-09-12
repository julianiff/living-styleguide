import React from "react";
import styled from "styled-components";
import {Grid, GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import image1 from '../../assets/Chadieja.jpg';
import image2 from '../../assets/Ueli.jpg';
import image3 from '../../assets/portraitcscv.jpg';
import image4 from '../../assets/Rosy.jpg';
import image5 from '../../assets/Sam.jpg';

const dogData = [
    {
        img: image1,
        title: 'Chadieja Benredjem',
        author: 'TPA',
        cols: 2
    },
    {
        img: image2,
        title: 'Dr. med. vet. Ulrich Coradi',
        author: 'Arzt',
        cols: 2
    },
    {
        img: image3,
        title: 'Dr. med. vet. Corinne Schroeter',
        author: 'Praxisinhaberin',
        cols: 2
    },
    {
        img: image4,
        title: 'Rosy',
        author: 'Praxishund',
        cols: 3
    },
    {
        img: image5,
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
            <Grid item>
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
