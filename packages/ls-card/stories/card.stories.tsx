import React from "react";
import { Card } from "../lib/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Card {...args} />;

export const HelloButton = Template.bind({});
HelloButton.args = {
  children:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "component😀 😎 👍 💯",
};
