import React from "react";
import { LSCard } from "../lib/Card";

export default {
  title: "Card",
  component: LSCard,
};

export const Text = () => (
  <LSCard onClick={console.log("clicked")}>Hello Button</LSCard>
);

export const Emoji = () => (
  <LSCard onClick={console.log("clicked")}>
    <span role="img" aria-label="so cool">
      component😀 😎 👍 💯
    </span>
  </LSCard>
);
