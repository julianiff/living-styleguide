import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Hero, HeroProps } from "../lib/Hero";

export default {
  title: "LS Hero",
  component: Hero,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Hero {...args} />;

export const Primary = Template.bind({})
