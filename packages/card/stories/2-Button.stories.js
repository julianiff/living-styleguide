import React from "react";

import Button from "../lib";

export default {
  title: "Button from card",
  component: Button,
};

export const Text = () => (
  <Button onClick={console.log("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={console.log("clicked")}>
    <span role="img" aria-label="so cool">
      card 😀 😎 👍 💯
    </span>
  </Button>
);
