import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { List, ListProps } from "../lib/List";

export default {
  title: "LS List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <List {...args} />;

export const Primary = Template.bind({})
