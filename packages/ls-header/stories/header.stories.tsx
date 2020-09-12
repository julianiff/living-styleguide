import React from "react";
import Header from "../lib/index";

export default {
  title: "Header Component",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
    listItemColor: { control: "color" },
    listItemHoverColor: { control: "color" },
  },
};

const Template = (args: any) => <Header {...args} />;

export const HeaderDefault = Template.bind({});
HeaderDefault.args = {
  backgroundColor: "black",
  navigationItems: ["eins", "zwei", "drei"],
};
