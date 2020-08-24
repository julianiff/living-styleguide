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
  children: "Hello Button",
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "component😀 😎 👍 💯",
};
