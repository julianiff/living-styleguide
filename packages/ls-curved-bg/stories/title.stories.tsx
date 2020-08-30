import React from "react";
import CurvedBg from "../lib/index";

export default {
  title: "CurvedBg",
  component: CurvedBg,
  argTypes: {
    height: Number,
    bgColor: { control: "color" },
  },
};

const Template = (args: any) => <CurvedBg {...args} />;

export const DefaultCurvedBg = Template.bind({});
DefaultCurvedBg.args = {};
