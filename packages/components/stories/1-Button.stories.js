import React from 'react';


import Button from "../lib";


export default {
  title: 'Button new',
  component: Button,
};

export const Text = () => <Button onClick={console.log('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={console.log('clicked')}>
    <span role="img" aria-label="so cool">
      component😀 😎 👍 💯
    </span>
  </Button>
);
