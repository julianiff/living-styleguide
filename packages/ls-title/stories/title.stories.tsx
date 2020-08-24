import React from "react";
import Title from "../lib/index";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    fontSize: Number,
  },
};

const Template = (args: any) => <Title {...args} />;

export const TitleDefault = Template.bind({});
TitleDefault.args = {
  children: "Title",
};

export const TitleBig = Template.bind({});
TitleBig.args = {
  children: "Title Big",
  fontSize: 5,
};
