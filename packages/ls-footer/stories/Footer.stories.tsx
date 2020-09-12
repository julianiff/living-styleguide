import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Footer, FooterProps } from "../lib/Footer";

export default {
  title: "LS Footer",
  component: Footer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Footer {...args} />;

export const Primary = Template.bind({})
