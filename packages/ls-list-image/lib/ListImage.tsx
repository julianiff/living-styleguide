import React from "react";
import {
    Container,
    H2,
    ImageAndOverlay,
    ImageDescription,
    ImageOverlay,
    ImageOverlayContainer,
} from "./LsStyles";

const teamData = [
    {
        key: 1,
        img: {path: "https://vet-enge.julianiff.ch/assets/Chadieja.jpg"},
        title: "Chadieja Benredjem",
        description: "TPA",
    },
    {
        key: 2,
        img: {path: "https://vet-enge.julianiff.ch/assets/Ueli.jpg"},
        title: "Dr. med. vet. Ulrich Coradi",
        description: "Arzte",
    },
    {
        key: 3,
        img: {path: "https://vet-enge.julianiff.ch/assets/portraitcscv.jpg"},
        title: "Dr. med. vet. Corinne Schroeter",
        description: "Praxisinhaberin",
    },
    {
        key: 4,
        img: {path: "https://vet-enge.julianiff.ch/assets/Rosy.jpg"},
        title: "Rosy",
        description: "Praxishund",
    },
    {
        key: 5,
        img: {path: "https://vet-enge.julianiff.ch/assets/Sam.jpg"},
        title: "Sam",
        description: "Praxishund",
    },
];

const defaultImageStyle =
    {
        maxHeight: 600,
        height: 600,
        maxWidth: 400,
        objectFit: "cover",
    };

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
    imageStyle: any;
    classes: any;
    tileData: any;
}

/**
 * Primary UI component for user interaction
 */
export const ListImage: React.FC<ListImageProps> = ({
                                                        backgroundColor,
                                                        tileData = teamData,
                                                        imageStyle = defaultImageStyle,
                                                        ...props
                                                    }) => {
    return (
        <Container>
            <H2>Das Team</H2>
            {tileData.map((tile: any) => (
                <ImageAndOverlay>
                    <img
                        src={tile.img.path}
                        alt={tile.title}
                        style={imageStyle}
                    />
                    <ImageDescription>
                        <H2>
                            {tile.title}:{tile.description}
                            test
                        </H2>
                    </ImageDescription>
                </ImageAndOverlay>
            ))}
        </Container>
    )
};
