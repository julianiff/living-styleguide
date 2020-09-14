import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {ListImage, ListImageProps} from "../lib/ListImage";
import {withKnobs} from "@storybook/addon-knobs";

export default {
    title: "LS ListImage",
    component: ListImage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [withKnobs]
};

const Template = (args: any) => <ListImage {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    backgroundColor: "#0077B6",
    textColor: "#FFFFFF"
}
