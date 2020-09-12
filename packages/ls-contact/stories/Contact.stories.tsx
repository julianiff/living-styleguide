import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Contact, ContactProps } from "../lib/Contact";

export default {
  title: "LS Contact",
  component: Contact,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Contact {...args} />;

export const Primary = Template.bind({})
