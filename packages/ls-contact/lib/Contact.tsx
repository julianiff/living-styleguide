import React from "react";
import {H2, H3, P} from "./LsStyles"
import {Container} from "./LsStyles";

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
            <Container>
                <H2>Kontakt</H2>
                <H3>Adresse</H3>
                <P>Züri</P>
                <H3>Telefon</H3>
                <P>044 123 45 67</P>
                <H3>Fax</H3>
                <P>044 123 45 67</P>
                <H3>E-Mail</H3>
                <P>hund@arzt.com</P>
                <H3>Öffnungszeiten</H3>
                <P>Heute, Morgen, Übermorgen</P>
                <H3>Anfahrtskarte Platzhalter</H3>
            </Container>
        )
            ;
    };
