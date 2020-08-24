import React from "react";
import Title from "../lib/index";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Title {...args} />;

export const TitleDefault = Template.bind({});
TitleDefault.args = {
  label: "Title",
};

export const TitleBig = Template.bind({});
TitleBig.args = {
  label: "Title Big",
  fontSize: 5,
};
