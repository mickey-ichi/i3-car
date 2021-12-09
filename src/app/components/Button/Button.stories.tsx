import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Submit: ComponentStory<typeof Button> = () => (
  <div>
    <Button size={'xs'}>Submit Small</Button>
    <Button size={'normal'}>Submit Medium</Button>
    <Button size={'lg'}>Submit Large</Button>
    <Button>Submit Medium</Button>
  </div>
);
