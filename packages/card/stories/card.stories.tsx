import React from "react";
import { LSCard } from "../lib/Card";

export default {
  title: "Card",
  component: LSCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <LSCard {...args} />;

export const HelloButton = Template.bind({});
HelloButton.args = {
  children: "Hello Button",
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: "component😀 😎 👍 💯",
};
