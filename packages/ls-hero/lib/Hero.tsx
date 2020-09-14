import React from "react";
import {H2, HeroOverlay, ImageOverlay, ImageOverlayContainer} from "../../ls-styles/LsStyles";

//import hero from "../../assets/FI7A3331.jpg";

export interface HeroProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    herosrc: string;
    imageStyle: any;
}

const defaultImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
};
/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<HeroProps> = ({
                                              backgroundColor = "#0077B6",
                                              herosrc = "hero",
                                              imageStyle = defaultImageStyle,
                                              ...props
                                          }) => {
    return (
        <HeroOverlay>
            <img src={herosrc} style={imageStyle}/>
            <ImageOverlayContainer>
                <ImageOverlay>
                    <H2>Unsere Super Praxis</H2>
                </ImageOverlay>
            </ImageOverlayContainer>
        </HeroOverlay>
    );
};
