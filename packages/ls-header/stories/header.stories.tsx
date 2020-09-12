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

export const HeaderBlack = Template.bind({});
HeaderBlack.args = {
  backgroundColor: "green",
  navigationItems: ["eins", "zwei", "drei"],
};
