import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { ListImage, ListImageProps } from "../lib/ListImage";

export default {
  title: "LS ListImage",
  component: ListImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <ListImage {...args} />;

export const Primary = Template.bind({})
